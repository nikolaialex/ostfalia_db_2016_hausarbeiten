# Konsensfindung

Das erfolgreiche Bestimmen eines gemeinsamen Wertes ist an drei grundlegende Bedingungen geknüpft: 
- Einigung (Agreement)
 - Alle validen Prozesse entscheiden sich für den gleichen Wert
- Valide (Validity)
 - Der entschiedene Wert muss ein Wert sein, der von einem validen Prozess vorgeschlagen wird
- Terminierung (Termination)
 - Der Entscheidungsprozess muss in endlicher Zeit abgeschlossen werden

Nur wenn alle drei Bedingungen erfüllt werden, so gilt der Konsens als gefunden. „Valide Prozesse“ bedeuten, dass es sich um einen Prozess handelt, der während des gesamten Entscheidungsprozesses verfügbar ist. Im Weiteren werden die Wörter Prozess und Teilnehmer verwendet. Beide meinen ein Kommunikationsendpunkt eines verteilten / parallelen Systems. Hierbei spielt es keine Rolle ob es sich um einen im klassischen Sinne „Prozess“ handelt, oder ob sich dabei direkt um einen Prozessor handelt (Multi-Prozessor-Systeme). Michael J. Fischer, Nancy A. Lynch und Michael S. Paterson beschreiben in ihrer Arbeit „Impossibility of Distributed Consensus with One Faulty Process“[Fis01] aus dem Jahre 1985 das Problem, dass es unmöglich ist, alle drei oben aufgelisteten Bedingungen zu erfüllen. Der Beweis zeigt, dass es aufgrund der Asynchronität nicht möglich ist, bei einem Ausfall eines Teilnehmers die Terminierung nicht möglich ist. Um den Beweis zu erbringen, stelle man sich ein System mit mehreren Teilnehmern vor, die sich auf den Wert 0 oder 1 einigen möchten. Alle Teilnehmer sind zunächst in einem bivalenten Zustand. Das bedeutet, dass sie sich noch nicht entschieden haben und nur die 0 oder 1 als Endzustand möglich sind. Wenn das Protokoll nun in die Entscheidungsphase (ob 0 oder 1 für alle Teilnehmer) eintritt, muss diese Entscheidung von einem Teilnehmer getroffen werden. Wenn dieser Teilnehmer jedoch in diesem Moment ausfällt oder nicht mehr reagiert, dann kann ein Algorithmus nicht zur Entscheidung gelangen, da alle anderen Teilnehmer auf den „Entscheidungsteilnehmer“ warten.
