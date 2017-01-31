# 4. Einrichtung eines Datenbanktests [1]

## Testumgebung
Für die Durchführung eines Test eines Datenbanksystems wird davon abgeraten ein im Einsatz befindliches Produktivsystem zu benutzen, da ein Auftreten unvorhersehbarer Fehler zu Datenverlust und Abstürzen des Datenbanksystems führen kann. 
### Nötige Hardware
Für den Test einer verteilten Datenbank werden mehrere Server benötigt, welche sich aber auch innerhalb einer virtuellen Maschine oder der Cloud befinden können.
Des Weiteren wird für die Kontrolle des Tests und die Clientprozesse ein weiterer Computer oder virtuelle Maschine benötigt.

### Einrichtung der Testumgebung
Zuerst ist es notwendig auf allen Maschinen ein debian (oder auch ubuntu) zur Verfügung zu stellen. Die Maschinen die die Datenbank darstellen müssen über einen ssh Zugang verfügen, auf den mit root-Rechten zugegriffen werden kann.

Auf der Maschine, die das Testsystem darstellt, ist es nötig einige Pakete über den Paketmanager zu installieren. 

sudo apt-get install openjdk-8-jre openjdk-8-jre-headless libjna-java leiningen

Die manuelle Einrichtung der Maschine lässt sich mittels Docker-Container allerdings sehr gut automatisieren, so dass die Initiale Einrichtung von Datenbank und Testmaschine durch ausführen der docker-compose Konfigurationsdatei auf einen einzigen Schritt reduziert wird. Voraussetzung dafür ist allerdings eine Maschine mit debian und installiertem docker einschließlich docker-compose

## Automatisches Testen mit Jepsen
Mit einem Leiningen Projekt lässt sich der komplette Test inklusive der automatischen Einrichtung des Servers steuern.
In der `<project.clj>` werden die Anhängigkeiten des Projektes und weitere Metadaten spezifiziert. Unter `<:main>` und `<:dependancies>` werden in Falle von `<:main>` der Pfad für die Konfigurationsdatei und bei `<:dependancies>` die Abhängigkeiten, zum Beispiel die jeweiligen Clojure und Jepsen Verionen, des jeweiligen Projekt angegeben.

In der unter `<:main>` angegebenen Pfad wird eine Clojure Datei für die Testkonfiguration angelegt. Die wichtigstens Bestandteile dieses Jepsen-Tests sind die Bereiche für die automatische Einrichtung der verteilten Datenbank, des Clients, mehrerer Checker und der Auslösung von Fehlerfällen.

Da die Konfigurationsdateien nicht ganz einfach zu verstehen sind, falls noch nicht weiter mit Clojure gearbeitet wurde, folgt hier jetzt eine vereinfachte Aufzählen von Konfigurationselementen, die für einen automatischen Jepsen-Test nötig, bzw. möglich sind.

### Einrichtung der Datenbank
Im Bereich der `db` Funktion des Jepsen-Tests werden alle für eine automatische Einrichtung der Datenbank nötigen Bestandteile hinterlegt.
Zu diesen Bestandteilen zählen:
  * Informationen über das verwendete Betriebssystem
  * die zu testen Datanbank mit Versionsangabe
  * die von der Paketverwaltung zu installierenden Pakete der Datenbank
  * eine setup und eine teardown Routine
  * Pfadangaben zu eine für die Datenbank zuständigen Konfigurationsdatei
  * Angaben zur Spezifierung einzelner Knoten der Datenbank
  * Betriebssystem- und Datenbankspezifische Angaben zum starten und stoppen der Datenbank

### Einrichtung des Clients
Wichtig ist hier an erster Stelle die Definition der Operationen an die Datenbank, damit mittels des eingebauten Generators eine Liste von Operationen die abgearbeitet werden sollen generiert werden kann.
Hier seien jetzt Definitionen für "read", "write" und "compare-and-set" (cas) aufgeführt:
  * (defn r   [_ _] {:type :invoke, :f :read, :value nil})  
  * (defn w   [_ _] {:type :invoke, :f :write, :value (rand-int 5)})    
  * (defn cas [_ _] {:type :invoke, :f :cas, :value [(rand-int 5) (rand-int 5)]})
  
Die Operation :read bekommt von der Datenbank ein :value welches durch den Test aber mit keinem Wert (nil) spezifiziert ist, den Wert nicht kennen ehe die Leseoperation durchgeführt wurde.
Bei :write wird in diesem Fall eine zufällige Integerzahl zwischen 0 und 5 generiert, die in die Datenbank geschrieben werden soll.
Bei :cas wird im Gegensatz zu :read zusätzlich der Zustand vor der schreibenden Operation mitbetrachtet, was einer genaueren Fallunterscheidung bedarf um festzustellen ob die Operation korrekt durchgeführt wurde.

Der Lebenszyklus des Clients besteht aus 3 Bestandteilen, "setup!", "invoke!" und "teardown".
  * "setup!" bau dabei den Client-Test auf
  * "invoke!" ist für die Durchführung der Operationen verantwortlich
  * "teardown!" gibt alle noch belegten Ressourcen wieder frei
  
Wichtig ist hierbei, das es in der Regel mehr als einen Clientprozess gibt, der Operationen gegen die Datenbank durchführt.
Innerhalb der Clienkonfiguration werden mit `jespsen.generator`und `jepsen.util` einige Jepsen-Module verwendet die für die Steuerung und Durchführung der Operationen notwendig sind.

