# 5 Anwendung - MongoDB Setup

Auf die Theorie folgt die Praxis. Die folgenden Beispiele gehen davon aus, dass der MongoDB-Server installiert ist (hier: MongoDB Server Version 3.4.0 auf OS X 10.11.6). 
Alle Serverprozesse laufen auf einem einzelnen Rechner. Dies ist in einer realen Umgebung natürlich anders, aber zu Demonstrationszwecken sprechen alle Server lokal miteinander. Die MongoDB-Anweisungen werden, nachdem die Server über die Konsole gestartet worden sind, in der Mongo Shell ausgeführt.

Dieses Kapitel besteht aus zwei Teilen. Zunächst wird erklärt wie ein Replica Set aufgesetzt wird. Dieses kurze Setup ist Grundlage für das Einrichten einer „geshardeten“ Umgebung.

## 5.1 Setup eines Replica Sets

Zunächst werden MongoDB Instanzen (mongod) gestartet. Das Replica-Set soll aus einem Verbund von drei Servern bestehen. Diese lassen sich, nachdem die entsprechenden Pfade angelegt sind, mit folgenden Befehlen starten. Da die Ausgaben direkt in der Konsole angezeigt werden, werden die Befehle in unterschiedlichen Konsolenfenstern gestartet. Konsolenausgaben der Server sind, wenn sie angegeben werden, gekürzt oder sie sind mit einem Verweis im Anhang zu finden.

```plain
$ mongod --replSet rsTest --dbpath /Users/melody/data/node1 --port 40000
$ mongod --replSet rsTest --dbpath /Users/melody/data/node2 --port 40001
$ mongod --replSet rsTest --dbpath /Users/melody/data/node3 --port 40002
```



Nachdem die Server gestartet sind, müssen sie initialisiert werden, d.h. der nächste Schritt besteht darin sich auf einen der Server einzuloggen und die Initialisierung per ```rs.initiate()``` abzuschliessen.

```plain
$ mongo --port 40000
```

```plain
> rs.initiate()
{
	"info2" : "no configuration specified. Using a default configuration for the set",
	"me" : "melody.local:40000",
	"ok" : 1
}
rsTest:PRIMARY> 
```

Der Server ernennt sich zunächst selbst zum Primary, da noch kein anderer Server vorhanden ist. Diese werden jetzt hinzugefügt:

```plain
rsTest:PRIMARY> rs.add("melody.local:40001")
{ "ok" : 1 }
rsTest:PRIMARY> rs.add("melody.local:40002")
{ "ok" : 1 }
rsTest:PRIMARY> 
```

Nach der Eingabe handeln die Server ihre Rollen aus. Der Status des Replica Sets und die Rollen der Mitglieder lassen sich mit `rs.status()`[<sup>1][foot51] erfragen, die Konfiguration mit `rs.conf()`[<sup>2][foot52].

###Replikation

Um zu schauen wie der Primary die Daten auf die Secondaries verteilt, wird ein Testdokument in eine (noch anzulegende) Datenbank *mediastore* gespeichert. 

```plain
rsTest:PRIMARY> use mediastore
switched to db mediastore
rsTest:PRIMARY> db.books.insert({title:"MongoDB in Action"})
WriteResult({ "nInserted" : 1 })
```

```plain
rsTest:PRIMARY> show dbs
admin       0.000GB
local       0.000GB
mediastore  0.000GB
rsTest:PRIMARY> 
```

Der Befehl ```use mediastore``` legt die Datenbank automatisch an. Mit `show dbs` lassen sich die vorhanden Datenbanken anzeigen.


Wenn die Replikation automatisch stattgefunden hat, sollte in den beiden anderen Datenbanken der eingefügte Datensatz enthalten sein.
Da aktuell keine Leserechte auf den Secondaries vorhanden sind, werden auf einem der Server Leserechte mit dem Befehl `rs.slaveOk()`gesetzt. Danach kann nach dem Datensatz per `find()` gesucht werden, wobei „books“ der Name der Collection ist. 

