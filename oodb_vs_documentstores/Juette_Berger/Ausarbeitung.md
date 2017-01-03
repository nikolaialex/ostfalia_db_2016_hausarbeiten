<!-- Images -->
[person]: person.png "OO Modell einer Person"
[personAI]: Person_Ai.png "Abstrakte Klasse und Interface"

<!-- Footnotes -->
[^msql]: https://www.mysql.de/
[^mariadb]: https://mariadb.org/
[^psql]: https://www.postgresql.org/
[^uml]: http://www.uml.org/
[^odl]: https://en.wikipedia.org/wiki/Object_Definition_Language
[^zoodb]: https://github.com/tzaeschke/zoodb
[^couchdb]: http://couchdb.apache.org/
[^ravendb]: https://ravendb.net/
[^mongodb]: https://www.mongodb.com
[^d3]: https://www.d-velop.de/d3/d3ecm-home/
[^xml]: https://www.w3.org/XML/
[^json]: http://www.json.org/
[^db4o]: https://sourceforge.net/projects/db4o/
[^mcobject]: http://www.mcobject.com/
[^wikiorm]: https://en.wikipedia.org/wiki/List_of_object-relational_mapping_software

# 1. Einleitung
Lorem ipsum

# 2. Grundlagen
Lorem ipsum

## 2.1 Relationale Datenbankmanagementsysteme
Lorem ipsum

## 2.2 Objektorientierte Datenbankmanagementsysteme
Bei den Objektorientierten Dantebanken handelt es sich Systeme die den Anspruch erheben die Objekte aus der Objektorientierten Programmierung mit allen Eigenschaften und Vorteilen speichern zu können.
Im folgenden werden die Grundlegenden Konzepten der Pbjekorientierung, von Objektorientierten Datenbankmanagementsystemen (OODBMS) und der eigentlich Datenbank beschrieben.

### 2.2.1 Objekorientierung
Im diesem Kapitel werden die Grundlegenden Konzepte der Objektorierung beschrieben, da diese notwendig sind um den Aufbau, die Funktionsweise und die Anforderungen an ein OODBMS zu verstehen.

Unter einem Objekt wird im allgemeinen eine Einheit verstanden, welche aus Attributen und Methoden besteht.
Dieses versucht ein Ding oder ein abstraktes Konstrukt aus der realen Welt teilweise oder Vollständig zu Beschreiben.
Das können Beispielsweise Personen, Tiere oder Gegenstände sein, aber auch Dinge wie Zugriff auf ein Dateisystem oder auf eine Datenquelle.
Der Bauplan, welche für die Erzeugung der Objekte verwendet wird, wird als Klasse bezeichnet.
Im folgenden wird die Klasse mit dem Namen *Person* und den Eigenschaften *Nachname*, *Vorname* und *Alter* beispielhaft verwendet.
Diese beschereibt Personen für einen geeigneten Kontext ausrecheind genau.
Sind weitere Eigenschaften oder Methoden nötig so muss die Klasse um solche erweitert werden.
Die folgenden Abbildung zeigt die Klasse in UML-Klassendiagramnotation.

![OO Modell einer Person][person]

<!-- Eigenschaten und Methoden -->
Das Objekt nimmt nur die Eigenschaften auf, welche für den Nutzungskontext wichtig sind.
Die Characterisierung eines Objektes erfolgt durch seine Methoden.
Methoden beschreiben die Aktionen die mit einer Instanz durchgeführt werden können.
Die Person könnte Beispielsweise die Aktion *Bewegen* implementieren um eine frei definierbare Bewegung des Objektes zu starten.
Ein Kernkonzept der Objektorientierung ist die Kapselun, wobei ein direkter Zugriff auf die Attribute nicht möglich ist.
Diese wird über Methoden bereigetstellt.
In dem verwendeten Beispiel sind das die Get- und Set-Methoden.
Damit können Einschränkungen durchgeführt werden sodass bestimmte Eigenschaften nur Lesbar sind oder nur gesetzt werden können.

