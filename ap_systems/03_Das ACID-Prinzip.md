### 2.1.2 Das ACID-Prinzip
Nach [FHK17] ist ACID ein grundlegendes Prinzip, nach dem Transaktionen
bei Datenbankmanagementsystemen stattfinden. Es besagt, dass
Transformationen die Eigenschaften der Atomarität (Atomicity), Konsistenz (Consistency),
Isolation (Isolation) und Dauerhaftigkeit (Durability) erfüllen müssen. Wenn eine Transaktion,
die aus mehreren Teiloperationen zusammengesetzt sein kann, entweder vollständig
ausgeführt wird oder überhaupt nicht ausgeführt wird, dann ist sie atomar. Die Operation
wird vollständig rückgängig gemacht, sobald ein Fehler auftritt. Liegen die Daten nach einer
Transaktion vollständig und widerspruchsfrei vor, so ist das Kriterium der Konsistenz erfüllt.
Hierbei müssen diverse Integritätsbedingungen eingehalten werden, auf die hier nicht weiter
eingegangen wird. Transaktionen treten isoliert auf, wenn sich mehrere gleichzeitig ablaufende
Transaktionen nicht gegenseitig beeinträchtigen, indem Maßnahmen zur Synchronisation dies 
sicherstellen. Die Dauerhaftigkeit einer Transaktion ist gegeben, wenn die Ergebnisse der
Transaktion dauerhaft gespeichert werden, selbst wenn die Datenbank Fehlern oder Ausfällen
ausgesetzt ist. [LTS+17] führen an, dass das ACID-Prinzip schwer zu erreichen ist und dadurch
aufrechterhalten wird, dass die Daten redundant auf vielen Servern verteilt sind.

![Geschäftsgefährdende Wartezeiten bei ACID-Datenbanken](https://github.com/TobiasZiolkowski/ostfalia_db_2016_hausarbeiten/blob/master/ap_systems/Bilder/Wartezeiten%20ACID.JPG)
**Abbildung 2:Geschäftsgefährdende Wartezeiten bei ACID-Datenbanken [FHK17]**

Abbildung 2 zeigt die Wartezeiten, die auftreten, wenn die Transaktionen TransC und TransD
auf die gesperrten Daten von TransB Zugriff nehmen, da erst nach dem Abschluss dieser
Transaktion wieder auf die Daten zugegriffen werden kann. Die Konsistenz der Daten wird
also dadurch erkauft, dass die Verfügbarkeit eingeschränkt wird.