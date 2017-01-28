# 3 Replikation

## 3.1 Einführung

>„Replikation oder Replizierung [...] bezeichnet die mehrfache Speicherung derselben Daten an meist mehreren verschiedenen Standorten und die Synchronisation dieser Datenquellen“ (Wikipedia.org).

Der wichtigste Grund Daten redundant zu speichern ist Ausfallsicherheit zu gewährleisten, d.h. das System sollte auch dann noch weiterarbeiten, wenn Teile des Systems nicht mehr erreichbar sind (Partition Tolerance). Folgende Szenarien wären vorstellbar:

- Die Netzwerkverbindung bricht ab
- Wartungen verändern die Umgebung und verhindern ein Neustart der Datenbank
- Stromausfall
- Hardwarefehler

(siehe Banker 2011, S.298)

Die einfachste Form eine Datenbank zu replizieren, ist sie in regelmäßigen Abständen zu kopieren und zu verteilen. In dem Szenario existiert ein Master, auf dem Schreib- und Leseoperationen möglich sind. Ändern sich Daten, startet der Master die Verteilung auf die Replikationsserver, auch Slaves genannt. 
Die Replikation findet asynchron statt, d.h. es existiert eine kurze Latenzzeit bis alle Daten auf dem gleichen Stand sind. Je nach System sind Lesezugriffe auf die Slaves erlaubt oder verboten. Sind Lesezugriffe erlaubt, kann die Last der Lesezugriffe verteilt werden. Falls der Master ausfällt, können die Daten immerhin noch ausgelesen werden. Verändert werden können sie erst wieder, wenn der Server wieder erreichbar ist. Konzepte, die veränderbare Replikate vorsehen, also die Möglichkeit auch die Daten der Replikate zu verändern, sind bei weitem komplizierter. Um die Daten in einem konsistenten Zustand zu halten, existieren eine Reihe von Verfahren, wie bspw. das *ROWA-Verfahren* (Read-One-Write-All) oder das *Primary Copy Verfahren*  (siehe Dadam 2008, Kap.9).

## 3.1 Replikation in MongoDB

MongoDB nutzt den Replikationsmechanismus in erster Linie um Ausfallsicherheit zu garantieren, als auch um Lesezugriffe skalieren zu können. Sie unterstützt zwar die klassische Master-Slave Replikation, sie ist allerdings in der MongoDB Dokumentation als veraltet gekennzeichnet. Vorzuziehen ist das Konzept der Replica Sets, das im Folgenden ausführlich beschrieben wird (Trelle 2014, Kap.4).

Konzepte, die veränderbare Replikate vorsehen, sind nicht vorgesehen. Aus diesem Grund werden sie hier nicht tiefergehend betrachtet.


### Replica Sets

Replica Sets stellen eine erweiterte Variante des Master-Slave Konzepts dar. Der Master wird in diesem Modell *Primary* genannt. Ein untergeordneter Server (Slave) ist ein *Secondary*. Replica Sets arbeiten, anders als im Master-Slave Konzept, mit einem flexiblen Rollenmodell. Ein Secondary kann zum Primary gewählt werden, wenn der aktuelle Primary nicht mehr erreichbar ist. Welcher diese Aufgabe übernimmt, wird in einem Wahlverfahren bestimmt und passiert automatisch. Abb. 3.1 zeigt, wie ein Replica Set aus einem Primary und zwei Secondaries miteinander in Verbindung stehen.


![][img-mongo-repl-set]

Abb. 3.1: Replica Set in MongoDB


In diesem Modell ist es standardmäßig vorgesehen, dass der Primary Schreib-und Leseanfragen entgegennimmt und Veränderungen asynchron an die Secondaries verteilt. Die Secondaries gewähren standardmäßig weder Schreib- noch Leserechte (Trelle 2004, Kap 4.3).

Der Mechanismus hat einige Vorteile:  
Da der Replikationsmechanismus asynchron stattfindet, wird das Laufzeitverhalten des Primary nicht negativ beeinflusst, wenn die Verbindung zu den anderen Servern schlecht ist. In der Regel wird die Replikation zeitnah durchgeführt, um die Daten möglichst schnell zu verteilen. Es wäre allerdings auch möglich die Verteilung zu verzögern. Dann bliebe noch Zeit zu reagieren um defekte Daten wiederherzustellen. Ein weiterer Vorteil ist die Möglichkeit zeitintensive Operationen oder Wartungsarbeiten, wie z.B. Backups auf einem der Dublikate auszuführen anstatt auf dem Primary. Zudem lassen sich Lesezugriffe skalieren, indem Anfragen über mehrere Server verteilt werden. Dafür ist es möglich Lesezugriffe auf den Secondaries zuzulassen (Banker 2011, S.298-299).

Aber man sollte bedenken, dass man es mit einer *Eventual Consistency* zu tun hat. Dies bedeutet, dass der Client „letztendlich“ den aktuellen Datenbestand zu sehen bekommt. Die Zeitverzögerung, die beim Replizieren der Daten von Primary zu Secondary entsteht, kann dazu führen, dass die Daten kurzfristig nicht konsistent sind. Das ist vor allem auch bei dem Einsatz von *Load Balancern* zu beachten. Wenn Anfragen auf die  Server verteilt werden, muss sichergestellt sein, dass ein bereits verbundener Client immer auf denselben Server zugreift. Die Daten könnten sich von Server zu Server unterscheiden.


