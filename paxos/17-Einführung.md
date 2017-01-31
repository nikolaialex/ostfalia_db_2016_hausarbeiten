Nachdem in den vorherigen Kapiteln der 2 Phase Commit (2PC) und der 3 Phase Commit (3PC) beschrieben wurden, stellt sich die Frage warum es ein weiteres Konsensprotokoll gibt.
Hierzu müssen zunächst die Probleme der vorangegangenen Protokolle untersucht werden. Das 3PC behebt zwar das Blocken der Teilnehmer bis der Koordinator wieder erreichbar ist, hat jedoch Synchronizitätsprobleme. In einem synchronen Netzwerk gibt es eine maximale Antwortzeit, welche jedoch in einem asynchronen Netz nicht verlässlich als Indikator für einen Fehler oder Ausfall genutzt werden kann. 

Leslie Lamport entdeckte den Algorithmus Paxos in den späten 80er Jahren, beschrieb diesen 1990 in einer wissenschaftlichen Arbeit und reichte sie bei der „Transactions on Computer Systems“ ein [Lam01]. Nachdem er bereits Erfahrung mit dem Konsensproblem und byzantinischen Generälen gesammelt hatte, beschrieb er das Verfahren anhand eines Parlaments auf einer griechischen Insel.
Lamports Arbeit wurde zunächst nicht verstanden, letztendlich trotzdem 1998  veröffentlicht. Nachdem der Algorithmus weiterhin ignoriert wurde, entschloss sich Lamport die Arbeit ins wissenschaftliche Englisch zu übersetzen und diese erneut im Jahre 2001 zu veröffentlichen [Lam02].

Diese Arbeit wird heutzutage als der effizienteste Algorithmus zur Erzielung eines Konsenses in einem nachrichtenaustauschenden System angesehen.
