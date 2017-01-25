
# 3. Abgrenzung OODB zu Dokumentdatenbanken

Wie bereits im Kapitel 2.2 und 2.3 dargelegt, handelt es sich bei Objektorientierten Datenbanken und Dokumentendatenbanken um Vertreter der Kategorie schemafreie Datenbanken. Gemäß der Struktur von Objekten können in einer OODB Objektdaten nach einer vorab definierten Klassendefinition abgelegt werden. Demnach findet eine schemabasierte Speicherung der Daten statt. Dem gegenüber verzeichnen Dokumentendatenbanken keine schemabasierten Datenstrukturen. Die als hierarchisch zusammengesetzten, respektive rekursiv verschachtelten, Attribut-Wert-Paare (Key-Value-Pairs) formen in beliebiger Ausprägung die Dokumente. Je Dokument kann infolgedessen der interne Aufbau ab der zweiten Hierarchieebene variieren. Aus der Perspektive der Validierung der Daten betrachtet, wird diese an unterschiedlichen Stellen vorgenommen. Die OODB besitzt eine Modellierungssprache, auf der Basis von der Unified Modeling Language (UML). Daten die in die Datenbank gelangen sollen, müssen dem vorab definierten Datenmodell bzw. Objektmodell entsprechen. Die Datenbank übernimmt die Schemaverantwortung, indem neue Objektedaten nur in die OODB eingefügt werden können, wenn sie dem Schema entsprechen. Dokumentdatenbanken delegieren diese Aufgabe, aufgrund ihrer Eigenschaft der schemafreien Speicherung von Inhalten, an die Ebene der Geschäftslogik. Der Entwickler trägt hierbei die Verantwortung über entsprechende Methoden einen konsistenten Datenbestand zu gewährleisten.

Die von Dokumentendatenbanken verwendbaren Datenformate sind für den Menschen leichter interpretierbar, da sämtliche in einem Zusammenhang stehenden Daten menschenlesbar abgespeichert sind. Dies entspricht der Charakteristik von Dokumenten auf der Basis von JSON oder XML. OODB müssen hingegen die Informationen analog zum RDBMS in eine repräsentierbare Form bringen.  @@ QUELLE

Dem Nachteil des erhöhten Aufwandes zur Verwaltung der Daten innerhalb von Dokumenten-Datenbanken steht eine erhöhte Flexibilität hinsichtlich der Aufnahme beliebiger Strukturen der Attribut-Wert-Paar-Konstellationen gegenüber. Dadurch können Dokumentendatenbanken relativ unkritisch heterogene Datenbestände aufnehmen. Eine OODB hingegen erfordert bei einer Einfüge-Operation eine dogmatische Einhaltung der vorhandenen Strukturen. Dies wird jedoch über bereitgestellten Methoden des Objektes realisiert, welche infolge der Datenkapselungen ausschließlich Manipulationen zulassen. Sind hierbei Anpassungen erforderlich, so müsste zum einen die Struktur und zum anderen der in der OODB enthaltene Datenbestand gleichermaßen angepasst werden.  

Objektorientierte Datenbanken können aus generischen Datentypen, wie beispielsweise Boolean-Werte, Integer oder Character, wiederum aus komplexen Objekten bestehen. Solche spezifischen Datentypen können durch Dokumentendatenbanken nur bedingt umgesetzt werden, indem hierarchische Verschachtelungen durch generische Datentypen komplexe Formen annehmen können (vgl. @meier2016nosql S. 230).  Neben der grundlegenden Eigenschaft von OODB Objekte abzubilden, folgen diese den dreizehn Regeln, nach Object-Oriented Database System Manifesto (vgl. @atkinson1989manifesto). Dokumentdatenbanken weisen im Vergleich zu OODB keine derartige Spezifik auf.

Die Indizierung von Dokumentendatenbanken basiert auf Unique Key Einträgen (Einzigartigen Schlüsselwerten), welche ein Dokument zweifelsfrei adressieren. Diese können aus einer Zeichenkette bestehen, der wiederum auf eine URI oder einen Adresspfad bestehen (vgl. @nayak2013type S. 17). Die eindeutige ID für Objekte innerhalb einer OODB wird von dem System generiert. Dies geschieht transparent gegenüber dem Nutzer. (vgl. @lee1995oodbdesign S. 5)

Speziell der Dokumentenabruf erfordert Mechanismen, welche die Key-Value-Struktur effizient durchlaufen und Daten bereitstellen können. Dazu wurde für Dokumentendatenbanken das Map/Reduce-Verfahren entwickelt. Dadurch ist es möglich, ähnliche Konstrukte wie Views durch eine Vorberechnung und Indizierung zu realisieren, um eine hohe Performance zu gewährleisten (vgl. @meier2016nosql S. 231). Dies bedeutet gegenüber der hierarchischen Konstellation von Objekten innerhalb der OODB einen Aufwand, den es durch das Datenbankmanagementsystem zu kompensieren gilt (siehe Kapitel 2.3.2).

Neben den technologischen Unterschieden von OODB und Dokumentendatenbanken lassen sich auch potentielle Einsatzszenarien identifizieren. Dokumentendatenbanken kommen oftmals in Web-Applikationen zum Einsatz, wo eine heterogene Datenmenge eine schemakonforme Datenablage schwer realisierbar erscheinen lässt. Beispielsweise eignen sich Dokumentendatenbanken für skalierbare Webapplikationen (vgl. @bach2016DDB S. 486). OODB sind demgegenüber für Applikationen prädestiniert, die auf eine schemagestützte Persistenz setzen. Weiterhin kann dadurch der agile und vereinfachte objektorientierte Entwicklungsprozess für die Realisierung der Datenschicht eingesetzt werden. (vgl. @nayak2013type S. 3)

Die Tabelle 3 fasst die wesentlichen Charakteristiken der Datenbanksysteme zusammen.

| Merkmal             | OODB                           | Dokumentendatenbank            |
| ------------------- | ------------------------------ | ------------------------------ |
| Grundeigenschaften | Weiterführung des Applikations-Modells der objektorientierten Programmierung | Optimiert für Webtechnologien, horizontal skalierbar |
| Schemata | Objektbasiertes Datenbankschema | Kein definiertes Datenschema |
| Datenkonsistenz | Infolge der schema-basierten Struktur von Klassen gegeben | Nicht vorhanden bzw. auf Entwickler ausgelagert |
| Einsatzszenarien | Normalisierte objektorientierte Datenbestände | Heterogene Datenbestände, die schematisch vorab nicht exakt definierbar sind |
| Datentypen | komplex | komplex |
| Hierarchien | Abbildbar durch das Vererbungs-konstrukt von Objekten | Abbildbar durch Verschachtelung der Dokumente |
| Abfragesprache | Object Query Language (OQL) | @@ JSON, XML |

Tabelle 3: Charakteristik von OODB und Dokumentendatenbanken

Infolge der Spezifik beider Datenbanksysteme lässt sich eine klare Abgrenzung einer Dokumentendatenbank gegenüber eine OODB vornehmen.
