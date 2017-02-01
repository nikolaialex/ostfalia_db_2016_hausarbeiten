Durch die Protokolle Two Phase Commit und Three Phase Commit werden verteilte Transaktionen ermöglicht, die die ACID Eigenschaften erfüllen, bzw. teilweise erfüllen können. Da das Three Phase Commit Protokoll sehr aufwändig ist, verglichen mit dem Two Phase Commit [Tabelle 2], oder den optimierten Two Phase Commit Protokollen, wird in den meisten Anwendungen ein optimiertes Two Phase Commit Protokoll verwendet. Muss ein nicht blockierendes Protokoll zwingend verwendet, und die ACID Eigenschaften können teilweise aufgeweicht werden, wird häufig auf Paxos-basierte Algorithmen zurückgegriffen, da diese auch mit Kommunikationsfehlern umgehen kann.  
  
>Tabelle 2: Nachrichtenaufkommen - Vergleich zwischen 2PC und 3PC  

| Protokoll | n Knoten | n = 3 | n = 10 | n = 15 |
|-----------|----------|-------|--------|--------|
| 2PC       | 4*(n-1)  | 8     | 36     | 56     |
| 3PC       | 6*(n-1)  | 12    | 54     | 84     |