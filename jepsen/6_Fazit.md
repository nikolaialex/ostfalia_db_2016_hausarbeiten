# Fazit
Die Ergebnisse die das Team hinter Jepson über die Jahre mit den unterschiedlichen Datenbanken erhoben hat, zeigen deutlich das den Aussagen der Datenbankentwickler nicht 100 Prozent geglaubt werden darf. Die auftretenden Probleme sind den Entwicklern teilweile nicht einmal bekannt. Die Testergebnisse haben bei einigen Datenbanken zu einer Verbesserung der Sichtheit der Daten in den neueren Versionen geführt. 

Die Jepsen-Bibliothek ist beim Testen einer Datenbank sehr hilfreich, allerdings ersetzt diese nicht das Wissen das über Datenbanken, das für die Erstellung nötig ist. Die Tatsache das die Jepsen-Bibliothek in Clojure geschrieben ist, macht das ganze für potentielle Nutzer von Jepsen nicht einfacher, sollten die bisher keine oder kaum Erfahrungen mit funktionalen Programmiersprachen haben.

Für die Konfiguration eines Tests ist nicht nur wissen über die zu testendende Datenbank notwendig was die Einrichtung und die potentiellen Stärken und Schwäche der verteilten Datenbank betrifft. Es ist weiter ein nicht zu verachtenden Wissen bezüglich des Verhalten von Netzwerkverkehr nötig und Störeinwirkungen auf verteilte Datenbanken nötig um Schlüsse aus den Tests ziehen zu können.

Als Tool zum Vergleichen verschiedener Datenbanken bezüglich der Einsatzfähigkeit in einem Unternehmen, ist Jepsen wahrscheinlich nur bedingt tauglich, da die Planung, Einrichtung, Tests und Auswertung der Ergebnisse für jede einzelne Datenbank sehr viel zeitlichen Aufwand erfordert, der nur schwer zu rechtfertigen sein wird. 

Diese Arbeit zu Jepsen hat aufgezeigt, warum viele Unternehmen ein externes Hosting oder die Benutzung der Cloud für eine verteilte Datenbank nutzen. Der Aufwand für ein Unternehmen sich das nötige Knowhow und die Infrastruktur anzulegen ist für viele gar nicht machbar, wenn eine höchstmögliche Zuverlässigkeit gewährleitet werden muss.
