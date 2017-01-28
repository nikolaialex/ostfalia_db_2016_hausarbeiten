# 4 Skalierung

## 4.1 Einführung

Wenn eine Datenbank stark angewachsen ist und die vorhandene Hardware nicht mehr erweitert werden kann oder soll, muss die Datenbank horizontal skaliert werden, d.h. sie wird auf mehrere Server verteilt. MongoDB unterstützt ein automatisches horizontales Skalieren, genannt Sharding. Man muss sich nicht von Anfang an Gedanken über eine Verteilung machen, sondern kann dies auch später, wenn es nötig wird, in Angriff nehmen (Edlich et al. 2011, S.143).

Gründe für Sharding:

- Der Plattenplatz reicht nicht mehr aus (Größenordnung: Terabyte an Daten).
- Der Durchsatz an Schreiboperationen kann von einem Server nicht mehr gewährleistet werden.
- Die Daten sollen zur Optimierung der Lesezugriffe im RAM gehalten werden[<sup>1][foot41].

(Trelle 2014, Kap. 3.2/5.1)


## 4.2 Skalierung in MongoDB

Die Verteilung der Daten wird auf Ebene der Collections gesteuert. Eine Collection wird in sogenannte *Chunks* aufgeteilt, die jeweils auf einem Sharding-Knoten, einem *Shard*, liegen. Wie die Daten auf die Chunks verteilt werden, bestimmt ein Schlüssel, der *Shard Key*. Bei der Administration eines Clusters muss also zuerst ein geeigneter Schlüssel gefunden werden, der sinnvoll ist, da Dokumente nach dem Shard Key geordnet gespeichert werden. So kann man sicherstellen, dass Dokumente die zusammen gehören auch zusammen bleiben.
Wenn neue Dokumente hinzugefügt werden, steuert MongoDB die Aufteilung der Chunks automatisch, abhängig davon wie groß ein Chunk werden darf. Dieser Wert ist konfigurierbar (Trelle 2014, Kap. 5.3). 

Am Skalierungsprozess sind eine Reihe von Servern beteiligt. Drei Typen von Serverprozessen gilt es aufzusetzen.


**Shards (mongod)**  
Auf den Shards liegen die Daten, aufgeteilt in Chunks. Ein Shard ist entweder ein einzelner mongod-Prozess oder ein Replica Set. Empfohlen wird, aus den gleichen Gründen wie schon im letzten Kapitel erwähnt, ein Replica Set zu wählen, da die Daten beim Sharding redundanzfrei abgelegt werden. Weitere Shards können später noch hinzugefügt (und auch wieder entfernt) werden.

**Konfigurationsserver (mongod)**  
Konfigurationsserver speichern Meta-Daten und die Konfiguration für den Cluster. Sie kennen die Verteilung der Chunks anhand des Shard Keys. Seit MongoDB Version 3.4 ist es notwendig Konfigurationsserver als Replica Set zu speichern (CSRS).

**Router-Prozess (mongos)**  
Router (ein oder mehrere) nehmen Anfragen entgegen und reichen sie an die einzelnen Shards weiter, d.h. sie stellen die Schnittstelle zwischen dem „Sharded Cluster“ und den Anwendungen/Clients dar.

(MongoDB.com Dokumentation, Trelle 2014, Kap. 5.3)

Abb. 4.1 zeigt die verschiedenenen Servertypen und wie sie miteinander in Verbindung stehen.

![][img-mongo-sharding] 

Abb. 4.1: Beteiligte Server an einem Sharding-Cluster

 
### Der Schlüssel

Der Shard Key ist notwendig. Die Auswahl will gut überlegt sein, denn von ihm hängt ab, wie performant das System Lese-und Schreiboperationen durchführen kann. Es ist zu bedenken, dass man den Schlüssel nachträglich nicht ändern kann und eine „geshardete“ Collection nicht mehr in den Ursprungszustand versetzt werden kann. Als Shard Key wird ein indiziertes Feld (oder zusammengesetzte indizierte Felder) ausgewählt, welches in jedem Datensatz vorhanden sein muss. In der MongoDB Dokumentation werden folgende Schlüsseleigenschaften, die bei der Wahl zu bedenken sind, aufgelistet:

