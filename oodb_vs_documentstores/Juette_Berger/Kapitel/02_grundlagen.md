# 2. Grundlagen
Dieses Kapitel behandelt die Grundlegenden Konzepte verschiedener Datenbanksystem.
Zuerst werden Relationale Datenbankmanagementsysteme betrachtet, da diese aktuell am verbreitesten sind und die anderen Datenbanksysteme damit verglichen werden.
In Kapitel 2.2 werden die Objektorientierten Datenbanken vorgestellt und in 2.3 die Dokumentdatenbanken.

## 2.1 Relationale Datenbankmanagementsysteme

Das Unterkapitel 2.1 soll grundlegende Informationen zur Organisation und Speicherung von Daten nach dem relationalen Ansatz darlegen. Dazu werden das Entity Relationship- und das Relationale Modell betrachtet. Es werden somit ausschließlich diejenigen Aspekte thematisiert, die eine Einflussnahme auf die Modellierung der Datenrepräsentation haben. Konkret bezieht sich dieses Kapitel  auf die konzeptionelle und logische Ebene der Datenabbildung durch das RDBMS.    

Die Modellierung der Daten für eine relationale Abbildung erfolgt in drei Schritten. Diese bestehen aus der Datenanalyse, dem Entwurf des Entity Relationship-Modell und den Transfer in das relationale Modell. Das physische Modell dient der Beschreibung der Transition des konzeptionellen Datenmodells auf die Datenbankebene. Schlussendlich liegt das relationale Datenmodell in die DB-spezifische Ausprägung vor. @@ QUELLE Die Abbildung 1 stellt den Ablauf der Modellierungsschritte dar und ordnet den jeweiligen allgemeingültigen Ebenenbegriff des Datenbankmodells zu.

![Abbildung 1: Schematische Darstellung des relationalen Modellierungsprozesses][kap2_abb1_prozess]

### 2.1.1	Das Entity Relationship Modell

Das Entity Relationship Modell (ER) ist die initiale Abbildung der zu modellierenden Daten und deren Abhängigkeiten oder Zugehörigkeiten untereinander. Im Kontext des ER-Modells werden die Termini  
-	Entität
-	Entitätsmenge

eingeführt. „Unter Entität (engl. entity) versteht man ein bestimmtes, d.h. von anderen wohlunterscheidbares Objekt der realen Welt oder unserer Vorstellung. Dabei kann es sich um ein Individuum, um einen Gegenstand, um einen abstrakten Begriff oder um ein Ereignis handeln (@meier2016nosql S. 20)". Dementgegen definiert sich der Begriff Entitätsmenge wie folgt: „Entitäten des gleichen Typs werden zu Entitätsmengen zusammengefasst und durch Merkmale weiter charakterisiert (@meier2016nosql S. 20)“.

Um eine Entität in der Entitätsmenge identifizieren zu können, ist ein Merkmal oder Merkmalskombination zu bestimmen, welches als Identifikationsschlüssel fungiert. Der dazu bestimmte Schlüssel muss das Kriterium der Eindeutig erfüllen. Sobald ein Identitätsschlüssel für eine Entitätsmenge zwei Entitäten zugeordnet werden kann, besteht keine Eindeutigkeit.

Das Entity Relationship-Modell sieht für Entitäten ferner auch das Konzept der Generalisierung und Aggregation vor, indem Daten vom Detail ausgehend abstrahiert werden oder durch Submengenbildung als Spezialisierungen gelten können. Für die Generalisierung existieren mehrere Formen auf:

-	Überlappende Subentitätsmengen
-	Überlappend-vollständige Subentitätsmengen
-	Disjunkte Subentitätsmengen
-	Disjunkt-vollständige Subentitätsmengen

. Diese Formen der Mengendarstellung müssen von der Transformation zum Relationalen Modell berücksichtigt werden. (vgl. @meier2016nosql S. 33)

Zwischen den Entitätsmengen können unterschiedliche Beziehungen (engl. relationships) existieren. Die Beziehungen bilden eine Beziehungsmenge, die wiederum durch  Merkmale näher charakterisiert werden können. Beziehungen werden durch Assoziationen näher beschrieben, die wiederum durch Assoziationstypen spezifiziert werden. Die nachstehenden Assoziationstypen sind im ER-Modell definiert:

-	einfache Assoziation (genau ein Tupel)
-	konditionelle Assoziationen (kein oder genau ein Tupel)
-	multiple Assoziationen (mindestens ein Tupel)
-	multiple-konditionelle Assoziationen (beliebig viele Tupel)

. Die o.g. Assoziationstypen ermöglichen unterschiedliche Arten von Beziehungen. Grundsätzlich existiert zu jeder Assoziation eine Gegenassoziation. Man spricht von einer Beziehung, wenn zwei Assoziationen miteinander kombiniert werden. Es können hierarchische, konditionelle oder netzwerkförmige Beziehungen definiert werden. Über Entitätsblockdiagramme werden die Beziehungen visualisiert. Die Abbildung 2 und Abbildung 3 sind Beispiele für die Blockdiagramme. (vgl. @steiner2006rdbs S. 19)

![Abbildung 2: Blockdiagramm Assoziationstypen zwischen zwei Relationen (vgl. @steiner2006rdbs S. 19)][kap2_abb2_blockdiagramm]

![Abbildung 3: Blockdiagramm Beziehung zwischen zwei Relationen][kap2_abb3_blockdiagramm]

Das ER-Modell beschreibt die Beziehung der Entitäten untereinander auf einer konzeptionellen Ebene. Die konkrete Umsetzung in einem RDBMS ist dadurch noch nicht erfolgt, da im konzeptionellen ER-Modell z.B. noch keine einzelnen Attribute berücksichtigt werden. Dazu muss das konzeptionelle Modell letztendlich in ein physikalisches Modell umgewandelt werden. Der Zwischenschritt erfolgt über das logische Modell, der relationalen Umsetzung des logischen Datenmodells, in diesem Fall vom Entity Relationship-Modell ausgehend.

