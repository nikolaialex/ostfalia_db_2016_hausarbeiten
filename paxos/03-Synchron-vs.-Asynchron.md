# Synchron vs. Asynchron

Man könnte sich fragen, warum das Konsens-Problem in asynchronen Systemen unmöglich ist und es in synchronen Systemen Algorithmen gibt, die dieses Problem bewiesenermaßen lösen. Dazu muss man sich zunächst die Unterschiede zwischen synchronen und asynchronen Systemen anschauen.

## Synchrone Prozesse

Synchrone Prozesse zeichnen sich durch folgende Eigenschaft aus:
- Alle Prozesse sind exakt gleich schnell
- Sie treten alle exakt im selben Moment in die gleichen Zustände / Phasen ein 
- und kommunizieren im selben Rhythmus / Moment
 - Jeder Teilnehmer Weiß, zu welcher Zeit er eine Nachricht von anderen Teilnehmern erwartet
 - Sollte eine erwartete Nachricht eines anderen Teilnehmers nicht zugestellt werden, so ist der Prozess, dessen Nachricht erwartet wird, nicht mehr synchron oder gar ausgefallen und kann als nicht mehr existent erachtet werden.
- Lediglich direkt in Hardware zu finden (Multi-Prozessor Systeme)

## Asynchrone Prozesse

Asynchrone Prozesse zeichnen sich durch folgende Eigenschaft aus:
Es dürfen keine zeitlichen Annahmen getroffen werden über
- Prozessgeschwindigkeit
 - Andere Prozesse können nicht von ihrem Zustand auf den Zustand anderer Prozesse schließen
- Nachrichtenlaufzeit: Wenn eine erwartete Nachricht nicht angekommen ist, kann ein Prozess nicht entscheiden ob
 - Der Absender noch vorhanden ist
 - Die Nachricht noch unterwegs ist
 - Die Nachricht verloren gegangen ist

Die daraus resultierende Überlegung ist, asynchrone Systeme zumindest für bestimmte Zeiträume zu „synchronisieren“. Dazu können (in gewissem Rahmen) synchrone Uhren verwendet werden und ein Protokoll eingesetzt werden, welches Time-Outs erkennen kann, beispielsweise TCP/IP, wobei darauf zu achten ist, entsprechende Time-Outs so zu setzen, dass langsame Prozesse / spät reagierende Prozesse nicht unnötigerweise als fehlerhaft erkannt werden und zunächst ausgeschlossen werden.
