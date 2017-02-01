**4. Copycat**

Das in diesem Kapitel vorgestellte Copycat basiert auf dem
Raft-Consensus-Algorithmus und stellt ein fehlertolerantes
Maschinenreplikations-Framework dar. Mittels Copycat lassen sich Replikationen
robust, einfach und sicher in verteilten Systemen aufbauen. In diesem Kapitel
wird beschrieben, wie Copycat die einzelnen Funktionen des Algorithmus umsetzt.
Die hier behandelten Inhalte beziehen sich alle auf das technische
Entwicklungsdokument der Entwickler von Copycat, welches auf deren Homepage
eingesehen werden kann. [17]

**1. Implementierung der Raft-Architektur in CopyCat**

Copycat stellt eine angepasste, featurebasierte Implementation des
Raft-Consensus-Algorithmus dar. Insgesamt wurde Copycat in über 3 Jahren
entwickelt und die Implementation ist sehr nah an dem Raft-Entwicklungsdokument
von Diego Ongaro gehalten. [18] Die Entwicklung stellt somit eine fast
vollständige Implementation des Raft-Consensus-Algorithmus mit angepassten,
selbst geschriebenen Erweiterungsmodulen dar. In einigen Fällen weicht die
Implementierung von Copycat jedoch von den Empfehlungen des
Raft-Consensus-Algorithmus ab. Als Beispiel dafür gilt, dass die Raft
Implementierung vorschreibt, dass alle Lese- und Schreiboperationen von dem
Führungsknoten durchgeführt werden müssen.

Im Gegensatz dazu erlaubt Copycat jedoch, dass die einzelnen Clients auch von
ihren Followern lesen dürfen. Dazu wird jedoch die Linearisierung aufgegeben.
Ein weiteres Beispiel dazu, dass Copycat Änderungen vorgenommen hat, ist, dass
das Implementierungsdokument von Raft empfiehlt, dass der einfachste Weg einen
Log zu sichern, ein Snapshot sei. [19] Copycat jedoch erstellt einzelne
inkrementell gefertigte Logs, um mehr Konsistenz bei dem Erstellprozess erhalten
zu können. Es existieren noch weitere kleinere Abänderungen, wovon die meisten
hier in der Projektarbeit beschrieben werden sollen. Beispielsweise erweitert
die Implementierung von Copycat das Raft Konzept der Sitzungen, damit die
Zustandsmaschinen Ereignisse an Clients veröffentlichen können. Vorrangig ist es
wichtig, dass dort, wo Copycat von den Empfehlungen des
Raft-Entwicklungsdokuments abweicht, dies in geeigneter Form dokumentiert wird.
Copycat versucht nicht die grundlegende Richtigkeit des Algorithmus in Frage zu
stellen, sondern versucht es so zu verändern, dass die Usability in der realen
Anwendung verbessert wird.

Die folgende Dokumentation beschreibt die Implementation des Raft-Algorithmus in
Copycat und legt dabei ein spezielles Augenmerk auf die Dokumentation bei
abweichender Implementierung des Raft Algorithmus in Copycat.

**2. Das Copycat Cluster**

Die Struktur der Copycat-Cluster unterscheidet sich erheblich von den typischen
Raft-Clustern. In erster Linie aufgrund der notwendigen Unterstützung von
größerer Flexibilität in den Systemen, die Copycat eingebettet haben.
Hochverfügbarkeitssysteme können nicht durch die strengen Anforderungen von
Konsensalgorithmen eingeschränkt werden, so dass Copycat mehrere Knoten-Typen
zur Behebung von Skalierungsproblemen bereitstellt.

Copycat Cluster bestehen aus drei Arten von Knoten: Aktive, Passive und Reserve:

*- Aktive Knoten sind zustandsbehaftete Server, die im vollem Umfang den
Raft-Konsens-Algorithmus implementiert haben*

*- Passive Knoten sind zustandsbehaftete Server, die nicht den
Raft-Konsens-Algorithmus nutzen aber bestätige Logs erhalten können*

*- Reserve Knoten sind zustandslose Server, die beide Zustände annehmen
können[20]*

Die Anordnung in einer Architektur von Clustern ermöglicht es Copycat in
Hochverfügbarkeitssystemen ohne signifikante Auswirkungen auf die Verfügbarkeit
eingebettet zu werden. Copycat stellt somit eine Schnittstelle zur Verfügung, um
Knoten in einem Cluster hinzuzufügen, zu entfernen, hochzustufen oder
herunterzustufen. Systeme, die Copycat einbetten, können den Raft-Algorithmus
zur Verwaltung von Knoten verwenden, um Änderungen an der Struktur des Clusters
zu koordinieren. Die Verwendung von Zustandsbehafteten-Raft-Knoten und
zustandsorientierten asynchronen Knoten ermöglicht es den Systemen, Raft-Knoten
schnell zu ersetzen, indem es Mitglieder hochstuft oder herunterstuft. Alle
Änderungen werden über den Raft-Abschnitt des Clusters übergeben und als
Konfigurationsänderung vermerkt. Dabei wird der Ansatz des „Single-Members“
gewählt, um die Konfigurationsänderung zu vereinfachen. Jeder zustandsabhängige
Server in einem Cluster enthält zwei logische Zustandsmaschinen. Eine interne
Zustandsmaschine auf jedem Server ist für das Verwalten von Sitzungen,
Verbindungen und Scheduling innerhalb der Benutzerzustandsmaschine zuständig und
die zweite Benutzerzustandsmaschine enthält die Anwendungslogik. Befehle, die
von Clients übermittelt wurden, werden an den Raft-Leader weitergeleitet, wo sie
protokolliert, repliziert und auf die Benutzerstatusmaschine auf jedem Server
angewendet werden. Die von den Clients übermittelten Abfragen werden entweder
über den Server oder an den Raft-Leader direkt weitergeleitet, abhängig von den
Konsistenzbedingungen.