Je nach Beziehungstyp der Entitäten muss die logische Entsprechung als Relationen in der Form von Tabellen im physischen Datenmodell realisiert werden. Beispielsweise müssen m-m-Beziehungen über eine Zwischen-tabelle abgebildet werden, da sonst eine redundanzfreie Speicherung von Daten in der Detailtabelle nicht umsetzbar wäre. Das physische Datenmodell setzt die Relationen gemäß der Syntax des DBMS um. (vgl. @steiner2006rdbs S. 15)

### 2.1.2	Das Relationale Datenmodell

Relationale Datenbankmanagementsysteme wurden im Jahr 1970 von Edgar Frank Codd entwickelt (vgl. @meier2016nosql S. 133). Dieses Konzept zur Verwaltung und Speicherung von Daten ist bis heute weit verbreitet. Relationale Datenbanken wurden vom ursprünglichen Konzept aus erweitert, indem beispielsweise neue Formen der Datenorganisation im XML-Format oder andere Betriebsaspekte wie einer Cloud-Infrastruktur für eine Datenspeicherung integriert werden. Der Fokus der anschließenden Betrachtung soll sich lediglich auf das grundlegende relationale Modell beschränken, um zu verdeutlichen, wie Informationen in einem RDBMS gespeichert werden.

Das relationale Modell setzt sich aus Objekten, Operationen und Regeln zusammen. Zu den Objekten zählen beispielweise Domains (Wertebereiche), Relationen (Tabellen), Attribute (Spalten), Tupel (Datensätze), Primary-Keys (Primärschlüssel) oder Foreign-Keys (Fremdschlüssel). Zentrale Regeln im Kontext des relationalen Modells sind die Entitätenintegrität und die referenzielle Integrität. Zu den Operationen gehören beispielsweise Restrictionens, Projections, Unions oder Joins. (vgl. @unterstein2012rdbms S. 30)

Wie der Name des Modells bereits vermuten lässt, sieht als Kernprinzip eine Speicherung von Informationen in Relationen (Tabellen) vor. Dieses Modell beruht auf mathematischen Grundprinzipien der Mengenlehre. So kann eine Relation als eine Teilmenge beschreiben werden. Eine Relation besteht aus Indizes die als Attribute bezeichnet werden. Diese besitzen wiederum Namen, um das mentale Modell des Menschen zu unterstützen. Diese Mengen können aus unterschiedlichen Elementen bestehen. Beispielhaft seien an dieser Stelle Zahlen, Zeichenketten oder Datumsangaben genannt. Hierbei wird der Begriff der Domäne verwendet.  Eine Domäne ist der Wertebereich, aus dem Attribute ihre Werte beziehen können. Um die Daten in eine repräsentative und verständliche  Form zu bringen, werden Relationen in einer tabellarischen Form dargestellt. (vgl. @unterstein2012rdbms S. 30)

<table>
<tr>
  <th>TITEL</th>
  <th>AUTOR</th>
  <th>GENRE</th>
  <th>ISBN</th>
  <th>VERÖFFENTLICHUNG</th>
</tr>
<tr>
  <td>Frequenz</td>
  <td>Lincoln Child</td>
  <td>Belletristik</td>
  <td>978-3805250955</td>
  <td>22.07.2016</td>
</tr>
<tr>
  <td>Der Schwarm</td>
  <td>Frank Schätzing</td>
  <td>Belletristik</td>
  <td>978-3596164530</td>
  <td>01.11.2005</td>
</tr>
<tr>
  <td>Die Zwölf</td>
  <td>Justin Cronin</td>
  <td>Belletristik</td>
  <td>978-3442469352</td>
  <td>21.04.2014</td>
</tr>
<tr>
  <td>Die Spiegelstadt</td>
  <td>Justin Cronin</td>
  <td>Belletristik</td>
  <td>978-3442311804</td>
  <td>31.10.2016</td>
</tr>
</table>						

Tabelle 1:  Die Relation Buch

Die Attribute/Spaltennamen der in der Tabelle 1 abgebildeten Relation Buch heißen TITEL, AUTOR, GENRE, ISBN und VERÖFFENTLICHUNG, diese bilden zusammen die Attributmenge der Relation. Eine Zeile ist ein Tupel/Datensatz, ein Attributwert bzw. ein Feld eines Datensatzes beinhaltet einen konkreten Wert. An dieser Stelle wird nochmals deutlich, dass eine Relation sich unterschiedlichen Datentypen der Attribute zusammensetzen kann.

Zwischen den Attributen einer Relation können funktionale und voll funktionale Abhängigkeiten existieren. Funktionale Abhängigkeiten liegen vor, wenn Attributwerte der Komponente A die Attributwerte der Komponente B eindeutig bestimmen (der Titel des Buches ist funktional abhängig von der ISBN-Nummer). Voll funktionale Abhängigkeiten liegen vor, wenn zwischen Attributwerten von Komponenten eine funktionale Abhängigkeit existiert (B ist abhängig von A) und wenn C eine echte Teilmenge von A ist und C wiederum funktional B bedingt (B ist abhängig von C).

Das relationale Datenmodell greift die Anforderung einer redundanzfreien Speicherung von Daten auf, indem eine definierte Abfolge von Normalisierungsschritten durchlaufen wird. Jede Normalisierungsform stellt bestimmte Anforderungen an die Beschaffenheit der Daten und deren Abhängigkeiten untereiner, wie im vorherigen Abschnitt angedeutet. Aufgrund der Wichtigkeit der Normalisierung der Daten, werden die Normformen aus Gründen der Vollständigkeit mit der jeweils erforderlichen Qualitätsanforderung tabellarisch aufgelistet.

<table>
<tr>
  <th>Normalform</th>
  <th>Anforderung</th>
</tr>
<tr>
  <td>1. Normalform
  (1NF)	</td>
  <td>
    -	Atomare Wertebereiche
    -	jedes Merkmal bezieht Werte aus einem unstrukturierten Wertebereich bezieht. -> keine Mengen, Aufzählungen oder Wiederholungsgruppen in den einzelnen Merkmalen
  </td>
