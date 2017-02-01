### Atomic Commit Protokolle
In verteilten Datenbankensystemen werden Transaktionen verwendet, um eine Folge von Aktionen oder Schritten, als komplette Einheit entweder ganz oder gar nicht durchzuführen. 
Die Transaktion soll die sogenannten ACID-Eigenschaften erfüllen:

Atomicity: Die Ausgeführte Operation muss atomar sein, d.h. die Operation muss ganz oder gar nicht ausgeführt werden. Besteht beispielsweise eine Transaktion aus mehreren „Updates“ einer Tabelle, so muss bei einem Fehler einer der Updates alle bisherigen Änderungen wieder rückgängig gemacht werden. Dies wird meistens durch eine Historie und ein Rollback realisiert.

Consistency: Das System muss sich in einem konsistenten Zustand befinden, nachdem eine Transaktion durchgeführt wurde, wenn es zuvor bereits in einem konsistenten Zustand war. 

Isolation: Werden mehrere Transaktionen gleichzeitig ausgeführt, so dürfen diese sich nicht gegenseitig beeinflussen. 

Durability: Nach dem Abschluss einer Transaktion ist garantiert, dass die Änderungen persistent gespeichert sind. Tritt nach der abgeschlossenen Transaktion ein Fehler auf, so darf dies niemals dazu führen, dass das Ergebnis der abgeschlossenen Transaktion verloren geht. 

Atomic Commit Protokolle werden bei verteilten Transaktionen verwendet um einen Teil der ACID-Eigenschaften zu gewährleisten. Durch ein Atomic Commit Protokoll kann die Atomarität und die Konsistenz erreicht werden. An eine verteilte Transaktion werden verschiedene Anforderungen gestellt. Alle Knoten müssen global zu einer gleichen Entscheidung für („Commit“) oder gegen („Abort“) die Transaktion kommen. Der Commit wird nur ausgeführt, wenn alle Knoten mit „Ja“ gestimmt haben und kein Fehler aufgetreten ist. Somit wird die Atomarität der Transaktion sichergestellt, da die Transaktion entweder ganz oder gar nicht ausgeführt wird. Da dies auf allen Knoten mit der gleichen Entscheidung durchgeführt wird, ist die Konsistenz über alle Knoten gewährleistet [Ray09].

Für die Transaktionen werden Undo- und Redo Logs verwendet um die Transaktion erfolgreich abzuschließen oder abzubrechen. Bei einem „Commit“ wird der Redo Log verwendet, und die Transaktion persistent durchgeführt. Bei einem „Abort“ wird der Undo Log verwendet, um die Transaktion rückgängig zu machen. Jegliche Log-Einträge in das Logbuchen müssen erst vollständig persistent geschrieben werden, bevor weitere Aktionen ausgeführt werden dürfen. Fehler auf der anderen Seite werden nur durch Timeouts erkannt. Dabei wird die Annahme getroffen, dass der jeweilige Knoten, der nicht mehr erreichbar ist, durch einen „Soft-Crash“ nicht mehr reagiert. Ein abgestürzter Knoten kann durch einen Neustart oder anderweitige Aktionen wieder in einen Zustand gebracht werden, sodass dieser eine Transaktion fortsetzen kann.

Der Knoten, der ein Atomic Commit Protokoll startet und leitet ist der Koordinator, während alle weiteren Knoten die Teilnehmer sind.