**3. Client Interaction**

Der grundlegende Raft-Algorithmus gibt vor, dass Clients direkt mit dem Leader
kommunizieren sollten, um Lese- und Schreibvorgänge direkt in das Cluster
übertragen zu können. Der Leader-Dienst schreibt Befehle in das Raft-Protokoll
und die abhängigen Server im Cluster prüfen, ob die Mehrheit des Clusters mit
dieser Information synchronisiert ist, bevor diese in der Zustandsmaschine
angewendet wird. In der Praxis profitieren die Systeme oft von der Umsetzung
eines solchen relativ entspannten Konsistenzmodelles. Clients können zum
Beispiel nur Lese-Abfragen an die Follower stellen, ohne dabei an Konsistenz zu
verlieren. [21]

In der Regel richten Clients zunächst eine Verbindung zu einem zufälligen Server
ein, um ihre Sitzung zu registrieren. Darauffolgend verbinden sie sich mit dem
Leader, nachdem die Verbindung im Cluster entdeckt wurde. Für den Fall, dass die
Verbindung des Clients nicht gefunden wird, probiert dieser einfach weiter
zufällig ausgewählte Server. In Copycat werden die Client-Verbindungen zufällig
über das Cluster verteilt.

Sobald eine Verbindung zu einem Server hergestellt wurde, versuchen Clients ihre
Verbindungen so lange wie möglich aufrechtzuerhalten. Die Reduzierung der
Häufigkeit, wie oft Client-Server wechseln, verbessert die Latenz in der
bidirektionalen Kommunikation zwischen Clients und Servern, da Server
typischerweise die Route kennen, über die ein Client erreichbar ist.

**3.1 Sitzungen**

In der Regel wird zunächst eine Verbindung zu einen zufällig ausgewählten Server
im Cluster registriert und folgend wieder geschlossen, wenn der zuständige
Leader im Cluster entdeckt wurde. Wenn die Verbindung hergestellt wurde, wird
versucht diese Verbindung so lange wie möglich zu erhalten, um den Traffic im
Cluster relativ gering zu halten. Client-Sitzungen werden organisiert durch das
Raft-Log und der Zustandsmaschine. Damit dies in der Praxis funktioniert, müssen
die Server eine deterministische Sicht auf alle aktiven Clientverbindungen
haben. Sitzungen werden als aktiv geschalten, wenn diese im Raft-Log registriert
werden und über die Zeit immer wieder periodisch abgefragt werden. Wenn die
Abfrage an den Client fehlschlägt und der Client nicht auf die Abfrage der
aktiven Verbindung antwortet, dann wird die Clientverbindung ausgetragen und ist
folgend als nicht mehr aktiv gelistet.

**3.2 Management der Lebenszyklus einer Verbindung**

Die Verwaltung der Client Sitzungen wird durch eine interne Zustandsmaschine
geführt, wenn die Einträge im internen Raft Log als bestätigt gelten. Wenn ein
Client neu im Netzwerk registriert wird, dann nutzt ein Client folgend den
ersten verfügbaren Server im Cluster. Wenn die Registrierung an diesem ersten
Server fehlschlägt, dann versucht der Client dies an einem anderen Server,
welcher zufällig ausgewählt wird. Wenn alle versuchten Registrierungen an
zufällig ausgewählten Servern fehlschlagen, dann schlägt die Anmeldung des
Clients fehl und dieser muss neu gestartet werden.

Wenn ein Client im Netzwerk registriert wurde, wird über Keep-Alive Anfragen
abgefragt, ob dieser noch aktiv ist. Keep-Alive Anfragen werden in der internen
Zustandsmaschine im Raft-Log protokolliert. Darauf basierend wird intern eine
konsistente Sicht über alle aktiven Sitzungen geführt.

**3.3 Befehle**

Die Implementierung des Raft Protokolls im Copycat unterscheidet in zwei
Konzepte. Es wird unterschieden in die Konzepte der Schreib- und Lesevorgänge.
Befehle werden in der Zustandsmaschine angewendet und verändern den Zustand
dieser. Alle Befehle werden im Raft Cluster zu dem Leader im Cluster geleitet,
auf die Festplatte geschrieben und repliziert in das Raft-Log. Wenn der Leader
im Cluster einen Befehl erhält, wird dieser im Raft-Log eingetragen. Die
Eintragungen des Logs beinhalten die Sequenznummer, die Nummer der Sitzungs-ID
und einen ungefähren Zeitstempel. Der Zeitstempel wird für die Verwaltung der
Zustände verwendet, um einen Timeout erkennen zu können.

In bestimmten Szenarien gibt es Situationen, in denen die sequentielle
Konsistenz durch den Client unterbrochen werden kann. Dies kann zum Beispiel
auftreten, wenn die Clients gleichzeitig Befehle senden. Wenn ein Client einen
Befehl an den Server A sendet, der ihn an den Server B (den Leader)
weiterleitet, jedoch zuvor eine Nachricht an den Server C gesendet hat, ohne die
Antwort vom Server A abzuwarten, sendet eventuell der Server C eher eine
Nachricht an Server B, bevor der Server A die Nachricht an den Leader
weitergereicht hat. Wenn folgend in der Reihenfolge die Befehle in das Raft
Protokoll übertragen werden, dann wird die sequentielle Konsistenz verletzt und
spiegelt nicht die Programmreihenfolge der Clients wieder.

