# 2 Konzept hinter Jepsen
## Starke Konsistenzmodelle[2]
Wir im vorherigen Kapitel schon erwähnt, kann eine Aufteilung des Netzes verschiedene Ursachen haben, die zur einer Verzögerung, Löschung, Verdopplung oder Neuordnung innerhalb der verteilten Datenbank führen. 
### Richtigkeit
Um eine Richtigkeit zu beschreiben, wird von einem Zustand ausgegangen, der durch Operationen beeinflusst wird. Der Zustand kann hier durch eine Variable mit den Operationen lesen (r) und schreiben (w) beschrieben werden.

Abb.1 https://aphyr.com/data/posts/313/uniprocessor-history.jpg

In Abbildung 1 ist eine Sequenz von Operationen auf einer Variable zu sehen, die nacheinander abgearbeitet werden und als gelesene Werte die Buchstabenfolge “aabd” annehmen sollte. Als eine Regel lässt sich festlegen, dass ein schreibender Vorgang den Inhalt der Variable auf einen neuen Wert ändert, der aber auch dem alten Wert entsprechen kann. Eine zweite Regel ist, dass der Wert, der gelesen wird dem zuletzt geschriebenen Wert entspricht. 
Diese Folge von Regeln ergeben dabei ein Konsistenzmodell, dass die Richtigkeit beschreibt.

### Gleichzeitiger Zugriff / Gleichzeitige Historie/Vergangenheit

Abb. 2 https://aphyr.com/data/posts/313/multiprocessor-history.jpg

### Lichtkegel

Abb. 3

Abb. 4
### Linearisierbarkeit

Abb. 5

Abb 6.
### Sequentielle Konsistenz

Abb. 7
### Kausale Konsistenz
### Serialisierbare Konsistenz

Abb 8.
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
