
# 1. Einleitung

Datenbanksysteme sind obligatorische Komponenten für eine sichere und nachhaltige persistente Abbildung von Datenbeständen, obgleich für den kommerziellen, allgemeinnützigen oder privaten Nutzungszweck. Die Priorität dieser Komponente wird durch die frühzeitig einsetzende Entwicklung von Datenbanksystemen (1960), verglichen an der Entwicklung der wissenschaftlichen Themen um die z.B. Großrechner (Mitte 1950) oder sonstiger grundlegender Konzepte der IT deutlich. Im Kontext der des Nutzungsszenarios haben Datenbanksysteme verschiedene Entwicklungsstufen durchschritten. Es wurden beispielsweise neue Funktionen entwickelt, der Umfang der Abfragesprache Structured Query Language (SQL) erweitert oder herstellerspezifisch neue Subsysteme entwickelt. (vgl. @meier2016nosql S.133)

Moderne Datenbanksysteme weisen komplexe Architekturen auf, besitzen eine Vielzahl an Funktionen, abseits einer ausschließlichen relationalen Datenhaltung und vereinen mitunter unterschiedliche Konzepte zur Abbildung von Daten auf Speichermedien. Im Zuge dieser Evolution wurden unterschiedliche Datenbankkonzepte entwickelt, die sich mehr oder weniger kommerziell erfolgreich am Markt etablieren konnten. So existieren relationale Datenbankmanagementsysteme (RDBMS) und speziell auf einen Einsatzzweck hin optimierte schemafreie Datenbanksysteme (DBS), alternativ auch als NoSQL-Datenbanksysteme bezeichnet. NoSQL-Datenbanksysteme fokussieren eine Speicherung und Verwaltung von multimedialen Daten oder offerieren andere Konzepte zur Strukturierung von Daten. In die Rubrik der NoSQL-DBS fallen beispielsweise

-	Objektorientierte Datenbanken (OODB)
-	Dokumentendatenbanken
-	Schlüssel-Wert-Datenbanken
-	Spaltenorientierte Datenbanken
-	Verteilte ACID-Datenbanken
-	Graphen-basierte Datenbanken
. (vgl. @puerner2013nosql)

Die angedeutete Vielfältigkeit NoSQL-DBs suggeriert, dass neben den relational organisierten Daten ein Bedarf zur Speicherung von Daten existiert, die nicht ausschließlich aus Text bestehen oder im binären Format vorliegen. Angesichts des mittlerweile gelebten Web 2.0 und des andauernden und zunehmenden Trends an der Entstehung von multimedialem Contents wie Videos, Bilder, Dokumenten oder schlicht XML-Dateien, wäre es abermals konsequent, die Charakteristik dieser spezifischen Datentypen zu adressieren und von NoSQL-DBS verwalten und speichern zu lassen (vgl. @puerner2013nosql).

Dieser Umstand trifft auch auf die Adressierung von Speicherbedürfnissen zu, die aufgrund der mittlerweile vielseitig eingesetzten objektorientierten Programmierung sich insuffizient oder nicht mit einer relationalen Datenspeicherung realisieren lassen. Unabhängig von den Potentialen und Vorteilen die NoSQL-basierte DBS, infolge der Ausrichtung auf ein spezifisches Einsatzszenario, bieten können, wird in vielen Softwaresystemen nach wie vor eine relationale Datenbasis eingesetzt. Diese Seminararbeit soll einen Erklärungsversuch liefern, warum die Verbreitung von objektorientierte Datenbanken im Gegensatz zu RDBMS eher als geringfügig einzustufen ist. Dazu werden RDBMS, OODBs und Dokumentendatenbanken grundlegend thematisiert und gegeneinander abgegrenzt.