Jedoch aufgrund der bekannten Muster, mit denen Clients mit Servern
kommunizieren, ist dies in der Praxis ein eher unwahrscheinlicher Fall. Da
Clients nur bei verschiedenen Servern anfragen, wenn Fehler auftreten, kann in
Folge dessen die Programmreihenfolge und damit die sequentielle Konsistenz
verletzt werden. Deshalb werden die empfangenen Befehle der Clients in der
Reihenfolge angewandt, wie diese am Server empfangen wurden, auch wenn diese
nicht die richtige Reihenfolge haben könnten. Wenn der Leader einen Befehl
empfängt, führt er den Befehl auf der Grundlage des aktuellen Sitzungsstatus und
der Sequenznummer, die in der Anforderung bereitgestellt wird, aus. Der
grundlegende Algorithmus stellt sich wie folgt dar:

\- Wenn die Befehlsfolgenummer größer als die nächste erwartete Sequenznummer

für die Sitzung ist, dann nehme die in der Warteschlange zu behandelnde
Anforderung

aus der Reihenfolge

\- Andernfalls schreibe den Befehl in das Protokoll

\- Sobald der Befehl in das Protokoll geschrieben wurde, behandele alle

in der Warteschlange stehenden Befehle für die Sequenz + 1 [22]

Sequenznummern werden auch verwendet, um eine Linearisierbarkeit für Befehle
bereitzustellen, welche dem Cluster durch die jeweiligen Clients übergeben
werden. Dabei werden die Befehle in jeweilige Sequenznummern gespeichert, welche
in der Zustandsmaschine angewendet werden. Ein Problem stellt dies dabei dar,
wenn der Client die Verbindung zu dem Server trennt, bevor er eine Antwort
empfängt oder wenn die Verbindung des Servers zum Client fehlschlägt. Dann weiß
der Client nicht unbedingt, ob der ausgeführte Befehl erfolgreich war. Im Falle
eines Serverfehlers könnte der Befehl auch im Cluster repliziert worden sein. In
diesem Fall würde der Befehl in der Zustandsmaschine gespeichert werden und der
Client könnte nicht mehr davon lesen. Deshalb sorgt eine sitzungsbasierte
Linearisierbarkeit dafür, dass der Client immer noch die Ausgabe für Befehle
lesen kann, welche dem Cluster erneut übergeben werden. Die Server
protokollieren alle Befehle, die an den Cluster gesendet werden und im Falle,
dass ein Befehl vom gleichen Client mit derselben Sequenznummer mehrmals auf die
Zustandsmaschine angewendet wird, gibt die Zustandsmaschine das Ergebnis der
ursprünglichen Anwendung zurück. Dadurch wird verhindert, dass der Befehl
mehrfach angewendet wird.

**3.4 Abfragen**

Abfragen sind Zustandsmaschinenoperationen, die den Zustand der Zustandsmaschine
lesen, jedoch nicht ändern. Dies ist kritisch, da Abfragen nie in dem
Raftprotokoll protokolliert oder repliziert werden.

Wenn eine Anfrage an das Raft-Cluster gesendet wird, wird, wie bei allen anderen
Anfragen, die Antwort an den Server gesendet, an welchem der Client verbunden
ist. Dabei behandelt der jeweilige Server die Anfrage so, wie er auf Basis des
Konsistenz-Modelles eingerichtet ist. Wenn er nicht der Leader Server ist, führt
dieser selbständig eine Evaluation durch, ob die Antwort der Anfrage noch von
dem Leader geprüft werden muss. Abfragen sind optional erlaubt, um den Zustand
der Follower lesen zu können. Damit die Konsistenz aufrechterhalten wird, wenn
der Client zwischen den Servern wechselt, muss der letzte konsistente Zustand
auf dem Client verfügbar sein. Wenn Abfragen an den Cluster übergeben werden,
legt der Client den höchsten Index fest, für den er eine Antwort erhalten hat.
Die Festlegung des höchsten Index stellt sicher, dass der Client nicht in der
Zwischenzeit den Server wechselt. Sobald der Server den Clientindex erreicht
hat, wendet der Server die Abfrage auf seine Zustandsmaschine an und antwortet
mit der Ausgabe der Zustandsmaschine. Clients empfangen den Index für jeden
Befehl und jede Abfrage, die an den Cluster übergeben werden. Wenn ein Client
einen Befehl an das Cluster übergibt, wird der Index des Befehls im
Raft-Protokoll zusammen mit der Ausgabe an den Client repliziert. Dies stellt
den letzten Leseindex des Clients dar. Ebenso, wenn ein Client eine Anfrage an
das Cluster sendet, reagiert der zuständige Server mit der Abfrageausgabe und
einem LastApplied-Index. Die Protokollkonsistenz wird dadurch bestimmt, dass
geprüft wird, ob der lastIndex des Servers größer oder gleich groß als der
CommitIndex ist. Dies bedeutet, wenn der letzte vom Server empfangene Eintrag
keinen CommitIndex enthielt, welcher kleiner oder gleich groß als der lastIndex
ist, dann wird der Server als out-of-sync eingestuft und Abfragen werden an den
Leader weitergleitet. Während Copycat es ermöglicht, dass Client-Anfragen auf
Followern verarbeitet werden und eine sequentielle Konsistenz auch beim Wechseln
von Servern gewährleistet wird, kann dies in einigen Fällen zu erheblichen
Verzögerungen führen. Wenn ein Client auf einen Server umschaltet, der weit
hinter seinem vorherigen Server liegt, kann er die Abfragen des Clients für eine
unbestimmte Zeitspanne blockieren. Clients sollten eine Obergrenze für die Zeit
festlegen, innerhalb derer eine Abfrage von einem Server behandelt werden muss.
Wenn eine Abfrageanforderung abläuft, sollte der Client auf einen neuen Server
wechseln und die Abfrage erneut einreichen. Server haben auch einen Mechanismus,
um Abfragen von Clients abzulehnen, wenn ihr Zustand zu weit hinter diesem ist.
Wenn ein Follower eine Abfrage von einem Client empfängt, wird geprüft, ob der
letzte bekannte commitIndex in seinem Protokoll vorhanden ist. Wenn der letzte
Log-Index des Followers kleiner als der commitIndex ist, leitet er die Abfrage
an den Leader weiter. [23]