<!-- Abtrakte Klassen, Interfaces und Vererbung -->
Um generische Klassen abilden zu können gibt es *abstrakte* Klasse, von denen sich keine Instanz erzeugen lässt.
Eine passende abstrakte Klasse könnte Beispielsweise das *Lebewesen* sein, welche allgemeingültige Atttribute und Methoden definiert.
Für die Realisierung von Schnittstellen eigenen sich Interfaces, welche nur den Kopf von Mehtoden definieren und die eigentliche Implementierung den Klassen überlassen.
Die folgende Abbildung zeigt die Verwendung der abstrakten Klasse *Lebewesen* mit der Schnittstelle *ILebewesen*.

![Abstrakte Klasse und Interface][personAI]

Hierbei spielt das Prinzip der Vererbung eine große Rolle.
Die Klasse *Person* erbt alle Eigenschaften und Methoden von *Lebewesen*.
Dadruch ist es möglich Aktionen und Eigenschaften zu generalisieren.
Durch die Verwendung eines Interfaces verpflichtet sich die abstrakte Klasse *Lebenwesen* dazu entweder selbst die definierten Methoden zu implementieren oder aber das die erbenden Klasse diese Methode implementieren müssen.

<!-- Polymorphie und Überladung/Überschreiben von Methoden -->
Daraus ergibt sich ein weiteres Prinzip der Objektorientierung.
Eine erbende Klasse kannn die Methoden der übergeordneten Klasse(n) überschreiben und dadurch ein angepasstes verhalten implementieren.
Beispielsweise bewegt sich ein Mensch auf zwei Beinen, ein Löwe aber auf vier Pfoten.
Daneben gibt es das Prinzip der Polymorphie, welches besagt, das es von einer Methode mit gleichem Namen verschiedene Ausprägungen geben kann.
Diese unterscheiden sich durch ihre Parameter.

<!-- Objektbeziehungen -->
Neben der Modellierung einzelner Klassen müssen deren Beziehungen untereinander abgebildet werden.
Dabei ergeben sich vier verschiedene Typen von Beziehungen.
Bei 1:1 Beziehungen findet genau eine Referenz von Klasse 1 auf eine Klasse 2 statt.
Ebenfalls hat Klasse 2 nur genau 1 Referenz, nämlich die auf Klasse 1.
Der zweite Typ sind 1:n Beziehungen bei denen die Klasse 1 auf n weitere Klassen verweisen kann.
Beide Typen können ebenfalls Bedingt sein, wobei auch eine Referenz auf NULL möglich ist.
Beziehungen lassen Klassifizieren, dazu gehören verhaltensbezogene Beziehungen (Nachrichten oder Funktionsaufrufe) und strukturelle Beziehungen (Einschluss oder Vererbung)
.

<!--- Client-Server Programmierung --->
Der Einsatz von Objektorientierten Programmen ist sehr unterschiedlich.
In Bereichen wie z. B. im Computer Aided Design (CAD) oder Multimedia-Anwendungen werden Objekte mit komplexen Strukturen erzeugt, die persistent gespeichert werder müssen.
Heutzutage werden viele Client-Server basierte Anwendungen entwickelt, welche Daten dauerhaft speichern müssen.
Häufig sind hierbei viele Nutzer die auf ein zentrales System zugreifen, welches die Daten bereitstellt.
Dazu werden in den meisten fällen Relationale Datenbankmanagementsysteme wie MySQL[^msql], MariaDB[^mariadb], PostgreSQL[^psql], Microsoft SQL Server, usw. eingesetzt.
Häufig findet die Realisierung in einer Objektorientierten Programmiersprache wie Java, C# oder PHP statt.
Dadurch entsteht ein Problem was unter dem Begriff Objektrelationales Mapping (ORM) zusammengefasst wird.

### 2.2.2 Objektrelationales Mapping
Eines der gößren Probleme als Benutzer einer objektorientierten Sprache ist, dass die verwendeten Objekte nicht in eine relationale Datenbank, persistent gespeichert werden, da eine relationale Datenbank nur einen eigenen Pool aus Datentypen besitzt.
Dieses Problem lässt sich durch mehrere Ansätze verringern:

  * Verzicht auf die Verwendung von Objekten, welches nicht dem objektorientierten Paradigma entspricht.
  * Konvertierung der Objekte zu relationalen Daten beim Speichern und der relationalen Daten zu Objekten beim Lesen.
  Diese Variante hat den Nachteil, dass viel Performance in die Umwandlung der Daten investiert werden muss.
  Der Vorteil ist, dass die Daten weiterhin in einer relationalen Datenbank liegen und somit bekannte Verfahren zum Lesen und Schreiben und der Konsistenz angewendet werden.
  * Verzicht auf die Speicherung der Daten in einer relationalen Datenbank.
  Als geeignete Alternative bieten sich hier Objektorientierte Datenbanken an, die jegliche Art von Objekten speichern können.

