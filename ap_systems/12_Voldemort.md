## 3.4 Voldemort
Wie [SKL+12] hier und im Folgenden zu entnehmen ist, ist Voldemort ein horizontal skalierendes,
verteiltes Datenbanksystem, das die Datensätze als Schlüssel-Wert Paare speichert. Ein Cluster
dieses Systems kann dabei mehrere Knoten enthalten, die jeweils über eine eigene ID verfügen.
Die Knoten enthalten mehrere Stores, die Tabellen in relationalen Datenbanken entsprechen.
Jeder Store enthält die folgenden konfigurierbaren Parameter:

•	Replication factor (N): Anzahl der Knoten, in denen jeder Schlüssel-Wert Tupel repliziert
	ist.
•	Required reads (R): Anzahl der Knoten, die während eines Lesezugriffs parallel gelesen 
	werden, bevor ein Erfolg der Operation festgestellt wird.
•	Required writes (W): Anzahl der Knoten, die Voldemort blockiert, bis der Schreibzugriff 
	erfolgreich ist.
•	Key/value serialization and compression: Voldemort unterstützt unterschiedliche 
	Serialisations-Schemas für Schlüssel und Werte. So sind mit Voldemort pro-Tupel
	Kompression möglich, als auch selbsterstellte binäre JSON-Formate. Serialisation und
	Kompression werden komplett clientseitig behandelt, so dass sich der Server nur noch
	um rohe binäre Datenarrays kümmern muss.
•	Storage engine type: Voldemort unterstützt die Lese/Schreib Storage Engine Formate
	Berkeley DB, Java Edition und MySQL. Außerdem sind selbsterstellte Formate möglich, für die
	aber nur Lesezugriff möglich ist.

Die Cluster Topologie und die Speicherdefinitionen sind in jedem Knoten als Metadaten hinterlegt. [Pro17]
ist dazu ergänzend zu entnehmen, dass hierdurch ein separater Cache überflüssig wird und das
Speichersystem dadurch sehr performant ist.

![Voldemort-Architektur mit modularen Komponenten](https://github.com/TobiasZiolkowski/ostfalia_db_2016_hausarbeiten/blob/master/ap_systems/Bilder/Voldemort-Architektur.jpg)

**Abbildung 6: Voldemort-Architektur mit modularen Komponenten [SKL+12]**

[SKL+12] erklären hier und im Folgenden, dass Voldemort über eine modulare Architektur verfügt, bei
der die einzelnen Komponenten mit anderen Komponenten ausgetauscht werden können. Die auf
Abbildung 5 gezeigten Boxen entsprechen dabei einem dieser Module, die jeweils über das gleiche
Interface ansprechbar sind. Dadurch, dass jedes Modul nur eine Funktionalität kapselt, wird die
Austauschbarkeit erleichtert. So kann das Routing Modul sowohl auf der Seite des Clients, als auch
auf der Seite des Servers eingesetzt werden. Die Trennung der Funktionalität zwischen den Modulen
ermöglicht es außerdem, auf einfache Weise Mock-Up-Tests durchzuführen, bei denen die Module
getestet werden können, ohne dass eine reale Datenbank vorhanden ist. Die oberste Box steht für
ein einfaches API-Modul, das simple get-Befehle für das Lesen von Daten und put-Befehle für das
Schreiben verarbeitet.

Die Tupel werden für die Verfügbarkeit repliziert und mit einem Zeitstempel für die Versionierung 
versehen. Hierdurch wird die Integrität der Daten für den Fall des Eintritts eines Fehlers erhöht, ohne
dass die Verfügbarkeit der Daten eingeschränkt wird. Die Module Conflict Resolution und Repair
Mechanism kommen bei Lese/Schreib Storage Engines zum Einsatz und behandeln dort
inkonsistente Replikate. Das Routing Modul ist für die Schaffung von Replikaten und Partitionen
zuständig.

![Cluster-Topographie als Ring](https://github.com/TobiasZiolkowski/ostfalia_db_2016_hausarbeiten/blob/master/ap_systems/Bilder/Voldemort%20Cluster-Topographie.jpg)

**Abbildung 6: Cluster-Topographie als Ring[SKL+12]**

Auf Abbildung 6 ist eine einfache Ring Cluster Topographie dargestellt. Der Ring wird von Voldemort
in Partitionen mit gleicher Größe aufgeteilt. Die Partitionen erhalten eine eindeutige ID und werden
auf einen Knoten abgebildet. Der Ring wird mit allen Stores geteilt, wodurch Änderungen der
Abbildungen von Partitionen auf Knoten in allen Stores geändert werden müssen. Die auf der rechten
Seite von Abbildung 6 gezeigte Präferenzliste listet für alle Partitions-IDs auf, in welchen Knoten die
Replikate gespeichert werden. Zunächst wird ein Hash-Wert eines Schlüssels erzeugt, der auf einen
Bereich einer Partition zeigt. Dann wird der Ring im Uhrzeigersinn durchlaufen, bis N-1 Partitionen
gefunden wurden, denen ein anderer Knoten zugeteilt ist, als der ursprünglich betrachteten Partition.
Wird zum Beispiel ein Replikationsfaktor von N=2 verwendet, so besteht die Präferenzliste für einen
Schlüssel, der auf Partition 11 gehasht wird, aus den Einträgen Partition 11, Partition 0. Dies
geschieht, weil Partition 0 die erste Partition ist, die auf Partition 11 im Uhrzeigersinn folgt und anstatt
des Knoten 2 den Knoten 0 hat. Die Daten können so in den Cluster eingebracht werden, ohne dass
alle Daten neu verteilt werden müssen. Weil die Knoten unabhängig voneinander vorliegen, gibt es
keine zentrale Stelle, über die sie verwaltet werden müssen und die im Fehlerfall sämtliche Knoten
betreffen würde. Der Single Point of Failure wird also vermieden.

Voldemort unterstützt zwei Routing Modi: Clientseitiges Routing und serverseitiges Routing.
Üblicherweise wird das clientseitige Routing benutzt, das in einem anfänglichen Schritt die Metadaten
für Speicherdefinition und Topologie des Clusters einholt. Wenn die Metadaten vom Client eingeholt
wurden, ist im Vergleich zum serverseitigen Routing ein Schritt weniger erforderlich, weil die Orte der
Replikate on-the-fly berechnet werden können. Dies hat jedoch den Nachteil, dass ein kompliziertes
Ausbalancieren der Daten notwendig wird, weil ein Mechanismus erforderlich ist, die verschiedenen
Clients mit den Metadaten zu versorgen.

Als reines Schlüssel-Wert System hat Voldemort den Nachteil, das die Daten nicht untereinander in
Beziehung gesetzt werden können. Um einen Wert zu erhalten, muss der Schlüssel bereits bekannt
sein.

[Pro17] erklärt, dass die Knoten von Voldemort mit 10.000 bis 20.000 Operationen pro Sekunde, in
Abhängigkeit zur Hardware, sehr performant sind. Darüber hinaus werden austauschbare
Speicher-Strategien unterstützt, die zum Beispiel die Verteilung der Daten über geographisch weit
voneinander entfernten Servern möglich machen.
