# 3. Dokumentorientiertes Datenbankmodell

## 3.1 Einleitung

Datenbanken in einem relationalen Datenbankmodell bestehen im wesentlichen aus 4 Elementen. 
1. Aus Tabellen, die die eigentlichen abzuspeichernden Informationen zusammenfassen 
2. Aus Beziehungen, die die verschiedenen Tabellen miteinander verbinden
3. Aus Datensätzen, die die Zeilen einer Tabelle repräsentieren. Jeder Datensatz setzt sich aus einem oder mehreren Attributen zusammen
4. Aus Attributen, die die Spalten einer Tabelle repräsentieren und konkrete Werte und Zustände als Attributwerte abspeichern

Klassische relationale Datenbankmodelle folgen üblicherweise einem fest vorgegebenen Schema, dass beschreibt, wie die Daten gepeichert werden und in welcher Beziehung sie zueinander stehen.

NoSQL-Datenbanken liefern einen völlig neuen Ansatz zur Speicherung von Daten und besitzen üblicherweise kein festes Schema, sind nicht relational und legen weniger Wert auf Konsistenz, als relationale Datenbanken. Die Abkürzung NoSQL ist nicht präzise spezifiziert, wird aber häufig als "Not only SQL" oder auch "non SQL" bezeichnet, was einerseits suggeriert, dass auch in NoSQL-Datenbanken SQL ähnliche Abfragesprachen anzutreffen sind, andererseits soll so die Abgrenzung zu relationalen Modellen verdeutlicht werden.
Gegenüber relationalen Datenbanken liegen die großen Stärken von NoSQL in der hohen Geschwindigkeit bei der Indexierung von großen Datenmengen, der großen Anzahl von Lese- und Schreiboperationen, die einfachere Skalierbarkeit (besonders horizontal) sowie der besseren Verfügbarkeit, was sie u.a. gerade für den Big Data Bereich oder der Echtzeitanalyse sehr interessant macht. Der daraus resultierende Geschwindigkeitzuwachs geht allerdings nicht selten zu Lasten der Konsistenz, weshalb für ein anstehendes Projekt im Vorfeld genau geplant und abgewogen werden sollte, welcher Art von Aufgaben die Datenbank zu erledigen hat und welche Merkmale sie aufweisen muss, gerade im Hinblick auf das CAP Theorem (vgl. Gilbert, Lynch S.3), welches immer nur eine garantierte Ausrichtung in zwei von drei Merkmalen wie Konsistenz, Verfügbarkeit und Partitionstoleranz erlaubt. 

Im Kontrast zum relationalen Datenbankmodell kennt das dokumentorientierte Dantenbankmodell kein Konzept eines festen Schemas. Genauso wenig findet man Tabellen, Beziehungen, Zeilen oder Spalten im klassichen Sinn. Oberflächlich betrachtet mag das zunächst wie ein Verlust an Organisation und Intergrität erscheinen. Dokumentorientierte Datenbanken im engl. auch document stores genannt, bieten jedoch vereinzelt ebenfalls ACID Eigenschaften, die den Einsatz einer entsprechenden Datenbank im professionellen Einsatz rechtfertigen. Um die Art und Weise wie Daten in einem dokumentorienten Datenbankmodell gespeichert und organisiert werden besser zu verstehen, werden die folgenden Punkte genauer auf dieses Model eingehen. 

## 3.2 Konzept
Wie zu Beginn kurz dargestellt, werden für die Speicherung von Daten innerhalb einer dokumentorientierten Datenbank keine Tabellen und Relation zur Speicherung der Daten verwendet. Stattdessen werden Daten, die eine gemeinsame Bedeutung haben in Dokumenten zusammengefasst. Diese Objekte bestehen im Allgemeinen aus einem oder auch mehreren Schlüssel-Wert Paaren und erlauben es dem Nutzer die Daten nicht normalisiert und nicht fest strukturiert abzulegen. Beides Eigenschaften, die in relationalen Modellen weder gewünscht noch ohne weiteres möglich sind. Dokumentorientierte Datenbanken stellen eine Unterklasse der key-value stores da, die zur Speicherung der Dokumente auf einfache Datenformate wie JSON oder XML zurückgreifen. Beides sind Datenformate, die nicht nur einfach durch den Menschen zu lesen und zu bearbeiten sind, sondern auch das Abspeichern von Informationen in hierarchischen Ebenen erlauben. Somit lassen sich auch Dokumente innerhalb von Dokumenten abspeichern und ineinander verschachtelt, was JOINS und Foreign-Keys ersetzt.
Doch was macht document stores so performant? Alain Issa und François Schiltz führen in ihrem paper "Document oriented Databases" (vgl. Issa, Schiltz, 2015, S. 5) an, das der Grund für die hohe Geschwindigkeit zum einen darin begründet ist, dass die zu speichernden Dokumente eher einfach aufgebaut sind und direkt abgespeichert werden können. Lesende Zugriffe sind ebenfalls sehr performant, da weder die Abfrage anaylsiert, noch die Suche auf beteiligte Tabellen ausgedehnt werden muss.