Um ein solches Mapping mit möglichst wenig Aufwand durchführen zu können gibt es in den Verschiedenen Programmiersprachen Frameworks, welche die meiste Arbeit (Generierung des SQLs, Umwandeln des Datenstroms in Objekte, uws.) durchführen.
Im Bereich Java ist das die Java-Persistance-API, auf der ein Framework wie Hibernate aufsetzen kann, im Bereich C# existiert nativ das Entity Data Framework für MSSQL Datenbanken oder im Bereich der Android Entwicklung das Framework SugarORM.
Bei der Verwendung eines OODBMS erfolgt der Zugriff auf die Daten in gleicher Weise als würden diese im Speicher des Betriebsystems liegen.
Dadurch werden weitere Layer wie ODBC, ADO oder JDBC nicht benötigt.
Die CURD-Abfragen (Create, Update, Read, Delete) können über Methoden direkt auf die Datenbank ausgeführt werden.
Jediglich für das suchen bestimmter Objekte nach Kriterien in den Attributen muss eine eigene Sprache bereitgestellt werden.
Ein generischer Ansatz ist Beispielsweise LINQ (TODO LINK) aus dem .net Framework, welches die Abfrage von Objekten aus dem Speicher ermöglicht.
Werden Objekte aus der Datenbank geholt können diese im Modus Transient oder Mirror sein.
Als Transient sind diese von der Datenbank entbunden, Änderungen wirken sich nur auf das Objekt im Speicher des Systems aus.
Im Mirror Modus wirken sich Änderungen direkt auf das Objekt im Speicher und in der Datenbank aus.

<!--- OOD --->
Eine bessere Lösung ist jedoch die Speicherung der verwendenten Objekte direkt in der Datenbank.
In diesem Fall findet kein Performanceverlust durch das Mapping der Daten statt, des weiteren lassen sich Informationen wie Vererbung oder Verknüpfungen zwischen den Objekten wesentlich besser hinterlegen.
Die gespeicherten Objekte sollten nahezu ununterscheidbar von dennen in der verwendenten Programmiersprache sein.
Daher müssen Anforderungen nach Vererbung, Polymorphie, Schnittstellen oder Objektreferezenen von dem OODBMS ebenfalls mit abgedeckt werden.
Jedes Objekt wird mit einer eindeutigen ID, der Objekt ID (OID) gespeichert, welche vom OODBS generiert wird.
Diese ist unabhängig von den Daten in dem Objekt und dient der Auffindbarkeit und eindeutigen Identifizerung von Objekten innerhalb der Datenbank.
Über diese IDs ist es möglich Referenzen zwischen Objekten innherhalb der Datenbank zu hinterlegen.
Wie bei den Relationalen Datenbanken kann es hierbei zu Inetritätsproblemen kommen wenn ein Objekt, auf welches noch referenziert wird, aus der Datenbank entfernt wird.
Eine Referenz kann sich nur auf ein anderes Element oder auf eine Menge anderer Elementen beziehen.

Systeme wie ENCORE (TODO LINK) können Referenzen über Attribute setzen, sodass das eine Eigentschaft des Objektes x auf y zeigt ohne das weiter bestimmt werden muss wie die Referenz berechnet wird.
Die Berechnung könnte über eine direkte Referenz auf das Objekt (Pointer) oder wird über gleiche Attribute bestimmt.

