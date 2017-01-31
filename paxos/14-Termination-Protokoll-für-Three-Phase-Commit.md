Tritt ein Timeout bei den Teilnehmern gegenüber dem Koordinator auf, so gehen diese davon aus, dass der Koordinator abgestürzt ist. Die verbliebenden Teilnehmer wählen einen neuen Koordinator. Dies geschieht häufig durch IDs, die der ehemalige Koordinator an die Teilnehmer verteilt hat. Der Teilnehmer mit der niedrigsten ID wird der neue Koordinator und fragt alle weiteren Teilnehmer nach ihrem derzeitigen Status. Haben alle Teilnehmer ihren Status an den neuen Koordinator übermittelt, entscheidet dieser anhand von Termination Regeln, wie das Three Phase Commit Protokoll fortgesetzt wird [Con04]. Tabelle 1 zeigt alle erlaubten, bzw. möglichen Zustandsübergänge an, sowie die zu verwendenden Termination Regeln für die Zustände an.  
  
1. Befindet sich irgendein Teilnehmer im Zustand „ABORT“, so ist die globale Entscheidung „Abort“. Dies wird allen Teilnehmern vom neuen Koordinator mitgeteilt.
2. Befindet sich irgendein Teilnehmer im Zustand „COMMIT“, so müssen alle Teilnehmer im „PRE-COMMIT“ oder „COMMIT“ Zustand sein. Der Koordinator verteilt die „COMMIT“ Nachricht und die Transaktion kann erfolgreich abgeschlossen werden.
3. Befinden sich alle Teilnehmer im „READY“ Zustand. Es wurde noch keine Entscheidung getroffen und die Entscheidung des alten Koordinators und eventuell weiterer abgestürzter Teilnehmer nicht bekannt sind, wird die Transaktion mit „Abort“ abgebrochen.
4. Befindet sich mindestens ein Teilnehmer im „PRE-COMMIT“ Zustand und mindestens ein Teilnehmer im „READY“ Zustand, so ist klar, dass die globale Entscheidung für den Commit zuvor vom alten Koordinator an mindestens einen Teilnehmer übermittelt wurde. Um die unsicheren Teilnehmer ebenfalls zu informieren, wird das Three Phase Protokoll fortgesetzt, indem die „Pre-Commit“ Nachricht an alle Teilnehmer gesendet wird.
5. Befinden sich alle Teilnehmer im Zustand „Pre-Commit“, so haben alle Teilnehmer die globale Entscheidung erhalten und der Commit kann erfolgreich beendet werden. Der neue Koordinator sendet die „Commit“ Nachricht an alle Teilnehmer.  
  
  
> Tabelle 1: Zustandstabelle für erlaubte und nicht erlaube Zustände bei 3PC  

|            |  ABORT |  READY | PRE-COMMIT | COMMIT |
|:----------:|:------:|:------:|:----------:|:------:|
|    ABORT   | ✓(TR1) | ✓(TR1) |      ×     |    ×   |
|    READY   |    ✓   | ✓(TR3) |   ✓(TR4)   |        |
| PRE-COMMIT |    ×   |    ×   |   ✓(TR5)   | ✓(TR2) |
|   COMMIT   |    ×   |    ×   |      ✓     | ✓(TR2) |