</tr>
<tr>
  <td>2. Normalform (2NF)</td>
  <td>
    -	Bedingungen der ersten NF erfüllt
    -	jedes Nichtschlüsselmerkmal von jedem Schlüssel voll funktional abhängig
  </td>
</tr>
<tr>
  <td>3. Normalform
  (3NF)</td>
  <td>
    -	Bedingungen der zweiten NF erfüllt
    -	kein Nichtschlüsselmerkmal ist von irgendeinem Schlüssel transitiv abhängig
  </td>
</tr>
<tr>
  <td>4. Normalform
  (4NF)	</td>
  <td>
    -	keine zwei echte und voneinander verschiedene mehrwertige Abhängigkeiten in ein und derselben Tabelle vorliegen
  </td>
</tr>
<tr>
  <td>5. Normalform
  (5NF)</td>
  <td>
  -	wenn Tabelle keine Verbundabhängigkeit aufweist
  </td>
</tr>
</table>

Tabelle 2: Normalform des relationalen Datenmodells (vgl. @meier2016nosql S. 36ff)

Zur eindeutigen Identifikation von Tupeln/Datensätzen werden Primary Keys verwendet. Die Wahl des Primary Keys wird anhand der Charakteristik der Attribute gewählt. Ein Primary Key sollte eine entsprechende Effizienz besitzen, indem er nur aus wenigen Attributen besteht. Über die eindeutige Identifikation der Tupel mittels eines Primary Keys und den Primary Keys einer zweiten Relation lassen sich die darin abgelegten Informationen in eine Beziehung (Relation) bringen. (vgl. @unterstein2012rdbms S. XX)

Wie bereits im Kapitel 2.1.1 erwähnt, werden Beziehungen zwischen Relationen über die Attributausprägungen realisiert. Das Konstrukt der Primär- und Fremdschlüssel ermöglicht Relationen miteinander zu verknüpfen und im Fall einer Selektion, auf die Datenbestände der in einer  Beziehung stehenden Relationen zugreifen zu können. Ein Primärschlüssel muss einen Tupel in einer Relation eindeutig identifizieren können. Je nach Charakteristik der Datenabbildung können gewisse Entitäten bereits über ein eindeutiges Schlüsselattribut verfügen. Ein Fremdschlüssel in der Detailrelation bezieht sich auf die Schlüsselwerte des Primärschlüssels. Weiterhin bedingt die Charakteristik des Primärschlüssels gleichermaßen die Charakteristik des Sekundärschlüssels. Sollte der Primärschlüssel mehrere eine Kombination aus mehreren Attributen aufweisen, so ist dies auch beim Fremdschlüssel der Fall. Für eine Fremdschlüsselbeziehung wird die Eigenschaft der referenziellen Integrität gefordert. Gemäß dieser Anforderung muss der enthaltende Fremdschlüssel in der Primärtabelle als Primärschlüssel enthalten sein. Die Forderung der Eindeutigkeit für Primärschlüssel gilt nicht für die Fremdschlüssel, da mehre Datensätze einer Fremdtabelle einem Datensatz in einer Primärtabelle zugeordnet sein können. (vgl. @unterstein2012rdbms S. 31)

## 2.2 Objektorientierte Datenbankmanagementsysteme
Bei den Objektorientierten Datenbanken handelt es sich Systeme, welche den Anspruch erheben, die Objekte aus der Objektorientierten Programmierung, mit allen Eigenschaften und Vorteilen die diese besitzen, speichern zu können.
Im folgenden Kapitel 2.2.1 werden zuerst die grundlegenden Konzepten der Objektorientierung beschrieben, da diese Konzepte sich bei den Objektorientierten Datenbanken wiederfinden.
In weiteren Verlauf beschreibt das Kapitel 2.2.3 f. die Objektorientierten Datenbankmanagementsystemen (im folgenden OODBMS).

### 2.2.1 Objektorientierung
Im diesem Kapitel werden die Grundlegenden Konzepte der Objektorientierung beschrieben, da diese notwendig sind um den Aufbau, die Funktionsweise und die Anforderungen an ein OODBMS zu verstehen.

Unter einem Objekt wird im allgemeinen eine Einheit verstanden, welche aus Attributen und Methoden besteht.
Dieses versucht ein Ding oder ein abstraktes Konstrukt aus der realen Welt in Teilen oder Vollständig zu beschreiben.
Das können Beispielsweise Personen, Tiere oder Gegenstände sein, aber auch abstrakte Dinge wie die Zugriffsklasse auf ein Dateisystem oder auf eine Datenbank.
Der Bauplan, welche für die Erzeugung der Objekte verwendet wird, wird als Klasse bezeichnet.
Im folgenden wird die Klasse mit dem Namen *Person* und den Eigenschaften *Nachname*, *Vorname* und *Alter* beispielhaft verwendet.
Diese beschreibt Personen für einen geeigneten Kontext ausreichend genau.
Sind weitere Eigenschaften oder Methoden nötig so muss die Klasse um solche erweitert werden.
Die Abbildung 1 zeigt die Klasse in der Notation eines UML Klassendiagramms.

![OO Modell einer Person][person]

<!-- Eigenschaten und Methoden -->
Die konkrete Instanz einer Klasse heisst Objekt.
Dieses kann die Werte zu seinen definierten Eigenschaften aufnehmen, welche für den Nutzungskontext wichtig sind.
Die Charakterisierung eines Objektes erfolgt durch seine Methoden.
Methoden beschreiben die Aktionen, welche mit einer Instanz durchgeführt werden können.
Die Person könnte Beispielsweise die Aktion *Bewegen* implementieren um eine frei definierbare Bewegung des Objektes zu starten.
Ein Kernkonzept der Objektorientierung ist die Kapselung, welches besagt, dass ein direkter Zugriff auf die Attribute eines Objektes nicht möglich ist.
Der Zugriff wird über eigene Methoden bereitgestellt.
In dem verwendeten Beispiel sind das die Get- und Set-Methoden.
Damit können Einschränkungen durchgeführt werden, sodass bestimmte Eigenschaften nur Lesbar sind oder nur gesetzt werden können.

