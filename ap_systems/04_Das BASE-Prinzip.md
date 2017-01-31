### 2.1.3 Das BASE-Prinzip
Wie [FHK17] hier und im Folgenden feststellt, steht das Akronym BASE
für Basically Available, Soft State, Eventually Consistent. Verbreitete
Anwendung findet das BASE Prinzip bei NoSQL Datenbanken. Im Web
2.0 Zeitalter haben sich die Anforderungen an Web-Anwendungen
teilweise geändert. So benötigen soziale Netzwerke eine hohe
Verfügbarkeit und hohe Performance während der Gesamtlaufzeit,
wobei die Konsistenz der Nachrichten vernachlässigt werden darf.
Datenbanken, die das BASE-Prinzip verfolgen, kommen vollständig
ohne Sperren aus. Sperren von Datensätzen durch eine Transaktion
bewirken, dass sie so lange durch weitere Transaktionen nicht 
zugreifbar sind, wie die Sperre anhält. Dies kann mit Wartezeiten
einhergehen, deren Länge nicht kalkulierbar ist. 

Bei verteilten Datenbanksystemen, wie sie bei Web 2.0 Anwendungen
nötig sind, ist bereits die Übereinkunft von Sperren fehleranfällig und
im Aufwand erheblich. Die Dauer der Sperre verlängert sich hier
zusätzlich um die Zeit, die es braucht, um die Datenbankänderung auf
allen beteiligten Datenbankservern durchzuführen. Sperren sind
deswegen aufwendig, weil die übrigen Server über die Absicht der
Sperrung in Kenntnis gesetzt werden müssen, wobei die einzelnen
Server der Anfrage entsprechen oder diese auch ablehnen können.
Im Falle der Zustimmung muss der anfragende Server benachrichtigt
werden. Dieser wartet bis genug bestätigende Antworten eingegangen
sind, aktiviert anschließend die Sperre und informiert dann die übrigen
Server darüber, dass die Sperre gesetzt ist. Diese Kommunikation
findet in Form von Nachrichten über das Netz statt und ist ebenso
aufwendig, wenn die Sperre wieder aufgehoben werden soll. Die Idee
des Eventually Consistent ist nun, dass der Zustand der Konsistenz der
Daten irgendwann, aber nicht unbedingt sofort, erreicht wird. Dass bis
zum Eintreten des Zustands der Konsistenz die Daten nicht konsistent
vorliegen, wird hierbei hingenommen. 

Zu beachten ist hier, dass beim BASE-Prinzip der Begriff Konsistenz
eine andere Bedeutung hat, als beim ACID-Prinzip. Beim ACID-Prinzip
bezieht sich die Konsistenz auf die Integrität der Daten, während beim
BASE-Prinzip die inhaltliche Korrektheit des abzuspeichernden
Datensatzes als konsistent betrachtet wird. Das ACID-Prinzip und das
BASE-Prinzip sind trotz ihrer Differenzen als zwei Enden eines
Konsistenzspektrums zu sehen, wobei die Übergänge fließend sind.
So gibt es Systeme, die sowohl das ACID-Prinzip als auch das
BASE-Prinzip verfolgen.

![Akzeptable Wartezeiten bei BASE-Datenbanken](https://github.com/TobiasZiolkowski/ostfalia_db_2016_hausarbeiten/blob/master/ap_systems/Bilder/Wartezeit%20BASE.jpg)
**Abbildung 3:Akzeptable Wartezeite bei BASE-Datenbanken [FHK17]**

Abbildung 3 verdeutlicht die Konsistenz ohne Sperren bei Anwendungen
des BASE-Prinzips. Bei Transaktion TransB wird bei einer Änderung der
Daten ein neuer Datensatz erzeugt. Die lesenden Transaktionen TransC
und TransD verweisen so lange auf den alten Datenzustand, bis die neue
Version auf allen Datenknoten repliziert ist.