```plain
$ mongo --port 40001
```

```plain
rsTest:SECONDARY> rs.slaveOk()
rsTest:SECONDARY> use mediastore
switched to db mediastore
rsTest:SECONDARY> db.books.find()
{   "_id" : ObjectId("5878e7f3bff1ce5070192521"), 
    "title" : "MongoDB in Action" }
rsTest:SECONDARY> 
```

Offensichtlich hat das Replizieren funktioniert, ein INSERT Statement hat es auf dem Secondary von unserer Seite nicht gegeben und ist auch gar nicht erlaubt. Ein Versuch zeigt dies.

```plain
rsTest:SECONDARY> db.books.insert({title:"NoSQL Distilled"})
WriteResult({ "writeError" : { "code" : 10107, "errmsg" : "not master" } })
rsTest:SECONDARY>
```


###Das Oplog

Das Oplog befindet sich in der Datenbank „local“. Da ein INSERT stattgefunden hat, suchen wir nach der Operation „i“. Die gleiche Ausgabe des Oplogs würde sowohl auf dem Primary, als auch auf dem zweiten Secondary zurückgegeben werden.


```plain
rsTest:SECONDARY> use local
switched to db local
rsTest:SECONDARY> db.oplog.rs.findOne({op: "i"})
{
	"ts" : Timestamp(1484318707, 2),
	"t" : NumberLong(1),
	"h" : NumberLong("-7827906745249396660"),
	"v" : 2,
	"op" : "i",
	"ns" : "mediastore.books",
	"o" : {
		"_id" : ObjectId("5878e7f3bff1ce5070192521"),
		"title" : "MongoDB in Action"
	}
}
rsTest:SECONDARY> 
```


###Failover und Neuwahlen

Was passiert wenn der Primary nicht mehr erreichbar ist? Das Beispiel hat drei Knoten, also werden  zwei Stimmen benötigt, um einen neuen Primary zu wählen. Dies soll nun simuliert werden, indem der Primary-Prozess beendet wird (Ctrl-C).

Die Secondaries melden in ihren Logs[<sup>3][foot53] in regelmäßigen Abständen, dass der Primary nicht mehr erreichbar ist. Einer der Server (Port 40001) stellt sich nach 10 Sekunden zur Wahl, die erfolgreich verläuft. Mit dem Befehl ```rs.isMaster()```kann angefragt werden, welche Rolle der Server (40001) gerade innehat. Ein erneutes Starten des ursprünglichen Primary sorgt nicht für einen erneuten Wechsel. Der Server reiht sich als Secondary wieder ein. 

```plain
rsTest:SECONDARY> rs.isMaster()
{
	"hosts" : [
		"melody.local:40000",
		"melody.local:40001",
		"melody.local:40002"
	],
	"setName" : "rsTest",
	"setVersion" : 3,
	"ismaster" : true,
	"secondary" : false,
	"primary" : "melody.local:40001",
	"me" : "melody.local:40001",
    
    [...]
}
rsTest:PRIMARY> 
```

Für die Konfiguration der Server gibt es, wie schon in Kapitel 3 erwähnt, eine Reihe von Parametern. Um ein Beispiel zu zeigen, wird folgend die Priorität des ursprünglichen Primary erhöht.

Um den Priority-Wert innerhalb der Shell zu ändern, wird die Konfigurationsliste in eine Variable geladen, der Wert verändert und dann die veränderte Liste wieder zurückgeschrieben. Nachdem der Priority-Wert des Servers (40000) erhöht wurde, übergibt der aktuelle Primary seine Rolle wieder an den ursprünglichen Server.

```plain
rsTest:PRIMARY> var config = rs.config()
rsTest:PRIMARY> config.members[0].priority=10
10
rsTest:PRIMARY> rs.reconfig(config)
{ "ok" : 1 }
rsTest:PRIMARY> 
rsTest:SECONDARY>
```