<!-- Abtrakte Klassen, Interfaces und Vererbung -->
Um generische Klassen abbilden zu können gibt es *abstrakte* Klasse, von denen sich keine Instanz erzeugen lässt.
Eine passende abstrakte Klasse könnte Beispielsweise das *Lebewesen* sein, welche allgemein gültige Attribute und Methoden definiert.
Von diesen lassen sich keine Instanzen erzeugen.
Für die Realisierung von Schnittstellen eigenen sich Interfaces, welche nur den Kopf von Methoden definieren und die eigentliche Implementierung den Klassen überlassen.
Schnittstellen eigenen sich besonders gut wenn über die eigenen Systemgrenzen hinweg Daten ausgetauscht werden müssen.
Die folgende Abbildung zeigt die Verwendung der abstrakten Klasse *Lebewesen* mit der Schnittstelle *ILebewesen*.

![Abstrakte Klasse und Interface][personAI]

Hierbei spielt das Prinzip der Vererbung eine große Rolle.
Die Klasse *Person* erbt alle Eigenschaften und Methoden von *Lebewesen*.
Dadurch ist es möglich Aktionen und Eigenschaften zu generalisieren.
Durch die Verwendung eines Interfaces verpflichtet sich die abstrakte Klasse *Lebenwesen* dazu selbst die definierten Methoden zu implementieren.

<!-- Polymorphie und Überladung/Überschreiben von Methoden -->
Daraus ergibt sich ein weiteres Prinzip der Objektorientierung.
Eine erbende Klasse kann die Methoden der übergeordneten Klasse(n) überschreiben und dadurch ein angepasstes verhalten implementieren.
Beispielsweise bewegt sich ein Mensch auf zwei Beinen, ein Löwe aber auf vier Pfoten.
Daneben gibt es das Prinzip der Polymorphie, welches besagt, das es von einer Methode mit gleichem Namen verschiedene Ausprägungen geben kann.
Diese unterscheiden sich durch ihre Parameter.

<!-- Objektbeziehungen -->
Neben der Modellierung einzelner Klassen müssen deren Beziehungen untereinander abgebildet werden.
Dabei ergeben sich vier verschiedene Typen von Beziehungen die für die Speicherung in Objektdatenbanken wichtig sind.
Bei 1:1 Beziehungen findet genau eine Referenz von Klasse 1 auf eine Klasse 2 statt.
Ebenfalls hat Klasse 2 nur genau 1 Referenz, nämlich die auf Klasse 1.
Der zweite Typ sind 1:n Beziehungen bei denen die Klasse 1 auf n weitere Klassen verweisen kann.
Beide Typen können ebenfalls Bedingt sein, wobei auch eine Referenz auf NULL möglich ist.
Beziehungen lassen sich zusätzlich noch Klassifizieren, dazu gehören verhaltensbezogene Beziehungen (Nachrichten oder Funktionsaufrufe) und strukturelle Beziehungen (Einschluss oder Vererbung).

<!--- Client-Server Programmierung ubd Übergang zu OOM --->
Der Einsatz von Objektorientierten Programmen ist sehr unterschiedlich.
In Bereichen wie z. B. im Computer Aided Design (CAD) oder Multimedia-Anwendungen werden Objekte mit komplexen Strukturen erzeugt, die persistent gespeichert werden müssen.
Heutzutage werden viele Client-Server basierte Anwendungen entwickelt, die Daten dauerhaft speichern müssen.
Häufig sind hierbei viele Nutzer die auf ein zentrales System zugreifen, welches die Daten bereitstellt (Client-Server Prinzip).
Dazu werden in den meisten fällen Relationale Datenbankmanagementsysteme wie MySQL[^msql], MariaDB[^mariadb], PostgreSQL[^psql], Microsoft SQL Server, usw. eingesetzt.
Häufig findet die Realisierung der Anwendung in einer Objektorientierten Programmiersprache wie Java, C# oder PHP statt.
Dadurch entsteht ein Problem was unter dem Begriff Objektrelationales Mapping (ORM) zusammengefasst wird und das im folgenden Kapitel genauer beschrieben wird.

### 2.2.2 Objektrelationales Mapping und Objektdatenbanken
Eines der größeren Probleme als Benutzer einer objektorientierten Sprache ist, dass die verwendeten Objekte sich nicht in eine relationale Datenbank, persistent gespeichert werden, da eine relationale Datenbank nur einen eigenen Pool aus Datentypen besitzt.
Dieses Problem lässt sich durch mehrere Ansätze verringern:

  * Verzicht auf die Verwendung von Objekten, welches nicht dem objektorientierten Paradigma entspricht.
  * Konvertierung der Objekte zu relationalen Daten beim Speichern und der relationalen Daten zu Objekten beim Lesen.
  Diese Variante hat den Nachteil, dass viel Performance in die Umwandlung der Daten investiert werden muss.
  Der Vorteil ist, dass die Daten weiterhin in einer relationalen Datenbank liegen und somit bekannte Verfahren zum Lesen und Schreiben und der Konsistenz angewendet werden.
  * Verzicht auf die Speicherung der Daten in einer relationalen Datenbank.
  Als geeignete Alternative bieten sich hier Objektorientierte Datenbanken an, die jegliche Art von Objekten speichern können.

Um ein solches Mapping mit möglichst wenig Aufwand durchführen zu können gibt es in den Verschiedenen Programmiersprachen Frameworks, welche die meiste Arbeit (Generierung des SQLs, Umwandeln des Datenstroms in Objekte, usw.) durchführen.
Im Bereich Java ist das die Java-Persistance-API, auf der ein Framework wie Hibernate aufsetzen kann, im Bereich C# existiert nativ das Entity Data Framework für MSSQL Datenbanken oder im Bereich der Android Entwicklung das Framework SugarORM.

