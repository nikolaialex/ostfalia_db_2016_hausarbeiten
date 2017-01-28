# 1 Einleitung

Wenn man sich vor einigen Jahren mit neuen Konzepten der Datenspeicherung beschäftigte, musste man noch erklären warum schemafreie Datenbanken für das eine oder andere Problem sinnvoll sein könnten. Schliesslich passt jede noch so komplexe Datenstruktur in ein relationales Modell und solange sich steigende Datenmengen mit besserer Hardware bewältigen lassen, schien es auch keinen Grund zu geben, darüber nachzudenken. Das hat sich geändert. 

>„NoSQL dürfte sicherlich einer der Bereiche der Informatik sein, der sich derzeit am schnellsten entwickelt“ (Edlich et al. 2011, Vorwort). 

Die Gründe sind vielfältig und gehen einher mit dem stetigen Anstieg der Datenmengen, die im Web verarbeitet werden müssen. Mittlerweile fallen Terabyte an Daten an.
Edlich et al. (2011) datieren den Beginn der Veränderungen zum Jahrtausendwechsel und den Beginn der NoSQL Bewegung in das Jahr 2009. In diesem Zeitrahmen wurden auch die bekanntesten NoSQL-Datenbanken entwickelt. Google entwickelte *BigTable*, Facebook *Cassandra* und Amazon *Dynamo*, um den steigenden Anforderungen gerecht zu werden. Gefordert sind Systeme, die horizontal skalierbar sind, sich einfach replizieren lassen und schnelle Reaktionszeiten haben (Edlich et al. 2011, S.31).

Neben den Punkten Replizierbarkeit und Skalierbarkeit ist die Struktur der Daten selbst ein Grund warum schemafreie Datenbanken interessanter werden.  „User-generated content“ liegt meist unstrukturiert vor. Auch vernetzte Strukturen lassen sich in relationalen Strukturen meist schwer abbilden. Zudem sind Schemaänderungen einer im Betrieb befindlichen relationalen Datenbank eine anspruchsvolle Aufgabe (Wolff/Nitschinger/Trelle 2014,  Kap.1).

In der Ranking-Liste auf DB-Engines.com stehen Oracle, MySql und Microsofts SQLServer unangefochten an der Spitze. Aber bereits drei der Datenbanksysteme unter den ersten zehn Plätzen sind nicht-relationale Systeme[<sup>1][foot11]. Redis als einer der bekanntesten Key-Value Stores befindet sich auf Platz 9, Facebooks Cassandra (Wide-Column-Store) auf Platz 7 und MongoDB (Document Store) befindet sich mittlerweile auf Platz 4. Auch aus dem Trend-Diagramm[<sup>2][foot12] lässt sich ablesen, dass die Relevanz der NoSQL-Datenbanken seit 2013 deutlich angestiegen ist. 

In dieser Arbeit geht es hauptsächlich um die beiden Punkte Replikation und Skalierung. NoSQL Datenbanken sollen per Definition von Beginn an auf eine verteilte und horizontale Skalierbarkeit ausgerichtet sein (Edlich et al. 2011, S.2). Demnach sollte das Einrichten einer solchen Architektur mit einem überschaubaren Aufwand möglich sein. 

Als Beispiel wird die Datenbank MongoDB herangezogen. Es gäbe eine Menge anderer Systeme, die genauso interessant zu betrachten wären. Da MongoDB zu den am häufigsten verwendeten schemafreien Datenbanken gehört, ist sie ein passender Kandidat. Die Dokumentation unter MongoDB.com[<sup>3][foot13] ist zudem sehr umfangreich, aktuell und liefert die Grundlage für die Beispiele in dieser Arbeit.

Im folgenden Kapitel wird ein kurzer Überblick über NoSQL Datenbanken gegeben und einige Begriffe erklärt, um die Konzepte der Replikation und Skalierung in den Kapiteln 3 und 4 besser einordnen zu können. In Kapitel 5 folgt ein kurzes praktisches Beispiel, wie ein System aufgesetzt werden kann.


***

[foot11]:    #footnote11
[foot12]:    #footnote12
[foot13]:    #footnote13

[kap2]:       ./02_ueberblick.md "Überblick"
[trend]:      ./07_anhang.md#-ranking-diagramm-db-enginescom "Ranking-Diagramm"

<a name="footnote11"></a> <a><sup>1</sup></a> Stand: Januar 2017  
<a name="footnote12"></a> <a><sup>2</sup></a> Anhang: [Trend-Diagramm][trend] auf DB-Engines.com   
<a name="footnote13"></a> <a><sup>3</sup></a> MongoDB Dokumentation:  ![](pict/link.png)  [https://docs.mongodb.com/manual/](https://docs.mongodb.com/manual/)


Nächstes Kapitel: [2. Überblick][kap2]  