Ob dies erlaubt ist und wie damit verfahren wird hängt von der Implementierung des OODBMS ab.
Durch die Änderung der Objekteigentschaften (Attribute) ändert sich die OID nicht.
Dadruch sind Objekte mit unterschiedlichen OIDs und gleichen Eigenschaften möglich. (z. B. eine Klasse mit den Attributen Nachname und Vorname von der zwei gleiche Instanzen exisieren)
Die Erzeugung der OID kann auf Verschiedenen Art und Weisen durchgeführt werden.
Diese kann aus der physischen Adresse, dem Pointer bestehen.
Diese Variante hat den Nachteil, das eine Bindung an den physischen Speicherplatz entsteht.
Eine Name, welcher meist aus einem geeigneten Namensraum stammt, welche meistn vom Nutzer vergeben wird.
Hierbei ist es meist Schwierig über viele Attribute eindeutige Werte zu vergeben.
Einen Surrogate oder Identifier Attribut.
Diese haben den Nachteil das sie nicht wie normale Attribute behandelt werden können.
Eine andere Möglichkeit sind andere abstrakte Objekte.
Neben der OID wird der Zustand eines Objektes gespeichert.


### 2.2.3 Anforderungen an ein Objektorientierte Datenbank
Eine OODBMS muss ebenfalls die ACID Prinzipien (Atomar, Konsistenz, Isolation und Haltbarkeit) gewährleisten.
Für die Abfrage der Daten muss ggf. eine eigene Sprache Bereitgestellt werden.
Weitere Anforderungen wie Transaktionen, das Speichern und Abrufen großer Datenmengen, erkennen von Deadlocks, Erzeugen von Backups sowie die möglichkeit diese wieder einzuspielen werden von den OODBMS ebenfalls adressiert.
Das Objektorientierten Datenbankmanifest (TODO LINK) gibt dreizehn Regeln an, welche Anforderungen ein OODBMS erfüllen muss.
Diese Teilen sich in acht Regeln aus dem Bereich der Objektorientierung und fünf aus Datenbankgrundsätzen [vgl. @rutner2002implementing] und werden im folgenden ausführlicher Vorgestellt.


  * Acht Regeln der Objektorientierung
     1. Objekte lassen sich zu **Klassen und Typen** abstrahieren um gleichartrige Objekttypen zu beschreiben.
     2. Jede Datenbankoperation muss **Vollständig** oder gar nicht durchgeführt werden und kann in einer geeigneten Sprache ausgedrückt werden.
     3. Klassen können um weitere Attribute ergänzt werden. Die Möglichkeit der **Erweiterbarkeit** bezieht sich auf alle relevanten Objekte.
     4. **Einfach- und/oder Mehrfachvererbung** ist möglich. Eine Unterklasse kann die geerbte Klasse um eigene Methoden und Attribute erweitern.
     5. Unterschliedliche Klassen, die eine Methode erben, können diese Überschreiben und weitere gleichnamige Methoden mit unterschiedlichen Parametern hinzufügen. (**Polymorphie**)
     6. Verwendung von **Datenkapselung** um Details der Implementierung zu verbergen. Der Zugriff auf Eigeschaften erfolgt nur über Methoden (z. B. Get- und Set).    
     7. Ein OODBMS unterstützt **Komplexe Objekte**. Das sind Objekte deren Attribute nicht nur einfache Datentypen wie String, Integer oder Boolean sein können sondern wiederum aus anderen Objekten bestehen können.
     8. Jedes Objekt hat eine eigene **Objektidentität**, welche unabhängig von den Eigenschaftswerten ist. Eine solche ID wird wie bereits beschrieben als OID bezeichnet.
   * Fünf Datenbankgrundsätze
     1. Das OODBMS muss für **Persistenz** sorgen, dass der Zustand über die gesamte Laufzeit erhalten bleibt. Nur bewusste Änderungen der Daten sind erlaubt.
     2. Der Zugriff auf die Daten muss **Mehrbenutzerfähig** sein. Dazu gehören gleichzeitige Zugriffe, ein Transaktionskonzept um Datenbankinkonsistenz zu vermeiden.
     3. Über eine Abfragesprache lassen sich **Ad-hoc Abfragen** durchführen.
     4. Die Verwaltung von **großen Datenbeständen ist möglich**. Dazu gehören die Optimierung von Abfragen oder das Management von Indicies. Diese sollen unabhängig von Benutzerinteraktionen durchgeführt werden.
     5. Das **Wiederherstellen** von des Ausgangszustands im Fehlerfall bei nicht abgeschlossenen Transaktionen ist möglich. Ggf. werden diese neu gestartet.

