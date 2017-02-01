# 2. Objektorientiertes Datenbankmodell

Im Folgenden soll das Konzept von objektorientierten Datenbanken näher beleuchtet werden. Durch die Betrachtung der einzelnen Elemente der Datenbank wird ein Überblick über diese gegeben, welcher für die anschließenden Vor- und Nachteile sowie die Analyse der Ausgangsfrage wichtig ist.


## 2.1 Konzept

Das Konzept hinter objektorientierten Datenbankmodellen setzt sich eigentlich aus zwei Konzepten zusammen, die als 
Synthese betrachtet, das objektorientierte Datenbankmodell darstellen.
Dabei werden klassische objektorientierte Konzepte mit herkömmlichen (z.B. relationalen) Datenbankmodellen 
kombiniert. In diesem Kontext existiert u.a. 
die Ansicht, ein einheitliches objektorientiertes Modell wäre nicht möglich, da OODMs immer erweiterbar und 
anwendungsabhängig sind (vgl. Heuer 1992, S. 273).

Dem gegenüber steht jedoch die weit verbreitete Darstellung eines OODM (objektorientiertes Datenbankmodell), anhand 
des "Manifesto" für objektorientierte Datenbanken. Dieses legt diverse Grundanforderungen an OODMs fest, wobei eine 
Unterteilung in drei Gruppen vorgenommen wird. Die Anforderungen sind dabei nicht formal definiert (vgl. Heuer 1992, S. 275).

Als die drei Kategorien sind festgelegt: "unbedingt notwendige Bestandteile" (13), "optionale Bestandteile" (5) sowie "offene Bestandteile" (3). Die "optionalen Bestandteile" dienen dazu, ein objektorientiertes Datenbanksystem weiter zu verbessern, müssen jedoch nicht genutzt werden (vgl. Heuer 1992, S. 275).

Bevor im Folgenden noch näher auf die Einzelanforderungen eingegangen wird, kann auf oberster Ebene eines objektorientierten Datenbankmodells die Unterteilung zwischen dem Strukturteil und dem Operationsteil getroffen werden.
Der Strukturteil spiegelt die Gemeinsamkeiten semantischer Datenbankmodelle und objektorientierter Prinzipien wider. Diese Prinzipien umfassen die statische Struktur, der definierten Objekte.
Folgende Bereiche sind dabei dem Strukturteil zuzuordnen (vgl. Heuer 1992, S. 274):

* Typkonstruktoren und komplexe Objekte
* Objektidentität
* Klassen und Typen
* Beziehungen zwischen Klassen
* Strukturvererbung
* Integritätsbedingungen

Als zweiter Teil eines OODBM gilt der Operationsteil, der generische Operationen enthält. Diese sind fest im System verankert und müssen nicht erzeugt werden. Genutzt werden können die generischen Operationen um auf alle Klassen und Objektmengen zuzugreifen. Zum Operationsteil zählen (vgl. Heuer 1992, S. 274):

* Metaklassen
* Definition und Vererbung von Methoden
* Abstrakte Datentypen und Einkapselung
* Overriding und Mehrfachvererbung

Nachfolgend werden nun die zu Anfang beschriebenen Anforderungen aus dem "Manifesto" näher beschrieben.

**Komplexe Objekte.** Objektorientierte Datenbanken müssen komplexe Objekte aufnehmen können. Das Bedeutet, dass nicht nur Standarddatentypen (wie in relationalen Datenbanken) aufgenommen werden können, sondern auch tuples, sets, bags, lists und arrays, wobei diese in jeder Form kombinierbar sein sollen.

**Objektidentität** In objektorientierten Datenbanken erhält jedes Objekt bei Aufnahme in die Datenbank einen eindeutigen Key. Dieser ist unabhängig vom Inhalt des Objekts und ergibt sich nicht aus den Werten selbst, wie es bei relationalen Datenbanken häufig der Fall ist.

**Einkapselung.** Objekte sind so gekapselt, dass Werte nur durch öffentliche Operationen verändert werden können. Lediglich bei der Verwendung von ad-hoc-Abfragen muss ein direkter Zugriff auf die Objekte möglich sein, sodass in einem solchen Fall, der Kapselungsmechanismus nicht zu strikt arbeitet.

**Typen und Klassen** Typen sind wie einfache Datentypen zu verstehen, wobei diese einen data-part sowie einen operation-part beinhalten. Der data-part beschreibt dabei die Objekt-interne Datenstruktur, der operation-part besteht hingegen aus Prozeduren, die Operationen des interface-parts darstellen. In einer Klasse werden Objekte zusammengefasst, die eine identische Struktur aufweisen. Klassen berücksichtigen dabei zwei Aspekte. In der object-factory können neue Objekte erzeugt werden, im object-warehouse diese abgelegt.

**Klassen- und Typhierarchien** Dieser Punkt kann auch als Vererbung bezeichnet werden. Klassen und Typen können dabei in Baumstrukktur arrangiert werden und Attribute und Methoden erben.

**Overriding, Überladen und dynamisches Binden von Methoden** Die selbe Methode mit identischem Namen kann in unterschiedlichen Klassen verwendet werden, da abhängig von Typ bzw. Klasse entschieden wird, welche benutzt wird.

**Datenbank-Programmiersprache** Durch die Sprache des OODBMS muss jeder Algorithmus beschreibbar sein, was bspw. bei SQL nicht der Fall ist.

**Erweiterbarkeit** Die Datenbank muss neben den Standard-Datentypen auch User-definierte Typen aufnehmen können und mit diesen in identischer Weise umgehen.

**Persistenz**  Gespeicherte Daten oder eben auch Objekte müssen dauerhaft gespeichert werden können. Der Speichervorgang muss dabei inbegriffen sein, sodass hierfür nicht explizit Operationen ausgeführt werden müssen.

**Sekundärspeicher-Verwaltung** Das OODBMS muss Werkzeuge bereitstellen, um Daten effizient zu verwalten. Hierzu zählen u.a. Index-Management, Daten-Clustering, Daten-Pufferung und Abfragenoptimierung.

**Nebenläufigkeit von Transaktionen** Wie in jedem Datenbankmanagementsystem muss es auch in OODBMS möglich sein, dass mehrere User gleichzeitig auf dieses zugreifen.

**Recovery-Mechanismen** Bei Hard- oder Softwarefehlern bzw. -ausfall müssen die gängigen Mechanismen zur Verfügung stehen, um unvollständig ausgeführte Transaktionen zurückzusetzen und erneut auszuführen.

**Anfragesprachen** Objektorientierte Datenbankmanagementsysteme müssen Werkzeuge für direkte Abfragen bereitstellen. Dabei sollten folgende Kriterien erfüllt sein: Die Abfragesprache muss deklarativ und effizient sein, sowie auf allen Datenbankstrukturen funktionieren, auch wenn neben den Standard-Typen und -Klassen Benutzerdefinierte vorliegen.
(vgl. k.A. 1989) und (vgl. Heuer 1992, S. 276)

Neben diesen 13 vorausgesetzten Anforderungen, gibt es folgende fünf weiteren, optinalen, Anforderungen an objektorientierte Dantenbanksysteme.

**Mehrfachvererbung** Ein OODBMS kann die Mehrfachvererbung optional anbieten.

**Statische Typisierung und Typ-Inferenz** Eine Typ-Überprüfung beim Kompilieren kann genutzt werden. Je ausgeprägter diese genutzt wird desto besser. Im Optimalfall liefert ein vom Compiler akzeptiertes Programm kein Typ-Fehler. Bei der Typ-Inferenz zeigt sich ein ähnliches Bild. Optimal wäre es, wenn nur die Basis-Typen deklariert werden müssen und weitere, temporäre Typen vom System geschlussfolgert werden können.

**Verteilung** Die Datenbank kann verteilt werden, wobei die Verteilung von Objekten aber zu Konflikten führen kann.

