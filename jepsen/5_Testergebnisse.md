# 5. Ergebnisse verschiedener Datenbanktests mit Jepsen
## Postgres [1]
Postgres bietet eine vielzahl von Konsistenzgarantien von "uncommitted read" bis hin zu Serialisierbarkeit. Bei Postgres handelt es sich um ein CP System im Sinne des CAP-Theorem, da Schreibvorgänge nur auf einem einzigen Datenbank-Master-Knoten akzeptiert werden. Sollte sich die verteilte Datenbank durch eine Fehler aufteilen ist keine Kommunikation mehr mit dem Server möglich, weshalb davon auszugehen sein sollte, dass das System immer Konsistent ist.

Allerdings trifft diese Konsistenz nicht zwangsweise auf die Datenbank zwischen einem Server und dessen Clients zu. Wie im Kapitel 2 Zwei-Phasen-Commit Protokoll schon angesprochen, kann es unter bestimmten Umständen dazu kommen, dass das Acknowledge (ACK) des Servers den Client nicht erreicht und dieser nicht über den erfolgreichen Schreibvorgang unterrichtet wird.

In dem Test zu Postgres werden zuerst 100 Schreibvorgänge an den Server gesendet, ohne das ein Fehlerfall auftritt. Das Ergebnis ist das erwartete Verhalten, dass es alle 100 Schreibvorgänge erfolgreich durchgeführt und dem Client bestätigt werden.

Ein zweiter Test wird bewusst langsam durchgeführt um während des Tests Zeit zu haben einen Fehlerfall auszulösen, der die Verbindung zwischen Client und Server trennt. Eine Analyse der Logdatei zeigt ab einem Schreibvorgang eine Reihe von Fehlern, die auf einen I/O Error beim Senden der Anfrage hinweist, gefoglt von Logeinträgen mit "Connection attempt timed out" Einträgen. Ein Versuch die aufteilten Datenbanken des Server und des Clients zu "heilen", zeigt als Ergebnis, das von 1000 Schreibversuchen, 950 bestätigt wurden, es aber auf dem Server 952 Schreibvorgänge registriert wurden. Diese 2 unbestätigten Schreibvorgänge sind genau das Resultat, wenn beim Zwei-Phasen-Commit Protokoll die ACK den Client nicht erreicht.

## Redis [2]
Eine Redis Datenbank wird typischerweise als als "shared heap" eingesetzt. Sie läuft auf einem einzelnen Server als Single-Thread Anwendung, was auf eine Linearisierbarkeit (Siehe Kapitel 3 - Linearisierbarkeit) als Konsistenzmodell hindeutet und einem CP System entspricht. 
Wird bei Redis zusätzlich eine asynchrone Replikation verwendet um eine hohe Verfügbarkeit zu garantieren, handelt es sich weiter um ein CP System, solange nicht von den Replikationsservern gelesen wird (Abb. 1).
![Image of -026](/jepsen/images/-026.jpg)

Abb. 1 https://aphyr.com/data/posts/283/-026.jpg
Kommt es jetzt allerdings zu einem teilweisen Ausfall des Netzwerkes, so dass zum Beispiel der Datenbank-Master-Knoten und der erste Replikationsserver nicht mehr erreichbar sind, ein Redis Zusatz Namens Sentinal dafür sorgen, dass aus den noch verfügbaren Datenbankknoten ein neuer Datenbank-Master-Knoten bestimmt wird (Abb.2). 
![Image of -030](/jepsen/images/-030.jpg)

Abb. 2 https://aphyr.com/data/posts/283/-030.jpg

Beim Jepsen-Tests der Redis Datenbank, bei dem während der Schreibvorgänge ein Netzwerkfehler simuliert wird, der den Datenbank-Master-Knoten und den ersten Replikationsserver voneinander trennt, kommt es jetzt aufgrund der asynchronen Replikation dazu, dass noch Ausstehende Replikationsvorgänge die weiteren Replikationsserver nicht erreichen. Der Datenbank-Master-Knoten sendet aufgrund der asynchronen Replikation aber weiter ACK-Meldung an die Clientprozesse. Im Test sind von dem simulierten Netzwerkproblem ebenfalls einige Clientprozesse betroffen. Sentinel erkennt die Aufteilung der verteilten Datenkbank und bestimmt von den 3 gemeinsam im Netzwerk verfügbaren Replikationsserver einen neuen Datenbank-Master. Da der eigentlche Datenbank-Master die aber nicht mitbekommt, arbeitet der Server weiter als Datenbank-Master, so dass es jetzt 2 Datenbank-Master-Server in getrennten Netzwerken gibt (Abb. 3).
![Image of -037](/jepsen/images/-037.jpg)

Abb. 2 https://aphyr.com/data/posts/283/-037.jpg

Durch dieses sogenannte "splt-brain" Szenario kommt es jetzt dazu, dass das C in CP verletzt wird. Der Zustand der Linearisierbarkeit wird nicht mehr erfüllt, da die Clientprozesse unterschiedliche Ergebnis bekommen, je nachdem in welchem Netzwerksegment sie sich befinden. 
Beim Versuch diese Aufteilung der Datenbank wieder zu beheben, zeigt der Jepsen-Test das bei 2000 versuchten Schreibvorgängen 1998 von der verteilen Datenbank mit ACK bestätigt wurden, nach dem "healing" der Datenbank sich allerdings nur 872 erfolgreiche Schreibvorgänge befinden. Damit sind 1126 mit ACK bestätigte Schreibvorgänge verloren gegangen.
## MongoDB 2.4.3 [3]

## Riak [4]

___________________________________________________________________________

[1] https://aphyr.com/posts/282-jepsen-postgres

[2] https://aphyr.com/posts/283-jepsen-redis

[3] https://aphyr.com/posts/284-jepsen-mongodb

[4] https://aphyr.com/posts/285-jepsen-riak