**3.5 Sitzungsablauf**

Wenn eine neue Sitzung registriert ist, wird der Sitzung ein Timeout zugewiesen.
Das Zeitlimit der Sitzung ist die Zeit, nach der die Sitzung vom Cluster als
abgelaufen abgewiesen wird. Clients sind verantwortlich für die Sitzungen und
schicken in Intervallen, welche kürzer als das Sitzungstimeout sind, Anfragen an
den Server. Zustandsmaschinen bestimmen, wann die Sitzungszeitüberschreitung,
welche auf der Grundlage der seit dem letzten Keep-Alive verstrichenen Zeit für
eine gegebene Sitzung beruht, zurückgelegt wird. Zu beachten ist, dass dies von
der Zustandsmaschine abhängig ist. In Copycat geschieht dies, indem der
Zeitstempel des Leaders auf eine Vielzahl von Protokolleinträgen geschrieben
wird.

**3.6 Replizieren von Serverkonfigurationen**

Wenn eine Sitzung mit dem Copycat-Cluster registriert ist, beginnt der Client
periodische Keep-Alive-Anfragen an das Cluster gemäß dem konfigurierten
Sitzungszeitlimit. Session-Timeouts können jedoch auf jedem Server
unterschiedlich konfiguriert werden. Um Inkonsistenzen in
Sitzungskonfigurationen in dem Cluster zu berücksichtigen, hängen wir das
konfigurierte Sitzungszeitlimit des Leaders an den Protokolleintrag an, der die
Sitzung registriert. Wenn eine Sitzungsregistrierung auf interne
Zustandsmaschinen angewendet wird, legen die Zustandsautomaten die
Sitzungszeitüberschreitung basierend auf dem Zeitlimit im Protokoll fest.
Dadurch wird sichergestellt, dass alle Server eine konsistente Ansicht von
Timeouts für jede einzelne Sitzung haben und daher Sitzungen deterministisch
ablaufen können. Sobald ein RegisterEntry festgelegt ist und eine neue Sitzung
registriert wird, sendet der Leader das protokollierte Timeout an den Client
zurück. Alternativ können Server ihre Sitzungszeitlimits in speziellen
Konfigurationsänderungseinträgen replizieren. Dies kann dazu führen, dass
Sitzungszeitlimits von Servern umkonfiguriert werden können, ohne die
vorhandenen Sitzungen zu beeinträchtigen. Server müssen immer noch ein
Session-Timeout in Keep-Alive-Reaktionen bereitstellen.

**4. Zustandsmaschinen**

Jeder Server wird mit einer Zustandsmaschine konfiguriert, auf die er gebundene
Befehle und Abfragen anwendet. Zustandsmaschinenoperationen werden in einem
separaten Zustandsmaschinen-Thread ausgeführt, um sicherzustellen, dass
blockierende Zustandsmaschinenoperationen die interne Serverereignisschleife
nicht blockieren. Server unterhalten sowohl eine interne Zustandsmaschine als
auch eine Benutzerzustandsmaschine. Die interne Zustandsmaschine ist für das
Beibehalten des internen Systemzustands, wie beispielsweise Sitzungen und
Mitgliedschaften und das Anwenden von Befehlen und Abfragen an die vom Benutzer
bereitgestellte Zustandsmaschine verantwortlich.

Aufgrund der Komplexität der verteilten Systeme läuft die Zeit nicht im gleichen
Takt auf allen Servern im Cluster weiter. Wesentlich ist jedoch, dass
zeitbasierte Callbacks an der gleichen Stelle im Raft-Log auf allen Knoten
ausgeführt werden. Um dies zu erreichen, schreibt der Leader für jedes Kommando
einen Timestamp in das replizierte Protokoll. Wenn ein Befehl auf die
Zustandsmaschine angewendet wird, wird der Zeitstempel des Befehls verwendet, um
alle ausstehenden geplanten Rückrufe aufzurufen. Dies bedeutet, dass die
Granularität von geplanten Rückrufen durch die minimale Zeit zwischen Befehlen
einschließlich Sitzungsregister und Keep-Alive-Anforderungen, die an das Cluster
gesendet werden, begrenzt wird.

**5. Sitzungsereignisse**

Typische Implementierungen des Raft-Konsens-Algorithmus stellen eine API
(Application Programming Interface) bereit, damit es Benutzern ermöglicht wird,
den Zustand in der Zustandsmaschine zu verändern. Komplexere Koordination kann
jedoch erfordern, dass auch die Clients über Änderungen der Zustandsmaschine
lernen. Dies wird mit der sogenannten Polling-Methode umgesetzt. Polling
erfordert dabei, dass Clients in regelmäßigen Abständen alle Zustandsänderungen
vom Cluster anfordern, aber es bedeutet auch größere Latenz und Belastung des
Clusters. Damit ein Client über ein Zustandsänderungsereignis lernen kann, muss
der Client zuerst eine Anfrage an das Cluster senden und alle Clients müssen den
Cluster unabhängig davon abfragen, ob Benachrichtigungen vorhanden sind. Polling
kann dabei die Latenz beim Empfangen von Ereignissen aus dem Cluster verringern,
verhindert jedoch Pipelining-Ereignisse an den Client. Alternativ können die
Systeme Zustandsänderungsbenachrichtigungen an den Client senden. Copycat-Server
verwenden diesen Ansatz, um Zustandsmaschinenereignisse auf Clients zu schieben.

**5.1 Veröffentlichen von Ereignissen aus der Zustandsmaschine**