**Lange Transaktionen** Transaktionen können lange dauern. Daher unterstützen viele OODBS lange Transaktionen.

**Versionen** Viele OODBS unterstützen eine Versionierung um die Aktivitäten während der Design-Phase abzubilden.
(vgl. k.A. 1989) und (vgl. Heuer 1992, S. 276)

Neben den Grundbedingungen sowie optionalen Anforderungen an objektorientierte Datenbanksysteme, existieren noch folgende Wahlmöglichkeiten für Entwickler bei der Verwendung von OODBS.

* Paradigma der Datenbank-Programmiersprache oder Anfragesprache
* Standard-Datentypen und Typkonstruktoren
* Meta-Informationen

(vgl. Heuer 1992, S. 276)


Somit zeigt sich, dass es nicht die eindeutige Beschreibung dessen gibt, wie ein OODBS aussehen muss. Vielmehr werden sowohl aus Sicht der Objektorientierung wie auch aus Sicht der herkömmlichen (relationalen) Datenbanken Anforderungen gestellt, die ein OODBS erfüllen muss, optinal erfüllen kann sowie weiteren Punkten die Programmierer, wenn gewünscht, nutzen können.

## 2.2 Objekte, Datentypen und Kapselung
Objekte, Datentypen und Kapselung sind drei Kernaspekte von objektorientierten Datenbanksystemen. Diese werden nachfolgend nochmal detailliert dargestellt.

### 2.2.1 Objekte
Wie der Name bereits nahelegt, bilden Objekte die Grundbausteine, aus denen objektorientierte Anwendungen aufgebaut werden. Dabei ist jedes Objekt als eigenständige Einheit zu betrachten. Ein Objekt enthält neben den Nutzdaten (Attributwerte) auch Methoden/Operationen, zur Steuerung des Verhaltens (vgl. Meier 2003, S. 3).
Der Begriff Objekt kann dabei ähnlich wie in der realen Welt (Gegenstand), als abstrakter Begriff verstanden werden, der einen bestimmten Ausschnitt widerspiegelt. Durch seine Attribute und Methoden ist jedes Objekt charakterisiert (vgl. Meier 2003, S. 17).
Die Attribute der Objekte sind dabei, anders als in relationalen Datenbanken, nicht direkt veränderbar. Jedes Objekt stellt entsprechende Methoden bereit, um Operationen auf den Daten auszuführen.
Zusätzlich ist jedes Objekt durch ein sogenanntes Surrogat eindeutig indentifizierbar. Dabei sind Surrogate eindeutige Identifikationsschlüssel, die unveränderbar sind und vom Datenbanksystem gebildet werden. Ein Surrogat wird nur einmalig vergeben, auch wenn das entsprechende Objekt gelöscht wird.
Surrogate werden dabei systemweit und unabhängig von Objekteigenschaften wie Attributen oder Methoden generiert und bleiben auch bei Veränderung von Attributwerten unverändert. Bei verteilten Datenbanken muss garantiert sein, dass Surrogate auch ortsübergreifend eindeutig sind. So können diese ihrem eigentlichen Zweck als Stellvertreter für die Objekte entsprechen. Surrogate entsprechend somit der Objektidentität aus dem Abschnitt Konzept (vgl. Meier 2003, S. 19f.).

### 2.2.2 Datentypen
Bei den Datentypen wird zwischen den standard und komplexen Datentypen unterschieden. Jedes Datenbankmodell beinhaltet dabei eine gewisse Anzahl von Standard-Datentypen, wie bspw. integer, boolean, character oder date und time für Datumswerte und Uhrzeiten (vgl. Heuer 1992, S. 278).

Da diese Datentypen meist nicht ausreichen um entsprechende Strukturen widerzuspiegeln, werden bei objektorientierter Herangehensweise Typkonstruktoren eingesetzt. Mit Hilfe dieser Typkonstruktoren, können aus den wenigen Standard-Datentypen beliebig viele kompliziertere Datentypen erzeugt werden. Zum Einsatz kommen meist mindestens der Tupel-, Mengen- und Listenkonstruktor (vgl. Heuer 1992, S. 279).


**Tupelkonstruktor** Der Tupelkonstruktor (TUPEL OF) fasst mehrere Komponenten unterschiedlicher Typen zusammen, sodass daraus ein neuer Typ entsteht. Die dabei zugrundliegenden Typen werden als Komponententypen bezeichnet.

**Mengenkonstruktor** Der Mengenkonstruktor oder auch SET OF wird genutzt, um aus mehreren Elementen eines zugrundeliegenden Typs einen neuen Typ zu erzeugen. Elementtyp ist die Bezeichnung für den zugrundeliegenden Typ. Besonderheit ist, dass die Menge Elemente nicht doppelt enthält und auch keine Ordnung hat.

**Listenkonstruktor** Der Listenkonstruktor (LIST OF) erzeugt genauso einen neuen Typ aus mehreren zugrundeliegenden Elementen eines Typs. Der zugrundeliegende Typ wird wie beim Mengenkonstruktor als Elementtyp bezeichnet, unterscheidet sich aber dahingehend, dass die Instanz des zugrundeliegenden Typs eine Liste ist. Das bedeutet, dass anders als beim Mengenkonstruktor, Elemente mehrfach enthalten sein können. Ebenso kann die Ordnung der Elemente erhalten bleiben, was für den Umgang mit Matritzen oder Messwertreihen erforderlich ist.
(vgl. Heuer 1992, S. 279)

Nachfolgend wird die Nutzung der drei Konstruktoren an zwei Beispielen dargestellt.

Beispiel 1: Objekttyp Personen
```
SET OF(TUPLE OF(Name: TUPLE OF(Vorname: STRING,
 							  Nachname: STRING),
                Adresse: TUPLE OF(PLZ: INTEGER,
                				  ORT: STRING,
                                  Straße: STRING,
                                  Hausnummer: INTEGER),
                Hobbies: SET OF(Hobby: STRING),
                Geburtsdatum: DATE))
```

Beispiel 2: Objekttyp Bücher
```
SET OF(TUPLE OF(ISBN: STRING,
				Titel: STRING,
                Verlagsname: STRING
                Autoren: LIST OF(Autor: STRING),
                Stichworte: SET OF(Stichwort: STRING),
                Versionen SET OF(TUPLE OF(Auflage: INTEGER,
                						  Jahr: INTEGER))))
```
(vgl. Heuer 1992, S. 279f.)


### 2.2.3 Kapselung
Um unkontrollierte Updates auf Attributwerten zu verhindern, ist es nötig, abstrakte Datentypen (ADTs) sowie Einkapselung in OODMs zu nutzen. Auf diesem Wege können unkontrollierte Updates ausgeschlossen werden (vgl. Heuer 1992, S. 381).

Die aus der objektorientierten Programmierung bekannten Klassen sind in diesem Kontext vergleichbar mit der Implementierung eines abstrakten Datentyps, da auch bei ADTs nur die auf diese anwendbaren Funktionen nach außen gegeben werden. Als abstrakten Datentyp können dann bestimmte Objekttypen gekennzeichnet werden. Dadurch bleibt deren Struktur für alle generischen Update- und Anfrageoperationen, die auf dem Datenbanksystem ausgeführt werden, verborgen. Die Werte innerhalb der Abstrakten Datentypen lassen sich in Folge nur noch über speziell definierte Anfrage- und Updatefunktionen lesen und verändernn. In Summe stellen abstrakte Datentypen also Klassen mit ausschließlich als privat gekennzeichneten Attributen dar.

Diese Form der Implementierung bietet auch Vorteile, falls bspw. intern eine Änderung an der Struktur stattfindet und aus einer Menge eine Liste wird. Bei Verwendung von ADTs bleibt eine solche Änderung dem Anwender verborgen, da dieser weiter die bereitgestellten Methoden verwendet. Würde auf die Nutzung von ADTs verzichtet werden, müsste bei einer solchen Änderung im Anschluss auch jede Anfrage und jedes Update angepasst werden, damit die jeweiligen Operationen von nun an als Listenoperationen statt Mengenoperationen ausgeführt werden (vgl. Heuer 1992, S. 382).

