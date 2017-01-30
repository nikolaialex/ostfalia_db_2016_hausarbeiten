# 2 Überblick

## 2.1 NoSQL
Hinter dem Begriff NoSQL, verstanden als *Not Only SQL*, verbergen sich eine Vielzahl von Konzepten, die für verschiedenste Anforderungen entwickelt worden sind. Auf der Seite Nosql-database.org werden aktuell[<sup>1][foot21] über 250 Systeme gelistet, die mehr oder weniger folgende gemeinsame Punkte berücksichtigen:

- Das Datenbankmodell ist nicht-relational
- Sie sind auf eine verteilte und horizontale Skalierbarkeit ausgerichtet
- Sie sind schemafrei oder unterliegen schwachen Restriktionen
- Das System unterstützt eine einfache Datenreplikation
- Meistens liegt ein anderes Konsistenzmodell zugrunde (BASE)   
  
(Edlich et al. 2011, S.2)


## 2.2 Konsistenzmodelle

Das Konsistenzmodell einer relationalen Datenbank ist ACID, abgekürzt für 
_Atomicy_, _Consistency_, _Isolation_ und _Durability_. Kurz zusammengefasst: Eine Transaktion erfolgt entweder vollständig oder gar nicht (Atomarität). Wichtig ist, dass die Daten immer in einem konsistenten Zustand vorliegen. Single-Server-Datenbanken erfüllen dieses Konzept. Sie werden vertikal skaliert, d.h. man steigert die Rechenleistung durch Erweiterung der Hardware. Ist es aufgrund der Datenmengen notwendig die Tabellen auf verschiedene Server zu verteilen, sind die Reaktionszeiten unter Umständen nicht mehr akzeptabel. Gefordert sind aber nun, wie schon erwähnt, Systeme, die horizontal skalierbar (über mehrere Server verteilt) sind, sich einfach replizieren lassen und schnelle Reaktionszeiten haben 
(Edlich et al. 2011, S.30).

All diese Anforderungen in ein Datenbanksystem zu vereinen, ist nach dem sogenannten CAP-Theorem[<sup>2][foot22] aber nicht möglich. Eric Brewer (2000) stellte in seiner KeyNote „Towards Robust Distributed Systems“ an der University of California (Berkeley) dar, dass es bei der Skalierung von verteilten Datenbanken auf drei grundlegende Eigenschaften ankommt:  

- Consistency  
  Nach Abschluss einer Transaktion liefern alle Knoten einer verteilten Datenbank bei einem Lesezugriff die gleichen Werte zurück. Die Daten sind konsistent.
- Availability  
  Bezeichnet die Verfügbarkeit des Systems. Das System sollte in einer akzeptablen Zeit antworten.
- Partition Tolerance    
  Die Ausfalltoleranz bezieht sich auf die Fähigkeit des Systems auch dann noch zu antworten, wenn Teile des Systems nicht mehr erreichbar sind.

Brewers CAP-Theorem sagt aus, dass verteilte Datenbanken maximal zwei dieser drei Eigenschaften erreichen können und sich folglich für eine Kombination zweier Eigenschaften entscheiden müssen 
(Edlich et al. 2011, S.31-32).

NoSQL-Systeme, die darauf ausgelegt sind, ihre Daten auf mehrere Server zu verteilen ziehen deshalb ein alternatives Konsistenzmodell, das BASE Modell (abgekürzt für _Basically Available_, _Soft State_, _Eventually Consistent_) vor.
BASE sichert Verfügbarkeit, Konsistenz wird erst nach einer gewissen Zeit sichergestellt und nicht nach einer Transaktion 
(Edlich et al. 2011, S.30-33, Kurowski 2012, Kap.1).

Ergänzung: In der Literatur werden NoSQL-Datenbanken häufig in das Schema des CAP-Theorems eingeordnet, werden als typisch CA oder CP bezeichnet. MongoDB wird z.B. als CP-Datenbank (Consistency/Partition Tolerance) bezeichnet, wo sie doch Konsistenz im ursprünglichen Sinne des CAP-Theorems gar nicht leisten kann. Die starre Zuordnung wird durchaus kontrovers diskutiert (siehe z.B. Kleppmann 2015, Hale 2010). In Kapitel 3, wenn es um die Replikation von Daten geht, wird nochmals auf diese Problematik eingegangen.

## 2.3 Begriffe

Neben *Key-Value Stores* (Schlüssel/Wert-Paare), *Wide Column Stores / Column Family Stores* (spaltenorientierte Datenbanken), *Graph-Databases* (Graph-oder Baumstrukturen) existieren eine Reihe von Datenbanken, die ihre Daten in hierarchisch strukturierten Dokumenten ablegen. Neben MongoDB fallen auch CouchDB, Couchbase oder Amazon Dynamo DB in diese Kategorie (siehe DB-Engines.com). Die Daten in Document Stores liegen nicht, wie der Name vermuten lässt, in Dokumenten wie PDF-Dateien vor. Dokumente sind strukturierte Datensammlungen, die in standardisierten Formaten vorliegen, z.B.  JSON (JavaScript Object Notation) oder JSON-ähnlichen Formaten (Edlich et al. 2011, S.7-8).

Ein MongoDB Server (später auch als *mongod-Prozess* bezeichnet) kann mehrere *Datenbanken* verwalten. Innerhalb der Datenbank werden Dokumente, einzelne Datensätze, in sogenannten *Collections* organisiert (Abb. 2.1). Sie müssen nicht dieselbe Struktur haben, ein Schema muss nicht vorgegeben werden. Ein *Dokument* besteht aus einer geordneten Menge von Feldern, ein *Feld* besteht aus einem Key/Value-Paar. Während der Key ein String ist, können die Werte einfache Datentypen, Strings, ein Array oder auch wieder ein Dokument sein (Trelle 2014, Kap.3).

![][img-collections]  
Abb. 2.1: Collections in MongoDB

MongoDB speichert intern ihre Dokumente im BSON-Format (Binary JSON[<sup>3][foot23]) ab, das die Standard-JSON Datentypen erweitert, z.B. mit den Datentypen _Date_ oder _ObjectId_. Jedes Dokument besitzt das Feld *_id*, um es eindeutig zu identifizieren. Das Feld ist sozusagen der Primärschlüssel und muss innerhalb einer Collection eindeutig sein. Das Feld wird automatisch von der Datenbank gesetzt und ist dann vom Typ *ObjectId*. Es ist aber auch möglich eigene Schlüssel zu verwenden. MongoDB setzt auf dieses Feld einen *Index* und unterstützt zudem das Anlegen von weiteren freien Indizes (Trelle 2014, Kap.3). 

***

[foot21]:    #footnote21
[foot22]:    #footnote22
[foot23]:    #footnote23

[kap3]:                 ./03_replikation.md "Replikation"
[cap]:                  ./07_anhang.md#cap-theorem "CAP-Theorem"
[img-collections]:      ./pict/mongodb_collections.png "Collection"


<a name="footnote21"></a> <a><sup>1</sup></a> Stand: Januar 2017  
<a name="footnote22"></a> <a><sup>2</sup></a> Anhang: [CAP-Theorem][cap]  
<a name="footnote23"></a> <a><sup>3</sup></a> MongoDB Dokumentation (BSON): ![](pict/link.png)  [https://www.mongodb.com/json-and-bson](https://www.mongodb.com/json-and-bson)

Nächstes Kapitel: [3. Replikation][kap3]
