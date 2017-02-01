# Ereignisanfragen
Für die Verarbeitung von Ereignissen kommen Ereignisanfragesprachen (Event Pattern Language - EPL) zum Einsatz, mithilfe derer sich komplexe Bedingungen definieren lassen, die die Beziehungen zwischen Ereignissen darstellen [VaHo13].
Ereignisanfragen werden kontinuierlich ausgewertet während Ereignisse passieren. Zwar arbeiten Datenbanken ebenso oft mit ereignisbezogenen Daten, so sind diese jedoch einmalig und gegen eine endliche Datenmenge.
Nach [EcBr09] lassen sich Anforderungen an eine Ereignisanfragesprache durch die im Folgenden genannten vier Aspekte beschreiben: 

**Extraktion von Daten** 
Ereignisse enthalten Daten. Diese Daten sind relevant dafür, ob und wie reagiert wird und müssen für Bedingungen in Anfragen, für mögliche Reaktionen, zur Anreicherungen mit anderen Daten (z.B. Datenbanktabellen) oder zur Konstruktion neuer Ereignisse zur Verfügung stehen. 

**Komposition**
Es muss ermöglicht werden, mehrere einzelne Ereignisse verbinden zu können, damit ihr gemeinsames, über die Zeit verteiltes Auftreten ein komplexes Ereignis ergibt. Eine Komposition muss meist datenbezogen sein. 

**Zeitliche Zusammenhänge** 
Ereignisanfragen enthalten meist zeitliche Bedingungen, die ausdrücken, dass Ereignisse in einer gewissen Zeitspanne oder Reihenfolge passieren müssen. 

**Akkumulation**  
Sowohl Anfragen mit Negation (Fehlen eines Ereignisses), als auch die Aggregation von Ereignisdaten (eine Menge von Ereignissen wird kompakt auf ein einziges Ereignis reduziert) ergeben auf unendlichen Strömen keinen Sinn, da eine Beantwortung erst am Ende korrekt ist. Derartige Anfragen können nur gegen gewisse endliche Schritte des Stroms gestellt werden, wo ihr Ergebnis wohldefiniert ist. 
Ein weiterer Aspekt sind die Regeln in der Ereignisverarbeitung. Regeln bilden eine adäquate Form der Repräsentation von Fachwissen und können zum Beispiel Ereignisse ausfiltern, die bei der Verarbeitung nicht mehr benötigt werden oder auch ein Ereignisformat in ein anderes Format transformieren. Ebenfalls wird durch entsprechende Regeln ermöglicht, mehrere Ereignisse zu einem komplexeren Ereignis zu aggregieren und ein neues abgeleitetes Ereignisobjekt zu generieren. [BrDu15]  
Nach [EcBr09] sind zwei Arten, deduktive und reaktive Regeln wichtig. Auf der Basis von Ereignisanfragen definieren deduktive Regeln neue Ereignisse. Zu erwähnen ist, dass diese auf Ereignissen operieren und nicht auf Fakten, wie deduktive Regeln in der Logikprogrammierung und in deduktiven Datenbanken.
Reaktive Regeln hingegen spezifizieren, wie auf Ereignisse reagiert wird.

## Ereignisanfragesprachen
Durch Ereignisanfragesprachen lassen sich Ereignismuster und -reaktionen deklarativ und somit auf einer hohen Abstraktionsebene beschreiben. Die gesuchten Muster müssen in einer speziell dafür vorgesehenen Deklarationssprache definiert bzw. modelliert werden. [EcBr09]
Derzeit sind drei Arten unterschiedlicher Sprachen, für die Formulierung von Ereignisanfragen in Gebrauch, die im Folgenden vorgestellt werden. 

### Kompositionsoperatoren 
Mit Hilfe von Operatoren werden Anfragen gegen einzelne Ereignisse zu komplexen Ereignisanfragen zusammengesetzt. Operatoren die Verwendung finden sind beispielsweise die Konjunktion von Ereignissen, oder aber auch die Negation einer Sequenz. Durch Schachtelung lassen sich ebenfalls komplexere Anfragen ausdrücken. Nach [EcBr09] ermöglichen Kompositionsoperatoren es, komplexe Ereignisse zu spezifizieren und können nach [Frey10] als Funktionen interpretiert werden, deren Parameter und Rückgabewerte Ströme von Ereignissen sind. 
Kern aller Kompositionsoperatoren basierter Sprachen sind die vier Operatoren Sequenz, Konjunktion, Disjunktion und Negation. Eine Konjunktion (˄) zweier Ereignisse A und B bedeutet, dass Ereignis A und b auftreten. Zu erwähnen ist an dieser Stelle, dass die Konjunktion zeitlich ist und somit die Ereignisse zu unterschiedlichen Zeitpunkten passieren können.
Die Disjunktion (˅) besagt, dass Ereignis A oder B auftritt. Die Negation (⌐) bedeutet, dass das entsprechende Ereignis nicht auftritt. Das Erkennen der Abwesenheit von Ereignissen in vielen Event Processing Anwendungen wichtig, um eine Fehlfunktion, Nichtverfügbarkeit oder eine verzögerte Verarbeitung zu erkennen. Aus diesem Grund unterstützen Kompositionsoperator-basierte Sprachen den Negations-Operator. Die Sequenz steht dafür, dass ein Ereignis A auftritt und ein Ereignis B folgt. Mithilfe dieser Operatoren lassen sich Schachtelungen erstellen und somit können komplexe Bedingungen modelliert werden. [Ecke08]
Bisher verfolgen beispielsweise IBM ActiveMiddleware Technology (Amit) und ruleCore den auf Kompositionsoperatoren basierenden Ansatz [EcBr09].

### Datenstrom-Anfragesprachen 
Ein zweiter Sprachstil wurde im Kontext des relationalen Datenstrommanagements entwickelt. 
Datenstrom-Anfragesprachen basieren auf der Datenbankanfragesprache SQL (Structured Query Language) und haben ein entsprechendes Grundprinzip. Die Datenströme, die die Ereignisse als Tupel enthalten, werden in Relationen umgewandelt und auf diesen Relationen wir dann eine reguläre SQL-Anfrage ausgewertet und das Ergebnis, bei dem es sich um eine Relation handelt, wird wieder in einen Datenstrom gewandelt. [EcBr09]
Durch verschiedene Fensteroperationen erfolgt die Umwandlung von Datenströmen in Relationen. Für den umgekehrten Weg, der Umwandlung von Relationen in einen Datenstrom gibt es drei unterschiedliche Möglichkeiten: Nach [EcBr09] geben nur Tupel, die im Vergleich zum vorherigen Ergebnis hinzugekommen sind, ein neues Ereignis, nur Tupel, die wegfallen sind, oder einfach jedes Tupel im (jetzigen) Ergebnis. 
Continous Query language (CQL) ist beispielsweise ein Vertreter von Datenstrom-Anfragesprachen. 

### Produktionsregeln 
Bei Produktionsregeln handelt es sich im eigentlichen Sinne nicht um Ereignisanfragesprachen, jedoch eignen sie sich aufgrund ihrer inkrementellen Auswertung.
Passiert ein Ereignis, so muss ein entsprechendes Faktum erzeugt werden und Ereignisanfragen werden dann als Bedingungen für diese Fakten ausgedrückt. 
Der Einsatz von Produktionsregeln ist sehr flexibel und gut an bestehende Programmiersprachen angebunden. Es wird zustandsorientiert und nicht ereignisorientiert gearbeitet.
Insgesamt gelten Produktionsregeln weniger effizient, als Datenstrom-Anfragesprachen. [EcBr09]