### Definierung von Checkern
Mit dem Generator und von Client ausgeführten Operationen entsteht ein Verlauf, der sich auf Korrektheit analysieren lässt. Dabei wird von Jepsen ein abstrktest Modell des System benutzt und Checker erstellt, die den Verlauf der Operationen bestätigen sollen. 

Als Checker stehen eine Vielzahl von unterschiedlichen Vergleichstest zur Verfügung:
  * valid-priorities - "A map of :valid? values to their importance. Larger numbers are considered more signficant and dominate when checkers are composed."
  * merge-valid - "Merge n :valid values, yielding the one with the highest priority." 
  * unbridled-optimism - "Everything is awesoooommmmme!"
  * linearizable - "Validates linearizability with Knossos."
  * queue - "Every dequeue must come from somewhere. Validates queue operations by assuming every non-failing enqueue succeeded, and only OK dequeues succeeded, then reducing the model with that history. Every subhistory of every queue should obey this property. Should probably be used with an unordered queue model, because we don't look for alternate orderings. O(n)."
  * set - "Given a set of :add operations followed by a final :read, verifies that every successfully added element is present in the read, and that the read contains only elements for which an add was attempted."
  * total-queue - "What goes in *must* come out. Verifies that every successful enqueue has a successful dequeue. Queues only obey this property if the history includes draining them completely. O(n)."
  * counter - "A counter starts at zero; add operations should increment it by that much, and reads should return the present value. This checker validates that at each read, the value is at greater than the sum of all :ok increments, and lower than the sum of all attempted increments."
  * compose - "Takes a map of names to checkers, and returns a checker which runs each check (possibly in parallel) and returns a map of names to results; plus a top-level :valid? key which is true iff every checker considered the history valid."
  * latency-graph - "Spits out graphs of latencies."
  * rate-graph - "Spits out graphs of throughput over time."
  * perf - "Assorted performance statistics"
  
Eine Kombination mehrerer Checker ist ebenfalls möglich, zum Beispiel falls gnuplot installiert ist, kann Jepsen den Durchsatz ausgeben, so dass eine entsprechender Latzen-graph erstellt werden kann.
```clj
         :checker (checker/compose
                    {:perf   (checker/perf)
                     :linear checker/linearizable})))
```
Mit `$ open store/latest/latency-raw.png` lässt sich diese Graph dann anschauen.
### Auslösen von Fehlerfällen
Das bei Jepsen unter dem Namen "Nemesis" laufende Modul ermöglicht es automatisch Fehler in die verteilte Datenbank zu injizieren. Auch hier gibt es eine Reihe von Fehlern die ausgelöst werden können:
  * noop - "Does nothing."
  * snub-noodes! - "Drops all packets from the given nodes."
  * partition! - "Takes a *grudge*: a map of nodes to the collection of nodes they should reject messages from, and makes the appropriate changes. Does not heal the network first, so repeated calls to partition! are cumulative right now."
  * bisect - "Given a sequence, cuts it in half; smaller half first."
  * split-one - "Split one node off from the rest"
  * complete-grudge - "Takes a collection of components (collections of nodes), and computes a grudge such that no node can talk to any nodes outside its partition."
  * bridge - "A grudge which cuts the network in half, but preserves a node in the middle which has uninterrupted bidirectional connectivity to both components."
  * partitioner - "Responds to a :start operation by cutting network links as defined by (grudge nodes), and responds to :stop by healing the network."
  * partition-halves - "Responds to a :start operation by cutting the network into two halves--first nodes together and in the smaller half--and a :stop operation by repairing the network."
  * partition-random-halves - "Cuts the network into randomly chosen halves."
  * partition-random-node - "Isolates a single node from the rest of the network."
  * majorities-ring - "A grudge in which every node can see a majority, but no node sees the *same* majority as any other."
  * partition-majorities-ring - "Every node can see a majority, but no node sees the *same* majority as any other. Randomly orders nodes into a ring."
  * compose - "Takes a map of fs to nemeses and returns a single nemesis which, depending on (:f op), routes to the appropriate child nemesis. `fs` should be a function which takes (:f op) and returns either nil, if that nemesis should not handle that :f, or a new :f, which replaces the op's :f, and the resulting op is passed to the given nemesis."
  * set-time! - "Set the local node time in POSIX seconds."
  * clock-scrambler - "Randomizes the system clock of all nodes within a dt-second window."
  * node-start-stopper -  "Takes a targeting function which, given a list of nodes, returns a single node or collection of nodes to affect, and two functions `(start! test node)` invoked on nemesis start, and `(stop! test node)` invoked on nemesis stop. Returns a nemesis which responds to :start and :stop by running the start! and stop! fns on each of the given nodes. During `start!` and `stop!`, binds the `jepsen.control` session to the given node, so you can just call `(c/exec ...)`."
  * hammer-time - "Responds to `{:f :start}` by pausing the given process name on a given node or nodes using SIGSTOP, and when `{:f :stop}` arrives, resumes it with SIGCONT.  Picks the node(s) to pause using `(targeter list-of-nodes)`, which defaults to `rand-nth`. Targeter may return either a single node or a collection of nodes."
  
Jepsen weiß durch diesen Test, wann es zu einer Störung in der verteilten Datenbank kommt, und kann dadurch analysieren, ob das erwartete Verhalten mit dem tatsächlichen übereinstimmt.

___________________________________________________________________________

[1] https://github.com/jepsen-io/jepsen
