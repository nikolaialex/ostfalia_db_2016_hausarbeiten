# 1. Einleitung

Soll in einem Unternehmen ein neues System mit einer Datenbank aufgebaut werden, ist zuerst festzulegen welche Kriterien von der Datenbank erfüllt werden müssen. Dazu zählen vor allem Fragen die eng im Zusammenhang mit dem CAP-Theorem zu nennen sind.
Wie wichtig ist die Ausfallsicherheit?
Wie schnell müssen Anfragen beantwortet werden?
Muss sichergestellt werden, ob die Datenbank eine verteilten Datenbanksystems immer den gleichen Datenbestand hat?
Bezüglich dieser Fragen und noch weiterer Anforderungen ist die die Eignung einer Datenbank zu überprüft werden. An diesem Punkt kann ein Unternehmen sich nur auf die Angaben der Hersteller verlassen, oder auf eigene Erfahrungen mit verteilten Datenbanken zurückgreifen. 

Jepsen setzt an diesem Punkt an. Kyle Kingsburry mit Jepsen hat eine Benchmarking Software entwickelt, die eine verteilte Datenbank bezüglich des CAP-Theorems testen und bewerten kann. Auf der Webseite https://jepsen.io stellt Kyle Kingsburry Jepsen als Tool unter dem Thema “Distributed Systems Safety Research” vor. Die Software Bibliothek hinter Jepsen ist dabei als open Source Projekt unter https://github.com/jepsen-io/jepsen verfügbar.
Kyle Kingsburry hat innerhalb der letzten Jahre einige Datenbanken einigen speziellen Test unterzogen. Ergebnisse zu den einzelnen Datenbanken lassen sich https://aphyr.com/tags/jepsen finden.

Jepsen ist als Bibliothek der funktionalen Programmiersprache Clojure entstanden. Kenntnisse in Clojure sind für die Erstellung eines Testes nicht zwingend erforderlich, wird aber dennoch von dem Team hinter Jepsen empfohlen. Ein Jepsen-Test ist in der Lage die verteilte Datenbank aufzubauen, Anfragen zu generieren und an die verteilte Datenbank zu senden. Diese Anfragen selber zu protokollieren um anschließend Auswerten zu können, ob die verteilte Datenbank das erwartete Verhalten aufweist, oder ob bei Störungen der Server bzw. des Netzes Probleme auftreten, die dazu führen können, dass die Konsistenz der Datenbank nicht mehr sichergestellt ist.

Um die Zuverlässigkeit einer verteilten Datenbank zu testen, benötigt der Kontrollrechner auf dem Jepsen läuft einen Zugriff auf die Server, auf denen die Datenbank läuft. Dafür ist eine ssh Verbindung zwischen Kontrollrechner und den einzelnen Servern notwendig. Dem Kontrollrechner müssen zudem root Rechte auf den Servern gewährt werden. Die root Rechte erlauben es dem Kontrollrechner Manipulationen an der verteilten Datenbank vorzunehmen, was die Simulation von Server und/oder Netzausfällen als auch hohen Lastzuständen und langen Paketlaufzeiten ermöglicht.

Der Test einer verteilten Datenbank erfordert im Falle von Jepsen mehrere Client-Prozesse auf dem Kontrollrechner. Diese Client-Prozesse stellen schreibende und lesende Anfragen an die Datenbank. An welche Server der Datenbank die Anfragen geschickt werden hängt dabei vor allem von der Konfiguration der Datenbank ab. 
Der Kontrollrechner generiert zufällig Anfragen an die verteilte Datenbank, die alle von dem Kontrollrechner protokolliert werden.
Durch die Kombination aus schreibenden und lesenden Anfragen an die verteilte Datenbank, lässt sich vergleichen ob das Ergebnis der einer lesenden Anfrage dem von Kontrollserver erwarteten Ergebnis entspricht.