Das folgende Beispiel beschreibt ein Dokument mit den Daten eines Musikers und mehrerer seiner Alben.

```
{
 '_id': 1,
 'nachname': 'Max',
 'vorname': 'Mustermann',
 'alben' : 
 'album1','album2','album3']
}
```

Das Beispiel zeigt einen einfachen Aufbau mit drei Schlüssel-Wert Paaren. Dank der JSON Notation lassen sich die Alben als array zusammenfassen. Der Schlüssel '_id' liefert eine eindeutige Identifikationsnummer, mit deren Hilfe das Dokument identfiziert und gefunden werden kann. Document stores verfügen in der Regel auch über eine eigene Abfragesprache, mit deren Hilfe die Daten zusätzlich nach content oder meta-Informationen durchsucht werden können. 

Denkbar wäre es einen zusätzlichen Wert als verschachteltes Dokument aufzunehmen, der optionale Informationen über das aktuelle Musiklabel enthält.

```
{
 '_id': 1,
 'nachname': 'Max',
 'vorname': 'Mustermann',
 'alben' : ['album1','album2','album3'],
 'musiklabel': {
 	'name': 'Super-Duper-Awesome records'
 	'ort': Berlin
 }
}
```

Dadurch, dass das Schema nicht festgeschrieben ist, lässt sich das Dokument fast beliebig erweitern, ganz ohne jegliche Schema Anpassungen. Da nicht jeder Musiker ein Plattenlabel haben muss, ist dieser Wert optional und kann angefügt oder wegelassen werden. Durch das Weglassen dieses Feldes entstehen keine Leerfelder, da die Speicherung der Daten in Reihe erfolgt. Wieviele und welche Felder das Dokument letzendlich enthalten soll, kann zur Laufzeit entschieden werden, sodass strukturelle Entscheidungen am Dokument einfach vorgenommen werden können.

## 3.3 MongoDB

MongoDB wurde 2007 vom Unternehmen 10gen entwickelt und später im Jahr 2009 als open source Modell zur Verfügung gestellt. Die Datenbank wurde mit großem Bezug auf heutige Anwendungsfelder und Problemstellungen konzipiert, welche von relationalen Modellen nur mit großem Aufwand bedient werden können, wie u.a. der Fokus auf die horizontale Skalierbarkeit des Systems. Das dokumentorientierte Datenmodell ermöglicht die, im Vergleich zu relationalen Datenbanken, einfache Aufteilung der Datenbank auf mehrere Server. 
MongoDB ist nicht vollständig ACID kompatibel, da atomare Operationen nur auf Dokumentenebene zur Verfügung stehen. Zum Zeitpunkt der Erstellung dieser Hausarbeit unterstützt MongoDB keine Multi-Dokument Transaktionen. Dokumente werden intern im BSON Format abgespeichert. Die Abkürzung BSON steht für binary JSON und nutzt, wie der Name vermuten lässt, JSON als Teilmenge und erweitert es um weitere Datentypen wie z.B. date oder byte array. Die Vorteile dieses Datenformates sind die hohe Geschwindigkeit beim durchsuchen der Datenbank und Geschwindikeitsvorteile beim kodieren und dekodieren zu und von BSON, da C Datentypen verwendet werden.
MongoDB bietet support für die geläufigsten Programmiersprachen (z.B. Java, Ruby, Python, .NET, PHP, Javascript und viele weitere) und frameworks (Hibernate, Spring, AngularJS, django usw.).

### 3.3.1 Indextypen

