1.  **Einleitung**

Diese Arbeit beschäftigt sich mit der praktischen Anwendung des
Raft-Consensus-Algorithmus. Auf Basis des
Raft-Consensus-Algorithmus-Entwicklungsdokuments wird in Kapitel 2 der
Algorithmus selbst kurz beschrieben, um ein grundsätzliches Verständnis für die
Grundlagen und Abläufe über die Arbeitsweise von diesem Algorithmus zu zeigen.

In Kapitel 3 wird Apache Hadoop als erstes Anwendungsfeld für diesen Algorithmus
thematisiert. Hier wird der grundsätzliche Aufbau des Frameworks dargestellt und
der Umgang mit großen Datenmengen, die zum einen für Analysezwecke verarbeitet
werden, aber auch „live“ geschrieben werden sollen, problematisiert. Als ein
Lösungsansatz wird Apache Kudu als Dateisystem für Hadoop vorgestellt, das die
bisher bestehenden Mängel ausräumen soll.

In dem Kapitel 4 wird Copycat als ein zweites Anwendungsfeld vorgestellt.
Copycat basiert auf dem Raft-Consensus-Algorithmus und stellt ein
fehlertolerantes Maschinenreplikations-Framework dar. Mittels Copycat lassen
sich Replikationen robust, einfach und sicher in verteilten Systemen aufbauen.
In diesem Kapitel wird beschrieben, wie Copycat die einzelnen Funktionen des
Algorithmus umsetzt.

Aufgrund der Tatsache, dass diese Themengebiete sehr speziell sind und noch
wenig Verbreitung auf dem allgemeinen Markt gefunden haben, gibt es für die
einzelnen Implementierungen jeweils nur die technischen Entwicklungsdokumente
von den Programmentwicklern, welche für die Arbeit verwendet werden konnten. Auf
ein breites Angebot von wissenschaftlicher Fachliteratur kann nicht
zurückgegriffen werden, was maßgeblich die Folge hat, dass insgesamt beide
Anwendungsfelder ein thematisches Erklären über die Funktionsweise der beiden
Anwendungsprogramme darstellen.
