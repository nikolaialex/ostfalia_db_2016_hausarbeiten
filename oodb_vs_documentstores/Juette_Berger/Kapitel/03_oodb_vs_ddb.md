
# 3. Abgrenzung OODB zu Dokumentendatenbanken

Dieses Kapitel soll die beiden Konzepte objektorientierte Datenbanken und Dokumentendatenbanken gegeneinander abgrenzen. Zunächst soll die Spezifik der Technologien über dem Niveau der Grundlagenbeschreibung abgehandelt werden. Im Anschluss dazu sollen die zentralen Eigenschaften beider Systeme miteinander vergleichen und letztendlich abgegrenzt werden.

## 3.2 Allgemeiner Vergleich der Charakteristiken

Wie bereits im Kapitel 2.2 und 2.3 dargelegt, handelt es sich bei objektorientierten Datenbanken und Dokumentendatenbanken um Vertreter der Kategorie der NoSQL Datenbanken. Gemäß der Struktur von Objekten können in einer OODB Objektdaten nach einer vorab definierten Klassendefinition abgelegt werden. Demnach findet eine schemabasierte Speicherung der Daten statt. Dem gegenüber verzeichnen Dokumentendatenbanken keine schemabasierten Datenstrukturen. Die als hierarchisch zusammengesetzten, respektive rekursiv verschachtelten, Attribut-Wert-Paare (Key-Value-Pairs) formen in beliebiger Ausprägung die Dokumente. Je Dokument kann infolgedessen der interne Aufbau ab der zweiten Hierarchieebene variieren.

Aus der Perspektive der Validierung der Daten betrachtet, wird diese an unterschiedlichen Stellen vorgenommen. Die OODB besitzt eine Modellierungssprache, auf der Basis von der Unified Modeling Language (UML). Daten die in die Datenbank gelangen sollen, müssen dem vorab definierten Datenmodell bzw. Objektmodell entsprechen. Die Datenbank übernimmt die Schemaverantwortung, indem neue Objektedaten nur in die OODB eingefügt werden können, wenn sie dem Schema entsprechen. Dokumentendatenbanken delegieren diese Aufgabe, aufgrund ihrer Eigenschaft der schemafreien Speicherung von Inhalten, an die Ebene der Geschäftslogik. Der Entwickler trägt hierbei die Verantwortung über entsprechende Methoden einen konsistenten Datenbestand zu gewährleisten (siehe Kapitel 2.2 und 2.3).

Die von Dokumentendatenbanken verwendbaren Datenformate sind für den Menschen leichter interpretierbar, da sämtliche in einem Zusammenhang stehenden Daten menschenlesbar abgespeichert sind (siehe Kapitel 2.3.1). Dies entspricht der Charakteristik von Dokumenten auf der Basis von JSON oder XML. OODB müssen hingegen die Informationen analog zum RDBMS in eine repräsentierbare Form bringen (siehe Kapitel 2.1.2 und 2.2).

Dem Nachteil des erhöhten Aufwandes zur Verwaltung der Daten innerhalb von Dokumenten-Datenbanken steht eine erhöhte Flexibilität hinsichtlich der Aufnahme beliebiger Strukturen der Attribut-Wert-Paar-Konstellationen gegenüber. Dadurch können Dokumentendatenbanken relativ unkritisch heterogene Datenbestände aufnehmen (siehe Kapitel 2.3). Eine OODB hingegen erfordert bei einer Einfüge-Operation eine dogmatische Einhaltung der vorhandenen Strukturen. Dies wird jedoch über bereitgestellten Methoden des Objektes realisiert, welche infolge der Datenkapselungen ausschließlich Manipulationen zulassen. Sind hierbei Anpassungen erforderlich, so müsste zum einen die Struktur und zum anderen der in der OODB enthaltene Datenbestand gleichermaßen angepasst werden (siehe Kapitel 2.2.1).