Für die Indizierung verwendet MongoDB folgende Typen von Indizes, die dabei helfen die Effizienz von Leseoperationen weiter zu verbessern:

**Single Field**: 
Ist ein Index der für Einzelfelder zum Suchen und Sortieren genutzt wird. Traversiert werden kann in beide Richtungen. Single Field Indizes sind manuell durch den Anwender erstellbar.

**Compound**:
Ein Index der sich über mehrere Felder erstreckt. Die Rangfolge der Felder ist wichtig, da sie für die Sortierung benutzt wird, nach der zuerst sortiert werden soll. Er ist manuell erstellbar.

**Multikey**:
Zur Indizierung von Arrays innerhalb eines Dokuments. Dieser wird automatisch vom DBMS erstellt, wenn nötig und kann nicht manuell erzeugt werden.

**Geospatial**:
Ein Index zur Indizierung von Geokoordinaten.

**Text**:
Text Index, der die Suche nach Zeichenketten erlaubt.

**Hash**:
Wird verwendet für hash based sharding. Indiziert den hash des Wertes eines Feldes.

MongoDB stellt also mehrere Typen von Indizes zur Verfügung. Zu beachten ist jedoch, dass pro Abfrage jeweils nur ein Index genutzt werden kann. Allerdings ist es nicht dem Nutzer überlassen, welcher der gesetzten Indizes tatsächlich genutzt wird, da das DBMS bei einer Abfrage automatisch versucht den optimalen Index zu wählen. 

In MongoDB existiert ein besonderes Feld, welches jedes Dokument in der Datenbank eindeutig identifiziert und als Index implementiert ist. Selbst wenn der Nutzer es nicht explizit in das Schema seines Dokumentes einfügt, sorgt MongoDB dafür, dass es automatisch hinzugefügt wird. Aus diesem Grund ist es nicht möglich, das Feld aus dem Schema des Dokuments zu entfernen. Es kann lediglich aus der Ergebnismenge einer Abfrage herausgehalten werden. Dieses Feld beginnt mit einem Unterstrich gefolgt von den Buchstaben id ("_id") und beinhaltet als Wert eine ObjectID.
Die ObjectID ist ein 12 Byte großer Wert welcher sich aus einem Unix Zeitstempel (4 Byte), einer machine ID (3 Byte), einer process ID (2 Byte) und einem Zähler (3 Byte) zusammensetzt. Da die ObjectId als Index in jedem Dokument einer Collection vorkommt und der Zeitstempel als erstes aufgeführt ist, lassen sich die Dokumente dadurch in aufsteigender oder absteigender Reihenfolge sortieren.

Für die Speicherung der Indexdaten verwendet MongoDB intern, so wie viele andere document stores auch, einen B-Tree, der Zugriffe in logarithmischer Zugriffszeit O(logn) möglich macht und damit eine hohe Ausführungsgeschwindikeit bietet. 

### 3.3.2 Indexeigenschaften

**Unique Indexes**
Wie auch in relationellen Datenbanken sorgt diese Eigenschaft dafür, dass keine mehrfachen Werte für ein Feld mit einem Index gespeichert werden können.

**Partial Indexes**
Erlauben es den Index nur auf bestimmte Bereiche mittels eines Filters anzuwenden, was Speicherplatz spart und die Geschwindigkeit erhöht.

**Sparse Indexes**
Sparse Indexes funktionieren wie normale Indizes, außer dass sie Referenzen zu Dokumenten nicht berücksichtigen, die nicht das indizierte Feld beeinhalten. Die Suche über diesen Index, die nur in einigen Dokumenten gesetzt ist, kann so bei einer großen Menge an Daten einen hohen Geschwindigkeitsvorteil bringen.

**TTL Indexes**
Können genutzt werden um Dokumente automatisch nach Ablauf eines bestimmten Zeitraums zu löschen. Praktische Anwendungsfälle sind z. B. Log-Dateien.

### 3.3.3 Weitere Features
Neben den verschiedenen Indextypen und ihren Eigenschaften bietet die Datenbank weitere sinvolle Funktionen wie 

**MapReduce**
mapReduce erlaubt es große Datenmengen mit eigenen Funktionen parallel und mit großer Effiziens zu verarbeiten.

