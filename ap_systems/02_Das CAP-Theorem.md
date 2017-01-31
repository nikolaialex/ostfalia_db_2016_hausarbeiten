# 2. Grundlagen
In diesem Kapitel werden die Grundlagen beschrieben, die für das Verständnis der später
folgenden Erklärung der konkreten Datenbank-Beispiele nötig sind. Es wird das
CAP-Theorem beschrieben, als auch die Prinzipen ACID und BASE, die Datenbank-Typen
SQL und NoSQL, sowie die Eigenschaften der AP-Datenbanken im Allgemeinen.

## 2.1 Theoretische Datenbankkonzepte
Dieses Unterkapitel befasst sich mit theoretischen Konzepten von Datenbanken.
Es werden das CAP-Theorem, das ACID-Prinzip und das BASE-Prinzip erklärt.

### 2.1.1 Das CAP-Theorem
Das CAP-Theorem beschreibt laut [FHK17] den Ansatz, dass Datenbanken in
verteilten Datenbanksystemen lediglich zwei der drei Anforderungen Konsistenz,
Verfügbarkeit und Ausfalltoleranz erfüllen können. Diese Theorie wurde 2000 von
Eric A. Brewer als Vermutung formuliert. Diese Vermutung konnte 2002 von
Gilbert und Nancy Lynch als das CAP-Theorem bewiesen werden und dient seit
dem als Basistechnologie für die meisten NoSQL-Systeme.

Der Name des Theorems ergibt sich durch die englischen Begriffe der
Eigenschaften, die im Folgenden näher erklärt werden:

Die Consistency beschreibt in verteilten Systemen mit replizierten Daten die
Eigenschaft, dass nach Abschluss einer Transaktion auch alle Replikate des
manipulierten Datensatzes aktualisiert werden. Damit soll sichergestellt werden,
dass alle lesenden Zugriffe den aktuellen und gleichen Stand des Datensatzes
angezeigt bekommen.

Die Availability, oder Verfügbarkeit, beschreibt dahingegen die Antwortzeiten
der Datenbank. Dies ist besonders für E-Commerce Plattformen wichtig. Je
langsamer eine Webseite zu bedienen ist, desto schneller suchen die Kunden
eine Alternative. Die Antwortzeit einer Webseite nimmt wesentlichen Einfluss
auf die Benutzbarkeit einer Webseite und somit auf die Zufriedenheit der 
Kunden. Wichtig ist hier Lastspitzen einzukalkulieren, sodass die Webseite
auch bei temporär großem Andrang annehmbare Antwortzeiten liefert.

Mit der Partition Tolerance ist die Ausfalltoleranz der Rechner- und Servernetze
gemeint. Das System muss also stabil weiterlaufen, auch wenn ein Server
geplant oder ungeplant ausfällt. Ein geplanter Ausfall tritt ein, wenn eine Wartung
ansteht, oder ein Server aus Altersgründen aus dem Verbund extrahiert oder ein
neuer eingefügt werden muss. Ungeplante Abstürze treten dahingegen bei
technischen Defekten oder Softwarefehlern auf. Darüber hinaus muss auch der
Ausfall einer Kommunikationsverbindung verkraftet werden, ohne dass die
Anwender davon etwas mitbekommen. Eine Lösungsmöglichkeit dafür ist, dass
die Daten repliziert auf verschiedenen Servern gespeichert werden.

Nachdem die Begrifflichkeiten geklärt wurden kann das Theorem näher erläutert
werden. Die folgende Abbildung dient dabei dem besseren Verständnis:

![Abbildung 1: Gegenüberstellung RDBS vs. NoSQL](https://github.com/TobiasZiolkowski/ostfalia_db_2016_hausarbeiten/blob/master/ap_systems/Bilder/RDBS%20vs.%20NoSQL.jpg)

**Abbildung 1:Gegenüberstellung RDBS vs. NoSQL [FHK17]**

Das CAP-Theorem sagt aus, dass in verteilten System die drei Anforderungen
nach Konsistenz, Verfügbarkeit und Ausfalltoleranz nicht in Gänze vereinbar und
nur zwei von dreien erreichbar sind.

Es muss also für jede Anwendung individuell entschieden werden, ob sie als CA-.
CP- oder AP-Applikation realisiert wird. Hier gibt es wesentliche Unterschiede
zwischen relationalen und NoSQL-Datenbanken. Während bei relationalen
Datenbanken die Konsistenz die wichtigste Anforderung ist, rücken bei
NoSQL-Datenbanken die Verfügbarkeit und sehr hohe Skalierbarkeit in den
Vordergrund. Dies ist in der obigen Abbildung veranschaulicht.

Bei RDBS wird die Konsistenz mittels des relationalen Transaktionskonzepts und
den ACID-Eigenschaften realisiert. Durch sehr leistungsfähige und qualitativ
hochwertige Hardware sollen hier die Anforderungen nach Ausfalltoleranz und
Verfügbarkeit erfüllt werden.
