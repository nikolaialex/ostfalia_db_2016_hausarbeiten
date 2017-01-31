### 2.2.2 NoSQL-Datenbanken
[LTS+17] legen hier und im Folgenden dar, dass es sich bei NoSQL-Datenbanken um
schemafreie Datenbanken handelt. Der Begriff schemafreie Datenbanken wurde 2009
geprägt, um eine Bezeichnung für die steigende Anzahl nicht relationaler Datenbanken
zu haben. Flexible Datenbanken werden durch das dynamisch steigende Datenvolumen
von Web 2.0 Anwendungen erforderlich, welche die großen Datenmengen auf mehrere 
Hardwareeinheiten verteilt speichern können, wofür die relationalen Datenbanken sich
nicht gut eignen. Neben der Tatsache, dass sie nicht relational und schemafrei sind,
zeichnen sich NoSQL Datenbanken dadurch aus, dass diese Systeme von Beginn an
auf eine horizontale Skalierbarkeit, also die Erweiterung eines Systems mit zusätzlichen
Recheneinheiten, ausgelegt sind. 

Zusätzlich unterstützen NoSQL-Systeme eine einfache Datenreplikation für die verteilte
Architektur. NoSQL-Datenbanken verfügen darüber hinaus über eine einfache API und
liegen dem BASE-Prinzip zugrunde, nicht jedoch dem ACID-Prinzip. NoSQL-Systeme
verfolgen damit das Konzept des Eventually Consistent.

Es gibt verschiedene Arten von NoSQL-Datenbanken:
•	Schlüssel-Wert Datenbanken: Die Werte der Daten werden über jeweils einen
                  eindeutigen Schlüssel referenziert. Die Daten können sowohl auf der Festplatte 
                  als auch im Arbeitsspeicher vorgehalten werden.
•	Dokumentenorientierte Datenbanken: Die Daten werden als Dokumente
                  abgespeichert, deren Formate durch die Datenbank erkannt werden kann. Die
                  Inhalte der Dokumente können ebenfalls verarbeitet werden.
•	Spaltenorientierte Datenbank: Die Daten werden in Tabellen gespeichert, deren
                  Spalten dynamisch wachsen können. Für jede Spalte existiert dabei eine eigene
                  Datei.
•	Graphdatenbank: Die Daten werden als Graph gespeichert, der aus Knoten für
                  die Datenobjekte und Kanten für die Beziehungen zwischen den Objekten besteht. 