**Stored Javascript**
Auf dem DB server lassen sich eigene Funktionen in der system.js collection hinterlegen, die dann im map-reduce Verfahren (oder anderen Aggregationen), in where Bedingungen bei Abfragen und in eval calls benutzt werden können.

**Capped collections**
Gegenüber den standard collections existiert für capped collections eine Obergrenze an zu speichernden Dokumenten. Sobald die Obergrenze erreicht ist, wird das jeweils älteste Dokument automatisch gelöscht und der Speicherplatz für das neue Dokument freigegeben. Lösch- und update Operationen sind nicht erlaubt, sodass Dokumente immer nach Einfügezeitpunkt sortiert sind, was capped collections besonders für Log Dateien interessant macht.

**File storage**
MongoDB bietet eine einfache und sichere Möglichkeit binär Dateien zu verwalten ohne auf eine weiteres Tool zurückgreifen zu müssen. Dafür setzt MongoDB auf die GridFS Spezifikation, mit der große Dokumente wie Audio oder Video Dateien und auch BSON Dokumente (deren oberes Limit bei 16MB liegen) abgespeichert werden können. 

**Replikation**
In MongoDB liegt der Fokus auf Consistency und Partition tolerance. 
Mit Hilfe der Replikationsfunktionen lassen sich Daten zwischen einzelnen Server replizieren, sodass sie redundant vorliegen und benutzt werden können, um Ausfälle einzelner Server oder services abfangen zu können. Außerdem ist es je nach Konfiguration möglich die Leseperformance weiter zu erhöhen oder auch um Backups im laufenden Betrieb anzufertigen. Innerhalb der DB lassen sich Replica sets definieren, welche aus Datenbankenknoten bestehen, die alle identische Daten speichern. Das System bestimmt automatisch welcher der Knoten als Master (einer) und welche als Slave agiert. Je nachdem, wie die Replikation konfiguriert ist, wird ausschließlich der Master für alle Lese- und Schreiboperation genutzt. Die Leseperformance lässt sich steigern, indem auch von den Slave Knoten gelesen werden darf. Fällt der Master Knoten aus, bestimmt das System automatisch einen neuen Master Knoten, aus der Menge der vorhandenen Slave Knoten. 

**Auto sharding**
Sharding erlaubt es die Datenbank horizontal zu skalieren und somit auf mehrere Server zu verteilen, was sinnvoll sein kann, wenn eine vertikale Skalierung zu teuer wird oder das Hardware Limit erreicht ist. Manuelles sharding kann mit einer Vielzahl von Datenbanken erreicht werden, was allerdings administrativ sehr aufwendig sein kann. MongoDB unterstützt auto sharding, welches die Daten automatisch auf die einzelnen Server verteilt und dem Administrator so viel von der zusätzlichen Arbeit abnehmen kann. Erreicht wird das durch eine Aufteilung der collections in kleinere Teilmengen, sogenannten chunks. Diese chunks werden auf Maschinen mit replizierten Daten, sogenannten shards verteilt. Damit eine Anwendung nicht wissen muss, wo sich die abzufragenden Daten befinden, existieren Router, auch Mongos genannt. Mongos nehmen Anfragen entgegen, leiten sie an die richtigen shards weiter und liefern anschließend die Ergebnisse an die anfragende Anwendung zurück.

## 3.4 CouchDB
CouchDB (Kurzform für cluster of unreliable commodity hardware) wurde das erste Mal im Jahr 2005 released und im Jahr 2008 als Open Source Projekt an die Apache Software Foundation übergeben. Wie auch bei MongoDB lassen sich die Daten mit CouchDB sehr gut horizontal skalieren. Bei CouchDB liegt der Focus dabei aber auf Verfügbarkeit anstatt auf Konsistenz. Konzipiert wurde die Datenbank in Erlang, einer Programmiersprache, die sehr stark auf Nebenläufigkeit ausgelegt ist. Zur Speicherung der Daten wird das JSON Format verwendet. Auch in CouchDB funktioniert ACID auf Dokumentenebene, die wie in MongoDB kein festes Schema aufweisen muss. Ein extra Layer, der wie in MongoDB Dokumente in Collections sammeln kann, exisiert in CouchDB nicht. Dokumente werden stattdessen direkt in der Datenbank abgelegt und über ihren Typen eingeordnet.
Die Datenbank erlaubt es die Daten auch auf Maschinen zu replizieren, die nur unregelmäßig Verbindung mit dem Netzwerk haben. Die Synchronisation erfolgt automatisch, sobald das entsprechende Gerät online ist.