Eine bessere Lösung ist jedoch die Speicherung der verwendeten Objekte direkt in der Datenbank.
In diesem Fall findet kein Performanceverlust durch das Mapping der Daten statt, des weiteren lassen sich Informationen wie Vererbung oder Verknüpfungen zwischen den Objekten wesentlich besser hinterlegen.

Bei der Verwendung eines OODBMS erfolgt der Zugriff auf die Daten in gleicher Weise als würden diese im Speicher des Betriebsystems liegen.
Dadurch werden weitere Layer wie ODBC, ADO oder JDBC nicht benötigt.
Die CURD-Abfragen (Create, Update, Read, Delete) können über Methoden direkt auf die Datenbank ausgeführt werden.
Lediglich für das suchen bestimmter Objekte nach Kriterien in den Attributen muss eine eigene Sprache bereitgestellt werden.
Ein sehr generischer Ansatz hierfür sind Beispielsweise Lambda Expressions, welche in C# zu LINQ to Objects geführt haben.
Werden Objekte aus der Datenbank geholt können diese im Modus Transient oder Mirror sein.
Als Transient sind diese von der Datenbank entbunden, Änderungen wirken sich nur auf das Objekt im Speicher des Systems aus.
Im Mirror Modus wirken sich Änderungen direkt auf das Objekt im Speicher und in der Datenbank aus.


### 2.2.3 Anforderungen an ein Objektorientierte Datenbank
Ein OODBMS muss verschiedene Anforderungen abdecken um den Programmierer die oben beschriebenen Vorteile zu bieten.

Die gespeicherten Objekte sollten nahezu ununterscheidbar von denen in der verwendeten Programmiersprache sein.
Daher müssen Anforderungen nach Vererbung, Polymorphie, Schnittstellen oder Objektreferenzen von dem OODBMS ebenfalls mit abgedeckt werden. (vgl. Kapitel 2.1)

Jedes Objekt muss unter einer eindeutigen ID, der Objekt ID (OID) gespeichert werden, welche vom OODBS vorgegeben bzw. generiert wird.
Anforderungen an die OID sind:
  * Unabhängig von den Daten in dem Objekt, Ändern sich die Daten im Objekt bleibt die OID gleich
  * Objekte mit unterschiedlichen OIDs und gleichen Eigenschaften sind möglich. (z. B. eine Klasse mit den Attributen Nachname und Vorname von der zwei gleiche Instanzen existieren)
  * Dient der Auffindbarkeit
  * Dient der eindeutigen Identifizierung eins Objekts innerhalb einer Datenbank
  * Über die OIDs ist es möglich Referenzen zwischen Objekten innerhalb der Datenbank zu hinterlegen
  * Eine Referenz kann sich nur auf ein anderes Element oder auf eine Menge anderer Elementen beziehen

Die Erzeugung der OID kann auf Verschiedenen Art und Weisen durchgeführt werden.
Diese kann aus der physischen Adresse, dem Pointer bestehen.
Diese Variante hat den Nachteil, das eine Bindung an den physischen Speicherplatz entsteht.
Eine Name, welcher meist aus einem geeigneten Namensraum stammt, welche meistn vom Nutzer vergeben wird.
Hierbei ist es meist Schwierig über viele Attribute eindeutige Werte zu vergeben.
Einen Surrogate oder Identifier Attribut.
Diese haben den Nachteil das sie nicht wie normale Attribute behandelt werden können.
Eine andere Möglichkeit sind andere abstrakte Objekte.
Neben der OID wird der Zustand eines Objektes gespeichert.

Bei der Verwendung von Referenzen kann es wie bei den relationalen Datenbanken zu Integritätsproblemen kommen, wenn ein Objekt, auf welches noch referenziert wird, aus der Datenbank entfernt wird.
Einige Datenbanksystem können Referenzen über Attribute setzen, sodass das eine Eigenschaft des Objektes x auf y zeigt ohne das weiter bestimmt werden muss wie die Referenz berechnet wird.
Die Berechnung könnte über eine direkte Referenz auf das Objekt (Pointer) oder wird über gleiche Attribute bestimmt.
Ob dies erlaubt ist und wie damit verfahren wird hängt von der Implementierung des OODBMS ab.
Das OODBMS muss Mechanismen bereitstellen um diese Probleme zu adressieren.

Eine OODBMS muss ebenfalls die ACID Prinzipien (Atomar, Konsistenz, Isolation und Haltbarkeit) gewährleisten.
Für die Abfrage der Daten muss ggf. eine eigene Sprache bereitgestellt werden.
Weitere Anforderungen wie Transaktionen, das Speichern und Abrufen großer Datenmengen, erkennen von Deadlocks, Erzeugen von Backups sowie die Möglichkeit diese wieder einzuspielen muss ein OODBMS ebenfalls leisten.
Das Objektorientierten Datenbankmanifest (TODO LINK) gibt dreizehn Regeln an, welche Anforderungen ein OODBMS erfüllen muss.
Diese Teilen sich in acht Regeln aus dem Bereich der Objektorientierung und fünf aus Datenbankgrundsätzen [vgl. @rutner2002implementing] und werden im folgenden ausführlicher Vorgestellt.


  * **Acht Regeln der Objektorientierung**
     1. Objekte lassen sich zu **Klassen und Typen** abstrahieren um gleichartige Objekttypen zu beschreiben.
     2. Jede Datenbankoperation muss **Vollständig** oder gar nicht durchgeführt werden und kann in einer geeigneten Sprache ausgedrückt werden.
     3. Klassen können um weitere Attribute ergänzt werden. Die Möglichkeit der **Erweiterbarkeit** bezieht sich auf alle relevanten Objekte.
     4. **Einfach- und/oder Mehrfachvererbung** ist möglich. Eine Unterklasse kann die geerbte Klasse um eigene Methoden und Attribute erweitern.
     5. Unterschliedliche Klassen, die eine Methode erben, können diese Überschreiben und weitere gleichnamige Methoden mit unterschiedlichen Parametern hinzufügen. (**Polymorphie**)
     6. Verwendung von **Datenkapselung** um Details der Implementierung zu verbergen. Der Zugriff auf Eigenschaften erfolgt nur über Methoden (z. B. Get- und Set).    
     7. Ein OODBMS unterstützt **Komplexe Objekte**. Das sind Objekte deren Attribute nicht nur einfache Datentypen wie String, Integer oder Boolean sein können sondern wiederum aus anderen Objekten bestehen können.
     8. Jedes Objekt hat eine eigene **Objektidentität**, welche unabhängig von den Eigenschaftswerten ist. Eine solche ID wird wie bereits beschrieben als OID bezeichnet.
  * **Fünf Datenbankgrundsätze**
     1. Das OODBMS muss für **Persistenz** sorgen, dass der Zustand über die gesamte Laufzeit erhalten bleibt. Nur bewusste Änderungen der Daten sind erlaubt.
     2. Der Zugriff auf die Daten muss **Mehrbenutzerfähig** sein. Dazu gehören gleichzeitige Zugriffe, ein Transaktionskonzept um Datenbankinkonsistenz zu vermeiden.
     3. Über eine Abfragesprache lassen sich **Ad-hoc Abfragen** durchführen.
     4. Die Verwaltung von **großen Datenbeständen ist möglich**. Dazu gehören die Optimierung von Abfragen oder das Management von Indicies. Diese sollen unabhängig von Benutzerinteraktionen durchgeführt werden.
     5. Das **Wiederherstellen** von des Ausgangszustands im Fehlerfall bei nicht abgeschlossenen Transaktionen ist möglich. Ggf. werden diese neu gestartet.

