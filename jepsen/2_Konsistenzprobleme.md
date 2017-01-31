# 2 Ursachen für Konsistenzprobleme und Erreichbarkeit bei verteilten Datenbanken
Bevor auf die Ursachen für Konsistenzprobleme und Erreichbarkeit eingegangen werden kann, sind einige vorherige erforderliche Eigenschaften für eine ideale verteilte Datenbank anzusprechen.
## CAP-Theorem [1]
Die Aussage hinter dem CAP-Theorem ist, dass ein verteilte Datenbank drei erwünschte Eigenschaften haben sollte. Diese drei Eigenschaften sind:

Consistency (Konsistenz)
Availability (Verfügbarkeit)
Partition-tolerance (Partitionstoleranz)

Es können allerdings nur zwei dieser drei Eigenschaften erfüllt sein.

## Replikation
Bei der Replikation ist zwischen asynchrone und synchroner Replikation zu unterscheiden.
Bei einer asynchronen Replikation kann der Datenbank-Master das ACK an den Client senden, auch wenn noch nicht alle Replikations-Server das schreiben der Information bestätigt haben.
Bei der synchronen Replikation wird das ACK an den Client erst gesendet, wenn alle Replikations-Server das schreiben der Information bestätigt haben.

## Zwei-Phasen-Commit Protokolle
Beim Zwei-Phasen-Commit Protokoll sendet im Falle von Datenbanken ein Client beispielsweise ein schreibende Anfrage an die Datenbank. Zuerst wird als Vorbereitung der schreibenden Anfrage ein “query to commit” an den Server gesendet. Erlaubt dieser mit einem “yes” die schreiben Anfrage an die Datenbank, sendet der Client die zu speichernde Information an den Datenbankserver. Nach erfolgtem Schreibvorgang beendet der Datenbank-Server mit einem “Acknowledge” (ACK) die Verbindung. Mit dem ACK weiß der Client, dass die Information in die Datenbank geschrieben wurde. 

Kommt es jetzt allerdings während der Verbindung zwischen Client und Datenbank-Server zu einem Verbindungsproblem, so dass der Datenbankserver die Anfrage zwar abgearbeitet und ein ACK sendet, diese aber nicht beim Client ankommt, hat der Client keine Information ob die Anfrage erfolgreich bearbeitet wurde. Ein Timeout wird beim Client ausgelöst und die schreibende Anfrage nicht als erfolgreich angesehen, was zu einem Konsistenzproblem führt.

## Reaktion der verteilten Datenbank bei teilweisem Verlust einzelner Knoten
Bei einem Verlust eines Teiles der verteilten Datenbank, muss die verteilte Datenbank je nach Möglichkeit und Konfiguration entsprechend darauf reagieren um sicherzustellen, dass bei wieder erfolgtem zusammenführen der Datenbankserver die Konsistenz erhalten bleibt.

Hier kommt es besonders auf die Konfiguration der verteilten Datenbank an, was bei einem Verlust eines Teiles der verteilten Datenbank geschieht. 
Ist im Falle nur einer Datenbank-Masters, dieser nicht mehr erreichbar und das System reagiert darauf nicht mit der automatischen Festlegung einen neuen Datenbank-Masters, ist kein Zugriff von außen mehr auf die Datenbank möglich. 
Um eine weitere Erreichbarkeit zu ermöglichen ist es nötig einen neuen Datenbank-Master im noch erreichbaren Teil der verteilten Datenbank zu bestimmen.

## Ausfälle auf Anwendungsebene
Nicht immer ist das Netzwerk an der Aufteilung einer verteilten Datenbank schuld. So kann es auch durch Abstürze, Wettlaufsituationen, Latenzen des Schedulers des Betriebssystem oder überlastete Prozesse zu Abstürzen oder der verzögerten Abarbeitung von Nachrichten kommen.

Im Falle von bonsai-io führte eine hohe CPU-Last und Arbeitsspeichernutzung, die einen Neustart des betroffenen Servers notwendig machte zu weitreichenden Problemen. Diese fürhten zu einer Aufteilung der verteilten Datenbank, was nur durch einen kompletten Neustart der verteilten Datenbank wieder behoben werden konnte. Dabei gab es aber Probleme mit der Indexierung, so dass sich nur 99% des Indexes wieder automatisch aufbauen ließen.[2]

Auch die Garbage Collection bei Elasticsearch kann dazu führen, dass hohe Latenzen auftreten, was zur Folge haben kann, dass die hohen IO_Wait Zeiten zu einer aufgeteilten Datenbank, Schreibverlusten oder einem korrupten Index führen.