Als Sitzungsereignis werden Nachrichten während der Anwendung als normale
Operation von der Zustandsmaschine an den Client veröffentlicht. Durch das
Veröffentlichen eines Sitzungsereignisses als Antwort auf Befehle wird die
Reihenfolge zwischen den Ereignissen auf die verschiedenen Server im Cluster
geleitet. Sitzungsereignisse werden normalerweise vom Server an den Client
geleitet und an den Client angeschlossen. Wenn der Client mit einem Follower
verbunden ist, schaltet der Follower Sitzungsereignisse auf die Clients. Wenn
der Client mit dem Leader verbunden ist, schiebt der Leader die
Sitzungsereignisse an den Client weiter. Für Fehlertoleranz und Konsistenz ist
es jedoch noch entscheidend, dass alle Sitzungsereignisse vom Server im Speicher
landen.

Fehlertoleranz der Sitzungsereignisse:

![Fehlertoleranz der
Sitzungsereignisse](bilder/session_event_consistency.png)

*Diese Abbildung veranschaulicht, warum es wichtig ist, dass Ereignisse im
Speicher auf jedem Server gespeichert werden, obwohl sie nur von einem Server an
den Client gesendet werden können. In (a) sendet S1 drei Ereignisse an den
Client. Der Client erkennt zwei der drei Ereignisse, bevor S1 in (b) abstürzt.
Der Client übergibt die Ereignisse mittels eines KeepAlive-RPCs, bis Index 3 auf
S2 und S3 quittiert wurden, wie in (c) dargestellt. Zum Schluss schließt sich
der Client in (d) wieder an S2 an, welcher Ereignisse für die Indizes 4 und 5 an
den Client sendet. [24]*

Alle Ereignisse werden in sequentieller Reihenfolge an den Client gesendet und
empfangen. Dies macht es einfacher bei der Verfolgung zu entscheiden, welche
Ereignisse vom Client empfangen wurden. Um Ereignisse zu verfolgen, wird jedes
Ereignis an den Client mit dem Index des Zustandsmaschinen-Befehls gesendet, der
das Ereignis ausgelöst hat. Der Client erwartet, dass die Ereignisse monoton
wachsen. Da jedoch nicht alle Befehle, die in einer bestimmten Sitzung
veröffentlicht werden und die auf die Zustandsmaschine angewendet werden, zu
Ereignissen führen, muss das Protokoll auch übersprungene Indizes
berücksichtigen. Das Senden des Index jedes Ereignisses, das an den Client
veröffentlicht wird, liefert dem Client den Kontext, der erforderlich ist, um
festzustellen, dass er einige Ereignisse in der Reihenfolge empfangen hat, aber
nicht, dass er alle Ereignisse empfangen hat. Wenn ein Server den Ereignisindex
1 und 3 an einen Client veröffentlicht, kann der Client sicherstellen, dass
diese Ereignisse in der Reihenfolge empfangen wurden, aber ohne zusätzliche
Metadaten weiß es nicht, ob es ein Ereignis für Index 2 empfangen haben soll. Um
also einen fehlenden Index in der Reihenfolge der Ereignisse für eine bestimmte
Sitzung zu behandeln, müssen die Server den Index des vorherigen Ereignisses
enthalten, welcher an den Client gesendet wurde und als prevIndex bezeichnet
wird. Der prevIndex stellt den Clients den erforderlichen Kontext zur Verfügung,
um zu bestimmen, ob alle Ereignisse in der Reihenfolge empfangen wurden. Wenn
ein Client eine Ereignisnachricht mit einem prevIndex empfängt, welcher größer
als der letzte Index ist, für den er ein Ereignis empfangen hat, kann er das
Ereignis ablehnen und fehlende Nachrichten anfordern.

Sequenzierung von Sitzungsereignissen:

![Sequenzierung von Sitzungsereignissen](bilder/session_event_sequencing.png)

*Diese Figur veranschaulicht, wie Sitzungsereignismeldungen sequenziert werden,
wenn sie von einem Server zu einem Client gesendet werden. Für jeden Befehl, der
auf die Zustandsmaschine angewendet wird, können null oder mehr
Sitzungsereignismeldungen zu dem Client gesendet werden. Der Client sequenziert
dann die Zustände in der Reihenfolge, wie diese eintrafen. [25]*

In ähnlicher Weise können einige Befehle dazu führen, dass mehrere
Ereignisnachrichten an derselben Sitzung veröffentlicht werden und die
Reihenfolge möglicherweise während mehrerer Ereignisse für einen einzelnen Index
wichtig ist. Beispielsweise kann es in einer Lock-Zustandsmaschine möglich sein,
dass eine Sitzung passiv auf die Lock-Zustandsänderungsereignisse hört. Die
Freigabe der Sperre kann zu zwei Ereignissen führen, die sich auf einen
einzelnen Befehl beziehen. Wird der Lock von einer Sitzung aufgelöst und die
Sperre für eine weitere Sitzung angehängt, wird die Reihenfolge für diese binäre
Zustandsmaschine wichtig. Server müssen sicherstellen, dass Clients die
Reihenfolge, in der Ereignisse innerhalb eines einzigen Indexes behandelt
werden, bestimmen können. Der einfachste und effizienteste Weg die Reihenfolge
zwischen Ereignismeldungen in einem einzelnen Index zu gewährleisten, besteht
darin die Nachrichten teilweise an den Client zu senden. Mit diesem Ansatz
könnten Nachrichten für einen oder mehrere Indizes in einem einzigen Batch und
in der gleichen Reihenfolge gesendet werden, wie sie auf dem Server erzeugt
wurden. Der Server würde den Abschluss des Befehls abwarten, bevor er den Batch
sendet. In Fällen, in denen die Anzahl der Ereignisnachrichten für einen
einzelnen Index eine angemessene Batchgröße überschritten hat, müssen die
Nachrichten in Indizes explizit geordnet werden. Um mehrere Nachrichten
innerhalb eines einzelnen Indexes zu veröffentlichen, müssen Publish-RPCs an den
Client einen Anfangsoffset und einen prevOffset enthalten, die den Versatz der
ersten Nachricht im Index im RPC und den Versatz des Endes der vorherigen
Nachricht angeben. Letzteres ist notwendig, da es keine feste Anzahl von
Ereignismeldungen pro Batch gibt. Wenn also ein Stapel an Indizes zu verarbeiten
ist, zeigt der prevOffset effektiv die Anzahl der Nachrichten im Batch für den
vorherigen Index an.