<!--- OOD Modell --->
Ein OODBMS kann in die zwei Teile der Struktur und den Operation eingeteilt werden.
Der Strukturbereich beinhaltet die Objekte, deren Zustände, die Klassen, das Schema und die Vererbung.
Im Operationsteil finden sich die Metaklassen, die Funktionen, Methoden, die Vererbung von Methoden sowie die Ausnahmen.

### 2.2.4 Modellierung und Datenabfrage
Ähnlich wie bei SQL müssen die Entitäten der Datenbank bekannt gemacht werden. (vgl. @nayak2013type) <!-- TODO Quelle -->
Um Objektorientierte Datenbanken zu modellieren kann die Sprache UML[^uml] verwendet werden.
Diese wird von der Object Management Group (OMG) standardisiert und ist aktuell in der Version 2.5 aus dem Jahr 2015 vorhanden.
Besonders geeignet sind Klassendiagramme um Objekte und deren Beziehungen zueinander darzustellen.

Bei relationalen Datenbanken wurde SQL als Abfragesprache spezifiziert.
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
Es können Beispielsweise Abfragen in der bekannten Form *SELECT ... FROM ... WHERE* durchgeführt werden.
Ebenfalls bekannte Abfragen aus SQL über Aggregierungsfunktionen (count, avg, min, max, etc.) und Mengenoperationen (wie intersct, except oder union) sind möglich.
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

Neben diesem Standard, an dem seit 2001 nicht mehr gearbeitet wird, da sich die Organisation aufgelöst hat, und der einige Schwächen aufweist, gibt es die SQL-3-Norm. (TODO LINK)
Diese erweitert den bisherigen Standard um Konstrukte, welche für Objektorientierte Datenbanken wichtig sind.
Dazu gehören abstrakte Datentypen, Objekt-Identifikatoren, Überladen von Funktionen oder komplexe Datentypen wie SET, MULTISET, LIST oder ROW.
Eine dritte Möglichkeit sind native Abfragen aus der Programmiersprache hinaus, sofern die Datenbank eine solche Schnittstelle anbietet.
Im folgenden ein LINQ-Beispiel aus der Programmiersprache C# um alle Personenobjekte die Erwachsen sind zu erhalten:

**Abfragen bestimmter Personen**
```cs
var personen = (from p in db.Personen where p.Alter > 17 select p).ToList();
```

Damit ähnliche Abfragen in einer anderen Programmiersprache möglich sind muss diese Closures unterstützen.

### 2.2.5 Transaktionen und Einsatz eins OODBMS
Die meisten OODBMS unterstützen die Verwendung von Transaktionen.
Wird eine Transaktion gestartet so wird das betreffende Objekte gesperrt. (Read-Write Modell)
Typische Operationen, welche angeboten werden sind:

  * *begin()* um eine Transaktion zu starten
  * *commit()* um eine Transaktion erfolgreich zu beenden
  * *abort()* um eine laufende abzubrechen
  * *checkpoint()* um mehrere Transaktionen miteinander zu Synchronisieren
  * *active()* um den Status einer Transaktion abzufragen

<!-- Weitere Wichtige Punkte für den Betrieb eines OODB -->
Neben den oben aufgeführten dreizehn Regeln gibt es weitere Aspekte die wichtig für den Einsatz eines OODBMS sind.
Dazu gehören Autorisierung, Schemaevaluation und Versionierung.
Der Bereich der Autorisierung beschreibt den Schutz vor unberechtigtem Zugriff.
Dafür werden Zugriffsrechte an Benutzer vergeben, welche Klasse, Objekte oder bestimmte Untermengen von Objekten lesen, schreiben, verändern oder löschen dürfen.

Die Schemaevaluation ist wichtig, wenn Definitionen von Klassen oder Beziehungen angepasst werden müssen.
In diesem Fall dürfen Änderungen nicht das laufende System beeinträchtigen.
Die Änderungen können sich sofort auf alle Objekte auswirken (eager update) oder werden nach und nach verändert (lazy update).
Im zweiten Fall geschieht das meist erst beim erneuten Zugriff auf die Daten.
Werden Objekte verändert so ist es wichtig die Historie zu verwalten.
Die Darstellung der Versionen kann mittels eines Versionsgraphen erfolgen.
In diesem ist auch gekennzeichnet, welche als die aktuelle Version behandelt wird, also das Objekt welches bei einer Anfrage in dieser Version zurückgegeben wird.
Eine andere Möglichkeit ist eine zeitbezogene Versionierung durchzuführen. (z. B. Jede Stunde/Monat etc.)
Werden diese dann mit einem Gültigkeitsstempel versehen so findet ein Aufräumungsprozess ebenfalls statt.

