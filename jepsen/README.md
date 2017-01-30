#Jepsen

##Inhaltsverzeichnis
1. Einleitung (von Michael Nicks)
2. Ursachen für Konsistenzprobleme und Erreichbarkeit bei verteilten Datenbanken (von Michael Nicks)
   * Zwei-Phasen-Commit Protokolle 
   * Reaktion der verteilten Datenbank bei teilweisem Verlust einzelner Knoten
   * Ausfälle auf Anwendungsebene
   * Probleme mit Network Interface Controllern (NIC) und Treibern
   * Netwerkkonfiguration im Rechenzentrum
   * Verteilte Datenbanken im WAN
3. Konzept hinter Jepsen
   * Stakre Konsistenzmodelle (von Michael Nicks)
     * Richtigkeit
     * Gleichzeitiger Zugriff
     * Lichtkegel
     * Linearisierbarkeit
     * Sequenzielle Konsistenz
     * Kausale Konsistenz
     * Serialisierbare Konsistenz
   * Testumgebung (von Michael Nicks)
     * Nötige Hardware
     * Einrichtung der Testumgebung
     * Konfiguration für Client und Server
   * Automatisches Testen durch Jepsen (von Michael Nicks)
   * Analysen (von Patrick Volgmann)
4. Fragestellungen hinter Jepsen (von Patrick Volgmann)
   * Für wen ist Jepsen interessant?
   * Wo kann man Jepsen einsetzen!
   
