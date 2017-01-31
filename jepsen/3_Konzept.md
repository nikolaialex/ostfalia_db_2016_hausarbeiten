# 2 Konzept hinter Jepsen
## Starke Konsistenzmodelle[2]
Wir im vorherigen Kapitel schon erwähnt, kann eine Aufteilung des Netzes verschiedene Ursachen haben, die zur einer Verzögerung, Löschung, Verdopplung oder Neuordnung innerhalb der verteilten Datenbank führen. 
### Richtigkeit
Um eine Richtigkeit zu beschreiben, wird von einem Zustand ausgegangen, der durch Operationen beeinflusst wird. Der Zustand kann hier durch eine Variable mit den Operationen lesen (r) und schreiben (w) beschrieben werden.
![Image of uniprocessor-history](/jepsen/images/uniprocessor-history.jpg)

Abb. 1 https://aphyr.com/data/posts/313/uniprocessor-history.jpg

In Abbildung 1 ist eine Sequenz von Operationen auf einer Variable zu sehen, die nacheinander abgearbeitet werden und als gelesene Werte die Buchstabenfolge “aabd” annehmen sollte. Als eine Regel lässt sich festlegen, dass ein schreibender Vorgang den Inhalt der Variable auf einen neuen Wert ändert, der aber auch dem alten Wert entsprechen kann. Eine zweite Regel ist, dass der Wert, der gelesen wird dem zuletzt geschriebenen Wert entspricht. 
Diese Folge von Regeln ergeben dabei ein Konsistenzmodell, dass die Richtigkeit beschreibt.

### Gleichzeitiger Verlauf
Beim gleichzeitigen Verlauf haben zwei oder mehrere Prozesse Zugriff auf die Variable. 
![Image of multiprocessor-history](/jepsen/images/multiprocessor-history.jpg)

Abb. 2 https://aphyr.com/data/posts/313/multiprocessor-history.jpg

Aus Sicht des unteren Prozesses ergibt sich "ab" als gelesene Werte, wobei für den ersten gelesenen Wert "a" kein definierter Wert erwartet wird. Der obere Prozess erwartet beim lesen der Werte "aa" liest aber wie der untere Prozess "ab". Dies führt nach den bisherigen Regeln der Richtigkeit zu einer Verletzung des Konsistenzmodelles. Für das Modell des gleichzeitigen Verlaufs ist es daher notwendig den Begriff der Parallelität für das Konsistenzmodell zu beschreiben. Prozessen wird es erlaubt den Wert eines anderen Prozesses zu lesen. Somit teilen sich beide Prozesse die Zustände.
### Lichtkegel
Jede Aktion (lesen/schreiben) die von einem Prozess innerhalb der CPU ausgelöst wird muss eine Distanz zurücklegen. Diese Distanzen können im Falles des Arbeitsspeichers einige Zentimeter sein, oder bei entfernten Datenbank auch mehrere tausend Kilometer betragen. Hieraus ergeben in anbetracht der annährend schnellen Übertragung mit Lichtgeschwindigkeit unterschiedlich hohe Signallaufzeiten.
![Image of lightcone-history](/jepsen/images/lightcone-history.jpg)

Abb. 3 https://aphyr.com/data/posts/313/lightcone-history.jpg

In Abbildung 3 sind diese Laufzeiten in Form von Kegeln für die jeweiligen Prozesse dargestellt. Im Falle des schreiben Zugriffes wird zum Zeitpunkt "w" die schreibende Operation auf den Weg zur Datenbank geschickt. Beim Zeitpunkt des Wechsel des Speicherinhaltes wurde die Anfrage von der Datenbank verarbeitet und die ACK Meldung wird an den Prozess zurückgesendet, den diese Bestätigung zum Zeitpunkt w' erreicht. Das der untere Prozess eine lesenden Operation sendet noch bevor die die schreibende angeschlossen ist hat für dieses Beispiel keine Auswirkungen, da sich Zeitpunkte der lesenden Operation immer nach dem jeweiligen schreibenden befinden. 
Aber was passiert jetzt, wenn eine Operation im Verhältnis zur anderen Operation aufgrund von hohen Latenzen extrem lange braucht?
![Image of concurrent-read](/jepsen/images/concurrent-read.jpg)

Abb. 4 https://aphyr.com/data/posts/313/concurrent-read.jpg

In Abbildung 4 ist zu sehen das der untere Prozess eine sehr hohe Latenz zu haben scheint. Der untere Prozess erwartet, dass das Ergebnis der lesenden Operation "a" ist, bekommt als Ergebnis von der Datenbank aber "b". Dies geschieht, weil während der langen Signallaufzeit der lesenden Operation der obere Prozess aufgrund viel geringerer Signallaufzeiten den kompletten Zyklus von "w" bis "w'" durchlaufen hat, noch bevor die lesende Operation bei der Datenbank angekommen ist und verarbeitet werden konnte.
Um dieses Verhalten mit dem Konsistenzmodell in einklang zu bringen müssen wir dieses weiter abschwächen, indem wir zulassen, dass Operationen eine gewisse Laufzeit haben und somit mehrdeutige Aufträge vorkommen können.
### Linearisierbarkeit
Aufgrund der Tatsache, dass Nachrichten nicht in der Zeit zurückgesendet werden können, können die Anordnungen bei mehrdeutigen Aufträgen eingeschränkt werden.
![Image of finite-concurrency-bounds](/jepsen/images/finite-concurrency-bounds.jpg)

Abb. 5 https://aphyr.com/data/posts/313/finite-concurrency-bounds.jpg

Wie in Abbildung 5 zu sehen ist bekommen wir so zwei maximal Fälle für die Grenzen bei der Verarbeitung einer Operation. Die erste Grenze ist das sofotige lesen einer Operation in der Datenbank ohne Zeitaufwand, wohingegen die zweite Grenze die sofortige Mitteilung des gelesenen Ergebnisses an den Prozess ohne Zeitaufwand darstellt.  
Aus der Annahme das es nur einen globalen Zustand gibt mit dem jeder Prozess kommuniziert und annehmen das Operationen "atomar" stattfinden, so dass es keine zeitlichen Konflikte zwischen Prozessen gibt, lassen sich viele mögliche Verläufe ausschließen.

>Linearizability ... erfordert, dass die einheitliche Ordnung der Operationen der tatsächlichen chronologischen Reihenfolge entspricht und alle Requests so erscheinen, als würden sie anstelle eines Zeitintervalls an einem Zeitpunkt passieren.<[9]


![Image of linearizability-complete-visibility](/jepsen/images/linearizability-complete-visibility.jpg)

Abb. 6 https://aphyr.com/posts/313-linearizability-complete-visibility.jpg
# TODO
set-and-compare
