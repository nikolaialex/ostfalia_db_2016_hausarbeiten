## 3.5 SimpleDB
SimpleDB ist nach [ABGA15] eine verteilte Datenbank, die von Amazon.com entwickelt
wurde und deren Cloud-Computing-Service Amazon Web Services zugehörig ist.
Zusammen mit den anderen Diensten von Amazon Web Services, nämlich Amazon
Simple Storage Service (Amazon S3) und Amazon Elastic Compute Cloud (Amazon EC2)
können Daten in der Cloud gespeichert, bearbeitet und abgefragt werden. Daten können
mit SimpleDB auf sehr einfache Art organisiert werden. Der gesamte Datenraum ist
untergliedert in Domänen, denen Items zugeordnet sind, die wiederum über Attribute verfügen,
über die sie beschrieben werden. Die Domänen entsprechen den Tabellen bei relationalen
Datenbanken. Nach [Ama14] bestehen die Attribute aus Name-Wert Paaren.
 [ABGA15] beschreiben, dass es bei SimpleDB keine Unterscheidung zwischen Daten und
Metadaten gibt. Die Struktur des Informationsraums kann jederzeit beliebig geändert werden.

![Anschaulicher Vergleich des SimpleDB-Aufbaus mit einer Tabellenkalkulation](https://github.com/TobiasZiolkowski/ostfalia_db_2016_hausarbeiten/blob/master/ap_systems/Bilder/SimpleDB%20Aufbau.jpg)

**Abbildung 6: Anschaulicher Vergleich des SimpleDB-Aufbaus mit einer Tabellenkalkulation [AMA14]**

Abbildung 7 veranschaulicht diesen Aufbau durch den Vergleich mit der Datei einer
Tabellenkalkulation. Die Domänen entsprechen dabei den Tabs im unteren Bereich des Bildes,
wie [Ama14] hier und im Folgenden aufzeigt. Die Domänen entsprechen damit den Tabellen. 
Weil es keine Abhängigkeiten zwischen den Domänen gibt, können Abfragen immer nur gegen
eine Domäne getätigt werden, aber nicht gegen mehrere Domänen. Die Zeilen sind analog zu
den Items von SimpleDB. Sie enthalten Attribute, welche Datenkategorien entsprechen und hier
als Spalten der Tabelle dargestellt sind. Eine Item-Attribut Kombination enthält die Instanz einer
Datenkategorie. Dabei kann es sich um einen Wert oder aber um mehrere Werte handeln, was
einen Unterschied zu Tabellenkalkulationsprogrammen darstellt, bei denen eine Zelle immer nur
einen Wert enthalten darf. 

![Items mit unterschiedlichen Attributen in einer Domäne](https://github.com/TobiasZiolkowski/ostfalia_db_2016_hausarbeiten/blob/master/ap_systems/Bilder/Items-Attribute%20SimpleDB.jpg)

**Abbildung 6: Items mit unterschiedlichen Attributen in einer Domäne [AMA14]**

Die Domänen von SimpleDB benötigen keine spezifischen Attribute. Es können also Items mit
unterschiedlichen Attributen in einer Tabelle vorliegen. In der auf Abbildung 8 dargestellten
Domäne befinden sich zum Beispiel Objekte unterschiedlicher Produktkategorien. Die Indexierung
der Daten findet bei SimpleDB automatisch statt.

Es werden bei SimpleDB zwei Konsistenz-Modi unterstützt: Eventually Consistent Read und
Consistent Read. Ist der Modus Eventually Consistent Read aktiv, so folgt SimpleDB dem Konzept
des Eventually Consistent. Die Daten werden sofort zur Verfügung gestellt, aber repräsentieren
mitunter nicht den Stand, der durch einen kürzlich abgeschlossenen Schreibvorgang geschaffen
worden ist. Allerdings dauert es üblicherweise nur etwa eine Sekunde bis die Konsistenz der
gesamten Datenbank hergestellt ist. Ist der Modus Consistent Read aktiv, so werden nur konsistente
Daten zurückgegeben.

Obwohl sich Anfragen bei SimpleDB nur auf eine einzige Domäne beziehen können, können
Anwendungen eine parallele Partitionierung der Daten zur Verbesserung der Performance
unterstützen. Dafür müssen die Daten in mehreren Domänen vorliegen. Die Anwendung schickt dann
Anfragen an diese Domänen und fasst die Ergebnisse zusammen. Bei Daten wie Logs, die sich
nicht leicht partitionieren lassen, können die Daten über einen Hash-Algorithmus auf eine von
mehreren Domänen abgebildet werden, wodurch eine einheitliche Verteilung auch auf sehr viel
Domänen erreicht wird. 

[Wei09] stellt als Nachteil die fehlende Kontrolle fest, weil die Daten bei einem Drittanbieter
vorliegen. Ferner ist zu bemängeln, dass wegen des Fehlens von Datentypen eine größere
Anfälligkeit für Programmierfehler gegeben ist. Außerdem werden keine Joints unterstützt und die
Konsistenz kann wie bei allen AP-Systemen nicht garantiert werden. Zusätzlich zu der bereits erklärten
Schemafreiheit mit variablen Attributen für Items einer Domäne sind als Vorteile zu nennen:
Automatische Backups, Beschränkung der Kosten auf den aktuellen Bedarf, geringe Latenz, einfache
Schnittstellen, spontane Skalierung mit der Last und dadurch hoher Durchsatz.
