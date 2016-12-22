# 2. CAP-Theorem
Das CAP-Theorem umfasst die folgenden Eigenschaften bezüglich einer Datenbank, deren Bezeichnungen bzw. deren Anfangsbuchstaben es seinen Namen verdankt: 
-	Die Konsistenz (Consistency), welche hier im Hinblick auf verteilte Systeme insofern erweitert betrachtet wird, dass alle lesenden Zugriffe den aktuellen Stand erhalten, egal auf welchen Knoten dabei zugegriffen wird.
-	Die Verfügbarkeit (Availybility), die bei der Arbeit in einem Netzwerk (also in einem verteilten System) darauf abzielt, dass der Nutzer unterbrechungsfrei und mit annehmbaren Übertragungszeiten arbeiten kann.
-	Die Ausfallsicherheit (Partition Tolerance), die darauf ausgerichtet ist, dass das Hinzufügen oder Trennen eines Knotens keinen Einfluss auf den Betrieb des Gesamtsystems hat.
Das Theorem selbst geht auf die Vermutung von Eric Brewer von der Universität Berkeley zurück, welche er im Jahr 2000 auf einem Symposium vorstellte und die besagt, 
> „dass die drei Eigenschaften der Konsistenz (Consistency), der Verfügbarkeit (Availability) und der Ausfalltoleranz (Partition Tolerance) nicht gleichzeitig in einem massiv verteilten Rechnersystem gelten können.“ (Fasel und Meier 2016, S. 34)

Letztlich resultiert aus der später wissenschaftlich bestätigten Vermutung Brewers, also dem CAP-Theorem lediglich die Möglichkeit, jeweils zwei der drei angesprochenen Eigenschaften in einem komplexen, verteilten System kombinieren zu können. Dabei muss man aber auf die dritte Eigenschaft verzichten. 
> „Mit anderen Worten lassen sich [...] entweder Konsistenz mit Verfügbarkeit (CA) oder Konsistenz mit Ausfalltoleranz (CP) oder Verfügbarkeit mit Ausfalltoleranz (AP) kombinieren, alle drei sind nicht gleichzeitig zu haben.“ (Fasel und Meier 2016, S. 34)

In der Abbildung 1, welche (Fasel und Meier 2016) entlehnt ist, kann man die möglichen Optionen noch einmal grafisch aufbereitet sehen.

![Die möglichen drei Optionen des CAP-Theorems](https://github.com/achatzSWT/ostfalia_db_2016_hausarbeiten/blob/master/crdt/Bilder/CAP-Theorem.JPG)

**Abbildung 1: Die möglichen drei Optionen des CAP-Theorems (Fasel und Meier 2016, S. 34)**

Um diesem Problem Rechnung tragen zu können, gibt es verschiedene Möglichkeiten. Je nach Anwendungsszenario könnte man zum Beispiel auf Verfügbarkeit und Ausfallsicherheit (AP- Ansatz) Wert legen und die Belange der Konsistenz auf bestimmte Zeiten legen, in denen keine Zugriffe erwartet werden. Oder wenn die Konsistenz von großer Wichtigkeit ist, dass wird unter Umständen für den Synchronisierungsvorgang mittels spezieller Steuerungssoftware die Verfügbarkeit vorübergehend eingeschränkt (CP-Ansatz). Oder, um auch die dritte Möglichkeit zu nennen, man reduziert die Ausfallsicherheit, indem über den Update-Algorithmus die zur Verfügung stehenden Server zur Aktualisierung aufgeteilt werden und nur die erreichbar sind, die bereits aktualisiert wurden (CA-Ansatz).
Viele Szenarien, die auf die eben skizzierten Ansätze setzen, sind häufig nur in kleinen Clustern annehmbar umsetzbar oder können auf Dauer nicht wirklich als befriedigende Lösung angesehen werden. Daher ist es nicht verwunderlich, dass nach besseren Lösungsansätzen oder auch –strategien gesucht wurde. Ein solcher Ansatz verbirgt sich auch hinter der Thematik der CRDTs.

