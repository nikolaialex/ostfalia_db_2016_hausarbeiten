# Teilnehmer
* Die Teilnehmer arbeiten mit beliebiger Geschwindigkeit.
* Die Teilnehmer können Fehler verursachen
* Die Teilnehmer können nach einem Fehler wieder am Austausch teilnehmen
* Die Teilnehmer gegeben immer richtige Werte aus, sind nicht kompromittiert und versuchen nicht das Protokoll zu untergraben. (Byzantinische Fehler)

# Netzwerk
* Die Teilnehmer können Nachrichten zu anderen Teilnehmern übermitteln.
* Nachrichten werden asynchron versandt und benötigen beliebig lange um übermittelt zu werden.
* Nachrichten können verloren gehen, neu geordnet oder dupliziert werden.
* Nachrichten werden ohne Verfälschung übermittelt. (Byzantinische Fehler)

# Anzahl der Teilnehmer
Generell kann ein Konsensalgorithmus mit 2F+1 arbeiten [Lam05], trotz des gleichzeitigen Ausfalls von beliebigen F Teilnehmern. Dies kann jedoch je nach Art der Implementierung von Paxos variieren.