Bei der Betrachtung von Einkapselung müssen allerdings zwei Sichtweisen unterschieden werden. Diese sind bereits im Manifesto (Atkinson et al.) beschrieben.


**Programmiersprachen-Sicht** Die Programmiersprachen-Sicht der Einkapselung hat ein Objekt, einen Interface-Bereich sowie einen Implementierungs-Bereich. Der Interface-Bereich stellt dabei die möglichen Operationen zur Verfügung die ausgeführt werden können und ist der einzig sichtbare Teil. Der Implementierungs-Bereich teilt sich nochmals in den Daten-Anteil und den prozeduralen Anteil. Der Daten-Teil beinhalt den aktuellen Zustand des Objekts, der prozedurale Anteil beinhaltet die Implementierungen der verfügbaren Operationen (vgl. Atkinson et al., Rubrik: Encapsulation).

**Datenbank-Sicht** Bei der Datenbanksicht sind die Attribute, deren Struktur und das Interface der Methoden in der Anwendung sichtbar. Lediglich die Implementierung der zur Verfügung stehenden Methoden ist versteckt (vgl. Heuer 1992, S. 383).


Beide Formen der Einkapselung haben dabei ihre Berechtigung, je nach dem wo diese Verwendung finden. Für Software-Entwickler ist die Programmiersprachen-Kapselung die bessere und sauberere Wahl, wohingegen die Kapselung aus Datenbank-Sicht Vorteile bringt, wenn deskriptive Aufgaben an die Strukturen gestellt werden sollen ohne dabei über die definierten Methoden zu gehen. Ebenso bietet diese Vorteile, wenn Optimierungsverfahren für die Datenbank genutzt werden sollen (vgl. Heuer 1992, S. 383).

Durch die zwei beschriebenen Möglichkeiten der Einkapselung lassen sich auch diverse Zwischenstufen umsetzen. Ob eine Programmiersprachen-Kapselung durch die ausschließliche Verwendung von ADTs oder eine Datenbank-Kapselung ohne Verwendung von ADTs oder eine Mischform, bleibt abhängig vom jeweiligen Anwendungsfall.


## 2.3 Klassen

Eine *Klasse* ist eine Schablone, aus der neue Objekte erzeugt werden können, die dann die an der Schnittstelle definierten Operationen besitzen. Sie stellt eine Menge von Objekten mit Attributen dar (vgl. Heuer 1992, S. 219).   
Ein *Attribut* wird nur ein mal pro Klasse angelegt und bleibt dann bestehen. Nachfolgend ein Beispiel zur Definition einer Klasse:

```
CLASS Adressen
	{public: STRING PLZ;
	 STRING Ort;
	 STRING Straße;
	 STRING Hausnummer};
```

Es existieren unterschiedliche Arten von Klassen, welche nachfolgend kurz erläutert werden sollen (vgl. Meier 2003, S. 22).   
Zum Einen werden Klassen anhand ihrer Position in der Klassenhierarchie benannt. Dabei gibt es die Unterscheidung zwischen Unter- und Oberklasse. Eine Oberklasse steht wie der Name bereits vermuten lässt in der Hierarchie auf einer oberen Ebene und kann ihre Attribute und dessen Werte an die darunter liegenden Ebenen weitergeben. Die Unterklassen befinden sich in der Hierarchie auf den unteren Ebenen und erben Attribute und dessen Werte von den Oberklassen. Damit sind diese miteinander verknüpft und teilen sich die Informationen, die sie jeweils beinhalten. Ein Programmierer kann somit bei jeder Klasse, die er neu erstellt entscheiden, welche Position sie in der Hierarchie hat und welche Eigenschaften ihr somit zugeordnet werden können (vgl. Heuer 1992, S. 175f.).   
Die Definition einer Klasse in einer objektorientierten Programmiersprache umfasst Attribute und Methoden, die je nach Programmiersprache unterschiedlich eingekapselt sein können. 
Eine andere Art ist ebenfalls an dieser Stelle zu nennen und diese wird als Metaklasse benannt. Bei einer Metaklasse können die Objekte dieser Klasse selber eine solche darstellen. Dabei besitzen Metaklassen die gleichen Elemente wie jede andere Klasse auch, wozu auch Variablen und ein Protokoll zählen. Ein Protokoll wird dabei als die Menge aller Meldungsnachrichten welche einer Klasse zur Verfügung hat, definiert (vgl. Heuer 1992, S. 217f.).
Es können 2 Unterarten der Metaklasse unterschieden werden:

- **Implizite Metaklasse:**   
	Hierbei wird der Aufbau der Klasse vom System entschieden und ausgeführt, womit dieses die 						Verwaltung übernimmt. Der Programmierer muss somit in diesem Fall selber keine Leistung 						erbringen, hat aber auch keinen Einfluss auf den Aufbau (vgl. Heuer 1992, S. 217f.).
- **Explizite Metaklasse:**   
	Im Gegenteil zur impliziten kann hier der Programmierer die Struktur der Klasse selber 							festlegen und hat damit die volle Kontrolle über den Aufbau und Inhalt. Er muss dabei 							jedoch aufpassen, dass er keine Fehler einbaut und er sich möglichst an eine gewisse Logik 						hält (vgl. Heuer 1992, S. 217f.).

Weiterhin kann eine Klasse *Methoden* besitzen, die in ihr gespeichert sind. Kommt es durch die Klassenhierarchie und die Beziehung zwischen den einzelnen Klassen zu einer Vererbung, so können auch die Methoden einer Oberklasse von darunterliegenden Erben verwendet werden. Die Aufgabe von Klassenmethoden ist es maßgeblich, dass diese Aufgaben der Klasse übernimmt. Somit wird also immer nur ein Teil der Klasse angesprochen und nur die Methode, die die jeweilige Aufgabe die benötigt wird ausführt, wird aktiv (vgl. Meier 2003, S. 22).   
Sobald eine Klasse erstellt wird, existieren immer Methoden und auch Eigenschaften, die sozusagen gesetzt sind, egal ob sie benötigt werden oder nicht. Dadurch wird eine Art Einheitlichkeit der Klassen gewährleistet. Weiterhin ist dem Programmierer dann bekannt, dass diese fixen Bestandteile definitiv in jeder Klasse existent sind und er diese nicht erstellen muss (vgl. Meier 2003, S. 23).   
Eine andere Art von Klassen stellen die *Beziehungsklassen* dar. Diese zeichnen sich dadurch aus, dass sie von mindestens zwei anderen Klassen der Hierarchie abhängig sind. Sie besitzen zwar eigene Attribute, sind jedoch von den Inhalten und Methoden der anderen Klassen abhängig und können somit nicht selbstständig arbeiten.
Die *abstrakten Klassen* sind eine weitere Klassenart, die eigentlich keine richtige Klassen sind. Sie sind lediglich künstliche Klassen, die dazu da sind Objektmengen zu verallgemeinern (vgl. Meier 2003, S. 34f.).   
Bei einer *persistenzfähigen Klasse* werden die Attribute dauerhaft in der Datenbank gespeichert (vgl. Meier 2003, S. 40). Dabei können diese Klassen zwei verschiedene Objektarten in sich tragen:

- **transiente Objekte:**   
    Sie sind dauerhafte Objekte, die ihren Zustand von Zeit zu Zeit abspeichern, so dass nach einem Absturz des Systems der letzte   
    Zustand wiederhergestellt werden kann (vgl. Meier 2003, S. 40).
- **persistente Objekte:**   
    Sie sind nicht dauerhaft und speichern somit ihren Zustand nicht ab. Kommt es zu einem 						       	   Systemabsturz, so existiert dieses Objekt nicht mehr und muss erst neu erstellt werden (vgl. Meier 2003, S. 40).