### 2.2.6 Zusammenfassung
Der große Vorteil von Objektdatenbanken ist die Vermeidung des Bruchs der bei Speicherung von Daten in relationalen Datenbanken entsteht.
Ein weiterer Vorteil ist das dass benötige *Joinen* von normalisierten Tabellen entfällt.
Drittes Argument für ein OODBMS ist das die Objektidentität gesichert ist, da für dessen Verwaltung das Datenbanksystem verantwortlich ist.
Des weiteren wird die Historie eines Objektes gespeichert, so dass die Wiederherstellung einzelner Objekte leichter ist.

Der größte Nachteil ist der geringe Anteil von Schnittstellen für den Zugriff.
Besonders unter den populären Programmiersprachen wie Java, PHP oder Python fehlen die entsprechenden Frameworks.
Weiterhin gibt es nur wenige Implementierungen von diesem Datenbanktyp.
Beispiel von Objektdatenbanken sind db4o[^db4o], ZooDB[^zoodb] oder mcobject[^mcobject].
Das Kapitel 5 beschäftigt sich eingehend mit der Verbreitung von objektorientierten Datenbanken.

## 2.3 Dokumentdatenbanken
Dokumentdatenbanken gehören zum Typ der NoSQL (Not only SQL) Datenbanken.
Der Englische Name ist nicht wie zu vermuten *document database*, sondern treffender *document store*, da diese für die Speicherung von Dokumenten optimiert sind.
Dieser Datenbanktyp bietet den großen Vorteil der Schemafreiheit von Schlüssel-Wert-Speichern mit einer Möglichkeit zur Strukturierten Speicherung von Daten.
Bei den Daten handelt es sich um strukturierten Daten in Datensätzen, welche in diesem Kontext als Dokumente bezeichnet werden.

Einsatzbereich sind meist spezielle Webdienste, welche horizontal skalierbar sein müssen.
Dabei werden meist verschiedene Rechner als Cluster betrieben, die Verteilung erfolgt über Sharding.
Kurzzeitige Datenbankinkonsistenzen werden in kauf genommen, da erst eine Verteilung der aktualisierten Daten auf alle Knoten erfolgen muss.
Anwendung finden Dokumentdatenbanken besonders bei Social Media Plattformen oder Suchintensiven Anwendungen.

Schemafrei bedeutet das nicht wie bei relationalen oder Obejektorientierten Datenbanken das Tabellen- oder Objektschema angegeben werden muss.
Dokumente lassen sich ohne vorherige Definition eines Schemas einfügen.
Dadurch wird auf Vorteile wie referenzielle Integrität oder Normalisierung verzichtet.
Des weiteren kann eine Dokumentdatenbanken keine transaktionale Sicherheit gewährleisten, vielmehr wird nach dem Prinzip der schlussendlicher Konsistenz (eventual consistency) gearbeitet.
Der Vorteil dieses Ansatzes ist eine sehr schnelle Verarbeitung der Daten, da die Replikation erst später erfolgt.

Beispiele für bekannte Dokumentdatenbanken sind CouchDB[^couchdb], RavenDB[^ravendb] oder MongoDB[^mongodb].
Die Datenbank CouchDB wird Beispielsweise bei dem Dokumentenmangementsystem d.3ecm[^d3] von d.velop als Proxy für die relatione Datenbank eingesetzt um Suchanfragen schneller durchführen zu können.
Der eigentliche Datenbestand liegt hierbei in einer relationalen Microsoft SQL-Server Datenbank vor, die Metainformationen zu den Dokumenten werden für eine schnellere Suchmöglichkeit in der CouchDB vorgehalten.
Durch diese Verknüpfung der beiden Systeme fallen die Nachteile der fehlenden Transaktionssicherheit oder der Normalisierung weg.
Lediglich der Suchindex kann eine Inkonsistent zum vorhanden Datenbestand aufweisen.

### 2.3.1 Dokumente
Unter dem Begriff Dokument sind nicht Multimedia, Binär oder andersartige Unstrukturierte Dateien gemeint.
Ein Dokument besteht vielmehr aus einem strukturierten Datensatz, welche Beispielsweise in XML[^xml] oder JSON[^json] formatiert sein kann.

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
Grundlegend bestehen diese Daten aus Attributen und zugehörigen Werten.
Die Werte können dabei selbst wieder komplexere Datentypen annehmen.
Wie in dem Beispiel das Attribut *Kinder*, welches eine Liste von weiteren Objekten aufnimmt.
Anders als bei relationalen und objektorientierten Datenbanken sind Referenzen auf andere Dokumente nicht möglich.
Jedes Dokument ist eine in sich geschlossene Einheit.
Neben den Daten eines Dokuments besitzt dieses eine eindeutige ID (Dokument-ID), welche über die gesamte Datenbank hinweg eindeutig ist.
Der Einsatz von XML ist nicht auf Dokumentdatenbanken begrenzt, es existiert eine eigene Klasse von XML-Datenbanken, welche in dieser Ausarbeitung nicht weiter betrachtet werden.

Innerhalb einer Dokumentendatenbank können die Dokumente mittels Listen, Tags / Metadaten oder Hierarchien gruppiert werden.

### 2.3.2 Abfragen der Datenbank
Eine Dokumentdatenbanken unterstützt die bekannte CRUD anfragen.
Beim Eintragen von Dokumenten kann es spezifiziert sein, dass ein eindeutiger Key mit angegeben werden muss, alternativ wird dieser Key von dem Datenbanksystem vergeben.
Die Suche nach Dokumenten kann über den Key oder nach Schlüsselworte aus dem Value Bereich oder nach Metadaten erfolgen.
Dafür stellt die Datenbank eine API (z. B. RESTful) bereit, welche von der Programmiersprache verwendet wird.
Die Syntax zur Suche von Einträge variiert von den jeweiligen Implementierungen.
Um eine effizientere Suche zu ermöglichen versucht die Datenbank die Dokumente über Metadaten zu Klassifizieren.
Das könnte Beispielsweise die Erkennung der fünf stelligen Postleitzahl sein wonach dann alle Dokumente gruppiert werden.

