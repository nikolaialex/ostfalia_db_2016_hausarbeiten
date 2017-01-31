# Analyse konkreter Beispiele
Dieser Abschnitt erörtert die Funktionsweise und Eigenschaften einiger AP-Datenbanken,
sowie das häufig mit diesen verknüpfte Konzept des Cloud-Computings. Behandelt werden
Facebook mit Cassandra, CouchDB, Voldemort, SimpleDB und Dynamo.

## 3.1 Cloud Computing
Das Cloud Computing ist eine neue Technologie die Unternehmen und Privatpersonen eine
Datenspeicherung über das Netzwerk, bzw. das Internet, erlaubt. Es stellt somit eine alternative
Lösung der Datenspeicherung dar, sodass keine teuren Rechenzentren mehr angeschafft
werden müssen. Der Datenspeicher kann einfach bei einem Cloud-Anbieter angemietet werden.

Der Begriff Cloud-Computing umfasst laut [TG13] zudem de Bereitstellung von IT-Diensten und
Ressourcen jeglicher Art, wie zum Beispiel Anwendungen, Rechenleistung oder einer Kombination
daraus. In dieser Ausarbeitung wird aber nur spezieller auf das Bereitstellen von Speicherplatz und
der zu Grunde liegenden Technik und Architektur eingegangen.

Es gibt eine Vielzahl an Diensten, die in der Cloud angeboten werden können. Das Bereitstellen
von Hardware nennt sich Infrastructure-as-a-Service. Hier wird dem Nutzer nicht nur das eigentliche
Programm, sondern auch die gesamte Datenverarbeitungsstruktur zur Verfügung gestellt.

Die Kunden verwalten ihren angemieteten Speicherbedarf eigenständig. Lediglich der
infrastrukturelle Bereich, der die Bereitstellung der Hardware, die Ausfallsicherheit und die
Datensicherung/- wiederherstellung umfasst, wird vom Anbieter übernommen.

Eine Technik, die die effiziente Umsetzung des Cloud Computings erst ermöglicht hat, ist die
Virtualisierung. Bei der Virtualisierung werden logische Serversysteme und Dienste auf der
physikalischen Ebene getrennt behandelt. Die Hardwareressourcen stehen dabei mehreren
virtuellen Servern oder Benutzern gleichzeitig zur Verfügung. Damit es keine Probleme bei der
parallelen Nutzung der Dienste gibt, erfolgt die Ausführung der Anwendungen völlig isoliert
voneinander.

Es gibt laut [TG13] zwei Varianten um Cloud-Dienste zu nutzen. Dies ist abhängig von den 
Anforderungen, die durch die Kunden bestimmt werden. Die am häufigsten verwendete Variante
des Cloud-Computings ist die Public Cloud. Mit Public Cloud wird ein Modell beschrieben, bei dem
mehrere Kunden gleichzeitig auf dieselben physikalischen Ressourcen zugreifen. Die Ressourcen
werden dabei entsprechend nach dem Anteil zugewiesen, der vom Anbieter angemietet wurde.

Einige große Unternehmen, die eine Public Cloud verwenden, sind die Services von Google,
Amazon und Microsoft.

Demgegenüber steht die Private Cloud. Diese Variante des Cloud Computings zeichnet sich durch
eine bessere Sicherheit und Privatsphäre aus. Dies wird dadurch gewährleistet, dass die Nutzer in
der Regel bekannt sind und das Unternehmen die Infrastruktur selber stellt. Der große Nachteil ist
aber, dass das Unternehmen für die Anschaffung und Wartung der Hardware selber aufkommen
muss.
Nachdem die Funktionsweise des Cloud Computings klar ist, werden im Folgenden die konkreten
Vor- und Nachteile der Verwendung von AP-Datenbanken als Grundlage für das Cloud-Computing
am Beispiel der Google AppEngine DataStore analysiert.

