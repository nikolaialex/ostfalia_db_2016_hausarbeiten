# Byzantinisches Paxos

Das byzantinisches Paxos[Lam08] wurde entworfen um Paxos auch gegenüber byzantinischen Fehlern (Meldungen von gefälschten Teilnehmern oder gefälschte / durch Man in the Middle geänderte Meldungen von validen Teilnehmern) robust zu machen.
Um dies zu erreichen, muss sichergestellt sein, dass jeder Teilnehmer mittels Public-Key basierten Verfahren die Identität von anderen Teilnehmern überprüfen kann. Rahmenszenarios wie geklaute Identitäten oder fälschlich ausgestellte Zertifikate, um sich eine valide Identität zu erzeugen, werden nicht berücksichtigt, da dies ein Problem des Private/Public-Key Verfahrens darstellt und nicht implizit die Implementierung von Paxos betrifft.

Da die Implementierung des byzantinischen Paxos nicht das Protokoll / den Protokollablauf selbst betrifft, lässt sich das byzantinische Paxos auf verschiedene Paxos-Varianten anwenden.

Um sicherzustellen, dass alle Teilnehmer nur korrekte Informationen von echten Teilnehmern bekommen, müssen alle Nachrichten vom Sender (egal ob Client, Antragssteller, Akzeptor oder Lerner) mit seiner öffentlichen Signatur unterschrieben werden und die Nachricht mit einem Hash versehen werden. Wie und mit welchen Verfahren dies geschieht, ist Teil der Implementierung des Private/Public-Key Verfahrens und nicht Bestandteil dieser Arbeit.

Der Empfänger kann aufgrund der Signatur bei der Zertifikatsstelle die Identität des Absenders erfragen und so sicherstellen, dass es sich nicht um einen gefälschten Teilnehmer handelt. Die Nachricht selbst kann der Empfänger mittels des mitgesendeten Hashs der Nachricht auf Unversehrtheit und Korrektheit überprüft werden. 

Da es sich hierbei um eine Erweiterung der Nachrichten selbst handelt, wird hier auf erklärende Ablaufdiagramme verzichtet.
