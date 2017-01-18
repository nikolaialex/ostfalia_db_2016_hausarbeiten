# 5. Verbreitung von OODB
Wie bereits in Kapitel 2.2 beschrieben versuchen Objektorientiere Datenbankmanagementsysteme die Objektorientierten Prinzipien bis zur Speicherung der Daten in einer Datenbank zu realisieren.
Trotz der großen Verbreitung von Objektorientierten Programmiersprachen werden kaum Objektbasierte Datenbanken eingesetzt und sind eine Nischentechnologie.
Vielmehr werden für gängige Client-Server Anwendungen weiterhin relationale Datenbanken verwendet und der Medienbruch wird durch die Objekt-Relationalen Mapper kompensiert.
Trotzdem erleben viele NoSQL-Datenbanken in den letzten Jahren einen großen Aufwind, zu denen die Objektbasierten nicht gehören.

Die folgenden Liste versucht einige der größten Probleme von Objektdatenbanken zusammenzufassen:

  * Es gibt keine aktuelle Standardisierung von Modellierungs- und Abfragesprachen, da die ehemalige ODMG nicht mehr existiert und es keine weiteren Organisationen gibt, welche eine Standardisierung und Weiterentwicklung vorantreiben. Nur im Bereich der UML findet eine solche statt, da dies aber ein generische Modellansatz ist, muss noch zusätzlich eine eigene Modellierungssprache von der Datenbank angeboten werden. Die Sprachen ODL und OQL sind dafür nichts ausreichend. Daher implementieren neuere Datenbanksysteme meist eigene Sprachen, welche keiner Standardisierung unterliegen. Beispielsweise das OODBMS db4o bietet drei verschiedene Abfragesprachen. Das sind *Query By Example (QBE)*, *Simple Object Database Access (SODA)* und *native Abfragen*. Native Abfragen basieren auf der verwendeten Programmiersprache, z. B. LINQ unter C#.
  * Eine weitere gescheiterte Standardisierung der Object Database Technology Working Group (ODBT WG), welche bis 2009 versucht hat einen neuen Standard zu etablieren. Durch die Einstellung dieser Gruppe haben sich die Unternehmen, welche OODBMS-Systeme entwickelten, anderen Projekten zugewandt.
  * Starke Verbreitung von SQL. Das erlernen von SQL gehört heute zum Standard in jeder IT-Nahen Ausbildung. Im Grundstudium wird neben der allgemeinen Datenbanktheorie vorrangig SQL gelehrt, ebenfalls in den verwandten Ausbildungsberufen. Dadurch findet eine starke Fokussierung statt, sodass ein späterer Wechsel selten vollzogen wird.
  * Ausgereifte ORM-Frameworks für beliebte Programmiersprachen. Für fast jede Programmiersprache existieren meist mehrere ORM-Frameworks für den einfachen Zugriff auf relationale Datenbanken. Allein die Wikipedia führt 80 verschiedene Frameworks für 14 unterschiedliche Sprachen auf.[^wikiorm] Viele davon stehen unter einer open source Lizenz sodass deren Einsatz meist unkompliziert möglich ist.
  * ORM Integration in beliebten Webframeworks. Im Bereich der Webentwicklung entstehen viele neue Frameworks, welche bereits auf bestimmte ORM-Mapper aufsetzen und den Programmierer dazu anleiten dieses zu verwenden. Der einfache Austausch ist meist nicht vorgesehen, wodurch die Verwendung einer Objektdatenbank erschwert wird. Beispiele dafür sind das ASP.MVC Framework, welches auf das Entity Framework setzt oder das Vaadin-Framework, welches die JPA als generische Schnittstelle anbindet.
  * Für eine schnelle Suche oder ein verbessertes Auffinden von Daten haben sich andere Arten von NoSQL-Datenbanken etabliert, die diese Aufgaben effizienter durchführen. Beispielsweise die Dokumentdatenbanken, welche eine horizontale Skalierung sehr einfach ermöglichen.
  * Der Einsatz von Stored Procedures ist nur in sehr wenigen Fällen möglich. Durch die fehlende Standardisierung können diese meist nicht ausreichend Programmiert werden, da die Kontrolle über die Abfragen bei den Entwicklern der Software liegt und nicht bei den Administratoren der Datenbank. Das kann zu Sicherheitsproblemen in kritischen Umgebungen führen.
  * Durch den Einsatz von JSON als generisches Format ist die Umwandlung in ein natives Objekt der Programmiersprache sehr einfach. Da einer der größten Vorteile von Objektdatenbanken das direkte auslesen der Objekte ist, ist es im Bereich der NoSQL-Datenbanken einfacherer diese im JSON Format abzulegen, welches eine Programmiersprachen unabhängige Speicherung ermöglicht. Des weiteren lässt sich dieses Format leicht durchsuchen.
  * Ein Mangel an der Auswahl von Objektbasierten Datenbanken führt nicht zu Einsatz dieser Technik. Die Vorhandenen Datenbanken werden weitesgehend nicht gepflegt oder nur sehr selten angepasst. Das letzte Update von db4o stammt Beispielsweise vom April 2015[^db4o] und deren direkte Webpräsenz(https://sourceforge.net/projects/db4o/) ist zum aktuellen Zeitpunkt (Dezember 2016) nicht erreichbar.
  * Auf der Codeplattform Github finden sich keine größeren Projekte zu Objektbasierten Datenbanken, was zu deren geringerer Verbreitung beiträgt.
  * Objektdatenbanken eigenen sich nicht für sehr große Datenmengen, da eine Skalierung über mehrere Systeme schwierig ist. Daher ist der Einsatz durch den maximal Verfügbaren Speicher auf dem Hostsystem begrenzt.
  * Der Einsatz lohnt sich nur bei sehr komplexen Objektbeziehungen und nicht für einfache Anwendungen. Wird eine Anwendung iterativ entwickelt, wird die Entscheidung zugunsten einer relationalen Datenbank bereits im frühen Stadium getroffen, wo die Komplexität der Beziehungen noch überschaubar war.
  * Datenbanken wie db4o unterstützen nicht den Import von verbreiteten Formten wie JSON oder XML, was den Einsatz dieser Datenbank für eine Anwendungsfälle unbrauchbar macht. Ebenfalls bietet die Datenbank keine referenzielle Integrität, auf dessen Verzicht nur bei skalierbaren Datenbanken tragbar ist.


Trotz dieser vielen Probleme gibt es einige interessante Einsatzgebiete für diese Art von Datenbank, dazu gehören:

  * Geografische Informationssysteme für Dokumente, oder Photos
  * CAD und CAM Systeme
  * Patientensysteme in Krankenhäusern
  * Finanzeinrichtungen für den Bereich Data Mining

Unternehmen wie BMW, Bosch, IBM, Intel und Seagate nutzen für interne Anwendung das OODBMS db4o. (vgl. @nayak2013type S. 3)
