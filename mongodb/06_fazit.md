# 6 Fazit

Zunächst kann man festhalten, das sich das Einrichten eines Replica Sets unter den vereinfachten Bedingungen problemlos gestaltet aber einige Punkte gut durchdacht sein sollten.

- Eine Mindestanzahl von drei Servern ist notwendig. Wenn mehr Server beteiligt sind, ist eine ungerade Anzahl empfehlenswert.
- Die Read Preference entscheidet zwischen Lesegeschwindigkeit und Konsistenz.
- Bei einem schwachen Write Concern könnten Daten verloren gehen, bei einem hohen Wert muss mit höheren Antwortzeiten gerechnet werden. 
- Rollbacks sollten vermieden werden, denn sie erfordern ein manuelles Eingreifen.

Allgemein kann man sagen, dass bei wichtigen Datenbeständen auf den Einsatz von Replica Sets nicht verzichtet werden sollte.

Sharding gestaltet sich deutlich komplexer, schon allein weil mit unterschiedlichen Servertypen gearbeitet werden muss.
Der Aufwand ist, wie zu Beginn gefordert, bei dieser kleinen Umgebung noch überschaubar geblieben und bereits hier waren es zehn Server, die administriert werden mussten.
Um eine Automatisierung des Deployments wird man bei großen Systemen nicht herumkommen. Man denke da z.B. an das manuelle Hinzufügen oder Entfernen von Shards. 

Wichtig ist zudem zu beachten, dass die Anwendung vorgibt wie die Umgebung konfiguriert werden muss. Ohne einen sinnvollen Shard Key kann die Datenbank nicht performant auf Anfragen reagieren und da die Sharding Umgebung aus Replica Sets besteht, gelten die gleichen Überlegungen bzgl. der Write Concerns und Read Preferences wie oben bereits erwähnt.
***

[kap7]:  ./07_anhang.md "Anhang"


Nächstes Kapitel: [7. Anhang][kap7]  
