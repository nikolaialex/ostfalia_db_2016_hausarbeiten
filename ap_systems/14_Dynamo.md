## 3.6 Dynamo
Wie [DHD07]  hier und im Folgenden darlegen, ist Dynamo eine Schlüssel-Wert Datenbank
mit hoher Verfügbarkeit, die von Amazon entwickelt wird. Im Gegensatz zu SimpleDB wird
Dynamo, das nicht mit DynamoDB verwechselt werden darf, nur intern von Amazon
verwendet. Amazon hat eine weltweit operierende Online-Vertriebsplattform, die eine hohe
Performanz, Verlässlichkeit und Effizienz erfordert. Die Plattform basiert auf tausenden
Servern, die auf der ganzen Welt verteilt und miteinander verknüpft sind, wodurch Ausfälle
immer wieder vorkommen. Schon kleine Ausfälle haben jedoch drastische finanzielle
Auswirkungen und beeinträchtigen das Kundenvertrauen negativ. Das Dynamo System stellt
sicher, dass trotzdem eine unterbrechungsfreie Nutzung der Vertriebsplattform möglich ist,
auch wenn die Festplatte eines Servers beschädigt wird oder eine Naturkatastrophe ein
ganzes Datenzentrum lahmlegt. Um besondere Belastungen abzufedern, wie sie zum
Beispiel bei einigen Feiertagen auftreten können, muss das System die Leistung außerdem
gut skalieren können, was durch einen dezentralen Aufbau des Netzes von Dynamo erreicht
wird. Jeder Knoten hat volle Mächtigkeit und eine zentrale Steuerungseinheit gibt es nicht.
Wie durch das CAP-Theorem bekannt ist, ist eine hohe Konsistenz und Verfügbarkeit bei
gegebener Partitionstoleranz nicht gleichzeitig zu erreichen. Weil die hohe Verfügbarkeit
des Webangebots von Amazon hohe Priorität hat, findet das Konzept Eventually Consistent
Anwendung.

Um die genannten Anforderungen zu erreichen, implementiert Dynamo die folgenden fünf
Kerntechniken, welche auch die wesentlichen Vorteile von Dynamo darstellen: Konsistente
Hashfunktion, Vector Clocks, Sloppy Quorum und Hinted Handoff, Anti-Entropie,
Gossip-basiertes Protokoll.

Die konsistente Hashfunktion setzt das schon im Kapitel Voldemort erklärte Prinzip eines
logischen Rings aus Knoten um. Aus den Schlüsseln wird jeweils ein Hashwert berechnet,
der als Zuordnung zu einem Knoten fungiert. Deckt ein Knoten zum Beispiel den Bereich
zehn bis 20 ab, so wird der Wert eines Schlüssels mit der Zahl 12 auf diesen Knoten
gespeichert. Es werden auch eine frei konfigurierbare Anzahl Kopien in nachfolgenden
Knoten gespeichert, um die Verfügbarkeit zu gewährleisten, falls ein Knoten ausfällt.

Sloppy Quorum ist ein Prinzip, das bestimmt, bei wie vielen Knoten Lese- und
Schreiboperationen erfolgreich sein müssen, damit der gesamte Vorgang erfolgreich ist.
Konfigurierbare Parameter sind hierbei die Anzahl der für die Replizierung benutzten
Knoten und die Mindestanzahl der Knoten, die den Erfolg einer Lese- oder Schreiboperation
melden müssen. Je nachdem wie die Werte der Parameter justiert sind, können
unterschiedliche Bedarfsszenarien, wie Lesepuffer oder schnelle Schreibzugriffe abgedeckt
werden.

Das Hinted Handoff Prinzip greift, sobald der Knoten, in dem der Wert eines Schlüssel-Wert
Paares gespeichert werden soll, nicht verfügbar ist. Der Inhalt wird dann auf einen weiteren
Knoten übertragen, wobei gelegentlich überprüft wird, ob der ursprüngliche Knoten wieder
ansprechbar ist, um die Daten dorthin zu transferieren.

Es kann zu Versionskonflikten kommen, falls ein Schreibzugriff einen Knoten nicht erreicht hat,
der bei einem späteren Lesezugriff wieder verfügbar ist. Die der Versionierung dienenden
Vektoruhren lösen das Problem, indem jede gespeicherte Datei einen Vektor mit der ID des
Knotens und der Versionsnummer erhält. Bei jedem Update wird die Versionsnummer um
eine Zahl erhöht und es wird bei einer Leseanfrage immer nur die höchste gefundene Version
zurückgegeben.

Fällt der Knoten aus, der durch das Hinted-Handoff die Datei eines anderen Knoten erhält, so
erfährt der ursprüngliche Knoten nichts davon, dass ihm eigentlich eine Datei zugewiesen
werden soll. Das Problem wird durch den Mechanismus der Anti-Entropie behandelt, indem
der ursprüngliche Knoten, sobald er wieder gestartet ist, seinen Inhalt mit den nachfolgenden
Knoten vergleicht, die die Kopie des neuen Inhalts haben.

Das Gossip-basierte Protokoll dient der Behandlung des Hinzufügens und Entfernens von
Knoten. So können die logischen Knoten auf die physikalisch existierenden Datenzentren
dynamisch verteilt werden, um eine möglichst günstige Auslastung zu erzielen. Die genaue
Funktionsweise des Protokolls wird im Rahmen dieser Ausarbeitung nicht beschrieben.

Als Schlüssel-Wert Datenbank teilt Dynamo mit Voldemort den Nachteil, dass die Daten nicht
miteinander in Beziehung gesetzt werden können und der Schlüssel für jedes Datum bekannt
sein muss. Wie alle AP-Datenbanken ist Dynamo nicht immer konsistent.