<!--- OOD Modell --->
Ein OODBMS kann in die zwei Teile der Struktur und den Operation eingeteilt werden.
Der Struckturbereich beinhaltet die Objekte, deren Zustände, die Klassen, das Schema und die Vererbung.
Im Operationsteil finden sich die Metaklassen, die Funktionen, Methoden, die Vererbung von Methoden sowie die Ausnahmen.

### 2.2.4 Modellierung und Datenabfrage
Ähnlich wie bei SQL müssen die Enitäten der Datenbank bekannt gemacht werden.
Um Obejektorientierte Datenbanken zu modellieren kann die Sprache UML[^uml] verwendet werden.
Diese wird von der Object Management Group (OMG) standatisiert und ist aktuell in der Version 2.5 aus dem Jahr 2015 vorhanden.
Besonders geeignet sind Klassendiagramme um Objekte und deren Beziehungen zueinander darzustellen.

Bei relationen Datenbanken wurde SQL als Abfragensprache spezifiziert.
Im Bereich der OODB wurde ebenfalls versucht einen Standard zu etablieren.
Für die Beschreibung des Schemas gibt es die Object Definition Language (ODL), welche von der Object Data Management Group (ODMG) stammt.
In dieser werden die Klassen, Schnittstellen, Attribute, Beziehungen, Operationen, Schlüssel beschrieben.
Die Syntax ist in der Wikipedia[^odl] beschrieben, im folgenden ein Beispiel für das erzeugen einer Klasse.

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
Es können Beispielsweise Abfragen in der bekannten Form SELECT ... FROM ... WHERE durchgeführt werden.
Ebenfalls bekannte Abfragen aus SQL über Aggregierungsfunktionen (count, avg, min, max, etc.) und Mengenoperationen (intersct, except und union) sind möglich.
Des weiteren können in den Abfragen auf komplexe Werte, Objektidentitäten oder Methoden genutzt werden.
Mittel Quantoren können Methoden für Mengen direkt aus der Abfragesprache heraus ausgeführt werden.

Im folgenden werden einige Beispiel für OQL Operationen aufgeführt:

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
Nebden diesem Standard, an dem seit 2001 nicht mehr gearbeitet wird da sich die Organisation aufgelöst hat, einige Schwächen aufweist, gibt es die SQL-3-Norm.
Diese erweitert den bisherigen Standard um Konstrukte die für Objektorientierte Datenbanken wichtig sind.
Dazu gehören abstrkte Datentypen, Objekt-Identifikatoren, Überladen von Funktionen oder komplexe Datentypen wie SET, MULTISET, LIST oder ROW.

Eine dritte Möglichkeit sind native Abfragen aus der Programmiersprache hinaus, sofern die Datenbank eine solche Schnittstelle anbietet.
Im folgenden ein LINQ-Beispiel aus der Programmiersprache C# um alle Personenobjekte die Erwachsen sind zu erhalten:

**Abfragen bestimmter Personen**
```cs
var personen = (from p in db.Personen where p.Alter > 17 select p).ToList();
```

Damit ähnliche Abfragen in einer Programmiersprache möglich sind muss diese Closures unterstützen.

### 2.2.5 Transaktionen und Einsatz eins OODBMS
OODBMS unterstüzen die Verwendung von Transaktionen.
Wird eine Transaktion gestartet so wird das betreffende Objekte gesperrt. (Read-Write Modell)
Typische Operationen, welche angeboten werden sind:


  * *begin()* um eine Transaktion zu starten
  * *commit()* um eine Transaktion erfolgreich zu beenden
  * *abort()* um eine laufende abzubrechen
  * *checkpoint()* um mehrere Transaktionen miteinander zu Synchronisieren
  * *active()* um den Status einer Transaktion abzufragen

