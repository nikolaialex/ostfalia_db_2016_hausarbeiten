# 1. Einleitung
Im Zuge der Digitalisierung bekommen Daten einen immer wichtigeren Stellenwert. Datenbanken bilden die Basis für viele Applikationen
und tragen damit einen wesentlichen Teil zum Unternehmenserfolg bei. Ob es Finanzdienstleister, Banken oder Social Media-Unternehmen,
die Bedeutung von Datenbanken ist mittlerweile jedem Unternehmen bewusst. Da jeder Anwendungsfall aber spezielle Anforderungen an das
Datenbankmanagementsystem stellt, kommt die Frage auf, welcher Datenbanktyp, bzw. welche Datenbank-Architektur, für diese Anforderungen
am besten geeignet ist und diesem Problem gerecht werden kann.

Im Zeitalter des Web 2.0 hat sich gezeigt, dass relationale Datenbanken die Anforderungen nicht mehr in jedem Fall erfüllen können. Die zu
verarbeitenden Datenmengen und die hohe Zahl an Endanwendern erfordern eine dynamische und skalierbare Rechner- und Serverlandschaft.
Auch die zunehmende Verbreitung von Mobile Devices und die dazugehörige Nutzung von Apps stellen die Anbieter vor neue Herausforderungen.
So erfordern Social Media Anwendungen wie Facebook Datenbanken, die möglichst immer verfügbar und robust gegenüber einzelnen
Knotenausfällen sind. 

In dieser Ausarbeitung wird auf einen Datenbanktypen eingegangen, die dem CAP-Theorem entsprungen ist. Genauer werden AP-Datenbanken
behandelt, die sich durch eine hohe Verfügbarkeit (Availability) und Partition Tolerance (Ausfallsicherheit) auszeichnen.

Der erste Abschnitt dieser Ausarbeitung beschäftigt sich mit den theoretischen Grundlagen und soll an die Thematik heranführen. Dabei werden
Konzepte und Modelle vorgestellt, die die Motivation hinter der Entstehung von AP-Datenbanken beschreiben.

Dafür wird zunächst auf das CAP-Theorem eingegangen, um die Theorie hinter den AP-Datenbanken zu beschreiben. Anschließend geht es um
das ACID-Prinzip, auf das die relationalen Datenbanken aufgebaut sind. Dies ist wichtig um die Probleme der relationalen Datenbanken mit den
neuen Anforderungen im Web 2.0 und die Gründe für die Entstehung von AP-Datenbanken besser zu verstehen.

Ergänzend wird das BASE-Prinzip vorgestellt, welches zusammen mit dem CAP-Theorem die Grundlage für NoSQL-Datenbanken, zu denen
auch AP-Datenbanken gehören, bildet.

Danach geht es um die verschiedenen Datenbankarten, die aus den theoretischen Konzepten entstanden sind. Die erste behandelte
Datenbankart sind die relationalen Datenbanken. Hier wird auf deren Funktionsweise und grundlegende Prinzipien eingegangen, um die
Unterschiede in der Funktionsweise zu AP-Datenbanken herauszustellen. 

Anschließend wird auf die NoSQL-Datenbanken eingegangen, die in mehrere Arten eingeteilt werden können. Darauf aufbauend geht
es um die Motivation hinter den AP-Datenbanken und die Motive für deren Verwendung.

Nach der Erklärung der Theorien und Grundlagen zu AP-Datenbanken, werden im nächsten Abschnitt konkrete Beispiele in Hinsicht auf
ihre Eigenschaften und Vor- und Nachteile analysiert. Dabei wird jedes Beispiel zunächst in Bezug auf die allgemeine Funktionsweise
näher erklärt und dabei die Vor- und Nachteile der Datenbanken anhand der typischen Eigenschaften erarbeitet. 

Zunächst wird das oft für AP-Datenbanken verwendete Konzept des Cloud Computings erläutert. Die Datenbanken, die analysiert werden,
sind Facebook, CouchDB, Voldemort, SimpleDB und Dynamo.

Nach der Analyse der genannten Datenbanken wird zum Schluss eine Zusammenfassung gegeben und ein Ausblick getätigt, wofür die
wesentlichen Erkenntnissen aus dieser Ausarbeitung verwendet werden können.
