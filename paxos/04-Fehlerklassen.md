# Fehlerklassen in verteilten Systemen

In verteilten Systemen können verschiedene Fehler auftreten. Bei der Entwicklung und dem Design von verteilten Systemen müssen diese Fehler berücksichtigt werden, da sonst ein einzelner Fehler bereits zum Ausfall des gesamten verteilten Systems führen kann. So sind  zum Beispiel im September 2015 ein Großteil der Sparkassen-Automaten in West- und Süddeutschland ausgefallen, weil ein Routing-Problem zum Ausfall zweier redundanter Rechenzentren geführt hat. Somit war die Redundanz der Rechenzentren hinfällig, da ein einzelner Fehler zum Ausfall beider (zentralen) Teilnehmer dieses verteilten Systems geführt hat. Hier war das Routing der sogenannte „Single point of failure“. 

Die Fehler  in verteilten Systemen lassen sich prinzipiell in 2 Klassen einteilen. Die „Fail-Stop“ Fehler und die sogenannten byzantinischen Fehler.

## Fail-Stop Fehlerklasse

Der Ausfall bzw. die Nicht-Erreichbarkeit eines Teilnehmers des verteilten Systems nennt man Fail-Stop-Fehler. Die Gründe für einen Fail-Stop-Fehler sind vielfältig. Die folgende Liste beschreibt einige Ursachen für solche Fehler, hebt aber keinen Anspruch auf Vollständigkeit.
- Stromausfall
- Routingprobleme
- Prozessabsturz
- Prozess hängt sich auf
- Hardwarefehler
- Sonstige Netzwerkfehler
 - Wackelkontakt im Netzwerkstecker
 - Riss / Knickstelle im Netzwerkkabel
 - Trennen der Netzwerkverbindung
 - …

Die Fail-Stop Fehler lassen sich je nach Ursache mehr oder weniger schnell beheben. Prozessabstürze lassen sich mittels Prozess-Überwachungsdämonen wie „daemontools“ detektieren und die Prozesse können neugestartet werden. Sollte ein Prozess sich jedoch in einer Endlosschleife befinden, lässt sich das nur mittels geeigneten implementierten Maßnahmen, z.B. Heartbeat-Nachrichten erkennen. Andere Fehler, wie Hardware-Fehler oder Netzwerkprobleme können deutlich länger dauern, bis das Problem identifiziert und behoben ist. 

Byzantinische Fehler werden im nächsten Kapitel erläutert.