<!-- Weitere Wichtige Punkte für den Betrieb eines OODB -->
Neben den oben aufgeführten dreizehn Regeln gibt es weitere Aspekte die wichtig für die Funktion eine OODBMS sind.
Dazu gehören Autorisierung, Schemaevaluation und Versionierung.
Der Bereich der Autorisierung beschreibt den Schutz vor unberechtigtem Zugriff.
Dafür werden Zugrifssrechte an Benutzer vergeben, welche Klasse, Objekte oder bestimmte Untermengen von Objekten lesen, schreiben, verändern oder löschen dürfen.
Die Schemaevaluation ist wichtig, wenn Definitionen von Klassen oder Beziehungen angepasst werden müssen.
In diesem Fall dürfen Änderungen nicht das laufende System beeinträchtigen.
Die Änderungen können sich sofort auf alle Objekte auswirken (eager update) oder werden nach und nach verändert (lazy update).
Im zweiten Fall geschieht das meist erst beim erneuten Zugriff auf die Daten.
Werden Objekte verändert so ist es wichtig die Historie zu verwalten.
Die Darstellung der Versionen kann mittels eines Versionsgraphen erfolgen.
In diesem ist auch gekennzeichnet, welche als die aktuelle Version behandelt wird, also das Objekt welches bei einer Anfrage in dieser Version zurückgegeben wird.
Eine andere Möglichkeit ist eine Zeitbezogene Versionierung durchzuführen. (z. B. Jede Stunde/Monat etc.)
Werden diese dann mit einem Gültigkeitsstempel versehen so findet ein Aufräumungsprozess ebenfalls statt.

### 2.2.6 Zusammenfassung
Der große Vorteil von Objektdatenbanken ist die Vermeidung des Bruchs der bei Speicherung von Daten in relationalen Datenbanken entsteht.
Ein weiterer Vorteil ist das dass benötige Joinen von normalisierten Tabellen entfällt.
Drittes Argument für ein OODBMS ist das die Objektidentität gesichert ist, da für dessen Verwaltung das Datenbanksystem verantwortlich ist.

Der größte Nachteil ist der geringe Anteil von Schnittstellen für den Zugriff.
Besonders unter den populären Programmiersprachen wie Java, PHP oder Python fehlen die entsprechenden Frameworks.
Beispiel von Objektdatenbanken sind db4o[^db4o], ZooDB[^zoodb] oder mcobject[^mcobject].
Das Kapitel 5 beschäftigt sich eingehend mit der Verbreitung von objektorientierten Datenbanken.


## 2.3 Dokumentdatenbanken
Dokumentdatenbanken gehören zum Typ der NoSQL (Not only SQL) Datenbanken.
Der Englische Name ist nicht wie zu vermuten *document database*, sondern treffender *document store*, da diese für die Speicherung von Dokumenten optimiert sind.
Dieser Datenbanktyp bietet den Vorteil der Schemafreiheit von Schlüssel-Wert-Soeichern mit einer möglichkeit zur Strukturierten Speicherung von Daten.
Bei den Daten handelt es sich um strukturierten Daten in Datensätzen, welche in diesem Kontext als Dokumente bezeichnet werden.

Einsatzbereich sind meist spezielle Webdienste, welche horizontal skalierbar sein müssen.
Dabei werden meist verschiedene Rechner als ein vollständiges System zusammengestellt, die Verteilung erfolgt über Sharding.
Kurzzeitige Datenbankinkonsistenzen werden in kauf genommen, da erst eine verteilung der aktualisierten Daten auf alle Knoten erfolgen muss.
Anwendung finden Dokumentdatenbanken besonders bei Social Media Plattformen oder Suchintensiven Anwendungen.

Schemafrei bedeutet das nicht wie bei relationalen oder Obejektorientierten Datenbanken das Tabellen- oder Objektschema angegeben werden muss.
Dokumente lassen sich ohne vorherige Definition eines Schemas einfügen.
Dadurch wird auf Vorteile wie referenzielle Integrität oder Normalisierung verzichtet.
Des weiteren kann eine Dokumentdatenbanken keine transaktionale Sicherheit gewährleisten, vielmehr wird nach dem Prinzip der schlussendlicher Konsistenz (eventual consistency) gearbeitet.
Der Vorteil dieses Ansatzes ist eine sehr schnelle Verarbeitung der Daten, da die replikation erst später erfolgt.

