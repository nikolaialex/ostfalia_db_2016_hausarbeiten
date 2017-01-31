---
title: "Jepsen"
subtitle: "Ein Tool um Eigenschaften von Datenbanken zu testen"
institute: ["Ostfalia Hochschule für angewandte Wissenschaften"]
tags: ["Jepsen"]

author:
   - Michael Nicks  
   - Patrick Volgmann
---
#Jepsen

##Inhaltsverzeichnis
1. Einleitung (von Michael Nicks)
2. Ursachen für Konsistenzprobleme und Erreichbarkeit bei verteilten Datenbanken (von Michael Nicks)
   * CAP-Theorem
   * Replikation
   * Zwei-Phasen-Commit Protokolle 
   * Reaktion der verteilten Datenbank bei teilweisem Verlust einzelner Knoten
   * Ausfälle auf Anwendungsebene
   * Probleme mit Network Interface Controllern (NIC) und Treibern
   * Netwerkkonfiguration im Rechenzentrum
   * Verteilte Datenbanken im WAN
3. Konzept hinter Jepsen (von Michael Nicks)
   * Stakre Konsistenzmodelle 
     * Richtigkeit
     * Gleichzeitiger Verlauf
     * Lichtkegel
     * Linearisierbarkeit
4. Einrichtung eines Datenbanktests (von Michael Nicks)
   * Testumgebung
     * Nötige Hardware
     * Einrichtung der Testumgebung
     * Konfiguration für Client und Server
   * Automatisches Testen durch Jepsen 
     * Einrichtung der Datenbank
     * Einrichtung des Clients
     * Definierung von Checkern
     * Auslösen von Fehlerfällen
5. Ergebnisse verschiedener Datenbanktests mit Jepsen (von Michael Nicks)
   * Postgres
   * Redis
   * MongoDB 2.4.3
   * Riak
6. Fazit (von Michael Nicks)
