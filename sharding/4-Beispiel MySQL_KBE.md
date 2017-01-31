## Beispiel MySQL [MYS2017]

### Was ist MySQL?
MySQL ist ein relationales Open-Source Datenbankverwaltungssystem (kurz: DBMS), welches speziell für große Datenmengen ausgelegt ist. Es wird meist für die Datenspeicherung von Webservices verwendet und wird in den meisten Anwendungsfällen mit einem Apache-Webserver und der Skriptsprache PHP kombiniert. Das DBMS wird beispielsweise von Plattformen, wie Twitter, Facebook oder YouTube verwendet. MySQL ist eine der am häufigsten genutzten Datenbanksysteme und ist für alle gängigen Betriebssysteme verfügbar. Es lässt sich mit einer Vielzahl von Erweiterungen für einzelne Anwender verbessern. So ist zum Beispiel die Installation einer grafischen Oberfläche bei vielen Providern bereits im Standardpaket enthalten. MySQL ist auch als kommerzielle Version erhältlich, welche zum Beispiel durch kompletten Support unterstützt wird. Die kommerzielle Variante ist jedoch recht kostenintensiv. Features, wie zum Beispiel die Replikationsmöglichkeiten des Datenbanksystems, machen MySQL zu einem der mächtigsten Datenbanksystemen. Die horizontale Skalierung wird ebenfalls unterstützt. Diese soll nun anhand eines praktischen Beispiels näher erläutert werden.

### Einführung
MySQL Datenbanken verwenden zur internen Speicherung der Daten Tabellen. Diese Tabellen unterliegen immer einem definiertem Schema und geben einen Zeilenorientierten Aufbau vor. Architektur bedingt wird also für jeden neuen Datensatz eine neue Zeile in der entsprechenden Tabelle angelegt.
Um Sharding in einemen MySQL-System zu ermöglichen ist es notwendig einen Verteilungsschlüssel, den sogenannten Shard-Key, festzulegen. Dieser gibt eine horizontale Verteilung von Datensätze auf verschiedene Shard's vor. Dieser Shard-Key kann beispielsweise eine bestimmte Spalte in einer Tabelle sein. So könnte zum Beispiel die Spalte „Alter“ der „Personen-Tabelle“ als Shard-Key verwendet werden und dafür sorgen, dass Personendatensätze entsprechend ihres Alters auf verschiedene MySQL-Datenbanken verteilt werden. Bei Datenbankanfragen müssen dann zunächst mit Hilfe der Shard-Key-Values und einer zwischen Client und Server geschalteten Konfigurationskomponente der korrekte anzufragende Datenbankserver ermittelt werden.

Das Sharding in MySQL ist grundsätzlich auf verschiedenen Wegen möglich. Die Verteilungsalgorithmen können grundsätzlich selbst, wie eingangs in Japitel X.X erwähnt, mit Hilfe von Skriptsprachen, wie zum Beispiel PHP, implementiert werden. Im Folgenden wird ein praktisches Beispiel für eine eigene Implementierung erläutert. Anschließend wird die MySQL-Erweiterung „Fabric“ vorgestellt, welche das Verteilen von Datensätzen vereinfacht.

### Praktisches Beispiel:
In dem folgendem Beispiel geht es um einen Online-Shop. Die Kunden des Shops sind weltweit verteilt und die Versandkosten für online Einkäufe sind dementsprechend von den Lieferadressen abhängig. Die Kundendaten sind daher auf verschiedenen Datenbankservern verteilt. Die Verteilung erfolgt anhand der Ländercodes. Die Tabellenspalte „customer_country“ gibt also den Shard-Key vor.

Clientseitig ist ein Apache-Webserver in Betrieb. Dieser kommuniziert bei Datenbankanfragen mit einem Konfigurationsserver, welcher sich durch den jeweiligen Ländercode mit der entsprechenden Datenbank verbinden wird.

| customer_id  | customer_mail        | customer_street  | customer_zip | customer_city | customer_country | customer_timestamp |
| ------------:|:---------------------:| :---------------: |:-------------: |:-------------: |:-------------: |:-------------: |
| 123          | max.muster@mweb.de   |  Musterstr. 2    |     12345    | Musterstadt | DE | 20170114000000

<p style="font-size:12px" >Tabelle 1: Beispiel der Kundentabelle mit „customer_key“ als Shard-Key.