Beispiele für bekannte Dokumentdatenbanken sind CouchDB[^couchdb], RavenDB[^ravendb] oder MongoDB[^mongodb].
Die Datenbank CouchDB wird bei dem Dokumentenmangementsystem d.3ecm[^d3] von d.velop als Proxy für die relatione Datenbank eingesetzt um Suchanfragen schneller durchführen zu können.
Der eigentliche Datenbestand liegt hierbei in einer relationalen Microsoft SQL-Server Datenbank vor, die Metainformationen zu den Dokumenten werden für eine schnellere Suchmöglichkeit in der CouchDB vorgehalten.
Durch diese Verknüpfung der beiden Systeme fallen die Nachteile der fehlenden Transaktionssicherheit oder der Normalisierung weg.
Jediglich der Suchindex kann eine inkonsistenz zum vorhanden Datenbestand aufweisen.

### 2.3.1 Dokumente
Das Wort Dokumente ist passt nicht exakt zum Typ der gespeicherten Daten.
Hiermit sind Multimedia oder andersartige Unstrukturierte Dateien gemeint.
Ein Dokument besteht aus einem Strukturierten Datensatz, welche Beispielsweise in XML[^xml] oder JSON[^json] formatiert sein kann.

**Beispiel eines JSON Datensatzes**
```JSON
{
    "Nachname": "Tester",
    "Vorname": "Tom",
    "maennlich": true,
    "Hobbys": [ "Schwimmen", "Lesen" ],
    "Alter": 42,
    "Kinder":[
      {
      "Name": "usw..."
      }
    ]
  }
```

Diese interne Struktur ist frei definierbar und kann sich von Dokument zu Dokument unterscheiden.
Ebenfalls ist möglich das sich die Art von einem Dokument (JSON) zu einem anderen (XML) unterscheidet.
Grundlegend bestehen diese Daten aus Attributen und zuegehörigen Werten.
Die Werte können dabei selbst wieder komplexere Datentypen annehmen.
Wie in dem Beispiel das Attribut *Kinder*, welches eine Liste von weiteren Objekten aufnimmt.
Anders als bei relationalen und objektorientierten Datenbanken sind Referenzen auf andere Dokumente nicht möglich.
Jedes Dokument ist eine in sich geschlossene Einheit.
Neben den Daten eines Dokuments besitzt dieses eine eindeutige ID (Dokument-ID), welche über die gesamte Datenbank hinweig eindeutig ist.
Der Einsatz von XML ist nicht auf Dokumentdatenbanken begrenzt, es existiert eine eingene Klasse von XML-Datenbanken, welche nicht weiter betrachtet werden.

### 2.3.2 Abfragen der Datenbank
Anfragen an die Datenbank können über das Map/Reduce Verfahren parellel ablaufen und dadurch sehr effizient durchgeführt werden.
Im direkten Vergleich zu SQL steht Map für eine Gruppierung der Daten und Reduce für eine Aggregierung.
Zuerste wird Map ausgeführt, wobei ein Index ensteht.
Der entstehende Index ist ein assoziatives Array, welches aus einem oder mehreren Key-Value Paaren besteht.
Der Vorteil ist, das dieser Schritt unabhängig von den restlichen Daten ausgeführt wird, sodass dies auf allen Knoten parallel ausgeführt wird.
Die zweite Phase führt dann eine Reduzierung der Ergebnisse durch (Reduce) durchgeführt.
Eine Ausführliche Beschreibung ist unter https://highlyscalable.wordpress.com/2012/02/01/mapreduce-patterns/ zu finden.

# 3. Abgrenzung OODB zu Dokumentdatenbanken
Lorem ipsum

# 4. Gegenüberstellung RDBMS zu OODB
Lorem ipsum

# 5. Verbreitung von OODB
Wie bereits in Kapitel 2.2 beschrieben versuchen Objektorientiere Datenbankmanagementsysteme die Objektorientierten Prinzipien bis zur Speicherung der Daten in einer Datenbank zu realisiern.
Trotz der großen Verbreitung von Objektorientierten Programmiersprachen werden kaum Objektbasierte Datenbanken eingesetzt.
Vielmehr werden für gängige Client-Server Anwendungen weiterhin relationale Datenbanken verwendet und der Medienbruch wird durch die Objekt-Relationalen Mapper kompensiert.
Trotzdem erleben viele NoSQL-Datenbanken in den letzten Jahren einen großen Aufwind, zu denen die Objektbasierten nicht gehören.

