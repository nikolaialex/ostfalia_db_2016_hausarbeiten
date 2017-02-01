## 3.2 Facebook
Der zentrale Anlaufpunkt der Facebook-Architektur ist laut [JI09] dessen Cache-System.
Traditionelle Ansätze der relationalen Datenbanken sind für die vernetzten Daten eines
Social Networks nicht geeignet. Ein wesentlicher Unterschied zu handelsüblichen
Anwendungen ist hier nämlich, dass die Nutzer nicht nach ihren eigenen Daten, sondern,
z.B. bei Facebook, nach den Daten anderer Nutzer suchen.

Die Daten werden von Facebook auf den Datenbankservern in normalisierter Form
gehalten. Die Nutzer werden zufällig auf die Datenbankserver verteilt. Es findet also
kein Clustering nach Gruppen statt. Deswegen kommt dem Caching-System eine
zentrale Bedeutung zu. Facebook verwendet dafür ein weiterentwickeltes Memcached,
welches von Brad Fitzpatrick entwickelt wurde.

Für die Datenverwaltung verwendet Facebook tausende  auf mehrere Rechenzentren
verteilte MySQL-Server. Wesentliche Funktionen einer relationalen Datenbank werden
allerdings nicht genutzt, wie zum Beispiel JOINs. JOINs werden nur für ausgewählte
Systeme wie die Suche eingesetzt. Der Grund dafür ist, dass es beinahe unmöglich ist,
über die verteilten Datenbanken JOINs einzurichten.

Anfangs reichten Facebook 20 MySQL Server auf einzelnen physischen Maschinen aus.
Mittlerweile wurden diese aber auf mehr Server verteilt, was durch die oben beschriebene
Struktur aber unproblematisch war. Genau in diesem Punkt profitiert Facebook von der
AP-Struktur ihrer Datenbanken, die eine hohe Skalierbarkeit gewährleistet.

Das bei Facebook eingesetzte Datenbanksystem heißt Cassandra. Cassandra wurde
ursprünglich von Facebook für Facebook und deren spezifische Probleme entwickelt.
Die Motivation zur Entwicklung von Cassandra war laut [JS11] das sogenannte
„Inbox Search Problem“. Die Facebook-Nutzer sollten die Möglichkeit haben ihre erhaltenen
und gesendeten Nachrichten zu durchsuchen. Mit MySQL gibt es dazu keine ausreichend
performante Lösung mehr, da die Anzahl der Nutzer und die konstant anwachsende
Datenmenge zu groß geworden sind.

Mit Cassandra konnte dieses Problem gelöst werden. Das neu entwickelte
Datenbanksystem ist auf hohe Schreib- und Lesedurchsätze optimiert, wobei die 
Schreibvorgänge standardmäßig asynchron erfolgen. Die Daten werden also zunächst im
RAM gehalten und gebündelt auf die Festplatte geschrieben. Weiter bietet Cassandra die
Möglichkeit der Partitionierung auch über mehrere Rechenzentren hinweg.

AP-Datenbanken zeichnet zudem aus, dass sie den besonderen Anforderungen der
Hochverfügbarkeit und Ausfalltoleranz gerecht werden und gleichzeitig laut CAP-Theorem
nicht zu jedem Zeitpunkt konsistent sind. Cassandra zeichnet sich durch diese Eigenschaften
aus. So bietet die Datenbank die Möglichkeit der Replikation und eine automatische
Erkennung von ausgefallenen Rechnern im Datenbankverbund. Die ausgefallenen Rechner
werden durch die Nutzer nicht wahrgenommen. Es gibt dadurch also keine sichtbaren
negativen Effekte für den Nutzer.

Die Ausfallsicherheit von Cassandra ist auch deswegen so gut, da es keinen Single Point
of Failure gibt. Die Lese- und Schreibzugriffe sind nicht auf bestimmte Nodes beschränkt
Allgemein bietet Cassandra eine gute Konfigurierbarkeit bezüglich des CAP-Theorems.
Nachdem die Anforderungen des Systems feststehen kann der Anwender bestimmen,
welche Eigenschaften des CAP-Dreiecks es eher erfüllen soll.

Der Nachteil von AP-Datenbanken und damit auch von Cassandra ist, dass die Daten
nicht immer konsistent vorliegen. Es kann also sein, dass ein Anwender einen Eintrag
temporär doppelt oder gar nicht sieht. Für das Einsatzgebiet der sozialen Netzwerke ist
die Konsistenz aber kein kritisches Merkmal, da der Nutzer keinen Nachteil dadurch hat,
wenn in seinem Newsfeed ein gepostetes Video doppelt oder nicht angezeigt wird.
Deswegen werden mit Cassandra Schwächen in der Konsistenz akzeptiert, um eine hohe
Verfügbarkeit, Geschwindigkeit und Ausfallsicherheit zu gewährleisten.

Cassandra erlaubt es dem Nutzer aber auch verschiedene Konsistenzlevel zu definieren,
sodass hier auf Kosten der Verfügbarkeit eine höhere Konsistenz erreicht werden kann. In
den nachfolgenden Tabellen sind die einzelnen Konsistenzlevel nach Schreiboperationen
und Leseoperationen aufgezeigt:

![Schreibkonsistenz bei Cassandra](https://github.com/TobiasZiolkowski/ostfalia_db_2016_hausarbeiten/blob/master/ap_systems/Bilder/Schreibkonsistenz%20Cassandra.jpg)

**Abbildung 4:Schreibkonsistenz von Cassandra [FHK17]**

![Lesekonsistenz bei Cassandra](https://github.com/TobiasZiolkowski/ostfalia_db_2016_hausarbeiten/blob/master/ap_systems/Bilder/Lesekonsistenz%20Cassandra.jpg)

**Abbildung 5: Lesekonsistenz bei Cassandra [FHK17]**

Die Skalierbarkeit von Cassandra ist deswegen so hoch, da für das Hinzufügen von Nodes nur
eine neue Instanz gestartet werden muss. Es werden keine weiteren Aktionen benötigt. Das
Verkleinern des Verbundes funktioniert genauso. 
Als Nachteil des Einsatzes von Cassandra ist die geringe Menge an Abfragemöglichkeiten zu
nennen. In dieser Hinsicht bieten andere Datenbankmanagementsysteme bessere und
zahlreichere Lösungen an. Gerade in den Bereichen der Map- und Reduce Verfahren können
Berechnungen mit alternativen Lösungen besser durchgeführt werden.
Allerdings bietet Cassandra die Möglichkeit solche Berechnungen nachzurüsten, z.B. über die
Cassandra-Hadoop-Inspiration.