Bei einer objektorientierten Datenbank werden die Klassendefinitionen und die Instanziierungen der jeweiligen Klasse gespeichert. Dadurch sind diese einwandfrei identifizierbar. 
In den ersten Versionen von objektorientierten Datenbanken und deren Systeme waren Klassen nach außen hin nicht geschützt und es konnte somit auf alle Attribute zugegriffen werden. Dies stellte ein Sicherheitsproblem dar, da so bei einem Fehler in der Datenbank der Inhalt der Attribute eingesehen werden konnte von Teilen des Systems, welche dazu keine Berechtigung haben sollten (vgl. Heuer 1992, S. 175).

Zwischen Klassen können unterschiedliche *Beziehungen* herrschen. Diese erhalten insbesondere bei einer grafischen Umsetzung der Struktur einer Datenbank eine große Bedeutung. Jede Art der Beziehung wird durch verschiedene Darstellungsarten gekennzeichnet. Diese sind weltweit gültig und somit überall auf die gleiche Art und Weise deutbar.
Dabei gibt es unterschiedliche Kombinationsmöglichkeiten:

- ausgehend von Oberklasse zu Unterklasse
- ausgehend von Unterklasse zu Oberklasse (vgl. Heuer 1992, S. 193)

Bei der Erstellung einer Klasse sollte unbedingt auf deren Namensgebung besonderes Augenmerk gelegt werden. Denn ist dieser nicht eindeutig mit dem Inhalt der Klasse identifizierbar, so kommt es zu eventuellen Missverständnissen und Kommunikationsproblemen. Deshalb sollte der Klassenname immer inhaltlich auf die Klasse hinweisen. 



## 2.4 Vererbung

Die *Vererbung* stellt in objektorientierten Datenbanken einen wichtigen Bereich dar. Durch sie ist es möglich verschiedene Klassen miteinander zu verbinden und sich deren Attribute und Methoden zu nutze zu machen. Dabei kann eine Klasse die Eigenschaften einer anderen erben oder sie selbst an Klassen vererben. Diese Klassen stehen dann jeweils in Beziehung zueinander, was grafisch verdeutlicht wird durch die Verwendung verschiedener Symbole, die eindeutig aufzeigen wer von wem erbt (vgl. Hughes 1992, S. 53).   
Es wird zwischen unterschiedlichen Arten der Vererbung unterschieden:

- **Mehrfachvererbung:**   
  Eine Klasse erbt von mehreren anderen Klassen und nutzt deren Attribute und Methoden (vgl. Heuer 1992, S. 209f.).
- **Einfache Vererbung:**   
  Jede Klasse darf nur von einer anderen Klasse erben und deren Attribute verwenden. (vgl. Heuer 1992, S. 209f.)
- **Wertevererbung:**   
  In Objektorientierten Datenbanken können auch die Werte der Attribute einer Klasse mit vererbt werden (vgl. Heuer 1992, S. 206).

Dabei ist zu beachten, dass nicht jede Sprache die Möglichkeit der Mehrfachvererbung anbietet. Im Bereich der objektorientierten Datenbanken gehört dies jedoch zu den gängigen Umsetzungen (vgl. Heuer 1992, S. 209f.).   
Durch die Deklaration einer Klasse als *privat* kann hingegen erreicht werden, dass deren Methoden nicht an andere Klassen vererbt werden können. Dies zeigt, dass es recht viele Möglichkeiten in der Vererbung gibt, die je nach Szenario verwendet werden können. Dies bietet eine hohe Flexibilität und schafft die Möglichkeit eines Aufbaus nach Wunsch (vgl. Heuer 1992, S. 386).

Bei Klassen einer hierarchischen Beziehungsstruktur kommt der Begriff der *Generalisierung* zum Tragen. Diese besagt, dass Klassen in übergeordnete oder untergeordnete Subklassen verfeinert werden. Der Begriff der *Spezialisierung* hingegen befasst sich mit der inversen Sicht. Dabei werden eine Klasse oder mehrere Subklassen erzeugt, die die übergeordnete Klasse verfeinern. Das Prinzip der Generalisierung und Spezialisierung sind Beziehungen, die durch die Möglichkeit der Vererbung in objektorientierten Datenbanken realisiert werden (vgl. Meier 2003, S. 30).

Das Prinzip der Vererbung hilft nicht nur eine übersichtliche Struktur zu gestalten und unnötige doppelte Attribute zu vermeiden. Ferner wird es auch verwendet, um eben diese Beziehungen zwischen den Klassen aufzuzeigen und deutlich zu machen, welche Klassen auf die gleichen Attribute zurückgreifen und somit einen leichteren Aufbau einer Datenbank zu ermöglichen. Weiterhin ist die Vererbung gerade für größere Unternehmen und Projekte als sehr hilfreich anzusehen. Bei einem großen Umfang einer Anwendung ist es umso wichtiger, dass die einzelnen Programmierer, die an dieser arbeiten, sofort erkennen können wie die einzelnen Elemente zusammenarbeiten. Es muss davon ausgegangen werden, dass neue Angestellte in das Projektteam gelangen und diese müssen sich ohne lange Einarbeitungszeit zurecht finden (vgl. Hughes 1992, S. 69).   
Auch der Faktor der Erweiterbarkeit eines Projekts ist durch die Möglichkeit der Vererbung weniger risikoreich. So können Änderungen und Neuerungen einfacher in das System eingebaut bzw. entfernt werden ohne die Struktur an sich komplett verändern zu müssen. Dies spart viel Aufwand und ist gerade für Unternehmen ein wichtiger Kostenfaktor (vgl. Hughes 1992, S. 69).

## 2.5 Operationen
Nachdem, wie in vorausgehenden Kapiteln beschrieben, komplexe Typen beim Umgang mit objektorientierten Datenbanken, fixer Bestandteil dieser sind, ist es ebenso erforderlich entsprechende Operationen nutzen zu können, um mit diesen komplexen Typen arbeiten zu können. Passend zu den bereits bekannten drei Typkonstruktoren, existieren für diese entsprechende  Standardoperatoren (vgl. Heuer 1992, S. 285).

**Tupelkonstruktor** Für den Tupelkonstruktor existieren die Operatoren "Komponentenzugriff" sowie "Test auf Gleichheit/Ungleichheit". Beim Komponentenzugriff kann in einer Art Kurzform auf Elemente zugegriffen werden, bspw. in Beispiel 1 aus dem Abschnitt Datentypen per Adresse.Ort auf den Ort. Der Operator "Test auf Gleichheit/Ungleichheit" bietet die Möglichkeit zwei komplexe Tupel mit Komponenten  zu vergleichen. Erforderlich dazu ist, dass diese im Kontext Anzahl und Typ zumindest verträglich sind.

**Mengenkonstruktor** Für den Mengenkonstruktor existieren diverse Operationen. Diese sind "Zugriff auf ein Element durch Iteratoren", "Test auf ein Element", "Vergleich von Mengen" sowie weitere Mengenoperationen (Vereinigung, Differenz, Durchschnitt). Durch die Iteratoren können alle Elemente der Menge durchlaufen werden. Der "Test auf Elemente" beinhaltet hingegen Vergleichsoperatoren für Mengen wie gleich, echte Teilmenge von, unechte Teilmenge von, ungleich, echte und unechte Obermenge von. Die zuvor genannten üblichen Mengenoperationen Vereinigung/Durchschnitt/Differenz können nur verwendet werden, wenn die Elementtypen, mit denen die Operationen ausgeführt werden sollen, hierfür geeignet sind.

**Listenkonstruktor** Beim Listenkonstruktor, der Elemente in geordneter Reihenfolge enthält, können folgende Operatoren genutzt werden. Zufriff auf erstes Element (first), nächstes Element (next) und letztes Element (last). Ebenso ist es möglich eine Teilliste ohne erstes Element (tail) zu erstellen. Zusätzlich kann auch der Listenkonstruktor mittels Iterator in vorgegebener durchlaufen werden. Das Zusammenfügen von Listen (Konkatenation) bietet sich ebenfalls an, verträgliche Elementtypen vorausgesetzt.
(vgl. Heuer 1992, S. 285)