**Shard Key Cardinality**  
Die Kardinalität eines Schlüssels gibt die maximale Anzahl an Chunks an, die erzeugt werden können.
Ganzzahlwerte mit einem großen Wertebereich haben eine hohe Kardinalität und können gut verteilt werden, allerdings sinkt die Effektivität des Clusters. Angenommen der Schlüssel hat ein Kardinalität von 3, dann wird es nie mehr als 3 Chunks innerhalb des Clusters geben, jeder speichert einen Wert. D.h. mehr als 3 Shards bringen dann keinen Vorteil mehr.

**Shard Key Frequency**  
Mit der Frequenz ist die Häufigkeit des Schlüsselwerte in den Datensätzen gemeint. Wenn einige deutlich häufiger vorkommen als andere, werden die Daten auch vermehrt in einen bestimmten Chunk geschrieben. Möglicherweise lässt er sich nicht mehr aufteilen und wird dann zu einem „Bottleneck“ innerhalb des Clusters.

**Rate of Change**  
Der letzte Punkt bezieht sich auf die veränderbare Verteilung der Schlüsselwerte. Angenommen als Schlüssel wurde ein Datumsfeld gewählt, das monoton steigende Werte enthält. In diesem Fall werden neue Daten immer in dem Chunk gespeichert, der die höchsten Daten bis zum sogenannten *maxKey* enthält (wie in Abb. 4.2). Sind die Werte monoton fallend werden sie im Chunk gespeichert, der die niedrigsten Werte enthält (Chunk A). 

![][img-mongo-shardkey1]

Abb. 4.2: Verteilung bei monoton steigenden Schlüsselwerten



Diesen Effekt kann man mit „gehashten“ Indizes vermeiden. Die Daten verteilen sich dann über den gesamten Cluster. Allerdings ist es dann bei Abfragen auch notwendig über alle Cluster Daten zusammenzusuchen. Eine weitere Möglichkeit ist es, Shard Keys aus verschieden Keys mit unterschiedlichen Kardinalitäten und Verteilungen zusammenzusetzen. 

Bei der Wahl des richtigen Schlüssels sollte also auf die Verteilung und Variabilität geachtet werden. Ein weiterer wichtiger Punkt sind die Anfragen der Clients.

### Zugriff durch Anwendungen

Eine Anwendung wendet sich mit einer Abfrage immer an einen Router (Abb. 4.3), d.h. für sie gibt es keinen Unterschied ob die Anfrage an einen einzelnen Server gerichtet ist oder an einen Shard-Cluster. Im Hintergrund läuft immer das gleiche Muster ab. Der Router fragt bei dem Konfigurationsserver an, auf welchem Shard oder Shards sich die Daten befinden. Falls die Anfrage den Shard Key enthält, ist die Suche schnell erledigt und der Shard wird zurückgegeben (targeted query). Andernfalls müssen alle Shards durchsucht werden (global query). Das Ergebnis wird dann zusammengefasst und vom Router ausgeliefert. Die Abfragegeschwindigkeit hängt also ebenfalls vom Shard Key ab. Bei der Wahl ist es wichtig einen Schlüssel zu verwenden, der in den meisten Abfragen vorkommt 
(Banker 2011, S.355).



![][img-mongo-sharding2] 

Abb. 4.3: Zugriff auf Shard-Cluster 

***

[foot41]:    #footnote41

[kap5]:     ./05_anwendung.md "Anwendung"

[img-mongo-sharding]:       ./pict/mongodb_sharding.png "Sharding"
[img-mongo-sharding2]:      ./pict/mongodb_sharding2.png "Zugriff auf Cluster"
[img-mongo-shardkey1]:      ./pict/mongodb-shardkey1.png "ShardKey Verteilung"

<a name="footnote41"></a> <a><sup>1</sup></a> Ergänzend zu Punkt 3: MongoDB hält ihre Daten im Arbeitsspeicher und speichert sie periodisch auf die Festplatte. So kann sie ihre hohen Zugriffszeiten gewährleisten, das Verfahren birgt aber das Risiko Daten zu verlieren.


Nächstes Kapitel: [5. Anwendung][kap5]
