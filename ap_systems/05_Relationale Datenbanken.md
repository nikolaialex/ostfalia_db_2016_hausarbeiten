## 2.2 Arten von Datenbanken
Verschiedene Arten von Datenbanken werden in diesem Unterkapitel behandelt.
Dabei werden die Begriffe Relationale Datenbanken, NoSQL-Datenbanken und AP-Datenbanken erklärt.

### 2.2.1 Relationale Datenbanken
Eine Art von Datenbanken, die das ACID-Prinzip anwenden, sind nach [FHK17]
relationale Datenbanken. Sie unterliegen dem relationalen Datenmodell, welches
Ausschnitte aus der Realität als Relationen und Fremdschlüssel darstellt. Als rein
wertbasiertes Modell stellt das relationale Datenmodell Beziehungen über
Vergleiche von Werten her. Relationale Datenbanken unterstützen die
standardisierte Anfragesprache SQL. 

Beziehungs- und Vererbungsstrukturen liegen laut [LTS+17] in Tabellen vor. Die
strikten Konsistenzanforderungen machen laut [FHK17] diese Datenbanken
allerdings sehr langsam, wenn viele Anfragen gleichzeitig verarbeitet werden
müssen, wie es zum Beispiel bei Web 2.0 Anwendungen der Fall ist.