Einige der größten Probleme von Objektdatenbanken sind:

  * Keine aktuelle Standatisierung von Modellierungs- und Abfragesprachen, da die ehemlige ODMG nicht mehr existiert und es keine weiteren Organisationen gibt, welche eine Standatisierung und Weiterentwicklung vorantreiben. Nur im Bereich der UML findet eine solche statt, da dies aber ein generische Modellansatz ist, muss noch zusätzlich eine eigene Modellierungssprache von der Datenbank angeboten werden. Die Sprachen ODL und OQL sind dafür nichts ausreichend. Daher implementieren neuere Datenbanksysteme meist eigene Sprachen, welche keiner Standatisierung unterliegen. Beispielsweise das OODBMS db4o bietet drei verschiedene Abfragesprachen. Das sind Query By Example (QBE), Simple Object Database Access (SODA) und native Abfragen. Native Abfragen basieren auf der verwendeten Programmiersprache, z. B. LINQ unter C#.
  * Starke Verbreitung von SQL. Das erlernen von SQL gehört heute zum Standard in jeder IT-Nahen Ausbildung. Im Grundstudium wird neben der allgemeinen Datenbanktheorie vorrangig SQL gelehrt, ebenfalls in den verwandten Ausbildungsberufen. Dadurch findet eine starkte Fokussierung statt, sodass ein späterer Wechsel selten vollzogen wird.
  * Ausgereifte ORM-Frameworks für beliebte Programmiersprachen. Für fast jede Programmiersprache exisieren meist mehrere ORM-Frameworks für den einfachen Zugriff auf relationale Datenbanken. Allein die Wikipedia führt 80 verschiende Frameworks für 14 verschiende Sprache auf.[^wikiorm] Viele davon stehen unter einer open source Lizenz sodass deren Einsatz meist unkompliziert möglich ist.
  * ORM integration in Webframework. Im Bereich der Webentwicklung enstehen viele Frameworks, welche bereits auf bestimmte ORM-Mapper aufsetzen und den Programmierer dazu anleiten dieses zu verwenden. Der einfache Austausch ist meist nicht vorgesehen, wodurch die Verwendung einer Objektdatenbank erschwert wird. Beispiele dafür sind das ASP.MVC Framework, welches auf das Entity Framework setzt oder das Vaadin-Framework, welches die JPA als generische Schnittstelle anbindet.
  * Für eine schnelle Suche oder ein verbessertes Auffinden von Daten haben sich andere Arten von NoSQL-Datenbanken etabliert, die diese Aufgaben effizienter durchführen. Beispielsweise die Dokumentdatenbanken, welche eine horizontale Skalierung sehr einfach ermöglichen.
  * Der Einsatz von Stored Procedures ist nur in sehr wenigen Fällen möglich. Durch die fehlenden Standatisierung können diese meist nicht ausreichend Programmiert werden, da die Kontrolle über die Abfragen bei den Entwicklern der Software liegt und nicht bei den Administratoren der Datenbank. Das kann zu Sicherheitsproblemen in kritischen Umgebungen führen.
  * Durch den Einsatz von JSON als generisches Format ist die Umwandlung in ein natives Objekt der Programmiersprache sehr einfach. Da einer der größten Vorteile von Objektdatenbanken das direkte auslesen der Objekte ist, ist es im Bereich der NoSQL-Datenbanken einfacherer diese im JSON Format abzulegen, welches eine Programmiersprachen unabhängige Speicherung ermöglicht. Des weiteren lässt sich dieses Format leicht durchsuchen.
  * Ein Mangel an der Auswahl von Objektbasierten Datenbanken führt nicht zu Einsatz dieser Technik. Die Vorhandenen Datenbanken werden weitesgehd nicht gepflegt oder nur sehr selten angepasst. Das letzte Update von db4o stammt Beispielsweise vom April 2015[^db4o] und deren direkte Webpräsenz(https://sourceforge.net/projects/db4o/) ist zum aktuellen Zeitpunkt nicht erreichbar.
  * Auf der Codeplattform Github finden sich keine größeren Projekte zu Objekbasierten Datenbanken, was zu deren geringerer Verbreitung beiträgt.


# 6. Fazit
Lorem ipsum

# 7. Literaturverzeichnis