## 2.6 Der ODMG-Standard

Im Bereich der objektorientierten Datenbanken existierten lange Zeit keine einheitlichen Vorschriften und Vereinbarungen. Deshalb schlossen sich im Jahre 1991 mehrere Unternehmen zusammen, um einen Standard zu definieren. Daraus entstand die ODMG - Object Data Management Group. Die folgenden Gründer waren dabei:

- Object Design
- Objectivity
- ONTOS
- O2 Technology
- Versant Object Technology
- SunSoft (vgl. Hohenstein et al. 1996, S. 20)

Damit auch sichergestellt werden konnte, dass die getroffenen Entscheidungen auch sinnvoll sind und die bestmöglichsten Einstellungen  getroffen wurden fand sich eine Gruppe aus unterschiedlichen Firmen, die viel in dem Bereich der IT tätig sind und somit viel Erfahrung aufweisen, um vertrauensvolle Kritik äußern zu können. Die Mitglieder dieser Gruppe testete die jeweiligen Versionen des ODMG und gaben ihre Erkenntisse weiter an die Entscheider. Daraus entwickelte sich im Laufe der Jahre ein immer mehr verfeinerte OMGD-Standard. Zu den Beratern der Testergruppe gehören unter anderem folgende Unternehmen:

- Hewlett-Packard
- Sybase
- Digital Equipment
- Texas Instruments
- Poet (vgl. Hohenstein et al. 1996, S. 20)

Nach diversen Versionen, die stetig weiterentwickelt wurden, ist die Version 3.0 die derzeit aktuellste. Diverse Quellen besagen, dass derzeit an der Version 4 gearbeitet wird.
Der Standard besteht dabei aus folgenden Teilen:

- ein einheitliches Objektmodell
- eine dieses Modell realisierende Objektdefinitionssrache mitsamt einer Objektbeschreibungssprache
- ein zugehöriges objektorientiertes Metamodell
- eine modelladäquate Abfragesprache
- sprachkonsistente Implementierungsvorschriften für die Anbindung von C++, Smalltalk und Java (vgl. Meier 2003, S. 74f.) 

Durch die schwindende Popularität von objektorientierten Datenbanken in den letzten Jahren löste sich die ODMG auf und der Standard wird nun unter der OMG begleitet.   

Die Sprache ODL (Object Definition Language) wurde eigens dazu entwickelt, um Objekttypen zu spezifizieren. Da sie als Spezifikationssprache neutral ist, kann sie in unterschiedlichen Programmiersprachen verwendet werden. Durch die Verwendung der ODL wird ein Schema definiert (vgl. Türker 2006, S. 73).   
Die OML (Object Manipulation Language) führt Manipulationen in der Datenbank durch (vgl. Meier 2003, S. 77).   

Als Abfragesprache wurde OQL (Object Query Language) festgelegt und damit eine einheitliche Struktur geschaffen, die vorher nicht vorhanden war und deshalb für Verwirrug bei den Programmierern sorgte, da sie unterschiedliche Sprachen verwenden konnten. Es handelt sich um eine deskriptive Abfragesprache, welche frei oder eingebettet verwendet werden kann. Das Ergebnis einer Abfrage in OQL ist entweder ein Objekt, ein Wert oder eine Sammlung von beidem (vgl. Meier 2003, S. 81).   
Nachfolgend wird ein Beispiel einer OQL-Anfrage gezeigt:

```
Gebe alle Namen aus von Leuten die kein Tutor sind:

SELECT p.name
FROM p in People
WHERE not (p.name in SELECT t.name FROM in TAs)
```


## 2.7 Datenbankmodelle
Im Bereich der OODBs gibt es eine Vielzahl von Datenbankmodellen. Einige dieser Datenbankmodelle werden im folgenden näher betrachtet unter der Prämisse der verwirklichten Konzepte. Ebenso liegt der Fokus auf dem Strukteil der OODBs und weniger auf dem Operationenteil samt Abfragesprachen.

Folgende Kategorisierung ist dabei denkbar. Im Detail werden anschließend die Modelle mit Klassen und Strukturhierarchie näher betrachtet, da diese dem Modell von OODBs entsprechen, welches in vorherigen Kapiteln beschrieben wurde.


**Modelle mit Typkonstruktoren** Diese sind wertebasiert, noch nicht objektorientiert und umfassen diverse Modelle für geschachtelte Relationen und komplexe Objekte. Dabei existieren als Besonderheiten die PNF-Relation sowie eine Erweiterung verallgemeinerte geschachtelte Relationen.

**Modelle mit Beziehungen und Objektidentität** In dieser Kategorie lassen sich Erweiterungen des Entity-Relationship sowie funktionalen Modells zusammenfassen. Ebenso Modelle für zusammengesetzte (komplexe) Objekte.

**Modelle mit Klassen und Strukturhierarchie** Die Modelle in dieser Kategorie entsprechen den in vorangegangenen Kapiteln beschriebenen Anforderungen und Eigenschaften von OODBs. Als Beispiele werden die Datenmodelle Iris, O2, Extra, Extrem und Cocoon herangezogen.
(vgl. Heuer 1992, S. 401f.)

### 2.7.1 Iris
Iris als Datenbankmodell gehört zum objektorientierten Datenbanksystem Iris und besteht aus Objekten, Typen und Funktionen. Es ist als Erweiterung des funktionalen Datenmodells zu sehen. Bei Betrachtung der einzelnen Konzept-Komponenten wie Standard-Datentypen, Typkonstruktoren, Objektidentität, Klassen, Beziehungen und Strukturhierarchie können diese alle als in Iris verwirklicht betrachtet werden. Bei den Typkonstruktoren steht nur TUPLE OF zur Verfügung. SET OF ist simulierbar und somit ebenfalls verwendbar.
Typen können in Iris einen dynamischen Wertebereich haben und als Objektvorrat verstanden werden. Ebenso können Objekte in mehreren Klassen vorkommen und diese auch wechseln. Beziehungen werden mit Funktionen dargestellt. Diese weisen sehr allgemeine Kardinalitätsbedingungen auf. Zusätzlich finden Funktionen Anwendung zur Repräsentation von Attributen und Methoden. Als Kardinalitätsbedingen finden Intervallangaben [min, max] Anwendung. Diese geben die Mindest- sowie Maximalanzahl an Argument- und Ergebnistypen einer Funktion an. (vgl. Heuer 1992, S. 413ff.)

### 2.7.2 O2
Das Datenbankmodell O2 ist auch die Grundlage des gleichnamigen OODBS. Bei den Konzeptkomponenten zeigt sich folgendes Bild. Es gibt Standarddatentypen ebenso wie Typkonstruktoren. Bei den Typkonstruktoren gibt es neben den bekannten TUPLE OF, LIST OF, SET OF noch BAG OF. Die Objektidentität  wird sowohl durch abstrakte Werte wie auch durch von Benutzern vergebene Namen erreicht. Klassen samt Instanzen lassen sich ebenfalls definieren. Beziehungen hingegen sind nur darstellbar wenn diese sich mit Komponentenobjekten oder beliebigen Relationen ohne Integritätsbedingungen beschreiben lassen. Bei der Strukturhierarchie kommt eine Typhierarchie zum Einsatz, die mit Mehrfachvererbung implementiert ist. Konflikte, die bei der Mehrfachvererbung auftreten können, werden zwangsweise aufgelöst (Umbenennung). (vgl. Heuer 1992, S. 415f.)