Der Konfigurationsserver kommuniziert nun also mit der entsprechenden Datenbank und leitet Anfragen vom Client an diese weiter. Die Datenbank ermittelt geforderte Datensätze und wird diese an den Konfigurationsserver senden. Dieser wiederum wird die Daten an letztendlich an den Client weiterleiten und dieser kann nun mit den erhaltenen Datensätzen weiterarbeiten.

### MySQL Fabric

Sharding kann auf mehrere Arten umgesetzt werden. In MySQL gibt es beispielsweise eine von Oracle entwickelte Erweiterung. Diese Erweiterung trägt den Titel „MySQL Fabric“ und vereinfacht unter Anderem das Einrichten und Organisieren von Sharding. Diese Erweiterung ist speziell entwickelt worden, um Replikationen für riesige MySQL-Farmen besser verwalten zu können und stellt Kommandozeilenbefehle zur Verfügung, durch welche beispielsweise Datenbankshard's zu einer bestehenden Datenbank hinzugefügt werden können.

Einrichtung der MySQL Fabric

Um in MySQL via Fabric zu sharden sind zunächst mehrere laufende Datenbanksysteme notwendig. Nachdem die gewünschte Anzahl von MySQL Datenbanken laufen, kann mit dem Einrichten begonnen werden. Im ersten Schritt werden zusammengehörige Shard's zu Gruppen zusammengefügt. Dazu werden die Gruppen zunächst mit folgendem Kommandozeilenbefehl erstellt:
```
mysqlfabric group create <group_name>
```

Wichtig: Es sollte in jedem Fall eine weitere Gruppe als notwendig angelegt werden. Diese Gruppe stellt eine globale Gruppe dar, die für die interne Organisation der Fabric sehr wichtig ist und später noch benötigt wird!

Als nächstes werden den Gruppen Ihre jeweiligen Shard's zugeordent. Dies ist mit folgendem Befehl möglich:
```
mysqlfabric group add <group_name> <database_address>
```

Jeder Shard Gruppe muss mindestens einen sogenannten Master haben, welcher die primäre Datenbank der Gruppe repräsentiert. Dazu dient folgender Befehl:
```
mysqlfabric group promote <group_name>
```

Die MySQL Fabric wird sich dabei automatisch um das Zuweisen eines eines Masterknotens kümmern. Alternativ kann dieser auch selbst gewählt werden, denn bei mehrfacher Verwendungs dieses Befehls wird immer der nächste Datenbankknoten als „Master“ gesetzt.

Nun, wo die Datenbanken in Verbindung stehen, muss die eigentliche Konfiguration für das Sharding festgelegt werden.
Festlegung des Shard-Types. Das bedeutet soviel wie, festlegen nach welchen Werten geshardet werden soll. Hier stehen zwei verschiedene Optionen zur Verfügung: „Range“ und „Hash“. Bei der Option Range handelt es sich um festgelegte Intervalle. Es ist zum Beispiel möglich, so die Daten anhand der Anzahl der Datensätze zu verteilen. Bei der „Hash“ Variante geht es, wie der Name schon sagt, um das Verteilen von Datensätzen anhand bestimmter Hashwerte. Im Folgenden werden weitere Beispiele mit der „Range“ Option aufgezeigt. Diese wird so festgelegt:
```
mysqlfabric sharding create_definition RANGE <global_group>
```

Die nun erstellte Sharding-Konfiguration muss nun noch etwas erweitert werden.
Nun muss die betreffende oder die betreffenden Datenbanktabellen festgelegt werden:
mysqlfabric sharding add_table 1 <databasename>.<databasetable> <coloumn>


Nun fehlt noch die Einrichtung der bereits gewählten Range-Variante. Der Fabric muss nun mittgeteilt werden, nach welchem Intervall die Datensätze verteilt werden sollen. Die einzelnen Gruppen erhalten nun Ihre eigenen Intervalle:
```
mysqlfabric sharding add_shard 1 "group_id-1/1, group_id-2/100000, group_id-2/200000" --state=ENABLED
```

Das Verschieben von Datensätze auf andere Shard's und das Hinzufügen von weiteren Gruppen ist zu einem späteren Zeitpunkt möglich. Hierzu gibt es in der MySQL Fabric Dokumentation (https://dev.mysql.com) weitere Information unter den Stichpunkten „Shard Move“ und „Shard Split“.