Objektorientierte Datenbanken können aus generischen Datentypen, wie beispielsweise Boolean-Werte, Integer oder Character, wiederum aus komplexen Objekten bestehen. Solche spezifischen Datentypen können durch Dokumentendatenbanken nur bedingt umgesetzt werden, indem hierarchische Verschachtelungen durch generische Datentypen komplexe Formen annehmen können (vgl. @meier2016nosql S. 230). Neben der grundlegenden Eigenschaft von OODB Objekte abzubilden, folgen diese den dreizehn Regeln, nach Object-Oriented Database System Manifesto (vgl. @atkinson1989manifesto). Dokumentendatenbanken weisen im Vergleich zu OODB keine derartige Spezifik auf.

Die Indizierung von Dokumentendatenbanken basiert auf Unique Key Einträgen (Einzigartigen Schlüsselwerten), welche ein Dokument zweifelsfrei adressieren. Diese können aus einer Zeichenkette bestehen, der wiederum auf eine URI oder einen Adresspfad bestehen (vgl. @nayak2013type S. 17). Die eindeutige ID für Objekte innerhalb einer OODB wird von dem System generiert. Dies geschieht transparent gegenüber dem Nutzer (vgl. @lee1995oodbdesign S. 5).

Speziell der Dokumentenabruf erfordert Mechanismen, welche die Key-Value-Struktur effizient durchlaufen und Daten bereitstellen können. Dazu wurde für Dokumentendatenbanken das Map/Reduce-Verfahren entwickelt. Dadurch ist es möglich, ähnliche Konstrukte wie Views durch eine Vorberechnung und Indizierung zu realisieren, um eine hohe Performance zu gewährleisten (vgl. @meier2016nosql S. 231). Dies bedeutet gegenüber der hierarchischen Konstellation von Objekten innerhalb der OODB einen Aufwand, den es durch das Datenbankmanagementsystem zu kompensieren gilt (siehe Kapitel 2.3.2).

Neben den technologischen Unterschieden von OODB und Dokumentendatenbanken lassen sich auch potentielle Einsatzszenarien identifizieren. Dokumentendatenbanken kommen oftmals in Web-Applikationen zum Einsatz, wo eine heterogene Datenmenge eine schemakonforme Datenablage schwer realisierbar erscheinen lässt. Beispielsweise eignen sich Dokumentendatenbanken für skalierbare Webapplikationen (vgl. @bach2016DDB S. 486). OODB sind demgegenüber für Applikationen prädestiniert, die auf eine schemagestützte Persistenz setzen. Weiterhin kann dadurch der agile und vereinfachte objektorientierte Entwicklungsprozess für die Realisierung der Datenschicht eingesetzt werden. (vgl. @nayak2013type S. 3)

## 3.2 Vergleich der Sprachelemente

Inhaltsgegenstand dieses Kapitels ist die Beschreibung der syntaktischen Sprachelemente. Dadurch soll die Beschaffenheit von OODB und DDB transparenter werden. Für die DDB kommt hierbei die Hersteller-konkrete MongoDB zum Einsatz. Für die Skizzierung der OODB Sprachcharakteristik wird anhand von generischen Sprachelementen vorgenommen.

### 3.2.1 Dokumentendatenbank am Beispiel MongoDB

Im folgenden werden die syntaktischen Elemente der DDB MongoDB betrachtet.(vgl. @redmond2012seven S. 135 ff.)
Das DBS zeichnet sich dadurch aus, Abfragen Ad-hoc auf den Datenbestand ausführen zu können.
Für die Ablage von Dokumenten wird kein Schema benötigt, sodass neue Typen von Dokumenten einfach hinterlegt werden können, wie im Kapitel 2.3 anfänglich angedeutet wurde.