### Das Oplog
Innerhalb der einzelnen Datenbanken existiert ein sogenanntes Oplog, in das jede Veränderung der Daten gespeichert wird. Das Oplog befindet sich in einer Datenbank mit dem Namen „local“. Sowohl der Primary als auch seine Secondaries besitzen diese Datenbank, die selbst nicht repliziert wird. Neben dem Oplog enthält sie Metadaten zum Replica Set. Das Oplog enthält neben anderen Informationen das Resultat der Datenbankoperation, sowie den Timestamp. Wichtig ist: Nicht die verändernden Operationen, sondern die neuen Werte werden gespeichert. Wie genau ein Eintrag aussieht, wird in Kapitel 5 näher betrachtet, wenn beispielhaft ein System aufgesetzt wird. Auf diese Weise erhält man ein exaktes Protokoll mit den Veränderungen, die vorgenommen wurden. Somit stellt das Oplog die Grundlage für die Replikation dar (Trelle 2004, Kap 4.1).


### Failover
Sollte sich der Primary länger als 10 Sekunden nicht bei den anderen Mitgliedern des Replica Sets melden, wird ein neuer Primary gewählt.
Wenn ein Secondary erkennt, dass der Primary nicht erreichbar ist, fragt er bei allen anderen Replica Set Knoten an, ob er selbst zum Primary gewählt wird. Wichtig ist, dass der Server die Mehrheit der Stimmen erhält, d.h. mehr als die Hälfte der Mitglieder des  Replica Sets muss der Wahl zustimmen. Dabei spielt es keine Rolle wieviele Rechner nicht erreichbar sind, es zählt die Anzahl der Mitglieder des Sets. Aus diesem Grund sollte das Replica Set immer aus einer ungeraden Anzahl von Servern bestehen (Chodorow 2013, Kap.9).

![][img-mongo-repl-voting]

Abb. 3.2: Wahl eines neuen Primary-Servers


Ob ein Secondary der Wahl zustimmt hängt von folgenden Kriterien ab. Stimmt nur ein Knoten mit „Nein“ ab, gilt die Wahl als nicht angenommen und der nächste Server stellt sich zur Wahl.

1. Sie prüfen, ob sie den Primary ebenfalls nicht erreichen. Es wäre möglich, dass nur die Verbindung zwischen dem Anfragenden und dem Primary abgebrochen ist.
2. Sie vergleichen die Aktualität der replizierten Daten des anfragenden Knotens mit den eigenen Daten. Besitzen sie selbst aktuellere Daten stimmen sie mit Nein.
3. Eine Instanz könnte eine höhere Priorität haben, als die Anfragende. Auch in diesem Fall stimmt der Knoten mit Nein ab.
 
(Chodorow 2013, Kap.9).

Im schlechtesten Fall, wenn der Server aufgrund von Netzwerkproblemen nicht erreichbar ist, kann es aufgrund der abzuwartenden Timeouts (20 Sek.) eine Weile dauern bis eine Wahl erfolgreich war. Länger als ein paar Minuten sollte die Wahl nach Angabe des Herstellers aber nicht dauern (siehe auch Chodorow 2013, Kap.10).

In bestimmten Fällen kann es zu einem Rollback der Daten kommen. Angenommen ein Primary ist nicht mehr erreichbar bevor er die Daten replizieren konnte. Die Secondaries handeln einen neuen Primary aus und dieser nimmt folglich neue Daten entgegen. Selbst wenn der Primary wieder in den Verbund zurückkehrt, werden die „alten“ Daten nicht weitergeleitet (er ist jetzt kein Primary mehr) sondern es wird ein *Rollback* durchgeführt. Damit sind die Daten wieder konsistent. Die Daten sind allerdings nicht verloren. Sie werden in eine Datei geschrieben und es erfordert manuelles Eingreifen um zu entscheiden ob sie eingefügt werden sollen oder nicht 
(Chodorow 2013, Kap.10).


### Konfiguration

Aus dem Wahlverfahren ergeben sich ein paar Regeln bei der Konfiguration eines Replica Sets.

-  Man sollte immer eine ungerade Anzahl von Knoten verwenden. Falls das System in zwei Teile zerfällt, die nicht mehr miteinander kommunizieren können, ist es der Partition mit den meisten Servern immer noch möglich einen Primary zu wählen. Bei einer Wahl gilt es immer, die Stimmen der Hälfte aller Knoten zu erhalten. Sind es also fünf Server und sie werden in eine Zweier- und in eine Dreiergruppe getrennt, kann die Dreiergruppe einen Primary wählen. Die Zweiergruppe hingegen kann dies nicht, was wichtig ist. Man möchte keine zwei Primary-Server erzeugen.
- Daraus leitet sich ab, dass der Primary sich in der Partition oder in dem Rechenzentrum befinden sollte, das die Mehrheit der Stimmen besitzt.
- Leserechte auf den Secondaries sollten zugelassen werden, schon allein um Daten wiederherstellen zu können. Dabei gibt es verschiedene Optionen Leserechte zu vergeben (s.u.). 
 