Googles App Engine verwendet laut [TG13] das ebenfalls von Google entwickelte BigTable System.
Bei diesem System ist es im Gegensatz zu relationalen Modellen möglich, dass unterschiedliche
Zeilen andere Spalten beinhalten. Es handelt sich also um ein schemaloses und kein relationales
Modell.

BigTable kann als großes, sortiertes, mehrdimensionales Array beschrieben werden, bei dem jede
Zeile eine gewisse Anzahl an Spalten hat. Unterschiedliche Zeilen können aber unterschiedlich viele
Spalten haben.

Ein weiteres wichtiges Merkmal des AppEngine Datastore ist, dass keine Tabellen selbst erstellt
werden können. Stattdessen werden die Daten automatisch in die vorhandene Struktur eingebunden.
Um Datensätze zu gruppieren können aber Entitätsgruppen angelegt werden.

Die grundsätzliche Motivation zur Entwicklung des Google Datastores war eine sehr hohe Lese- und
Abfragegeschwindigkeit zu erzielen. Gleichzeitig sind die Latenzzeiten sehr niedrig, sodass sich
BigTable sowohl für Anwendung eignet, die eine sehr hohe Skalierbarkeit bei geringer Latenz erfordert,
als auch für Anwendungen die sehr viele Transaktionen benötigen.

Hinsichtlich der Verfügbarkeit und Konsistenz bietet diese Datenbank zwei verschiedene Modi an. Da
laut CAP-Theorem nur zwei der drei Eigenschaften Partition Tolerance, Availability und Consistency
erfüllt werden können, muss sich der Nutzer für einen Modus entscheiden. Da es in dieser Ausarbeitung
um die Vor- und Nachteile von AP-Datenbanken geht, wird hier nur der Modus beschrieben, bei dem
die Verfügbarkeit sehr hoch ist.

Neben dem Master/Slave Datenspeicher lässt sich die Datenbank der Google AppEngine Datastore
laut [TG13] mit einem High Replication-Datenspeicher konfigurieren. Bei diesem Datenspeicher werden
alle Daten asynchron mit Hilfe des auf einem Paxos-Algorithmus bestehenden Systems über mehrere
Datenzentren hinweg repliziert. 

Durch die Replikation kann eine sehr hohe Verfügbarkeit für Lese- und Schreibvorgänge erreicht werden.
Bei einer gleichzeitigen, sehr niedrigen Latenzzeit zeigt sich, dass diese Architektur sehr gut für operative,
aber auch analytische Zwecke geeignet ist. 

Wie bereits in den Grundlagen beschrieben, zeichnen NoSQL-Datenbanken, bzw. AP-Datenbanken, sich
dadurch aus, dass sie das Modell der Eventual Consistency verfolgen. Dies ist auch bei dem von Google
entwickelten Datastore der Fall. Es kann also nicht jederzeit gewährleistet werden, dass der abgefragte
Inhalt immer auf dem neuesten Stand ist, da die Synchronisierung der Daten innerhalb der Server
asynchron erfolgt.

Googles BigTable zeichnet sich außerdem durch eine sehr gute Partition Tolerance aus. Dies zeigt sich
zum Beispiel darin, dass Updates während dem laufenden Betrieb eingespielt werden können und keinen
Neustart des gesamten Systems erfordern. Dadurch kann eine optimale Nutzung der Ressourcen und
Applikationen auf dieser Datenbank sichergestellt werden. Alle Prozesse und Workflows bleiben also online.
Gleiches gilt für das Änderungen am zu Grunde liegenden Cluster. Nodes können dynamisch hinzugefügt,
oder entfernt werden. Das System ist also nicht abhängig von einzelnen Knoten. Der Nutzer bekommt von
einer Änderung am Cluster nichts mit.

Als weitere Nachteile des Google AppEngine Data Stores sind höhere Kosten für die CPU und den Speicherplatz zu nennen. 