## 5.2 Setup einer Sharding Umgebung

Um einen Eindruck zu bekommen, wie die einzelnen Sharding Komponenten zusammenspielen, folgt ein Minimalbeispiel für ein verteiltes System. Dieses System wird bereits aus 10 Servern bestehen und folgt den Anweisungen der MongoDB-Dokumentation.
Zunächst werden die Server, dann der Cluster konfiguriert. Zum Schluss wird der Sharding-Prozess gestartet.


Der Shard-Cluster besteht aus folgenden Servern:

- **Shard1 (Replica-Set)**  
Primary, Secondary, Arbiter

- **Shard2 (Replica-Set)**  
Primary, Secondary, Arbiter

- **Konfig-Server (Replica-Set)**  
Primary, zwei Secondaries
 
- **Ein Router**


### Server konfigurieren

In diesem Beispiel werden die Shards zuerst angelegt, da man in der Regel die Datenserver bereits im Betrieb hat. Wichtig ist die Reihenfolge aber nicht.

Das Initialisieren wird genauso durchgeführt wie dies schon im vorangegangen Kapitel der Fall war. Zusätzlich werden noch die Rollen der Server angegeben. Außerdem schreiben die Server in diesem Beispiel ihre Logfiles in eine Datei, da dies übersichtlicher ist und besser ausgelesen werden kann. Der Parameter ```--fork``` startet die Prozesse im Hintergrund (als Daemon), so lassen sich die Anweisungen in ein Konsolenfenster schreiben.

**Die Shards**  
```plain
$ mongod --port 30001 --shardsvr --replSet shardRepl --dbpath /Users/melody/data/shard1/rs1 --logpath /Users/melody/data/log/shard1/rs1.log --fork
$ mongod --port 30002 --shardsvr --replSet shardRepl --dbpath /Users/melody/data/shard1/rs2 --logpath /Users/melody/data/log/shard1/rs2.log --fork
$ mongod --port 30003 --shardsvr --replSet shardRepl --dbpath /Users/melody/data/shard1/rs3 --logpath /Users/melody/data/log/shard1/rs3.log --fork

$ mongod --port 30101 --shardsvr --replSet shard2Repl --dbpath /Users/melody/data/shard2/rs1 --logpath /Users/melody/data/log/shard2/rs1.log --fork
$ mongod --port 30102 --shardsvr --replSet shard2Repl --dbpath /Users/melody/data/shard2/rs2 --logpath /Users/melody/data/log/shard2/rs2.log --fork
$ mongod --port 30103 --shardsvr --replSet shard2Repl --dbpath /Users/melody/data/shard2/rs3 --logpath /Users/melody/data/log/shard2/rs3.log --fork
```

Das Initialisieren und Hinzufügen der Mitglieder des Replica Sets erfolgt wie schon angegeben, ein Arbiter wird mit `
 rs.addArb("melody.local:30003")` hinzugefügt.


Nachdem die Replica Sets initialisiert sind, können Testdaten importiert werden. Die Testdaten stammen aus der MongoDB-Dokumentation[<sup>4][foot54] und liegen im JSON-Format vor. Per `mongoimport` werden sie hier direkt importiert. Im Anhang[<sup>5][foot55] ist ein Screenshot des Programms Robomongo zu finden, wie dort die importierten Daten (Restaurantdaten) angezeigt werden.

```plain
$ mongoimport --db test --collection restaurants --drop --file /Users/melody/data/import/primer-dataset.json --port 30001
2017-01-16T12:37:38.520+0100	connected to: localhost:30001
2017-01-16T12:37:38.521+0100	dropping: test.restaurants
2017-01-16T12:37:41.526+0100	[###################.....] test.restaurants	9.02MB/11.3MB (79.7%)
2017-01-16T12:37:42.374+0100	[########################] test.restaurants	11.3MB/11.3MB (100.0%)
2017-01-16T12:37:42.374+0100	imported 25359 documents
$ 
```