Die Dokumente werden in JSON Syntax abgelegt, intern werden diese dann in dem Binärformat BSON abgelegt.
Durch die schemafreie Ablage, kann die Datenbank während der Entwicklung mitwachsen ohne diese erneut anzulegen.
Im Folgenden werden die CRUD Operationen, welche sich über das mitgelieferte Command Line Interface ausführen lassen, vorgestellt.
Die Dokumente werden in Buckets gespeichert, welche ähnlich den Datenbanken in relationalen Datenbanksystemen sind.

**Anlegen eines Buckets**
```
mongo book
```

**Anlegen eines Dokuments**
```javascript
db.books.insert({
  "title": "Harry Potter",
  "year": 2002
  });
```

Es ist erkennbar, dass innerhalb von *insert* die JSON Syntax zum Einsatz kommt.
Um das Ablegen vieler Dokumente zu vereinfachen, ist es möglich JavaScript-Funktionen zu hinterlegen, welche die nötigen Werte als Parameter entgegen nehmen und intern *insert* aufrufen.

**Suche aller Bücher**
```javascript
db.books.find();
```

Das Ergebnis von *find()* liefert ein JSON-Array der abgelegten Bücher.
In der Ergebnismenge ist erkennbar, dass ein Attribut *_id* hinzugekommen ist, welches die eindeutige vom System vergebene Dokument-ID ist.
Der Algorithmus für die Generierung der Dokument-ID ist so implementiert, dass dieser, auf unterschiedlichen Maschinen ausgeführt, nicht die selben IDs erzeugt.

**Suche eines Buchs**
```javascript
db.books.find({ "_id" : ObjectId("5a6bb81fbb30123365f39fa8") });
```

Die Suche nach einem bestimmten Objekt ist ebenfalls mittels der *find()* Methode möglich, der als Parameter die ID des Dokuments übergeben wird.

**Suche nach Kriterien**
```javascript
db.books.find({ "year" : { $gt : 2000 } });
```

Innerhalb von *find()* lassen sich Kriterien angeben. In dem Beispiel werden nur noch Dokumente zurückgegeben, dessen Jahr größer als 2000 ist.

**Suche über JS Funktionen**
```javascript
db.books.find( function () {
    return this.year > 2000 && this.year <= 2010;
});
```

Eine weitere Möglichkeit ist die Benutzung von JavaScript-Funktionen, um komplexere Anfragen durchzuführen.
Ein Nachteil dieser Variante ist, dass die Funktion für jedes Dokument in der Datenbank ausgeführt wird. Durch die Schemafreiheit ist aber nicht garantiert, dass das Feld *year* auch in jedem Dokument existiert, sodass diese Abfrage fehlschlägt wenn das Feld nicht vorhanden ist.

**Update eines Dokuments**
```javascript
db.books.update(
  { "_id" : ObjectId("5a6bb81fbb30123365f39fa8") },
  { $set : { "year" : 2003 } }
);
```

Über den Befehl *update* in der Kombination mit *\$set* können bestimmte Eigenschaften eines Dokuments verändert werden.
Wird *\$set* nicht mit angegeben, wird das gesamte Dokument durch das Neue ersetzt.
Dabei gehen auch alle nicht mit angegeben Eigenschaften, wie der Titel, verloren.

Das Löschen eines Dokuments findet über den Befehl *delete()* statt, dem wie schon bei *find* die ID des Dokuments mitgegeben wird.

### 3.2.2 OODB

Ähnlich wie bei SQL, müssen die Entitäten der Datenbank bekannt gemacht werden (vgl. @nayak2013type).
Um objektorientierte Datenbanken zu modellieren, kann die Sprache UML[^uml] verwendet werden.
Diese wird von der Object Management Group (OMG) standardisiert und ist aktuell in der Version 2.5 aus dem Jahr 2015 vorhanden.
Besonders geeignet sind Klassendiagramme um Objekte und deren Beziehungen zueinander darzustellen.