**5.2 Wiederholende Ereignisse des Clients**

Während Ereignismeldungen im Transit zwischen dem Server und dem Client liegen,
wird davon ausgegangen, dass Nachrichten beliebig verloren gehen oder neu
geordnet werden. Einzelne Anforderungen können je nach Cluster- und
Clientkonfiguration mehrere Pfade zum Client annehmen und verschiedene
Nachrichten von demselben Server können unterschiedliche Routen zu dem Client
transportieren. Aber wie bei anderen Systembereichen war es das Ziel,
sequentielle Konsistenz für Session-Events zu implementieren. Strenge Ordnung
vereinfacht die Argumentation über ein System und ermöglicht es dem Client, im
Wesentlichen als eine Erweiterung der replizierten Zustandsmaschine zu agieren.
Ein vorbildliches Beispiel für die Notwendigkeit einer strikten Reihenfolge in
Sitzungsereignissen sind verteilte Sperren. Sperren repräsentieren eine binäre
Zustandsmaschine. Dies geschieht entweder im verriegelten oder im entriegelten
Zustand. Wenn eine Zustandsmaschine zwei Ereignisse - Sperren und Entsperren -
zu einem Client veröffentlicht, ist die Reihenfolge kritisch. Wenn der Client
eine Lock empfängt und dann freischaltet, wird er glauben, dass der endgültige
Zustand der Sperre entsperrt wird. Wenn der Client einen Unlock erhält und dann
sperrt, wird das Gegenteil ausgeführt. Aus diesem Grund ist es entscheidend,
dass Clients Ereignisnachrichten in der Reihenfolge empfangen, in der sie von
der Zustandsmaschine gesendet wurden.

Um die Reihenfolge der auf einem Client veröffentlichten Sitzungsereignisse zu
gewährleisten, ist es erforderlich, dass der Client den Index des letzten
empfangenen Batches dazu verwendet, um zu validieren, dass zukünftige Ereignisse
nacheinander empfangen werden können.

Der Algorithmus zum Empfangen eines Ereignis-Batches auf dem Client stellt sich
wie folgt dar:

*Vergleiche den prevIndex des Batches mit dem lokalen eventIndex:*

*Wenn eventIndex kleiner als prevIndex ist, reagiere mit eventIndex,*

*der den letzten empfangenen Batch in Folge anzeigt*

*Wenn eventIndex gleich oder größer als prevIndex ist, ignoriere das
Batch-Ereignis*

*und reagiere erfolgreich*

*Wenn eventIndex gleich prevIndex ist, aktualisiere den lokalen Ereignisindex
mit*

*dem aktuellen Batch-Index und verarbeiten das Ereignis-Batch*

*Aktualisiere den lokalen eventIndex mit dem Stapelindex [26]*

Der Client initialisiert seinen eventIndex zu der Sitzungs-ID. Wenn der Client
einen Batch von Ereignissen empfängt, validiert er den prevIndex der Anforderung
gegen seinen lokalen eventIndex, um zu überprüfen, ob der Batch der nächste in
der Sequenz ist. Wenn der Stapel der Anforderungen aus dem Batch nicht
ordnungsgemäß empfangen wurde, antwortet er sofort und zeigt den Index des
zuletzt empfangenen Batches an. Dies ermöglicht dem sendenden Server, Batches
von diesem Punkt aus erneut zu senden.

Ereigniskoordination der Client Sitzung:

![Ereigniskoordination der Client Sitzung](bilder/session_event_coordination.png)

*Diese Abbildung stellt den Prozess dar, wie der Client mit dem Server
interagiert und Ereignisnachrichten an den Client sendet. In (a) sendet der
Server Ereignismeldungen für den Index 5 an den Client mit einem prevIndex von
2. Weil jedoch der Client Ereignisse für Index 2 empfängt, weist der Client die
Ereignisse in (b) zurück und sendet seine prevIndex 2 zurück an den Server. Der
Server sendet dann Einträge für Index 3 mit einem prevIndex von 2 (c) und der
Client bestätigt den Empfang der Ereignisse in Folge(d). [27]*

Sobald Ereignisse auf dem Client sequenziert sind, müssen diese auch
entsprechend der Reihenfolge nach antworten und dies so, wie sie vom Cluster
empfangen wurden. Clients sollten Antworten und Ereignisse in Reihenfolge
erhalten, in der sie in der Zustandsmaschine auftreten. In dem Fall, dass ein
Befehl, ein Ereignis und eine Abfrage alle auf demselben Zustandsmaschinenindex
auftreten, ist die Reihenfolge der Präzision für die Operationen:

\- Befehl

\- Event

\- Abfrage

