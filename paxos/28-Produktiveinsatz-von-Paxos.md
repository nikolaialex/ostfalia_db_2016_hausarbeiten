## Paxos im Produktiveinsatz

Paxos selbst gibt es bereits seit vielen Jahren und hat sich im tagtäglichen Einsatz bewährt. Die folgende Liste zeigt einen Ausschnitt von bekannten Projekten, welche Paxos intern nutzen. Die Liste erhebt keinen Anspruch auf Vollständigkeit.

- Google Chubby 
 - Stellt in verteilten Systemen Locking-Mechanismen bereit 
 - Verwendet intern Paxos
- Google-Filesystem
- Google Big-Table 
 - Verteilte Datenbank 
- Google Spanner 
 - Verteilte tabellenbasierte Datenbank 
- IBM SAN Volume Controller 
 - Verteilte Speichervirtualisierung 
- Apache Zookeeper 
 - Verteilte hochverfügbarer Koordinationsserver 
- Amazon Web Services 
- OpenReplica service
- Bing Autopilot cluster management service
- XtreemFS
 - Fehlertolerant und konsistentes Replizieren von Daten & Metadaten
- Heroku
 - Konsistenter verteilter Datenspeicher
- Clustrix
 - Verteilte Datenbanktransaktionen
- Neo4j
 - Graphendatenbank
- VMWare NSX Controller
- Nutanix
 - Für Metadaten
- Apache Mesos
 - Replizierte Logs
- Windows Fabric (Microsoft Azure services)
 - Replizieren von Daten zwischen Knoten innerhalb eines Clusters
- Oracle NoSQL Database
 - Fehlerbehandlung falls ein Master-Replica Knoten ausfällt

Darüber hinaus verwenden viele Datenbankreplikationsserver einen Konsens-Algorithmus zu Steuerung von Transaktionen.
