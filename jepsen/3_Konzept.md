# 2 Konzept hinter Jepsen
## Starke Konsistenzmodelle[2]
Wir im vorherigen Kapitel schon erwähnt, kann eine Aufteilung des Netzes verschiedene Ursachen haben, die zur einer Verzögerung, Löschung, Verdopplung oder Neuordnung innerhalb der verteilten Datenbank führen. 
### Richtigkeit
Um eine Richtigkeit zu beschreiben, wird von einem Zustand ausgegangen, der durch Operationen beeinflusst wird. Der Zustand kann hier durch eine Variable mit den Operationen lesen (r) und schreiben (w) beschrieben werden.
![Image of uniprocessor-history](/jepsen/images/uniprocessor-history.jpg)

Abb. 1 https://aphyr.com/data/posts/313/uniprocessor-history.jpg

In Abbildung 1 ist eine Sequenz von Operationen auf einer Variable zu sehen, die nacheinander abgearbeitet werden und als gelesene Werte die Buchstabenfolge “aabd” annehmen sollte. Als eine Regel lässt sich festlegen, dass ein schreibender Vorgang den Inhalt der Variable auf einen neuen Wert ändert, der aber auch dem alten Wert entsprechen kann. Eine zweite Regel ist, dass der Wert, der gelesen wird dem zuletzt geschriebenen Wert entspricht. 
Diese Folge von Regeln ergeben dabei ein Konsistenzmodell, dass die Richtigkeit beschreibt.

### Gleichzeitiger Zugriff
Beim gleichzeitigen Zugriff haben zwei oder mehrere Prozesse Zugriff auf die Variable. 
![Image of multiprocessor-history](/jepsen/images/multiprocessor-history.jpg)

Abb. 2 https://aphyr.com/data/posts/313/multiprocessor-history.jpg

Aus Sicht des unteren Prozesses ergibt sich "ab" als gelesene Werte, wobei für den ersten gelesenen Wert "a" kein definierter Wert erwartet wird. Der obere Prozess erwartet beim lesen der Werte "aa" liest aber wie der untere Prozess "ab". Dies führt nach den bisherigen Regeln der Richtigkeit zu einer Verletzung des Konsistenzmodelles. Für das Modell des gleichzeitigen Zugriffs ist es daher notwendig den Begriff der Parallelität für das Konsistenzmodell zu beschreiben. Prozessen wird es erlaubt den Wert eines anderen Prozesses zu lesen. Somit teilen sich beide Prozesse die Zustände.
### Lichtkegel

![Image of lightcone-history](/jepsen/images/lightcone-history.jpg)

Abb. 3 https://aphyr.com/data/posts/313/lightcone-history.jpg

![Image of concurrent-read](/jepsen/images/concurrent-read.jpg)

Abb. 4 https://aphyr.com/data/posts/313/concurrent-read.jpg
### Linearisierbarkeit

![Image of finite-concurrency-bounds](/jepsen/images/finite-concurrency-bounds.jpg)

Abb. 5 https://aphyr.com/data/posts/313/finite-concurrency-bounds.jpg

![Image of linearizability-complete-visibility](/jepsen/images/linearizability-complete-visibility.jpg)

Abb. 6 https://aphyr.com/posts/313-linearizability-complete-visibility.jpg
### Sequentielle Konsistenz

![Image of sequential-history](/jepsen/images/sequential-history.jpg)

Abb. 7 https://aphyr.com/data/posts/313/sequential-history.jpg
### Kausale Konsistenz
### Serialisierbare Konsistenz

![Image of serializable-history](/jepsen/images/serializable-history.jpg)

Abb. 8 https://aphyr.com/data/posts/313/serializable-history.jpg
## Testumgebung
Für die Durchführung eines Test eines Datenbanksystems wird davon abgeraten ein im Einsatz befindliches Produktivsystem zu benutzen, da ein Auftreten unvorhersehbarer Fehler zu Datenverlust und Abstürzen des Datenbanksystems führen kann. 
### Nötige Hardware
Für den Test einer verteilten Datenbank werden mehrere Server benötigt, welche sich aber auch innerhalb einer virtuellen Maschine oder der Cloud befinden können.
Des Weiteren wird für die Kontrolle des Tests und die Clientprozesse ein weiterer Computer oder virtuelle Maschine benötigt.

### Einrichtung der Testumgebung
Zuerst ist es notwendig auf allen Maschinen ein debian (oder auch ubuntu) zur Verfügung zu stellen. Die Maschinen die die Datenbank darstellen müssen über einen ssh Zugang verfügen, auf den mit root-Rechten zugegriffen werden kann.

Auf der Maschine, die das Testsystem darstellt, ist es nötig einige Pakete über den Paketmanager zu installieren. 

sudo apt-get install openjdk-8-jre openjdk-8-jre-headless libjna-java leiningen

Die manuelle Einrichtung der Maschine lässt sich mittels Docker-Container allerdings sehr gut automatisieren, so dass die Initiale Einrichtung von Datenbank und Testmaschine durch ausführen der docker-compose Konfigurationsdatei auf einen einzigen Schritt reduziert wird. Voraussetzung dafür ist allerdings eine Maschine mit debian und installiertem docker einschließlich docker-compose
### Einrichtung der Server

### Einrichtung des Clients

## Automatisches Testen durch Jepsen
