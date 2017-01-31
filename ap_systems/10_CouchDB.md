## 3.3 CouchDB
CouchDB ist die Abkürzung für „Cluster of unreliable Commodity Hardware Database“
und gehört zu den dokumentorientierten, schemalosen Datenbanken. Das bedeutet,
dass der Aufbau von Dokumenten vor der Speicherung nicht bekannt sein muss und
die Datenbank den Vorteil bietet, dass die Dokumente sowohl dem natürlichen Objekt
als auch dessen Repräsentationen in einer objektorientierten Sprache entsprechen
können. Somit ist die Datenbank sehr flexibel da die Dokumente keinem Schema
entsprechen müssen.
CouchDB zeichnet sich laut [EW13] unter Anderem dadurch aus, dass es zu keinen
Schreib-Lese-Blockaden kommt. Für die Verwaltung von konkurrierenden Zugriffen
wird das Multi-Version Concurrency Control verwendet. CouchDB speichert die
Dokumente im JSON-Format. Für die Verwaltung wird dabei jedem JSON-Objekt
eine Versionsnummer und ein eindeutiger Schlüssel zugewiesen. Um nun die
konkurrierenden Zugriffe zu verwalten wird die Versionsnummer bei jeder Änderung
des Dokuments um einen erhöht. CouchDB selbst erkennt beim Schreiben die
Konflikte und meldet diese an den Client. Dadurch entstehen keine
Schreib-Lese-Blockaden durch Locking, wie bei anderen Systemen.
Da CouchDB zu den AP-Datenbanken gehört weist sie Schwächen bei den
Konsistenzanforderungen auf. Sie verfügt über einen inkrementellen
Replikationsmechanismus mit bidirektionaler Konfliktbehandlung. Das bedeutet,
dass Konflikte auf verschiedenen Servern, die durch das Ändern eines Objekts
verursacht wurden, automatisiert erkannt und anschließend behandelt werden.
Es bleiben alle Versionen vorhanden.
Ein weiterer Vorteil von CouchDB ist laut [ASF17] die weitreichende Skalierung.
CouchDB kann sowohl nach oben in einem Cluster, als auch nach unten skalieret
werden. Eine Skalierung nach unten ist notwendig für den Gebrauch von CouchDB
auf einem Smartphone. Es lässt sich also eine Instanz von CouchDB auf einem
Android-Gerät oder einem iPhone starten.
CouchDB wird aufgrund der oben genannten Eigenschaften hauptsächlich für
Webanwendungen verwendet, da hier oft viel Text mit einer nicht definierten Länge
gespeichert werden muss. Klassische Anwendungsbeispiele sind also Foren,
Blogs oder Content-Management-Systeme.
Um die Vor- und Nachteile von CouchDB besser zu beschreiben wird im Folgenden
der Einsatz für einen Blog herangezogen.
CouchDB kann in einem Blog zum Beispiel für die Speicherung der Blogeinträge
und Kommentare dienen. Jeder Blogeintrag steht in einem Dokument. Der Text wird
entweder als Array von Strings in einem Wert, oder über mehrere Strings verteilt in
mehreren Werten gespeichert. Dazugehörige Kommentare werden im selben
Dokument gespeichert. Der Text wird in einem String gespeichert und der
Zeitstempel kann als Schlüssel benutzt werden.
An diesem Beispiel wird der Vorteil von CouchDB deutlich, dass alle Inhalte, die zu
dem Block gehören, in einem Dokument gespeichert werden. Dahingegen sind bei
Blogeintrage bei Blogs, die relationale Datenbankmodelle nutzen, oft auf mehrere
Tabellen verteilt. Beispielhaft gäbe es eine Tabelle für die Blogeinträge und eine
Tabelle für die Kommentare.
Die Nutzung von CouchDB bringt aber auch Nachteile mit sich. So können keine
detaillierten Schreib- und Leserechte gesetzt werden. Es gibt nur einen Nutzer
„Administrator“. Deshalb eignet sie sich eher für Anwendungen, bei denen nur ein
kleiner Nutzerkreis Daten schreiben darf.