### 3.4.1 HTTP Rest Schnittstelle

Für die Ausführung von Anfragen wird in CouchDB eine HTTP Schnittstelle zur Verfügung gestellt, die es erlaubt mittels folgender HTTP Methoden Datenbankinteraktionen auszulösen.

**Get**
Mit der GET Methode lassen sich einzelne Dokumente, statische items, Statistiken und Konfigurationen anfragen.

**Post**
Post wird benutzt um Dokumente hochzuladen, Dokumentwerte zu setzen und für administrative Kommandos.

**Head**
Head lässt nur den Header einer Get Abfrage zurückgeben, ohne die restlichen Daten. 

**Delete**
Löscht die angegebene Ressource.


HTTP Request Header können eingesetzt werden, um sicherzustellen, dass dem Client die Daten im richtigen Format und in der richtigen Kodierung übergeben werden.

**Accept**
Der Accept Header spezifiziert Formate, die vom Client akzeptiert und verarbeitet werden können. 

**Content-Type**
Spezifiziert das Format der Daten, die bei einem Request mitgegeben werden. Meist sind dies JSON Daten. Es können aber auch Binärdaten für einen Datei upload sein.
Außerdem existieren eine Reihe von Response Headern, die Informationen über die vom DB Server zurückgegebene Antwort liefern.

**Content-Length**
Länge in byte des zurückgegeben Inhalts.

**Content-Type**
Format der zurückgegeben Daten.

**Etag**
Zeigt die Rivisionsnummer des übergebenen Dokuments.

**Transfer-Encoding**
Gibt die Kodierung des übergebenen Dokuments zurück.

### 3.4.2 Views
Die eigentlichen Abfragen werden als views bezeichnet, die über Javascript MapReduce Funktionen zusammengesetzt werden. Dabei wird zwischen zwei Arten von views Unterschieden.

**Permanent views**
Diese werden permanent in einem speziellen Dokument der Datenbank gespeichert. Dieses Dokument wird das design Dokument genannt und kann per HTTP Get abgefragt werden.

**Temporary views**
Diese werden nur dynamisch ausgeführt und nicht gespeichert. Mit Hilfe eines HTTP Post Request und der Funktion als Body kann die Abfrage durchgeführt werden. Zu beachten ist, dass temporary views nur für den Einsatz während der Entwicklung gedacht sind, da sie deutlich mehr Performance kosten, als permanent views.

Eine einfache View, die alle Dokumente vom Typ "jazz player" liefert, könnte beispielsweise so aussehen:

```
function(doc) {
  if (doc.Type == "jazz player") {
    emit(doc.LastName, {FirstName: doc.FirstName, LastName: doc.LastName });
  }
}
```

Mit einem einfachen Get Request kann die Anfrage ausgeführt werden:

```
$ curl http://127.0.0.1:8888/db/_design/jazzPlayers/_view/byLastName
```

Die Ergebnismenge könnte wie folgt aussehen:

```
{
   "total_rows":3,
   "offset":0,
   "rows":
   [
     {
       "id":"4G3458395DFDF34534534SSFF345345",
       "key":"Armstrong",
       "value":{"FirstName":"Louis", "LastName":"Armstrong"}
     },
     {
       "id":"7A32434FT345G43545DG324324234234",
       "key":"Davis",
       "value":{"FirstName":"Miles", "LastName":"Davis"}
     },
     {
       "id":"4Z43546GH324235GS456562463247835",
       "key":"Hancock",
       "value":{"FirstName":"Herbie", "LastName":"Hancock"}
     }
   ]
}
```
Das Ergebnis enthält drei Dokumente, die als Key den Nachnamen (erstes Argument der emit() Funktion) und als value den Vor- und Nachnamen aller Jazz Spieler enthalten.