### 2.7.3 Extra
Extra ist ein Datenbankmodell, welches aus EXODUS, einem erweiterbaren Datenbanksystem heraus erzeugt wurde. Extra stellt dabei die Abkürzung für **Ex**tensible **T**ypes for **R**elations and **A**ttributes dar. Als Datentypen kommen neben den Standard-Datentypen noch benutzerdefinierte ADTs hinzu. Als Typkonstruktoren stehen TUPLE OF, SET OF und ARRAY OF zur Verfügung. Die Objektidentität wird durch REF-Typen in Form von Surrogaten verwirklicht. Klassen hingegen können nur simuliert werden, indem Instanzen zu Typen angelegt werden. Objekte bestimmter Typen können diesen Instanzen hinzugefügt werden. Die Erstellung von Beziehungen ist nicht explizit möglich, sondern lässt sich nur über Relationen oder Komponentenobjekte simulieren. Besonderheit ist die Unterscheidung zwischen der Art der Verweise. REF-Verweise (gemeinsame Komponentenobjekte) oder OWN REF-Verweise (private Komponentenobjekte). Die als Typhierarchie konzipierte Strukturhierarchie bietet die Möglichkeit der Mehrfachvererbung, ebenso Möglichkeiten zur Konfliktauflösung. Der Benutzer kann über Pfadangaben im Konfliktfall zwischen Attributen unterscheiden. Bei fehlender Pfadangabe wird das Attribut der ersten Oberklasse (bei linearer Ordnung) automatisch verwendet. (vgl. Heuer 1992, S. 416f.)

### 2.7.4 Extrem
Extrem war zu Anfang eine Erweiterung eines relationalen Modells auf Basis von geschachtelten Relationen sowie Surrogaten. Im Laufe der Zeit hat sich Extrem aber zu einem vollständigen OODM entwickelt. Extrem ist die Abkürzung für **Ext**ended **Re**lational **M**odel und Teil des OSCAR-Systems. Extrem bietet neben Standard-Datentypen und ADTs die Typkonstruktoren TUPLE OF, SET OF und LIST OF. Erweitert werden diese durch den Konstruktor FUNCTION OF, welcher funktionseinbettende Attribute definiert. Die Objektidentität ist über abstrakte Domänen gegeben, welche den Surrogat-Vorrat für die Objektidentitäten bilden. Klassen sind im Extrem-Datenbankmodell ebenfalls vorhanden, wobei zu jeder eine zugrundeliegende Domäne existiert. Diese Domäne ist ein abstrakter Typ (abstrakte Klasse) oder ein Durchschnitt bzw. eine Vereinigung anderer Instanzen (freie Klasse). Objekte können in diesem Modell einer abstrakten und mehreren freien Klassen angehören und zwischen den freien Klassen wechseln. Beziehungen sind in diesem Modell nur über Komponentenklassen simulierbar, wobei 1:1, 1:n und m:n Beziehungen möglich sind. Die Typhierarchie setzt sich aus zwei entkoppelten Komponenten zusammen, der Klassen- und Typhierarchie. Dabei ist eine Mehrfachvererbung möglich und Konflikte werden bereits während der Schemadefinitionszeit durch Umbenennung aufgelöst. Zusätzlich wird zwischen einer Spezialisierung und Generalisierung unterschieden (beliebige Klassen spezialisieren oder generalisieren sich zu freien Klassen).
(vgl. Heuer 1992, S. 417f.)

### 2.7.5 Cocoon
Als letztes OODBS in dieser Reihe ist Cocoon zu nennen. Dieses bietet neben den Standard-Datentypen samt ADTs bei den Typkonstruktoren allerdings nur SET OF. Die Objektidentität ist ebenfalls gegeben, da Objekte zu abstrakten Domänen gehören. Ebenso bietet Cocoon Klassen, welche Objekte eines abstrakten Typs sammeln. Diese werden jeweils in einer zugehörigen Instanz zusammengefasst. Die Klassenzugehörigkeit von Objekten kann wechseln und Objekte mehreren Klassen gleichzeitig angehören. Einige Arten von Beziehungen lassen sich in Cocoon simulieren. Hierzu werden Funktionen zur automatischen Verwaltung von inversen Funktionen und Komponentenobjekten  herangezogen. Die Strukturhierarchie liegt als getrennte Typ- und Klassenhierarchie in Cocoon vor. In dieser ist die Mehrfachvererbung möglich. Konflikte werden vermieden, da Funktionsnamen global eindeutig sind.
(vgl. Heuer 1992, S. 419f.)

Die zuvor beschriebenen Eigenschaften unterschiedlicher objektorientierter Datenbankmodelle hat gezeigt, dass die zu Anfang diskutierten Konzepte objektorientierter Datenbankmodelle, wie Standard-Datentypen, Typkonstruktoren, Objektidentität, Klassen, Beziehungen und Strukturhierarchie in unterschiedlicher Form implementiert sein können.

## 2.8 Datenbank- und Abfragesprache

Für den Bereich der objektorientierten Datenbanken wurde eine neue Abfragesprache entwickelt und standardisiert, die den Namen OQL (Object Query Language) trägt. Im Wesentlichen basiert sie auf der Abfragesprache SQL, wurde aber auf objektorientiert umgeändert und weiterentwickelt. Mit OQL können Datenbanken erstellt und verwaltet werden. Um eine bessere Übersicht zu erhalten worin die Unterschiede zwischen SQL und OQL liegt, sollen diese nachfolgend ausgehend von OQL betrachtet werden:

- OQL
	- unterstützt Objektverweise in den erstellten Tabellen	
	- Objekte können in anderen Objekten verschachtelt sein
	- kann mathematische Berechnungen in OQL-Anweisungen ausführen
	- einige Schlüsselwörter aus SQL, die hier nicht angewendet werden können, wurden entfernt
	- es werden weniger Funktionen angeboten
	- die Geschwindigkeit wird nicht von der Größe der Datenbank beeinflusst
	- Unterschied in dem Aufbau einer Abfrage

(vgl. IBM)

Zunächst ist zu beachten, dass es zwei generelle Unterscheidungen bei den Sprachen gibt. Dabei wird zwischen Systemen unterschieden, die eine vollkommene Unabhängigkeit der Sprache bietet und denjenigen, die nur teilweise unabhängig sind.
Als Datenbanksprachen sind die gängigen Programmiersprachen anzusehen. Die verschiedenen Datenbanksysteme unterstützen dabei zumeist den gleichen Kern aus weit verbreiteten Sprachen, der aus Java, C++ und XML besteht. Die Unterschiede sind in weiteren unterstützten Sprachen zu sehen. Dabei bieten Systeme, mit einer hohen Auswahl an Sprachen für Unternehmen eine bessere Möglichkeit, da sie so dieses System auch für Projekte verwenden können, die eine andere Sprache benötigen als andere. In so einem Fall muss also nicht das System gewechselt werden, weil dieses nicht den Anforderungen entspricht. Ein Wechsel eines Systems zieht immer Nachteile wie Einarbeitungsaufwand und Kosten für dieses nach sich. Allerdings sind die Kosten für ein System mit Unterstützung vieler Sprachen auch höher. Deshalb sollte jeder Programmierer bzw. ein Unternehmen sich vorher darüber im Klaren sein wofür genau sie das System verwenden wollen.

## 2.9 Datenbanksysteme