Bei relationalen Datenbanken wurde SQL als Abfragesprache spezifiziert.
Im Bereich der OODB wurde ebenfalls versucht einen Standard zu etablieren.
Für die Beschreibung des Schemas gibt es die Object Definition Language (ODL), welche von der Object Data Management Group (ODMG) stammt.
In dieser werden die Klassen, Schnittstellen, Attribute, Beziehungen, Operationen und Schlüssel beschrieben.
Die Syntax ist in der Wikipedia[^odl] beschrieben. Nachstehend folgt ein Beispiel für das Erzeugen einer Klasse:

**Erzeugen einer Klasse**
```
class Person {
  attribute string nachname;
  attribute int alter;
  attribute array<Person *> children;
  void change_address(in string street, in string town,
                     out string oldstreet, out string oldtown);
  index on  name;
};
```

Für Abfragen gibt es die Object Query Language (OQL), welche auf der Basis und Syntax von SQL aufbaut.
Es können beispielsweise Abfragen in der bekannten Form *SELECT ... FROM ... WHERE* durchgeführt werden.
Ebenfalls sind bekannte Abfragen aus SQL über Aggregierungsfunktionen (count, avg, min, max, etc.) und Mengenoperationen (intersct, except oder union) möglich.
Des Weiteren können in den Abfragen komplexe Werte, Objektidentitäten oder Methoden genutzt werden.
Mittels Quantoren können Methoden für Mengen direkt aus der Abfragesprache heraus ausgeführt werden.(vgl. @poschekdatenbanken S. 17 f)

Im Folgenden werden einige Beispiel für OQL Operationen aufgeführt:

**Erzeugen eines Objektes**
```
Katze(ID: 235423523, Vita: struct(Name: Mietze, Alter: 14), ...)
```

**Suchen von Objekten**
```
SELECT k FRM Katzen WHERE k.Vita.Alter > 10
```

**Holen eines Objekts**
```
ELEMENT(SELECT k FRM Katzen WHERE k.ID = 235423523)
```

Neben diesem Standard, an dem seit 2001 nicht mehr gearbeitet wird, da sich die Organisation aufgelöst hat und er einige Schwächen aufweist, gibt es die SQL-3-Norm. Diese erweitert den bisherigen Standard um Konstrukte, welche für objektorientierte Datenbanken wichtig sind.
Dazu gehören abstrakte Datentypen, Objekt-Identifikatoren, Überladen von Funktionen oder komplexen Datentypen wie SET, MULTISET, LIST oder ROW.(vgl. @kulkarni1993object, @poschekdatenbanken S. 19ff)

Eine dritte Möglichkeit sind native Abfragen aus der Programmiersprache hinaus, sofern die Datenbank eine solche Schnittstelle anbietet.
Im Folgenden ein LINQ-Beispiel aus der Programmiersprache C# um alle Personenobjekte die erwachsen sind zu erhalten:

**Abfragen bestimmter Personen**
```cs
var personen = (from p in db.Personen where p.Alter > 17 select p).ToList();
```

Damit ähnliche Abfragen in einer anderen Programmiersprache möglich sind, muss diese Closures unterstützen.

### 3.2.3 Vergleich der Sprachkonstrukte

Werden beide Sprachkonstrukte gegenübergestellt, so wird deutlich, dass diese unterschiedliche Ansätze verfolgen. Während für Dokumentendatenbanken eine API verwenden, kommen bei OODB standardisierte Syntaxelemente zum Einsatz. Beide Methoden unterscheiden sich in den meisten Disziplinen wie:

* Selektion von Daten
* Ändern von Daten
* Suchen von Daten
* Anlegen von Objekten

. Dies ist nicht zuletzt auf die unterschiedliche Modellierung beider Datenbanken zurück zu führen. Inwiefern dich daraus Vor- und Nachteile ergeben, obliegt erneut einer Beurteilung im Kontext eines Einsatzszenarios. Davon losgelöst, ist jedoch die Ähnlichkeit der OODB-Syntax zum SQL-Standard der RDBMS recht ähnlich, was zumindest dem Aspekt der Erlernbarkeit zu Gute kommen kann.  