### 3.4.3 Eventual Consistency
Wie in der Einleitung kurz erwähnt, verfolgt CouchDB eine etwas andere Strategie in Bezug auf die horizontale Skalierung. Anders als bei MongoDB liegt der Fokus nicht auf Konsistenz, sondern mehr auf Verfügbarkeit. Oberste Priorität in CouchDB ist nicht, dass jeder Nutzer die gleiche Sicht auf die Daten hat. Somit muss bei einer Abfrage nicht darauf gewartet werden, dass sich alle Knoten der DB über die Konsistenz der Daten einig sind und die Daten können direkt gelesen oder geschrieben werden. Die Datenbank kümmert sich anschließend um den Abgleich der erfolgten Operationen auf alle Knoten im System. Der Nachteil der eventuell veralteten Sicht auf die Daten wird hier durch den hohen Geschwindigkeitsgewinn ausgeglichen. Je nach Anwendungsfall kann das einen durchaus gewollten trade off darstellen, in Situationen, in denen beispielsweise eine hohe cache performance benötigt wird.

Die Umfang der Api, die zum Zugriff auf die Datenbank zur Verfügung gestellt wird, ist von deutlich geringerem Umfang, als in MongoDB.
CouchDB verwendet MapReduce um die Ergebnisse einer View zu verarbeiten. Die Daten selbst werden in einem B-Tree abgelegt. Alle Dokumente und views können ausschließlich über den index key abgefragt werden. Das ermöglicht nicht nur eine hohe Performance, sondern erlaubt es auch die Daten über mehrere Knoten zu verteilen.
Abfragen die Daten modifizieren, lösen keinen lock auf das entsprechende Dokument aus. Somit muss sich die Datenbank nicht um die Verwaltung der Nutzer und das Sperren der Dokumente kümmern. Trotzdem muss der gleichzeitige Zugriff auf die Daten sicher und verlässlich ermöglicht werden. CouchDB macht sich dafür Multi-Version Concurrency Control (MVCC) zu Nutze. MVCC erlaubt der DB die parallele Nutzung mit der höchstmöglichen Geschwindigkeit, indem die Dokumente nicht in einen locked Status versetzt werden. Stattdessen benutzt MVCC eine Art Versionierung, die es ermöglicht Daten solange von einem alten Versionsstand zu lesen, bis eine neue Version hinzugekommen ist. Wird ein Dokument modifiziert, legt die DB eine neue Version für dieses Dokument an, die zum Lesen freigegeben wird, sobald sie fertig geschrieben wurde. Bis dahin wird für alle Clients die vorherige Version zurückgeliefert. 

### 3.4.4 Replikation
CouchDB nutzt eine inkrementelle Replikation der vorhanden Daten. Ob die zu replizierenden Server online sind oder nicht spielt hier eine untergeordnete Rolle, da jeder Knoten eigenständig arbeiten kann und die Synchronisation automatisch erfolgt, sobald dies zwischen bestehenden Knoten notwendig ist, auch wenn neue Knoten hinzugefügt werden. Ein bestehender Cluster könnte also einfach um einen weiteren Knoten, wie einem Laptop, erweitert werden der dann auch unterwegs offline mit seiner eigenen Version arbeitsfähig wäre. Sobald der Laptop sich wieder im Netzwerk befindet, findet die Synchronisation mit den restlichen Knoten statt. Eine Synchronisation kann dabei in beide Richtungen erfolgen.
Dieses Verhalten birgt auch Risiken. Was passiert, wenn das gleiche Dokument auf zwei verschiedenen Knoten modifiziert wird? Welche Version ist die Korrekte? Wie andere Versionskontrollsysteme (z.B. Git) versucht CouchDB Konflikte automatisch zu erkennen und zu lösen. Beide Versionen werden dazu speziell mit einem Flag gekennzeichnet. 
Eine der beiden Versionen wird von der DB als aktuelle Version bestimmt und in beiden Knoten gespeichert. Die andere Version wird jedoch nicht verworfen, sondern in der History der Versionskontrolle an vorletzter Stelle abgespeichert, sodass auch weiterhin auf sie zugegriffen werden kann. Dadurch bleibt die Konsistenz stets gewahrt. Tatsächlich liegt es an der zugreifenden Applikation zu bestimmen, welche der Versionen die Korrekte ist. Ein Änderung der History ist daher möglich.