Der Shard1-Server ist jetzt in einem Zustand, in dem sich eine bereits aufgesetzte Datenbank mit Daten aber ohne Sharding befände. Nun kommt der Punkt sich Gedanken um den Schlüssel zu machen.

Kandidaten wären Felder, die Teil einer Abfrage sind. 
Gesucht wird vielleicht nach Restaurants einer bestimmten Richtung oder in bestimmten Stadtteilen. Allerdings ist Folgendes zu beachten: Der Schlüssel _borough_ enthält nicht viele unterschiedliche Einträge. Dies kann dazu führen, dass der Chunk später nicht mehr teilbar ist. Auch die _restaurant_id_ könnte man als Schlüssel nehmen, da sie eindeutig ist, aber eine gute Wahl um Abfragen zu optimieren ist sie nicht. 

Die Balance zwischen Datenverteilung und Performance zu halten ist also nicht einfach. In diesem Beispiel nehmen wir die Art des Restaurants, das Feld *cuisine*. Auch dieser Wert könnte einen ähnlichen Effekt wie die Wahl der Stadtteile haben, obwohl er mehr mögliche Werte hat. Außerdem gibt es vielleicht deutlich mehr amerikanische Restaurants als Chinesische, die Verteilung könnte unausgewogen sein. Ideal ist der Schlüssel also nicht, aber für dieses Beispiel ergibt er ein überschaubares Ergebnis bei der Verteilung auf die Chunks.

Es ist wichtig vorher einen Index auf das Feld zu legen, bevor es zum Shard Key wird. Bei leeren Collections wird dieser automatisch angelegt. Der Shard Key selbst wird später beim Starten des Shardings angegeben.

```plain
shardRepl:PRIMARY> use test
switched to db test
shardRepl:PRIMARY> db.restaurants.createIndex({ "cuisine": 1 })
{
	"createdCollectionAutomatically" : false,
	"numIndexesBefore" : 1,
	"numIndexesAfter" : 2,
	"ok" : 1
}
shardRepl:PRIMARY>
```


**Konfigurationsserver**  
Auch die Konfigurationsserver werden wie bekannt angelegt. Der Rollenparameter lautet: `--configsvr`. Hier ist weiter nichts zu beachten. Das Replica-Set wird wie bekannt angelegt.

```plain
$ mongod --port 20001 --configsvr --replSet configRepl --dbpath /Users/melody/data/configserver/rs1 --logpath /Users/melody/data/log/config/rs1.log --fork
$ mongod --port 20002 --configsvr --replSet configRepl --dbpath /Users/melody/data/configserver/rs2 --logpath /Users/melody/data/log/config/rs2.log --fork
$ mongod --port 20003 --configsvr --replSet configRepl --dbpath /Users/melody/data/configserver/rs3 --logpath /Users/melody/data/log/config/rs3.log --fork
```

**Mongos**  
Der 10. Server ist der Router, der mit dem bereits vorhandenen Cluster (genauer den Konfigurationsservern) verbunden wird.

```plain
$ mongos --configdb configRepl/melody.local:20001,melody.local:20002,melody.local:20003 --port 40000 --logpath /Users/melody/data/log/mongos.log --fork
```

Um in diesem Beispiel die Aufteilung der Daten besser zeigen zu können, wird die maximale Größe der Chunks verringert. Der Standard-Wert ist 64MB, hier sollen es 4MB sein.

```plain
$ mongo --port 40000
```

```plain
mongos> use config
switched to db config
mongos> db.settings.save({ _id:"chunksize", value: 4 })
WriteResult({ "nMatched" : 0, "nUpserted" : 1, "nModified" : 0, "_id" : "chunksize" })
mongos> db.settings.find()
{ "_id" : "chunksize", "value" : 4 }
```