Dies bedeutet, wenn ein Client einen Befehl sendet, der ein Ereignis zurück an
denselben Client sendet und gleichzeitig eine Abfrage sendet, sollte der Client
zuerst die Befehlsantwort, dann das Ereignis und dann die Abfrageantwort kennen.
Da Betriebsreaktionen und Ereignisse separat an den Client gesendet werden,
liegt es in der Verantwortung des Clients, diese in der entsprechenden
Reihenfolge zu platzieren. Um diesen Prozess zu erleichtern, enthalten alle
Befehls- und Abfrageantworten einen eventIndex, der den letzten Index angibt,
für den ein Ereignis an den Client veröffentlicht wurde. Befehlsreaktionen
enthalten immer einen eventIndex kleiner als der Befehlsindex, da die von dem
Befehl verursachten Ereignisse erst nach dem Befehl auftreten. Abfragen können
einen eventIndex enthalten, der kleiner oder gleich dem Abfrage-Index ist.
Leader garantieren, dass Operationen auf Zustandsmaschinen in der Reihenfolge
angewendet werden, in der sie auch gesendet wurden. So wird sichergestellt, dass
die Antworten für diese Operationen in der Reihenfolge, in der sie gesendet
wurden angewendet werden. Dies gewährleistet, dass der Betriebszustand monoton
steigt. Wenn eine Antwort mit einem Ereignis-Index, der größer als der zuletzt
empfangene Ereignisindex ist, empfangen wird, werden anstehende Antworten
geprüft, um zu bestimmen, ob die nächste Antwort die Kriterien vollständig
erfüllt hat. Sobald Ereignisse bis zum eventIndex einer Antwort empfangen
wurden, werden diese Ereignisse im Ereignisfaden des Clients abgeschlossen,
bevor die Antwort im gleichen Thread ausgeführt wird. Um sicherzustellen, dass
Ereignisse unabhängig von Antworten empfangen werden können, wenn keine Anfragen
vom Client anstehen, wird das Ereignis sofort beendet.

**7. Das Copycat Log**

Im Inneren des Raft-Konsens-Algorithmus ist das Log. Wenn Befehle an den Cluster
übergeben werden, werden Einträge die Zustandsänderungen darstellen, in der
Log-Datei abgespeichert. Logs bieten Funktionen, durch die Persistenz und
Konsistenz erreicht werden. Aber solche Log-Dateien stellen besondere
Herausforderungen für das Verwalten des Datenträgerverbrauchs dar. Da dies
Befehle sind, die in Log-Dateien auf jedem Server abgespeichert werden,
verbrauchen diese Einträge Speicherplatz. Möglicherweise werden die Log-Dateien
auf jedem Server so groß, dass diese nicht mehr auf dem verfügbaren
Festplattenspeicher abgespeichert werden können. In CopyCat wird als Ansatz die
Implementierung eines inkrementellen Log-Komprimierungsalgorithmus gewählt, der
eine Vielzahl von Methoden bereitstellt, um die Verwaltung des On-Disk-Zustands
innerhalb von Zustandsmaschinen zu erleichtern.

**7.1 Die Struktur des Copycat Log**

Copycat-Protokolle werden in Segmente unterteilt. Jedes Segment eines Protokolls
wird durch eine einzelne Datei auf einem Datenträger (oder einem Speicherblock)
gesichert und stellt eine Folge von Einträgen in dem Protokoll dar. Sobald ein
Segment voll ist - entweder durch seine Größe oder die Anzahl der Einträge -
springt das Protokoll zu einem neuen Segment weiter. Jedes Segment hat einen
64-Byte-Header, einen Startindex, Zeitstempel, Versionsnummer und weitere
Informationen abgelegt, welche für die Protokollverdichtung und
-wiederherstellung genutzt werden.

Logstruktur:

![Logstruktur](bilder/log_structure.png)

*Diese Abbildung zeigt die Struktur des Protokolls. Das Protokoll wird in
Segmente unterteilt, wobei jedes Segment einen zähl- oder größenbasierten
Bereich von Einträgen enthält. Durch das Segmentieren des Protokolls können
Teile des Protokolls unabhängig voneinander komprimiert werden. Jeder Eintrag im
Protokoll wird mit einer 16-Bit-Länge ohne Vorzeichen, einem 32-Bit-Vorzeichen
ohne Vorzeichen und einem optionalen 64-Bit-Ausdruck geschrieben. Da Raft
garantiert, dass die Begriffe in dem Protokoll monoton wachsen, wird der Begriff
nur für den ersten Eintrag in einem Segment geschrieben und alle späteren
Einträge erben den Begriff. Wenn ein Eintrag mit einem neuen Begriff angehängt
wird, wird dieser Eintrag mit dem neuen Begriff geschrieben und nachfolgende
Einträge erben den Begriff. [28]*

**7.2 Log Indizes**

Copycat liest Einträge aus seinem Protokoll aus einem dichten In-Memory-Index
aller Einträge in jedem Segment. Ein Index ist jedem Segment und somit jeder
Datei auf der Platte zugeordnet, und jeder Eintrag in dem Index zeigt auf die
Position eines spezifischen Versatzes in dem Segment. Offsets sind nullbasierte
Sequenznummern die verwendet werden, um den Offset eines Index relativ zum
Startindex innerhalb eines Segments darzustellen. Wenn beispielsweise der Index
eines Eintrags bei einem Offset 0 in einem Segment 10 ist, ist der Offset 9, der
Index 20. Wenn die Offsets in Bezug auf den Startindex eines Segments stehen,
kann Copycat kompaktere 32-Bit-Ganzzahlen ohne Vorzeichen verwenden, um Indizes
im Index darzustellen.

Indizes werden erstellt, wenn Einträge in das Protokoll geschrieben werden.
Offsets werden in dem Index in sortierter Reihenfolge niedergeschrieben und wenn
das Protokoll abgeschnitten wird, werden auch die Indizes, welche den relevanten
Segmenten zugeordnet sind, abgeschnitten. Wenn ein Protokoll von einem
Datenträger wiederhergestellt wird, baut jedes Segment seinen internen Speicher
wieder intern auf, indem er jedes Segment liest und den Index wiederholt.