## 3.5 Vor- und Nachteile
Einer der großen Stärken dokumentorientierter Datenbanken liegt, wie in den vorherigen Kapiteln genauer beleuchtet, in ihrer hohen Geschwindigkeit bei Lese- und Schreibzugriffen. Zusammen mit dem Grundgedanken eines losen Schemas kann eine dokumentorienterte Datenbank recht schnell und einfach aufgesetzt und in Betrieb genommen werden, ohne sich verstärkt im Vorfeld um Struktur und Skalierbarkeit kümmern zu müssen. Dies ermöglicht eine hohen Grad an Flexibilität auch in Situtationen, die großere Veränderungen mit sich bringen, wie Änderungen an der Geschäftslogik der angebundenen Applikation. Da jedes gespeicherte Dokument ein eigenes Schema besitzen kann, ist eine Anpassung der Datenbank an den Quellcode eines Programms häufig nicht erforderlich. Die dokumentorientierte Datenbank kann somit mit einer Vielzahl von Applikationen genutzt werden, ohne direkte Anpassungen für diese vornehmen zu müssen. (vgl. Issa, Schiltz, 2015, S. 5). Dieses sind Merkmale, die dokumentorientierte Datenbank gerade im Bereich Big Data so interessant machen.
Ein weiterer großer Vorteil ist die, im Gegensatz zu anderen Modellen, einfache Skalierbarkeit der dokumentorientierten Datenbanken. Traditionelle relationale Datenbanken werden häufig nur vertikal skaliert, da dies aus technischer Sicht, bis zu einem gewissen Punkt, die einfachste Möglichkeit darstellt sich den erforderlichen Geschwindigkeitsbedürfnissen anzupassen. Eine horizontale Skalierung ist bei relationellen Modellen häufig alles andere als trivial, da bereits im Vorfeld möglichst viel über die abzuspeichernden Daten und somit dem Datenbankschema bekannt sein muss. Die hier vorgestellten Datenbanken MongoDB und CouchDB wurden mit dem Aspekt der möglichst einfachen horizontalen Skalierung entwickelt und ermöglichen es auch nachträglich eine einfache und performante Skalierung mit vielen Knoten vorzunehmen. Ein großer Teil des Administrationsaufwands kann dabei sogar bei einigen Datenbanksystemen automatisiert auf das DBMS abgeschoben werden.

Dokumentorientierte Datenbanken erfreuen sich heute mit einer Vielzahl von unterschiedlichen Datenbanken großer Beliebtheit, da sie es dem Nutzer erlauben eine Datenbank zu wählen, die seinen Anforderungen und Preferenzen am ehesten entspricht. Die Heterogenität und die damit verbunden Möglichkeiten haben allerdings auch ihren Preis. So exisitert bis heute keine Standardisierung, die eine einheitliche Anbindung von Datenbank und Applikation erlaubt.
Und auch für den Großteil der dokumentorientierten Datenbanken existieren bestenfalls nur eher rudimentäre Abfragesprachen. Relationen zwischen Dokumenten lassen sich aufgrund des schemalosen Konzepts nicht wie gewohnt mit joins abfragen. Stattdessen müssen Relationen durch die Applikation aufgelöst werden, was die Abfrage aller beteiligter Dokumente und das anschließende Zusammenführen der Daten erfordert. Dies kann sehr umständlich sein, und wird von den Datenbanksystemen nur lückenhaft durch Funktionalitäten wie MongoDBs lookup Aggregation, mit der left joins nachgebildet werden können, abgedeckt. Auch Transaktionen im herkömmlichen Sinn sind so nicht selbstverständlich, da Schreiboperationen nur auf Dokumentenebene atomar ausgeführt werden. Auch hier bietet MongoDB zusätzliche Möglichkeiten und bietet mit "two-phase commits" zumindest eine transaktionsähnliche Funktionalität, die ein rollback der beteiligten Dokumente erlaubt.

Dokumentorientierte Datenbanken haben bei Anwendungen, die klassischerweise mit relationalen Modellen abgebildet werden können, einen eher schlechten Stand, auch aufgrund der eben erwähnten Nachteile. Diese kommen besonders zum tragen, wenn die Modellierung der Daten und ihrer Relationen eher wie in einem relationalen Modell umgesetzt wurde.
Berücksichtigt man für welche Aufgaben dokumentorientierte Datenbanken konzipiert wurden, wie etwa Big Data und Echtzeitanalysesysteme, dann können diese Datenbanken ihre Stärken jedoch voll ausspielen.


