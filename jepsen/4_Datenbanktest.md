# 4. Einrichtung eines Datenbanktests

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

## Automatisches Testen mit Jepsen
Mit einem Leiningen Projekt lässt sich der komplette Test inklusive der automatischen Einrichtung des Servers steuern.
In der `<project.clj>` werden die Anhängigkeiten des Projektes und weitere Metadaten spezifiziert. Unter `<:main>` und `<:dependancies>` werden in Falle von `<:main>` der Pfad für die Konfigurationsdatei und bei `<:dependancies>` die Abhängigkeiten, zum Beispiel die jeweiligen Clojure und Jepsen Verionen, des jeweiligen Projekt angegeben.

In der unter `<:main>` angegebenen Pfad wird eine Clojure Datei für die Testkonfiguration angelegt. Die wichtigstens Bestandteile dieses Jepsen-Tests sind die Bereiche für die automatische Einrichtung der verteilten Datenbank, des Clients, mehrerer Checker und der Auslösung von Fehlerfällen.

### Einrichtung der Datenbank

### Einrichtung des Clients

### Definierung von Checkern

### Auslösen von Fehlerfällen


