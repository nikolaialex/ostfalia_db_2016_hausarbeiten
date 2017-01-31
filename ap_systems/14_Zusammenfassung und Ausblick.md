# 4 Zusammenfassung und Ausblick
Diese Ausarbeitung hat das Ziel, die Eigenschaften und Vor- und Nachteile von AP-Datenbanken
aufzuzeigen. Das Ziel wurde erreicht, indem nach der Behandlung wichtiger theoretischer
Grundlagen, wie das CAP-Theorem und die Prinzipien ACID und BASE, die Analyse von konkreten
Datenbanksystemen und des Konzepts Cloud Computing erfolgt ist. 

So stellt das Cloud-Computing eine neue Technologie dar, mit der alle Daten über das Netzwerk
gespeichert und abgerufen werden können. Zusammen mit der Virtualisierung von Rechnersystemen
können logische Serversysteme und Dienste auf der physikalischen Ebene getrennt behandelt
werden, sodass die Hardware effektiver genutzt werden kann. Ein Anbieter der sogenannten Cloud
ist Googles AppEngine Datastore. Dieses nutzt das schemalose, nicht-relationale Datenbankmodell
Goggle BigTable. Dieses Modell zeichnet sich dadurch aus, dass sehr hohe Lese- und
Abfragegeschwindigkeiten, bei gleichzeitig niedrigen Latenzzeiten, erzielt werden. Die
Synchronisierung der Server erfolgt asynchron, wodurch sich Schwächen in der Konsistenz zeigen.
Schließlich zeichnet sich dieses Modell durch eine sehr gute Ausfalltoleranz aus. 

Die Datenbank Cassandra, die beim sozialen Netzwerk Facebook zum Einsatz kommt, basiert auf
mehreren MySQL Knoten. Cassandra wird den immer größer werdenden Datenmengen gerecht,
indem durch Maßnahmen wie asynchrone Schreibvorgänge eine hohe Performanz erreicht wird.
Durch Replikation und eine automatische Fehlerbehandlung bei ausgefallenen Rechnern und weil
es keinen Single Point of Failure gibt, ist Cassandra auch ausfallsicher. Ein Nachteil von Cassandra
ist, dass Nachrichten bei Facebook mehrfach oder gar nicht angezeigt werden können, weil die
Konsistenz der Datenbank nicht immer erfüllt ist. Dies ist auf Nutzerseite aber tolerierbar und durch
Skalierung der Konsistenzlevel kann das Problem auch eingegrenzt werden.

Als dokumentenorientierte, schemafreie Datenbank ist der Aufbau der gespeicherten Daten bei
CouchDB nicht festgelegt. CouchDB bietet zudem eine hohe Flexibilität wegen seiner Schemafreiheit.
Wie für AP-Systeme typisch hat Cassandra geringe Anforderungen der Konsistenz. Ein
Replikationsmechanismus mit bidirektionaler Konfliktbehandlung löst Konflikte bei den auf mehrere
Server verteilten Daten auf. CouchDB unterstützt vertikale Skalierung und ist damit sowohl auf großen
Server-Clustern, als auch auf einzelnen Geräten lauffähig. Cassandra kommt bei Web-Anwendungen
wie Foren oder Blogs zum Einsatz, wo Dokumente nicht fest definierter Menge gespeichert werden
müssen.

Voldemort ist eine Schlüssel-Wert Datenbank mit horizontaler Skalierung. Eine Voldemort Datenbank
setzt sich aus logischen, Rechnerknoten zusammen, die Stores verwalten, welche das performante
Äquivalent zu Tabellen bei relationalen Datenbanken sind. Durch eine Ring-Replikation der Knoten
wird die Verfügbarkeit der Daten gewährleistet. Der modulare Aufbau der Voldemort-Architektur,
diverse Speicherstrategien und zwei unterschiedliche Routing-Modi ermöglichen zusätzlich die flexible
Anpassung des Systems an die vorliegenden Anforderungen. Als Schlüssel-Wert Datenbank kann
allerdings keine Beziehung zwischen den Daten hergestellt werden und der Schlüssel muss zuvor
bekannt sein.

Das von Amazon entwickelte SimpleDB ist Teil dessen Web-Services, mit dem Daten abgelegt,
verarbeitet und abgerufen werden können. Der Datenraum ist auf einfache Weise in Domänen
aufgeteilt, die wiederum aus Items bestehen, die Attribute haben, welche gespeicherte Werte enthalten
können. Die Struktur des Datenraums ist dabei dynamisch änderbar und Items in einer Domäne können
auch unterschiedliche Attribute enthalten. Die Indexierung der Daten übernimmt das System dabei
automatisch.  Anfragen können bei SimpleDB immer nur gegen eine Domäne getätigt werden, aber
durch parallele Partitionierung der Daten auf mehrere Domänen kann die Performanz dennoch
gesteigert werden. Nachteile sind zum Beispiel mangelnde Kontrolle, Anfälligkeit für Programmierfehler
und fehlende Joints. Automatische Backups, die dynamische Struktur des Datenraums, gute Latenz und
guter Durchsatz, sowie eine einfache Schnittstelle sind als Vorteile festzustellen.

Dynamo ist ebenfalls eine Schlüssel-Wert Datenbank, die von Amazon entwickelt wird, jedoch nur für
den internen Gebrauch der Firma verwendet wird. Das weltweit operierende Amazon-Netzwerk stellt
hohe Anforderungen an Verfügbarkeit und Performanz, dem die fünf Kerntechniken von Voldemort
gerecht werden: Konsistente Hashfunktion, Vector Clocks, Sloppy Quorum und Hinted Handoff,
Anti-Entropie, Gossip-basiertes Protokoll. Als Nachteile sind zu sehen, dass die Daten nicht miteinander
in Beziehung gesetzt werden können und der Schlüssel für jeden Wert bekannt sein muss.

Insgesamt lässt sich feststellen, dass die AP-Datenbanken neben ihrer Gemeinsamkeit, eine hohe
Verfügbarkeit und Partitionstoleranz bei nachgelagerter Konsistenz zu bieten, auch einige Unterschiede
haben; zum Beispiel bei der Skalierbarkeit, Partitionierung, Architektur, Anpassbarkeit,
Fehlerbehandlung und Formatierung der Daten. Alle Datenbanken streben, wie es bei AP-Datenbanken
zu erwarten ist, eine gute Performanz und Verfügbarkeit für ihren Gebrauch im Internet an, eignen sich
durch die Unterschiede aber auch für unterschiedliche konkrete Anwendungsgebiete von Blogs über
weltweit operierende Verkaufsplattformen bis hin zu sozialen Netzwerken.

Die Ergebnisse dieser Ausarbeitung können für künftige wissenschaftliche Arbeiten benutzt werden. So
bieten sich Vergleiche der hier dargestellten AP-Datenbanken mit anderen Datenbanken vom Typ CP
oder CA an. Weil zunehmend neue AP-Datenbanken erscheinen und wieder verschwinden, können
spätere Arbeiten die hier zusammengetragenen Erkenntnisse ergänzen. Auch Software-Projekte, die die
Entwicklung von Datenbanken zum Ziel haben, die mehrere genannte Eigenschaften und Vorteile der hier
vorgestellten Datenbanken vereinen, sind möglich. Es können ferner weitere Anwendungsgebiete ermittelt
werden, für die sich AP-Datenbanken eignen, wie zum Beispiel aufwendige Online-Spiele und darauf
aufbauend neue AP-Datenbanken entwickelt werden.