## Probleme mit Network Interface Controllern und Treibern
Auch Probleme mit den Netzwerkchips und deren Treibern führen unter Umständen zu dem Verlust von Daten oder der Aufteilung der Datenbank führen.

Marc Donges und Michael Chan [3] beschreiben ein Problem mit einem Broadcom BCM5709 Netzwerkchip, über den nach mehreren Wochen Uptime von außen kein Zugriff mehr möglich war. Da aber nur der eingehende Datentransfer betroffen war und der Server weiter einen heartbeat sendete übernahm ein der Ersatzserver nicht. Erst nach einer Deaktivierung der des entsprechenden Ports des Switches gelang es dem Ersatzserver die Kontrolle zu übernehmen.

Auch bei Netzwerkchips der Firma Intel kam es schon aufgrund einer fehlerhaften Programmierung des EEPROM seitens des Motherboadherstellers zu Problemen. Ein entgegenkommendes Session Initiation Protocol (SIP) Paket kann es zu einem Fehler im Netzwerkchip kommen, der zum Absturz des Netzwerkcontrollers führt und keine Verbindung mehr zum Server besteht.[4]

## Netzwerkkonfiguration im Rechenzentrum
Im Gegensatz zu Ausfällen eines einzelnen Datenbankknotens durch einen Fehler im Netzwerkchip, kann ein Netzwerfehler in einem Datacenter dazu kommen, dass ein Großteil der Datenbankknoten nicht mehr erreichbar ist.

Selbst eine redundantes Netzwerk mit redundanter Stromversorgung kann ausfallen und zu einem Teilverlust des Netzwerkes innerhalb eines Rechenzentrums führen. Bei “Fog Creek Software” kam es 2011 zu so einem Problem, bei der eine Stromversorgung ausfiel. Durch die redundante Stromversorgung kam es aber zu keinem Ausfall der betroffenen Server. Allerdings fielen beide an dieses Netzwerksegment angeschlossenen Switche trotz vorhandener Redundanz bei der Stromversorgung aus.[5]

Auch bei github kam es schon zu Ausfällen des Netzwerkes. So 2012 als aufgrund von Problemen mit der Netzwerkperformance das gesamte Netzwerk modernisiert wurde. Durch die Redundanz des Netzwerkes sollte es zu keinen Ausfällen während der Umstellung kommen. Alles funktionierte wie geplant, bis es zum Austausch des finalen Switches kam. Eine fehlerhafte Konfiguration zwischen diesem um dem Backup Switch sorgte für eine Schleife zwischen beiden Geräten. Obwohl die Switche so eine Schleife erkennen und die Verbindung automatisch trennen, kam es zu Problemen. Die Performance des Netzwerkes war nicht wie gewünscht. Nach weiteren Analysen, Anpassungen und gesprächen mit dem Hardwareanbieter, konnten die Probleme nach und nach behoben werden. Insgesamt fiel das Netzwerk für 18 Minuten aus.[6]
## Verteilte Datenbanken im WAN
Um Ausfälle eines ganzen Rechenzentrum kompensieren zu können und eine hohe Verfügbarkeit garantieren zu können, werden die Teile der verteilten Datenbanken über verschiedene Rechenzentren verteilt.

Im Falle von PagerDuty war es 2013 so, dass deren verteilte Datenbank auf drei Rechenzentren von Amazon verteilt war. Der Ausfall eines kompletten Rechenzentrums hätte kompensiert werden können. Am 13.04.2013 passierte es dann aber, dass die EC2 Region in der sich zwei der 3 Rechenzentren befinden erhebliche Probleme mit der Netzwerkstabilität hatte. Dadurch passierte es dann, dass die PagerDuty Datenbank für 18 Minuten keine Anfragen mehr bearbeiten konnte. Durch eine fehlerhaft Konfiguration wurde eine schnellere Wiederherstellung der Datenbank verhindert.[7]

___________________________________________________________________________

[1] Brewer, E.A.: "Towards Robust Distributed Systems", Folien zur Keynote des 19. ACM SIGACT-SIGOPS Symposium on Principles of Distributed Computing, Portland, Oregon, USA, 2000

[2] https://bonsai.io/2013/03/05/march-4th-cluster-outage-and-post-mortem

[3] http://www.spinics.net/lists/netdev/msg210485.html

[4] http://blog.krisk.org/2013/02/packets-of-death.html

[5] http://status.fogcreek.com/2011/06/postmortem.html

[6] https://github.com/blog/1346-network-problems-last-friday

[7] https://www.pagerduty.com/blog/outage-post-mortem-april-13-2013/