Um eine Datenbank möglichst effizient aufbauen und verwalten zu können werden häufig Datenbanksysteme verwendet. Diese sind für die Speicherung von Daten ebenso verantwortlich wie für den Zugriff auf die so hinterlegten Informationen.
Generell ist festzuhalten, dass es verschiedene Anbieter von objektorientierten Datenbanken gibt, welche durchaus Unterschiede aufzuweisen haben, auch wenn das Prinzip an sich im Kern gleich ist. Dennoch ist es wichtig sich mit den unterschiedlichen Möglichkeiten auseinanderzusetzen, um möglichst den passenden Anbieter für das gewünschte Projekt zu wählen. Als sinnvoll anzusehen ist es sich bereits gedanklich mit weiteren noch folgenden Projekten zu beschäftigen, um möglichst eine Wahl zu treffen, die nicht bei jeder neuen Entwicklung wieder geändert werden muss, was eine Einarbeitungszeit der Programmierer nach sich zieht.
Anzumerken ist hier noch, dass es in den Anfängen der objektorientierten Datenbanken mehr Anbieter zu verzeichnen gab, da die Verbreitung damals noch anders verteilt war und diese noch nicht von den relationalen Modellen verdrängt wurden.
Weiterhin existieren zwei unterschiedliche Arten von Datenbanksystemen. Dabei muss zwischen lizenzfreien und Systemen mit Lizenzen unterschieden werden. Für Systeme mit Lizenzen müssen Anwender eine Gebühr bezahlen, die es ihnen aber im Gegenzug ermöglicht mit dem meist aufwändiger gestaltetem System arbeiten zu können. Es gibt auch eine Mischform, bei der ein System beide Modelle ermöglicht. Dabei unterscheidet sich der Umfang der Möglichkeiten innerhalb der Anwendung.
Zu beachten ist auch welche Schnittstellen und Werkzeuge die einzelnen Systeme unterstützen. Gerade im Bereich der objektorientierten Datenbanken ist es wichtig sich vor einer Wahl darüber zu informieren, da durch die inzwischen geringere Verbreitung von OODB nur bedingt Möglichkeiten einer Integration bestehen.

Nachfolgend sollen nun zwei Vertreter der bekanntesten Datenbanksysteme näher erläutert werden, um einen Einblick über die Möglichkeiten zu geben.

### 2.9.1 db40

Zunächst wird an dieser Stelle db4o betrachtet. Dabei handelt es sich um eine objektorientierte Datenbank, die ihren Ursprung im Jahr 2001 fand. Sie ist nicht nur auf ein bestimmtes Betriebssystem beschränkt und somit flexibel einsetzbar. Die aktuelle Version 8.0 ist vom Februar 2011 und wurde von der Versant Corporation entwickelt. Die Datenbank ist sowohl als freie als auch als kostenpflichtige Lizenz verfügbar, so dass auch nicht-kommerzielle Anwender db4o nutzen können. Die Versionen unterscheiden sich im jeweiligen Umfang der Funktionen und Möglichkeiten, die aber für Anfänger ausreichend sind und sich eher auf Unternehmen beziehen. Da sich db4o durch seine kleine Dateigröße von nur 700K auszeichnet und es nur aus einer jar-Datei besteht, kann es einfach integriert und verwendet werden. Es wurde für Java und Mono konzipiert, kann aber auch mit anderen Sprachen verwendet und zusammengeführt werden zu einer Anwendung. Es kann nicht von außen administriert werden und bietet deshalb eine hohe Sicherheit vor Angriffen von außen. Wegen seiner kleinen Dateigröße ist db4o gut geeignet für mobile Anwendungen, da dort eine schnelle Reaktionszeit durch minimale Dateigrößen notwendig ist. Die Installation ist schnell und einfach und kann auch von Anfängern durchgeführt werden. Dazu müssen nur ein paar kurze Befehle ausgeführt werden. Die Speicherung von Objekten erfolgt durch wenige Zeilen Code und diese werden dauerhaft in die Datenbank integriert. Die Struktur von db4o verzichtet komplett auf Tabellen, wodurch eine übersichtliche und einfache Struktur verwirklicht werden kann. Die Datenbank kann direkt in eine Anwendung integriert werden und muss nicht erst extern eingebunden werden. Dies erleichtert den Integrationsaufwand und spart Zeit. Für die objektorientierte Datenbank ist keine bestimmte Abfragesprache nötig, was bedeutet, dass sie ohne weitere Erfahrung verwendet werden kann. Auch für erfahrene Programmierer ist dies praktisch, da sie so bei einem Wechsel der Datenbank nicht jedes Mal ein neues Konzept erlernen und anwenden müssen. Auch die Tatsache, dass es recht viel Literatur zu dem Thema db4o gibt ist für Anfänger hervorragend geeignet und macht den Einstieg leichter. In db4o können Objekte gespeichert werden ohne dass dies einer weiteren Begleitung benötigt. Somit können Objekte ohne weitere Probleme und mit weniger Fehlern in die Datenbank integriert werden. Es ist weder notwendig die zu speichernden Klassen von Oberklassen abzuleiten noch müssen spezielle Schnittstellen implementiert werden. Insgesamt erleichtert db4o die Wartung und das Kennenlernen von Programmierung. Durch die kurze Einarbeitungszeit ist es ideal für jede Form von Anwendern. Durch den einfachen Aufbau, der mit wenigen Zeilen Code erstellt werden kann, ist die objektorientierte Datenbank auch für komplexe größere Projekte mit aufwändigerer Struktur geeignet. Da die Datenbank auf drei unterschiedliche Abfragemethoden zurückgreifen kann, ist sie zusätzlich recht flexibel in der Anwendung. So können Programmierer Abfragen auf die Art und Weise durchführen, die sie bevorzugen und es muss keine einheitliche Verwendung stattfinden (vgl. SCHÜRMANN, 2007), (vgl. FH Köln).

### 2.9.2 ZODB

Die Datenbank ZODB ist ein weiterer Vertreter der objektorientierten Datenbanken. Das System wurde 2009 auf den Markt gebracht und wurde für die Programmiersprache Python entwickelt. Damit bietet sie sich als Alternative zu db4o an, welches Python nicht unterstützt. Im Gegensatz zu db4o wird ZODB stetig weiterentwickelt, die neuste Version stammt vom November 2016. ZODB kann ähnlich wie db4o mit wenigen Zeilen installiert und verwendet werden. Auf der Homepage der Datenbank finden sich mehrere kurze Tutorials, die es ermöglichen einen schnellen Einstieg erhalten zu können. Weiterhin werden die einzelnen Möglichkeiten anschaulich erläutert. Somit ist es auch Anfängern möglich sich schnell mit der Datenbank auseinanderzusetzen, um mit ihr effizient arbeiten zu können. Die Datenbank hat eine Möglichkeit integriert, um einfach und schnell Tests durchführen zu können, um den erstellten Code auf Fehler und Probleme untersuchen zu können. ZODB eignet sich für Programmierer, die sich voll und ganz auf die Erstellung der Datenbank konzentrieren wollen ohne dabei viel Code erstellen zu müssen. Dabei bietet sie die Möglichkeit einer übersichtlichen Struktur des Aufbaus sowie der integrierten Daten. Durch die Konzentration auf die Sprache Python sollten sich Anwender jedoch vorher bewusst machen, dass sich Komponenten, die Python nicht unterstützen auch nicht mit ZODB verbinden lassen. Wie auch db40 verfügt die Datenbank über eine recht große Community welche bei auftretenden Problemen von enormer Hilfe ist. Weiterhin ist es möglich mit ZODB auch Webanwendungen gestalten zu können. Damit hebt es sich von anderen Anbietern objektorientierter Datenbanken ab und greift in ein aktuelles Feld der Programmierung ein (vgl. ZODB).

Der Einblick in den Aufbau der beiden Beispiele objektorientierter Datenbanken hat gezeigt, dass sich diese durchaus unterscheiden hinsichtlich der Möglichkeiten und der Funktionen. Während ZODB auf Python basiert arbeitet db4o mit Java und so können Programmierer die Wahl nach ihrer bevorzugten Programmiersprache auswählen. Weiterhin ist ZODB auch für Webanwendungen anwendbar, was nicht bei allen Systemen der Fall ist. Je nachdem für welches Projekt die Datenbank demnach eingesetzt werden soll, sind diese Möglichkeiten vorher genau zu analysieren und abzuwägen.

## 2.10 Vor- und Nachteile OODB

### 2.10.1 Vorteile