(Trelle 2014, Kapitel 4.3.2)

Ein wichtiges Instrument ist der Einsatz eines sogenannten _Arbiters_, der anstatt oder zusätzlich zu einem Secondary hinzugefügt werden kann. Ein Arbiter enthält selbst keine Daten, darf aber über einen neuen Primary abstimmen. Mit ihm ist es möglich das Abstimmungsverhalten zu beeinflussen.


![][img-mongo-repl-arbiter]

Abb. 3.3: Replica Set mit Arbiter in MongoDB


Abschliessend sollte noch erwähnt werden, dass es eine Vielzahl von Konfigurationsmöglichkeiten gibt, mit denen sich das Verhalten eines Replica Sets manipulieren lässt. Wenn es z.B. um die Wahl eines neuen Primary-Servers geht, kann jedem Knoten bspw. eine höhere Präferenz zugewiesen werden. Zudem kann ein Knoten mehrere Stimmen bei den Wahlen zugewiesen bekommen. Interessant ist auch die Anweisung die Daten zeitverzögert zu replizieren. Falls die Daten zerstört wurden, gäbe es noch eine ältere Version der Daten. Für die umfangreichen Konfigurationseinstellungen soll hier auf die MongoDB Dokumentation verwiesen werden.


### Zugriff durch Anwendungen

Anwendungen greifen über entsprechende Treiber auf eine MongoDB zu. Der Treiber kennt die Liste der Server im Replica Set und erkennt, wer gerade der Primary ist. So bekommt die Anwendung nicht direkt mit, wenn Rollenwechsel im Replica Set stattfinden (Abb. 3.4).

![][img-mongo-repl-client]

Abb. 3.4: Zugriff der Clients durch MongoDB-Treiber

#### Lesende Zugriffe

Wenn Lesezugriffe auf den Secondaries erlaubt ist, sollte (wie schon erwähnt) beachtet werden, dass die Daten vielleicht noch nicht repliziert worden sind und die Daten nicht konsistent sind. Mit den sogenannten „Read Preferences“ kann die Strategie für die Abfragen festgelegt werden.

| Wert               | Bedeutung                                                                    |
| :--------------    | :--------------------------------------------------------------------------- |
| primary            | Lesezugriffe erfolgen über den Primary (Standardwert)                        |
| primaryPreferred   | Lesezugriffe erfolgen auch über Secondaries (wenn Primary nicht erreichbar)  |
| secondary          | Lesezugriffe erfolgen immer über Secondaries                                 |
| secondaryPreferred | Lesezugriffe erfolgen auch über Primary (wenn Secondaries nicht erreichbar)  |
| nearest            | Lesezugriffe erfolgen unabhängig von der Rolle. Der am schnellsten erreichbare Server wird verwendet. |

(siehe Trelle 2014, Kap. 4.3.2, sowie MongoDB Dokumentation)

#### Schreibende Zugriffe

Per Standard wird beim Einfügen eines Dokuments keine Rückmeldung gegeben, ob eine Schreiboperation erfolgreich war. Anders als in der Mongo Shell (Konsolenanwendung der MongoDB), die Fehlemeldungen sofort anzeigt, muss eine Anwendung explizit nachfragen, welchen Status die Operation hatte.
Dies kann man durch die Angabe des sogenannten _Write Concerns_ ändern. Für Replica Sets ist diese Option besonders interessant, da man den  Konsistenzgrad erkennen und reagieren kann. 

Man kann z.B. vorgeben, wie viele Mitglieder eines Replica Sets zustimmen müssen, bevor eine positive Rückmeldung kommt. Das kann eine explizite Anzahl von Mitgliedern  sein, nur der Primary oder man gibt per _Tag Set_ genau an welche Knoten einbezogen werden (Trelle 2014, Kap. 4.3.2). 


Welche Angabe am sinnvollsten ist, hängt davon ab welches Verhalten man präferiert. Je mehr Mitglieder antworten, um so sicherer ist die Datenspeicherung. Allerdings muss man länger auf eine Antwort warten. Trelle (2014) schlägt die Option  _majority_ vor. Sie bedeutet, dass die Schreiboperation von einer Mehrzahl der Mitglieder erhalten wurde.


***


[kap4]:     ./04_skalierung.md "Skalierung"

[img-mongo-repl-set]:       ./pict/mongodb_replset.png "Replica Set"
[img-mongo-repl-voting]:    ./pict/mongodb_voting.png "Wählen eines neuen Primaries"
[img-mongo-repl-arbiter]:   ./pict/mongodb_arbiter.png "Wählen mithilfe eines Arbiters"
[img-mongo-repl-client]:     ./pict/mongodb_clientdriver.png "Clientzugriff per Treiber"


Nächstes Kapitel: [4. Skalierung][kap4]