Da der Index verwendet wird, um Offsets im Protokoll zu indizieren und da
Offsets und Log-Indizes immer monoton zunehmen, werden Einträge immer an den
Index in der sortierten Reihenfolge angefügt. Zusätzlich wird für einen Leader,
der neue Einträge an seinem Protokoll anhängt, kein Offset in einem Segment
übersprungen. Somit werden Index-Lookups auf unkomprimierten Segmenten in O (1)
- Zeit durch einfaches Lesen der relativen Position für das gegebene Offset aus
dem Index durchgeführt. Sobald jedoch ein Segment komprimiert wurde, können
einige Einträge aus einem Segment fehlen. [29]

Der Copycat-Protokollverdichtungsalgorithmus schreibt Segmente um, wobei
beliebige Einträge entfernt werden und vorhandene Einträge ihre Indizes
beibehalten, nachdem ein Segment komprimiert wurde. Wenn ein Segment
umgeschrieben wird, überspringt der Index des Segments komprimierte Einträge,
anstatt sie zu indizieren, um Speicher zu sparen. Daher muss ein binärer
Suchalgorithmus verwendet werden, um Index-Lookups für Segmente mit
übersprungenen Einträgen durchzuführen. Dies wird einfach bestimmt, indem
verfolgt wird, ob irgendwelche Offsets im Index übersprungen wurden. Die binäre
Suche ist ein akzeptabler Kompromiss für verdichtete Segmente unter
Berücksichtigung der Zugangsmuster des Raft-Algorithmus. In der Mehrheit der
Fälle lesen und schreiben die Server ihre Protokolle selbst, bevor sie sich
verdichten und nur wenn der Server aus seinem Protokoll wiederherstellt oder ein
Leader einen Joining-Server anfordert, wird die binäre Suche als Notwendigkeit
durchgeführt.

**7.3 Optimierung für das Raft Log Zugriffsmuster**

Das Protokoll von Copycat ist so optimiert, dass es unter den häufigsten
Bedingungen des Raft-Konsensus-Algorithmus gut funktioniert. Im normalen Betrieb
fügen die Anhänger Einträge zu ihrem Protokoll ein und lesen Einträge aus dem
Kopf des Protokolls. Ebenfalls neigen Leader dazu, sequentiell durch das
Protokoll zu lesen, um Einträge an jeden Follower zu senden. Protokollsegmente
können nur komprimiert werden, sobald alle Einträge in einem Segment festgelegt
sind. Wenn also alle Server primär auf nicht gebundene Einträge operieren, lesen
die Server letztlich nur noch nicht komprimierte Segmente. In diesen Fällen
verbessert die konstante Nachschlagezeit für Segment-Index-Lookups die
Performance erheblich. Die Segmentleseleistung leidet am deutlichsten, wenn eine
Suche eine binäre Suche benötigt, um einen Eintrag zu finden. Eine binäre Suche
nach einem Segmentindex ist notwendig, wenn ein Segment komprimiert wurde und
Einträge entfernt wurden. Glücklicherweise kann auch beim Lesen eines
komprimierten Segments die Leseleistung über den Segmentindex signifikant
verbessert werden, indem die Zugriffsmuster von Raft genutzt werden.
Insbesondere wenn ein Server aus einem komprimierten Segment des Protokolls
liest, ist es normalerweise entweder das Wiedergeben des Protokolls an sich oder
das Senden an einen anderen Server (wenn der Server der Leader ist). Da Einträge
immer ihre Position und ihren Index im Protokoll und Offset innerhalb eines
Segments auch nach der Verdichtung beibehalten, erfordert die Iteration von
Einträgen in komprimierten Segmenten des Protokolls immer nur eine einzelne
binäre Suche. Sobald sich die Ausgangsposition einer Abtastung des Protokolls
befindet, speichert der Index die Position und den Versatz des letzten aus dem
Index gelesenen Eintrags. Bei anschließenden Index-Lookups prüft der Index
zuerst das nächste Offset im Segment und führt nur eine binäre Suche durch, wenn
das Segment nicht sequentiell gelesen wird.

**8. Log Verdichtung**

Eine der wichtigsten Komponenten des Raft-Konsensus-Algorithmus ist die
Protokollverdichtung. Log-Komprimierung ist der Prozess der Verringerung der
Größe des Protokolls, sodass Server weiter Service-Schreibvorgänge über lange
Zeiträume unter Beibehaltung ihrer vollen Leistung auf der Festplatte
abspeichern können.

Bei der Entwicklung von Copycat wurden verschiedene Ansätze betrachtet, um die
Verdichtung zu protokollieren und letztendlich wurde sich dafür entschieden,
einen benutzerdefinierten Protokollverdichtungsalgorithmus zu verwenden, welcher
verschiedene Ansätze kombiniert. Damit der Verdichtungsalgorithmus für Copycat
gut funktioniert, müsste der Komprimierungsalgorithmus wie folgt aussehen:

\- Führe eine inkrementelle Verdichtung mit effizienten sequentiellen Lese- und
Schreibvorgängen durch

\- Erhalte die Ordnung im Raftprotokoll nach der Verdichtung, um die Komplexität
zu verringern

\- Erlaube Zustandsmaschinen, Protokollreinigung für alle oder einen Teil der
Einträge zu implementieren

\- Zustandsmaschinen ist es erlaubt, Snapshots für alle oder einen Teil der
Einträge zu implementieren

\- Reduziere die Kosten für die Replikation [30]

Anhand dieser Anforderungsliste ergibt sich, dass Copycat viele, aber nicht alle
Konzepte der Protokollreinigung anwendet, um effizient zu arbeiten. So
implementiert Copycat einen Algorithmus, der dem Prozess der Protokollreinigung
ähnelt, aber nicht die Kopien von Live-Einträgen in den Kopf des Protokolls
einträgt, sondern Copycat behält die Positionen und Indizes der einzelnen
Einträge im Protokoll nach der Verdichtung bei.