Die Anfragen an die Datenbank können über das Map/Reduce Verfahren parallel ablaufen und dadurch sehr effizient durchgeführt werden.
Im direkten Vergleich zu SQL steht Map für eine Gruppierung der Daten und Reduce für eine Aggregierung.
Zuerst wird Map ausgeführt, wobei ein Index entsteht.
Der entstehende Index ist ein assoziatives Array, welches aus einem oder mehreren Key-Value Paaren besteht.
Der Vorteil ist, das dieser Schritt unabhängig von den restlichen Daten ausgeführt wird, sodass dies auf allen Knoten parallel ausgeführt wird.
Die zweite Phase führt dann eine Reduzierung der Ergebnisse durch (Reduce) durchgeführt.
Eine Ausführliche Beschreibung ist unter https://highlyscalable.wordpress.com/2012/02/01/mapreduce-patterns/ zu finden.

### 2.3.3 Performace von Dokumentdatenbanken
In @li2013performance wurden SQL und NoSQL-Datenbanken über die Performance miteinander verglichen.
Dabei zeigt sich, dass Systeme wie CouchDB oder RavenDB, im Vergleich zu der relationalen Datenbank MS SQL Express, sich nicht performanter im Bereich CRUD verhalten.
Andere Systeme hingegen wie Couchbase oder MongoDB sind deutlich performanter als die verglichene MS SQL Datenbank.
Diese Auswertung zeigt, dass nicht das alleinige Konzept einer NoSQL-Datenbanken zu mehr Performance führt, vielmehr muss die konkrete Umsetzung den Vorteil auch tatsächlich liefern.

Eine weitere Erkenntnis ist, dass NoSQL-Datenbanken bei trivialen Operationen sehr schnell sein können, bei komplexeren Operationen diese aber im Verhältnis deutlich länger brauchen.

### 2.3.4 Beispiel MongoDB
Im folgenden wird Exemplarisch die Dokumentdatenbank MongoDB betrachtet.(vgl. @redmond2012seven S. 135 ff.)
Die erste Version dieser Datenbank ist aus dem Jahr 2009 und findet seit dem eine schnelle Verbreitung.
Ziel war es eine skalierbare, performante Datenbank mit einfachem Zugriff zu designen.
Abfragen lassen sich Ad-hoc auf den Datenbestand ausführen.
Für die Ablage von Dokumenten wird kein Schema benötigt, sodass neue Typen von Dokumenten einfach hinterlegt werden können.
Verwendet wird die Datenbank Beispielsweise von der Webseite http://bit.ly oder vom CERN um die Daten aus dem LHC zu sammeln.

Die Dokumente werden in JSON Syntax abgelegt, intern werden diese dann in dem Binärformat BSON abgelegt.
Durch die Schemafreie ablagen, kann die Datenbank während der Entwicklung mitwachsen ohne diese erneut anzulegen.
Im folgenden werden die CRUD Operationen, welche sich über das mitgelieferte Command Line Interface ausführen lassen vorgestellt.
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

Es ist erkennbar das innerhalb von *insert* die JSON Syntax zum Einsatz kommt.
Um das ablegen vieler Dokumente zu vereinfachen ist es möglich JavaScript Funktionen zu hinterlegen, welche die nötigen Werte als Parameter entgegen nehmen und intern *insert* aufrufen.

**Suche aller Bücher**
```javascript
db.books.find();
```

Das Ergebnis von *find()* liefert ein JSON-Array der abgelegten Bücher.
In der Ergebnissmenge ist erkennbar das ein Attribut *_id* hinzugekommen ist, welches die eindeutige vom Systeme vergebene Dokument-ID ist.
Der Algorithmus für die Generierung der Dokument-ID ist so implementiert, das dieser auf unterschiedlichen Maschinen ausgeführt nicht die selben IDs erzeugt.

**Suche eines Buchs**
```javascript
db.books.find({ "_id" : ObjectId("5a6bb81fbb30123365f39fa8") });
```

Die Suche nach einem bestimmten Objekt ist ebenfalls mittels der *find()* Methode möglich, der als Parameter die ID des Dokumentes übergeben wird.

**Suche nach Kriterien**
```javascript
db.books.find({ "year" : { $gt : 2000 } });
```

Innerhalb von *find()* lassen sich Kriterien angeben, es werden nur noch Dokumente zurückgegeben dessen Jahr größer als 2000 ist.

**Suche über JS Funktionen**
```javascript
db.books.find( function () {
    return this.year > 2000 && this.year <= 2010;
});
```

Eine weitere Möglichkeit ist die Benutzung von JS Funktionen um komplexere Anfragen durchzuführen.
Nachteil dieser Variante ist das die Funktion für jedes Dokument in der Datenbank ausgeführt wird, durch die Schemafreiheit ist aber nicht Garantiert das dass Feld *year* auch in jedem Dokument existiert, sodass diese Abfrage fehlschlägt wenn das Feld nicht vorhanden ist.

**Update eines Dokuments**
```javascript
db.books.update(
  { "_id" : ObjectId("5a6bb81fbb30123365f39fa8") },
  { $set : { "year" : 2003 } }
);
```

Über den Befehl *update* in der Kombination mit *\$set* können bestimmte Eigenschaften eines Dokuments verändert werden.
Wird *\$set* nicht mit angegeben, wird das gesamte Dokument durch das neue ersetzt.
Dabei gehen auch alle nicht mit angegeben Eigenschaften wie der Titel verloren.

Das löschen eines Dokuments findet über den Befehl *delete()* statt, dem wie schon bei *find* die ID des Dokuments mitgegeben wird.