Ein großer Vorteil von der Verwendung objektorientierter Datenbanken ist die Effizienz, die diese mit sich bringt. Es ist nicht einfach eine objektorientierte Programmiersprache in eine andere Datenbankart zu integrieren, da dort eine Trennung der Daten und Funktionen stattfinden muss. Deshalb ist es von Vorteil wenn dort mit objektorientierten Datenbanken gearbeitet wird, da diese Trennung nicht von Nöten ist und eine Integration vereinfacht. Die Konzepte der objektorientierten und relationalen Datenbank unterscheiden sich in einigen wichtigen Punkten voneinander. Deshalb ist eben diese Integration in ein andersartig gestaltetes Konzept als schwieriger zu betrachten. Zudem können bei der Integration Probleme auftreten, deren Beseitigung Fachwissen und Zeit benötigt. Außerdem müssen die Programmierer sich so mit beiden Konzepten auskennen, um diese richtig miteinander verknüpfen zu können. Bei einer reinen objektorientierten Umsetzung ist das Fehlerrisiko sehr gering. Die Vermittlung zwischen unterschiedlichen Konzepten, die ansonsten von Nöten wäre, fällt somit weg. Normalerweise wird diese durch Softwarekomponenten realisiert, die zusätzlich verwendet werden müssen und einen erhöhten Aufwand bedeuten.   
Für komplexere Systeme ist der Einsatz von objektorientierten Datenbanken von Vorteil, da diese den Programmierern erlauben auch komplexere Datentypen verwenden zu können. Ebenso ist das Speichern von Medieninhalten möglich, was nicht bei jeder Datenbank automatisch als Möglichkeit integriert ist.   
Durch die Verwendung von objektorientierten Datenbanken wird die Entwicklungszeit verkürzt und es gibt keinen Modellbruch. Der strukturierte Aufbau einer Datenbank sorgt für eine übersichtliche Gestaltung, die es dem Programmierer erlaubt in der Entwicklung Zeit zu sparen.   
Bei objektorientierten Datenbanken werden bei dem Einpflegen neuer Daten automatisch ID‘s vergeben. Dabei wird der Wert der ID je neuem Eintrag um einen Zähler erhöht. Bei einem relationalen System hingegen müssen in der Datenbank extra Schlüssel definiert werden für jeden Eintrag, was nicht automatisch geschieht. Nur so kann gewährleistet werden, dass ein Objekt eindeutig zugeordnet werden kann.   
Da auf die Erstellung von komplexen Datenobjekten verzichtet werden kann, ist die Verwendung einer objektorientierten Datenbank einfacher zu strukturieren und somit auch übersichtlicher zu gestalten. Dies begründet sich darin, dass die Objekte über ihre Beziehungen, die in der Datenbank hinterlegt sind, abgefragt werden können.   
In einer objektorientierten Datenbank ist es einfacher auf die Daten in dieser zugreifen zu können. Dies begründet sich auf die Beziehungen zwischen den Klassen, da die Datenbank so genau weiß welche Daten zusammengehören und miteinander verknüpft sind. Bei einer Abfrage von Objekten aus einer objektorientierten Datenbank können gezielt einzelne Objekte abgefragt werden. Dies ist bei SQL-Datenbanken nicht der Fall, da dort als Ergebnis eine Gruppe von Elementen folgt. Die Datenbank ist demnach in der Lage zu sehen welche Daten zusammengehören und kann deshalb gezielte Resultate ausgeben. Dies erleichtert es einem Programmierer gezielte Abfragen an die Datenbank stellen zu können und es erspart Zeit das richtige Objekt aus der Menge der Ergebnisse erst finden zu müssen.   
Die Performance von Abfragen kann in objektorientierten Datenbanken gesteigert werden, da hier keine Verknüpfungen von Relationen existieren, dies aber in anderen Datenbanken durchaus der Fall ist. Deshalb können Abfragen über die Funktionen der Objekte erfolgen oder es kann eine Abfragesprache verwendet werden. Dies bietet ein hohes Maß an Flexibilität, da der Programmierer nicht nur auf eine Möglichkeit festgelegt ist. Weiterhin ist es in jeder Anwendung das Ziel eine möglichst hohe Performance zu erreichen, was hier unterstützt wird.   
Durch die Möglichkeit der Wertevererbung  bietet objektorientierte Datenbanken eine direktere Art und Weise innerhalb der Klassenhierarchie mit den Daten zu arbeiten und es kann auf weitere Definitionen und Weitergabe von Informationen, die erst erzeugt werden müssen, verzichtet werden. Für den Programmierer ist es auch einfacher, wenn er so mehrere Schritte in einem vollziehen kann und sich auf das weitere Vorgehen konzentrieren kann, ohne Gefahr zu laufen am Ende etwas übersehen zu haben.   


### 2.10.2 Nachteile

Die Verwendung von OODBs bietet neben einigen Vorteilen auch diverse Nachteile. Kommt man an dieser Stelle nochmal zurück, zum zu Anfang genannten Beispiel 2 (Objekttyp Bücher), zeigt sich, dass Daten redundant gespeichert werden müssten, falls z.B. der Verlag um weitere Informationen wie Adresse o.ä. angereichert würde. Sobald in einem mehrere Bücher erscheinen, würden diese Zusatzinformationen zum Verlag mehrfach gespeichert werden (vgl. Heuer 1992, S. 286).
Ebenso wird genannt, dass durch die geringe Verbreitung auch nur eine geringe Unterstützung weit verbreiteter Tools und Schnittstellen zur Datenanalyse verfügbar sind. Die hohe Komplexität von Objekten kann zusätzlich bei bestimmten Operationen zu massiven Performance Problemen führen (vgl. Noth 2013).
Weitere Nachteile nennt Dare Obasanjo (vgl. Obasanjo 2001) in den Bereichen Schema-Änderungen, Sprachenabhängigkeit und dem Mangel an Ad-Hoc 
Abfragemöglichkeiten. Im Bereich Schema-Änderungen ist es vor allem der Mehraufwand, der durch Anpassungen an anderen Klassen einer Anwendung anfällt, als Folge der Änderung an einer Klasse, was letztendlich zu einem Neu-Kompilieren des Gesamtsystems führt. Genauso kann das Aktualisieren diverser Objekte mit einer deutlichen Downtime einhergehen, abhängig von der Größe der Datenbank. Nachteile durch eine Sprachenabhängigkeit werden begründet durch die starke Verknüpfung von OODBMS und Programmiersprache / API, welche meist die einzige Möglichkeit darstellen, mit den Daten im jeweilen OODBMS zu arbeiten. Der Mangel an Ad-Hoc-Abfrage-Möglichkeiten macht die Flexibilität von OODBMS zusätzlich stark vom Design des Gesamtsystems abhängig, wobei diese meist nicht in der Felibilität wie in RDBMS einsetzbar sind.
Des Weiteren werden Punkte wie kein allgemeingültiges Datenmodell, fehlende Erfahrung bei Usern und starke Konkurrenz durch andere Datenbanksysteme (vor allem RDBMS) genannt (vgl. Thakur). Neben den allgemeingültigen Datenmodell mangelt es auch sonst an Standardisierung. So gibt es bspw. keine einheitliche objektorientierte Abfragesprache. Eine sonst übliche Abfrageoptimierung kollidiert bei OODBMS mit dem Konzept der Kapselung, da die tiefer liegenden Strukturen dem Entwickler nicht bekannt sind. Dies ist allerdings Voraussetzung um Abfragen sinnvoll optimieren zu können. Neben den bereits genannten Nachteilen, fehlt auch die Möglichkeit, Views zu nutzen, um bspw. die Sicherheit zu erhöhen oder Komplexität abzubauen. Die angesprochene Sicherheit ist darüber hinaus ein nennenswerter Nachteil, da OODBMS keine ausreichend geeigneten Mechanismen in diesem Kontext bereitstellen. So fehlt es u.a. an Möglichkeiten, individuelle Rechte für Objekte und Klassen zu vergeben.