## 3.3 Performacevergleich OODB und Dokumentendatenbanken

In @li2013performance wurden SQL und NoSQL-Datenbanken über die Performance miteinander verglichen.
Dabei zeigt sich, dass sich Systeme wie CouchDB oder RavenDB, im Vergleich zu der relationalen Datenbank MS SQL Express, nicht performanter im Bereich CRUD verhalten.
Andere Systeme hingegen, wie Couchbase oder MongoDB, sind deutlich performanter als die verglichene MS SQL Datenbank.
Diese Auswertung zeigt, dass nicht das alleinige Konzept einer NoSQL-Datenbank zu mehr Performance führt, vielmehr muss die konkrete Umsetzung den Vorteil auch tatsächlich liefern.

Eine weitere Erkenntnis ist, dass NoSQL-Datenbanken bei trivialen Operationen sehr schnell sein können, bei komplexeren Operationen diese aber im Verhältnis deutlich länger brauchen.
Aufgrund mangelnder Performance-Vergleiche von OODB und DDB kann jedoch ein erneuter Vergleich von NoSQL-Datenbanken in der Form von OODB gegenüber relationalen Datenbanken eine ungefähre Einschätzung liefern. Nach @saxena2013performance wurde eine Performance-Messung zwischen den beiden Datenbanksystemen dB4o und MS SQL-Server 2007 gezogen. Das Ergebnis bescheinigt in den Operationszenarien Ändern von Daten und Abfrage von Daten dem OODB-System einen Perfromance-Vorteil. Lediglich das Schreiben von Datenobjekten verdeutlichte, dass beide Datenbanksysteme ein annähernd gleiches Performance-Verhalten erzielen konnten. (vgl. @saxena2013performance S. 6ff)


Der Vergleich deutet zumindest an, dass beide NoSQL-Technologien gegenüber RDBMS gegeneinander keine negativ behaftete Beurteilung zulassen und folglich einem System aus diesem Aspekt heraus keine Präferenz zugesprochen werden kann.

## 3.4 Fazit und abschließende Zusammenfassung der Eigenschaften beider Datenbankkonzepte

Die Tabelle 3 fasst die wesentlichen Charakteristiken der Datenbanksysteme zusammen.

| Merkmal             | OODB                           | Dokumentendatenbank            |
| ------------------- | ------------------------------ | ------------------------------ |
| Grundeigenschaften | Weiterführung des Applikations-Modells der objektorientierten Programmierung | Optimiert für Webtechnologien, horizontal skalierbar |
| Schemata | Objektbasiertes Datenbankschema | Kein definiertes Datenschema |
| Datenkonsistenz | Infolge der schema-basierten Struktur von Klassen gegeben | Nicht vorhanden bzw. auf Entwickler ausgelagert |
| Einsatzszenarien | Normalisierte objektorientierte Datenbestände | Heterogene Datenbestände, die schematisch vorab nicht exakt definierbar sind |
| Datentypen | komplex | komplex |
| Hierarchien | Abbildbar durch das Vererbungskonstrukt von Objekten | Abbildbar durch Verschachtelung der Dokumente |
| Abfragesprache | Object Query Language (OQL) | JSON, XML |

Tabelle 3: Charakteristik von OODB und Dokumentendatenbanken

Infolge der Spezifik beider Datenbanksysteme lässt sich eine klare Abgrenzung einer Dokumentendatenbank gegenüber eine OODB vornehmen. Vielmehr ist es angesichts der Eigenschaften beider Systeme schwierig, diese nach den gleichen Kriterien beurteilen zu können. Jede NoSQL-DB bedient eine andere Anforderungskategorie und zielt auf divergierende Einsatzszenarien ab.