### Cluster konfigurieren

Die Shards werden zum Cluster hinzugefügt, indem die einzelnen Mitglieder (außer den Arbitern) des Replica-Sets angegeben werden.

```plain
mongos> sh.addShard( "shardRepl/melody.local:30001,melody.local:30002")
{ "shardAdded" : "shardRepl", "ok" : 1 }
mongos> sh.addShard( "shard2Repl/melody.local:30101,melody.local:30102")
{ "shardAdded" : "shard2Repl", "ok" : 1 }
mongos> 
```

Das Status-Protokoll nach der ersten Initialisierung des Clusters ist im Anhang[<sup>6][foot56] gelistet.



### Sharding Collections

Der dritte Schritt ist das Starten des Shardings. 
Die Datenbank _test_ soll in das Sharding einbezogen und die Collection _restaurants_ soll verteilt werden (Namespace: _test.restaurants_). Als Schlüssel wird das Feld „cuisine“ angegeben.

```plain
mongos> sh.enableSharding("test")
{ "ok" : 1 }
mongos> sh.shardCollection("test.restaurants", {"cuisine": 1 })
{ "collectionsharded" : "test.restaurants", "ok" : 1 }
mongos> 
```
Im Status-Protokoll[<sup>7][foot57] kann man sehen, dass und wie die Daten umverteilt wurden.
Chinesische Restaurants wurden auf den zweiten Shard verschoben. Italienische Restaurants sind auf dem ersten Server verblieben. Da die Anzahl der Restaurantarten begrenzt ist, wäre ein weiteres Aufteilen der Chunks allerdings irgendwann nicht mehr möglich. 

Damit ist die Konfiguration und der Start einer Minimalkonfiguration eines Clusters abgeschlossen.



***

[foot51]:    #footnote51
[foot52]:    #footnote52
[foot53]:    #footnote53
[foot54]:    #footnote54
[foot55]:    #footnote55
[foot56]:    #footnote56
[foot57]:    #footnote57

[kap6]:     ./06_fazit.md "Fazit"

[status]:   ./07_anhang.md#statusabfrage-replica-set "Status Replica Set"
[config]:   ./07_anhang.md#konfigurationsabfrage-replica-set "Config Replica Set"
[log]:      ./07_anhang.md#log-eintrag-neuwahlen "Log Eintrag Neuwahlen"
[shard1]:   ./07_anhang.md#status-nach-einrichten-des-clusters "Status nach Einrichten des Clusters"
[shard2]:   ./07_anhang.md#status-nach-einrichten-des-shardings "Status nach Einrichten des Shardings"
[robomongo]:./07_anhang.md#ausgabe-eines-dokuments-in-robomongo "Ausgabe eines Dokuments in Robomongo"


<a name="footnote51"></a> <a><sup>1</sup></a> Anhang: [Statusabfrage Replica Set ][status]   
<a name="footnote52"></a> <a><sup>2</sup></a> Anhang: [Konfigurationsabfrage Replica Set][config]    
<a name="footnote53"></a> <a><sup>3</sup></a> Anhang: [Log Eintrag (Server 40001) Neuwahlen][log]  
<a name="footnote54"></a> <a><sup>4</sup></a> Testdaten (MongoDB.com): ![](pict/link.png)  [https://docs.mongodb.com/getting-started/shell/import-data/](https://docs.mongodb.com/getting-started/shell/import-data/)  
<a name="footnote55"></a> <a><sup>5</sup></a> Anhang: [Ausgabe eines Dokuments in Robomongo][robomongo]  
<a name="footnote56"></a> <a><sup>6</sup></a> Anhang: [Status nach Einrichten des Clusters][shard1]  
<a name="footnote57"></a> <a><sup>7</sup></a> Anhang: [Status nach Einrichten des Shardings][shard2]  

Nächstes Kapitel: [6. Fazit][kap6]
