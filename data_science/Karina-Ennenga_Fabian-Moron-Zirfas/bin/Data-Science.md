Language: german

---
title: "Daten Wissenschaft"
subtitle: "Datenbanken in Big Data. Welche Technologien kommen zum Einsatz?"
institute: ["Beuth Hochschule für Technik - University of Applied Sciences", "Fachhochschule Lübeck - University of Applied Sciences"]
tags: ["Big Data", "Data Science"]

author:
   - Karina Ennenga 
   - Fabian Morón Zirfas
---
Karina Ennenga, Fabian Morón Zirfas
Nikolai Alex
Datenbanktechnologien (FHBSWF MIM 12 W16)
22. Januar 2017
Data Science 

----

## Inhalt

1. Abstrakt
2. Was ist Data Science?
3. Data Science In der Anwendung
    1. Netflix
    2. Cambridge Analytica
4. Ausblick
5. Fazit
6. Quellen  
# Abstrakt #

In der folgende Arbeit setzen wir, die Autoren Karina Ennenga und Fabian Morón Zirfas für das Seminar Datenbanktechnologien (FHBSWF MIM 12 W16) betreut durch Nikolai Alex, uns mit „Data Science in der Anwendung “ auseinander. Im ersten Kapitel „Was ist Data Science?“ versuchen wir kurz zu umreißen was unter dem Titel Data Science zu verstehen ist und wo es sich von zum Beispiel Statistik abgrenzt. Im zweiten Kapitel „Data Science in der Anwendung“ und seinen Unterkapiteln  „Netflix“ und „Cambridge Analytica“ betrachten wir exemplarisch diese zwei Unternehmen, um anhand dieser darstellen zu können was Data Science für Firmen bedeutet. Im dritten Kapitel folgt ein kurzer „Ausblick“ in die Zukunft um im „Fazit“, dem vierten Kapitel, zu Enden.   
# Was ist Data Science? #

Der Begriff „Data Science“ ist seit einigen Jahren ein Buzz Word, welches immer wieder im Zusammenhang mit anderen wie „Big Data“ und „Artificial Intelligence“ auftauchen. Aber was ist dieses „Data Science“ überhaupt? Wer sind diese Daten Wissenschaftler und was machen sie?  
Geboren wurde diese neue Art von Stellenbeschreibung wohl zusammen mit dem Aufkommen von Großen Datenmengen die von Unternehmen gesammelt werden. Um diesen Daten Herr zu werden bedarf es einiger Qualifikation. Der Umgang mit verschiedensten Datenbanken, die Methoden aus der Statistik, die Fähigkeit zu programmieren, das Wissen wie die Ergebnisse in eine visuelle Form gebracht werden können aus denen auch Informationen abgelesen und verstanden werden können und auch die Befähigung die Algorithmen zu schreiben, die effizient genug sind Ergebnisse nicht erst in 2 Wochen zu liefern.  

>> Every time you open Facebook, one of the world’s most influential, controversial, and misunderstood algorithms springs into action. It scans and collects everything posted in the past week by each of your friends, everyone you follow, each group you belong to, and every Facebook page you’ve liked. For the average Facebook user, that’s more than 1,500 posts. If you have several hundred friends, it could be as many as 10,000. Then, according to a closely guarded and constantly shifting formula, Facebook’s news feed algorithm ranks them all, in what it believes to be the precise order of how likely you are to find each post worthwhile. Most users will only ever see the top few hundred. [^cf1]
> And someone needs to write an algorithm to power those features. Facebook could take all that historical data and hand it off to a very talented statistician. And she would put her immense knowledge and experience to use, diving into R and producing an excellent model that infers the relationship between all of these variables. And that would, no doubt, yield valuable insights into which ads would perform best in different situations. [^cf2]

Für viele Unternehmen wird es immer wichtiger aus den bei ihnen anfallenden Daten auch Schlüsse zu ziehen. Hier kommt der Daten Wissenschaftler ins Spiel. Sei es, wie oben beschrieben, zu errechnen was jemand sehen will, um vorauszusagen welche Produkte auch interessant sein könnten, wann der Fahrstuhl gewartet werden muss oder um vorauszusagen wer der nächste Präsident der Vereinigten Staaten von Amerika wird. Für all diese Tätigkeiten kommen heut zu Tage Daten Wissenschafter zum Einsatz. Daher wurde von glassdoor.com auch die Stellenbeschreibung des „Data Scientist“ als der Top Job in 2016[^cf3] gekürt und von Harvard Business Review (hbr.org) sogar zum „Sexiest Job of the 21st Century“[^cf4]. Ob diese Voraussage sich hält werden wir in einigen Jahren sehen. Sicher ist jedoch, dass in Zeiten in denen eine Boeing 737 pro Turbine innerhalb von 30 Minuten 10 terabyte Daten produziert[^cf5], wir in Petabytes[^cf6] oder Exabytes denken, sich ein neues Feld von Beschäftigungen eröffnet. Diese Personen sind mehr als nur digitale Bibliothekare/innen. Sie müssen in der Lage sein große Datenmengen aus inkonsistenten Daten, von Video, über Text, bis Tweet und Animated GIF, zu bändigen um aus ihnen einen Schlüsse ziehen zu können.   
# Data Science In der Anwendung #

Wie bereits im vorherigen Kapitel erwähnt, werden unglaubliche Datenmengen von Unternehmen gesammelt, gebündelt und ausgewertet. Es wird „getracked“ und gespeichert wo es nur geht. Ein Unternehmen wie Google, _wenn es überhaupt noch ein zweites Unternehmen wie Google gibt_, sammelt über jede Art von Dienst den es zur Verfügung stellt, um so viele Data Points wie möglich über Nutzer/innen zu erhalten. Die offensichtlichen Punkte wo über uns gesammelt wird sind Google Suchhistorie, Tracking Cookies, Adsense, Analytics, Youtube, Google+, Gmail, Google Drive, Google Documents, Android und viele mehr.[^cf7]
Nicht so offensichtlich jedoch auch vorstellbar als Methode uns als Einzelperson zu identifizieren sind Dinge wie Anschlagdynamik bei der Eingabe mit der Tastatur oder die Art wie wir uns verschreiben. Was Google damit macht, ist uns allen bekannt. Besser Werbung platzieren. Doch wie sieht es für die anderen Unternehmen aus? Besonders von denen, die nicht ihr Geld mit dem platzieren von Werbung verdienen, ist unser Bild noch nebulös. Welchen Sinn macht es diese Unmengen an Daten zu sammeln, zu speichern, vorzuhalten und wie kann daraus Gewinn geschlagen werden?

Oder um es einfacher zu sagen: „Wie findet Data Science Anwendung?“  

In den folgenden beiden Unterabschnitten werden wir die Unternehmen Netflix und Cambridge Analytica betrachten, um zwei weitere Modelle aufzuzeigen in den „Big Data“ eine zentrale Rolle spielt.    
## Netflix ##

1. Datenerhebung

Netflix weiß von jedem Nutzer, was er schaut, wann er schaut, wie lange er etwas schaut, an welcher Stelle aufgehört wurde, zu schauen und wie er auf den Film oder die Serie aufmerksam geworden ist.

Diese riesige Menge an Daten wird von Algorithmen beobachtet. Laut dem amerikanischen Magazin The Atlantic beschäftigt Netflix allein 800 Ingenieure, die sich nur mit diesem Algorithmus beschäftigen.

The Atlantic hat recherchiert, wie die Algorithmen funktionieren. Auf die Funktionsweise des Algorithmus gehe ich im nächsten Abschnitt *Speicherung / Algorithmus* näher ein.

Das Herzstück von Netflix ist sein Empfehlungsmechanismus. Dieser basiert auf dem Algorithmus, der Cinematch genannt wird. Um diesen Mechanismus noch weiter zu verbessern, wurde 2006 von Netflix-Chef Reed Hastings ein Wettbewerb “The Netflix Prize” zur Verbesserung des Algorithmus, ausgeschrieben. Er versprach demjenigen, der es schaffen würde, den Algorithmus um 10 Prozent zu verbessern, 1 Million Dollar. (http://techblog.netflix.com/2012/04/netflix-recommendations-beyond-5-stars.html)

Letztendlich gewann ein Team, das eine Verbesserung von 8,43% geschafft hat. Das Team habe 2000 Stunden Arbeit damit verbracht, um einen Kombination aus 107 Algorithmen zu präsentieren.
Um den Algorithmus einsetzen zu können, mussten einige Anpassungen vorgenommen werden. So konnte beispielweise der ursprüngliche Algorithmus nicht mehr als 100 Millionen Bewertungen händeln, wobei zu dem Zeitpunkt bereits 5 Milliarden Bewertungen vorhanden waren.
In 2012 wurden bereits 75% der Filme und Serien aufgrund des Empfehlungssystems geschaut.


2. Speicherung / Algorithmus

In Anbetracht der Tatsache, dass Netflix mehr als 85 Millionen Abonnenten hat (Stand von Oktober 2016 laut http://www.wiwo.de/unternehmen/it/netflix-in-deutschland-mehr-abonnenten-als-einwohner/14702184.html), wird klar, dass sie ein riesiges Repertoire an “personalisierten Genres” haben.

In dem Artikel *How Netflix Reverse Engineered Hollywood* vom 02.01.2014 beschreibt das Magazin *The Atlantic* ihre Recherchearbeiten zum Algorithmus von Netflix.
Sie haben herausgefunden, dass Netflix zu diesem Zeitpunkt 76.897 Genres besitzt, um Filmtypen zu beschreiben. Zum heutigen Zeitpunkt sind es fast 93.000 (https://docs.google.com/spreadsheets/d/1eISFvq42Sll10xekyV-XQdwoG7_gjZpreNG40Pz8G0k/edit#gid=2125244376).

Zu den neuesten zählen Genres wie “Golden Globe Award-winning Understated Comedies” und “Critically-acclaimed Biographical Drug Documentaries”.

*The Atlantic* hat herausgefunden, dass Netflix jeden einzelnen denkbaren Film und jede Serie analysiert hat und sich somit eine enorme Datenbasis aufgebaut hat.
Dies gelang Ihnen, indem sie Menschen engagiert haben, die Filme schauen und diese mit unterschiedlichsten Metadaten beschreiben. Dazu gehören der Romantiklevel, wie blutrünstig ein Film ist und erzählerische Daten, wie zum Beispiel die Schlüssigkeit der Handlung.
Die ausgebildeten Filmeschauer bewerten dutzende von Eigenschaften, darunter auch den Moralstatus der Charaktere. Diese Eigenschaften werden mit den Gewohnheiten der Netflix User kombiniert, woraus ein großer Wettbewerbsvorteil für Netflix entsteht.


![Alternativer Text](bild1)

Durch den Alghorithmus hat Netflix eine neue Form des Empfehlens geschaffen.

Früher liefen Empfehlungen laut Atlantic überwiegend nach dem kollaborativen Empfehlungssystems ab. Für das kollaborative Filtern werden auch andere Benutzer berücksichtigt. Wenn zum Beispiel Anna Film 1 mit 3 Sternen, Film 3 mit 4 Sternen und Film 5 mit 2 Sternen bewertet hat und Julia Film 1 mit 2 Sternen, Film 3 mit 5 Sternen, Film 4 mit 4 Sternen und Film 5 mit 1 Stern bewertet hat, dann scheinen die beiden Benutzer Anna und Julia ähnlich zu sein und Anna kann der Film 4 vorgeschlagen werden, den sie noch nicht gesehen hat.

![Alternativer Text](images/kollaborativesFiltern)

Bei dem kollaborativen Empfehlungssystem wurde versucht vorherzusagen, wie viele Sterne man einem Film geben würde. Dafür musste man möglichst viele Filme bewerten, um daraus überhaupt eine Tendenz und ein Profil des Nutzers erstellen zu können.

Eine Aussage im Atlantic Artikel besagt, dass Netflix ein System gebaut habe, welches wirklich nur mit einem in der Technologie-Welt vergleichbar ist, und zwar dem NewsFeed von Facebook.

3. Visualisierung/Analyse der Daten

Um Schlussfolgerungen aus Datenerhebungen zu ziehen, muss zuerst eine gewisse Menge an Daten zur Analyse bereit stehen.
Erst wenn genug Menschen beispielsweise an einer bestimmten Stelle Pause gedrückt oder vorgespult haben, kann man anfangen, Schlussfolgerungen aus diesem Verhalten zu ziehen.
Wenn ständig an der gleichen Stelle Pause gedrückt wird, könnte die Handlung zu langwierig oder langweilig geworden sein um das Interesse der Zuschauer zu halten. Es könnte auch sein, dass der Plot zu kompliziert wurde. Wenn genug Nutzer nach der Pause nie weiter schauen, könnte die Annahme getroffen werden, dass die Sendung schlecht ist.
Natürlich sind das alles aber nur Annahmen. Trotz der gigantischen gesammelten Datenmenge kann Netflix nicht mit 100%iger Sicherheit sagen, was dieses Verhalten der User bedeutet.


4. Nutzung der Daten

Laut Salon arbeitet Netflix seit 2012 daran, insofern Nutzen aus ihrer Big Date Kapazität zu ziehen, als dass sie versuchen damit ihre Programmauswahl zu beeinflussen. Konkret bedeutet es, dass sie Serien aufgrund ihrere Analyseergebnisse kaufen oder produzieren.
Das Pilot-Projekt dieser Strategie ist die Serie *House Of Cards*. *House Of Cards* war ursprünglich eine britische Miniserie, die 1990 auf dem britischen Kanal BBC ausgestrahlt wurde. Die Serie bestand nur aus vier Episoden und handelt von einem Politiker, der zusammen mit seiner Ehefrau Rachepläne ausübt, nachdem er vom Premierminister hintergangen wurde.

Aufgrund der Big Data-Analyse von Netflix wurde die Entscheidung getroffen, eine Neuauflage der britischen Serie *House Of Cards* zu produzieren.
Den Analyseergebnissen konnte man entnehmen, dass dieselben Personen, die das britische Original von *House Of Cards* liebten, ebenfalls Filme lieben, bei denen Kevin Spacey mitspielt oder die unter der Regie von David Fincher entstanden sind.

Die Argumente waren also:
- Die britische Version von *House of Cards* hatte ein großes Publikum,
- *The Social Network*, bei dem David Fincher Regie geführt hat, hatte ein großes Publikum,
- Nutzer, die die britische Version von *House Of Cards* geschaut haben, schauten oft auch Filme mit Kevin Spacey und/oder Filem, die unter der Regie von David Fincher entstanden sind.

Somit sollte das Remake der Serie, die für 13 Episoden 100 Millionen Dollar gekostet hat, ein Kinderspiel werden.

Verglichen zu traditionellen Studios, die außer den verkauften Tickets und DVDs kein Feedback ihrer Kunden bekommen, ist Netflix, was das Feedback und die Analyse angeht, Welten voraus. Netflix muss vor der Produktion eines Film oder einer Serie nicht mehr ahnen, was die Nutzer sehen wollen, sondern stützt sich auf ihre Analysen. Sie können die Daten sogar bis auf die Postleitzahl herunterbrechen und herausfinden, welche Shows mit welchen Schauspielern die Nutzer gerne sehen.

Die traditionellen Studios haben einen großen Nachteil. Einer der größten Posten bei den Kosten einer Filmproduktion ist das Marketing. Es gibt aber keine Möglichkeit herauszufinden, welche der Marketingstragien erfolreich waren und welche nicht und ob es das Marketing überhaupt etwas bringt. Es können auch Millionen ins Marketing fließen und der Film wird trotzdem ein Flop.

Netflix hat es geschafft, eine Brücke zwischen Nutzern und Produzenten zu bauen. Das Team, das entscheidet, was produziert wird, kann sich ganz einfach an den Daten der Nutzer orientieren.

  
## Cambridge Analytica ##

Zum Grauen vieler zog zu Beginn des Dezembers 2016 ein Artikel mit dem Titel „Ich habe nur gezeigt, dass es die Bombe gibt“[^cf8] seine Runde durch die verschiedensten Sozialen Medien. In ihm wird erläutert wie psychologische Methoden und öffentlich und zugänglich oder erwerbbare Daten von der Firma [„Cambridge Analytica“ (CA)](https://cambridgeanalytica.org/) genutzt wurden um Donald Trump zum Sieg über Hillary Clinton in den Präsidentschaftswahlen der U.S.A. von 2016  zu verhelfen. Ob dies wirklich eins zu eins so statt fand soll an dieser Stelle bezweifelt werden. (Siehe WDR Blog[^cf9], Spiegel Online[^cf10], wired.com[^cf11], bloomberg.com[^cf12] oder spektrum.de[^cf13])Es gibt einige Tatsachen die dagegen sprechen. So ist ein Artikel dessen gesamte Beweisführung sich auf die Aussagen von zwei Personen stützt, von denen eine noch ein großes Interesse daran hat genau so wahrgenommen zu werden, wenig fundiert. Ebenfalls trifft der Artikel einen bestimmten Nerv, schlägt genau in die Richtige Kerbe zum Richtigen Zeitpunkt. Nach einem langen und schmutzigen Wahlkampf, gewinnt der von dem es die wenigsten geglaubt hätten. Da ist es nur recht und billig einen Sündenbock zu finden. Nicht soziale Spannung die wir uns nicht vorstellen können war es, es muss eine neue bisher unbekannte Technologie (vielleicht eine künstliche Intelligenz?) gewesen sein und irgendwie spielen unsere Daten die Facebook über uns sammelt da mit .  
Dennoch erweckt dies so sehr die Aufmerksamkeit der Autoren, dass hier einmal die Methoden und der Technologie Stack dieser Firma so weit es geht unter die Lupe genommen werden soll.     
### Die Dienstleistung ###

Nach eigenen Aussagen kann die Firma CA hinzugezogen werden um auf eine neue Weise Kontakt zu seinem Publikum aufzunehmen. Auf ihrer Website versprechen sie bis zu 5000 Daten Punkten pro Person (derzeit nur US Bürger) zu sammeln und deren Verhalten auf Grund von verschiedenen Modellen vorauszusagen. 
> ## 5,000 data points per person  
> We collect up to 5,000 data points on over 220 million Americans, and use more than 100 data variables to model target audience groups and predict the behavior of like-minded people.[^cf14]

Laut Angaben von Alexander Nix (CEO CA) auf dem 2016 Concordia Summit, werden Demographische Daten Verbraucher-Daten und Daten aus dem Bereich Lifestyle, von Unternehmen geliefert wie [acxiom](http://www.acxiom.com/), [infogroup](http://www.infogroup.com/), [Experian](http://www.experian.com/), [data trust](http://thedatatrust.com/), [Facebook](https://www.facebook.com/), [L2](http://www.l2political.com/), [Aristotle](http://aristotle.com/), GOP, MRI , [Nielsen](http://www.nielsen.com/), [Magellan strategies](http://magellanstrategies.com/) mit psychographischen Daten verbunden.[^cf15] Mit diesen Informationen sollen in unserem Fall Wähler gezielt angesprochen werden sollen. In dem Artikel, der unsere Recherche angestossen hat, wird von personalisierter Wahlwerbung gesprochen die     
### Der Technologie Stack ###

Natürlich lässt eine Firma wie CA sich nicht direkt in die Karten schauen. Aus den Stellenangeboten für Data Engineers und besonders für Data Scientists auf ihrer Seite lassen sich jedoch einige Schlüsse ziehen. [^cf16]Bei Datenbanken werden Erfahrungen und Fähigkeiten im Umgang mit  MySQL und, aus dem Sektor der NoSQL Datenbanken, MongoDB erwünscht. Im Bereich Big Data scheinen die Frameworks Spark und Hadoop zum Einsatz zu kommen und die gewünschten Sprachen sind Python, Java oder Scala und entsprechenden Objekt Orientierten Programmier Paradigmen. Des weiteren natürlich der Umgang mit Versions Kontroll Systemen.     
#### Speicherung ####

Wenn die Behauptung der Firma CA stimmt ist es offensichtlich, dass ein relationale Datenbank nicht ausreicht um diese 4000 Datenpunkte zu speichern. Auch die Analyse kann nicht auf einer einzelnen Maschine stattfinden. Hier kommt das Hadoop Distributed File System (HDFS) zum Einsatz. Hadoop ist ein Open Source (Java) Projekt, welches von Googles proprietären Google File System (GFS) und dem MapReduce Framework inspiriert wurde. Mit diesem System können sehr große Datensätze zuverlässig gespeichert werden und mit hoher Bandbreite an Anwendungen, sogenannte HDFS Clients, übertragen werden. Die HDFS Architektur besteht aus einem einzelnen NameNode, vielen DataNodes und dem HDFS Client. Der NameNode organisiert die Anfragen und die Ablage von Daten von den DataNodes durch die Clients. Das Hadoop MapReduce Framework wurde entworfen um Speicherung- und Berechnungsaufgaben über viele tausend Server zu verteilen und bei Bedarf zu skalieren.[^cf17]   
#### Analyse ####

Das Hadoop System ist die Infrastruktur zum handhaben dieser Datenmengen. Zur Analyse dieser Daten könnte dann, wie ebenfalls aus den Anforderungen der Stellenbeschreibung hervorgeht, das Apache Spark Framework verwendet werden. Mit Spark können Daten aus einer vielen verschiedenen Quellen verarbeitet werden. Zum Beispiel auch aus dem HDFS, aber auch aus NoSQL Datenbank Systemen oder relationalen  Datenbanken. Mit Spark können Daten aus dem HDFS schneller verarbeitet werden und es existieren flexiblere Alternativen zum Hadoop MapReduce Verfahren.
MapReduce ist ein Verfahren welches von Google für große Datenmengen entworfen wurde. Map: Daten werden über einen Cluster von Rechner verteilt nach einer bestimmten Funktion abgearbeitet. Reduce: Die einzelnen Teile des Clusters liefern nur einen Wert zurück.[^cf18] Spark kommt gebündelt mit einer Bibliothek für maschinelles Lernen (MLib), was immer iterative Prozesses bedeutet, hat eine REPL (Read Eval Print Listen) Schnittstelle und kann ähnlich wir R oder Python explorativ für statistische Aufgaben verwendet werden.[^cf19] Seit Anfang 2014 gilt Spark als Top Level Project bei der Apache Foundation[^cf20].  
Wenn Datenmengen bearbeitet werden sollen, die auf einer einzigen Maschine existieren und verarbeitet werden können, kommt auch gerne die Programmiersprache Python, in ihren interaktiven Umgebungen wie iPython[^cf21] oder Jupyter[^cf22], mit Paketen wie scikit-learn[^cf23] oder pandas[^cf24] zum Einsatz. Pandas zum bearbeiten von Datenstrukturen und scikit-learn zum analysieren von Daten. Weiter übliche Module sind Matplotlib[^cf25] für die Ausgabe als Plot  
# Ausblick #

Algorithmen, maschinelles Lernen und Künstliche Intelligenz halten Einzug in jeden Bereich unseres Lebens. Automatisiertes Handel ist schon seit Jahren üblich. Daten Wissenschaften sind ein neues Feld von Studien. Wo mag uns dies alles hin leiten?  
Es ist schwer abzusehen was in den nächsten 5, 10, 15 Jahren auf diesen Feldern passieren wird. Eines ist jedoch klar. Die Mengen an Daten werden nicht geringer. Mit dem Bereich des „Internet of Things“ (IoT) kommen laut Gartner bis im Jahr 2020 mehr als 20 Milliarde Geräte ans Netz.[^cf26] Ältere Voraussagen gingen noch von 75 Milliarde Geräte[^cf27]. All diese Objekte werden Daten erzeugen, an einen Server spielen oder sie durch ihn hin druchleiten und dann? Genauso werden die Sozialen Netzwerke versuchen immer weiter in unser Leben einzudringen. Die Idee von Facebook solargetriebene Flugzeuge, die Internet Zugang bis in die entlegensten Winkel der Welt bringen, zu bauen, ist bestimmt nicht aus reinem Altruismus geboren.[^cf28] Wer das Netz liefert kann auch sehen was gesehen wird. Die Liste geht weiter und weiter. Von Amazon Echo, über Googles selbstfahrende Autos oder Heim-Automations-Systemen, zu Snapchats Brillen mit Videofunktion. Basierend auf diesen Informationen werden für alle Bereiche des Lebens Modelle unseres Verhaltens und unserer Vorlieben entwickelt um uns noch besser kontrollieren oder bewerben zu können. Sei es um uns Serien zu liefern die genau unseren Interessen entsprechen, oder um die richtige Partei zu wählen, das richtige Produkt zu kaufen oder um uns vor uns selber zu schützen. Für den einen mag diese Aussicht spannend sein für den anderen erschreckend. Sicher, egal ob Schöne neue Welt oder 1984, wir leben in spannenden Zeiten.   
# Fazit #

----

# Quellen #

Ende

[^cf1]: Oremus, Will. "Who Really Controls What You See in Your Facebook Feed—and Why They Keep Changing It   ." Slate Magazine. Slate.com, 03 Jan. 2016. Web. 08 Jan. 2017. <http://www.slate.com/articles/technology/cover_story/2016/01/how_facebook_s_news_feed_algorithm_works.html>.

[^cf2]: The Signal. "What is data science vs. statistics? - The Signal." The Signal. 30 Mar. 2016. Web. 8 Jan. 2017. <https://blog.mixpanel.com/2016/03/30/this-is-the-difference-between-statistics-and-data-science/>

[^cf3]: Glassdoor. " Best Jobs in America ." Glassdoor. n.d. Web. 8 Jan. 2017. <https://www.glassdoor.com/List/Best-Jobs-in-America-LST_KQ0,20.htm>

[^cf4]: Harvard Business Review. "Data Scientist: The Sexiest Job of the 21st Century." Harvard Business Review. 1 Oct. 2012. Web. 8 Jan. 2017. <https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century>

[^cf5]: Stacey Higginbotham. "Sensor Networks Top Social Networks for Big Data." Gigaom.com. 13 Sept. 2010. Web. 15 Jan. 2017. <https://gigaom.com/2010/09/13/sensor-networks-top-social-networks-for-big-data-2/>

[^cf6]: A Petabyte is approximately 1,000 Terabytes or one million Gigabytes. It's hard to visualize what a Petabyte could hold. 1 Petabyte could hold approximately 20 million 4-door filing cabinets full of text. It could hold 500 billion pages of standard printed text. It would take about 500 million floppy disks to store the same amount of data. N.a. "Megabytes, Gigabytes, Terabytes - What Are They?." Whatsabyte.com. n.d. Web. 15 Jan. 2017. <http://www.whatsabyte.com/>

[^cf7]: Long, Moe. "How Much Does Google Really Know About You?." MakeUseOf. n.d. Web. 15 Jan. 2017. <http://www.makeuseof.com/tag/how-much-google-know-about-you/>

[^cf8]: Von Hannes Grassegger Und Mikael Krogerus. "Ich habe nur gezeigt, dass es die Bombe gibt - Das Magazin." Das Magazin. 3 Dec. 2016. Web. 8 Jan. 2017. <https://www.dasmagazin.ch/2016/12/03/ich-habe-nur-gezeigt-dass-es-die-bombe-gibt/>

[^cf9]: Horn, Dennis. "Hat wirklich der große Big-Data-Zauber Trump zum Präsidenten gemacht?." Digitalistan. 5 Dec. 2016. Web. 9 Jan. 2017. <https://blog.wdr.de/digitalistan/hat-wirklich-der-grosse-big-data-zauber-trump-zum-praesidenten-gemacht/>

[^cf10]: Spiegel Online, Hamburg, Germany. "US-Wahl und Daten-Ingenieure: Ich ganz allein habe Trump ins Amt gebracht - SPIEGEL ONLINE - Netzwelt." SPIEGEL ONLINE. 5 Dec. 2016. Web. 9 Jan. 2017. <http://www.spiegel.de/netzwelt/netzpolitik/donald-trump-und-die-daten-ingenieure-endlich-eine-erklaerung-mit-der-alles-sinn-ergibt-a-1124439.html>

[^cf11]: Issie Lapowsky. "A Lot of People Are Saying Trump’s New Data Team Is Shady." WIRED. 15 Aug. 2016. Web. 9 Jan. 2017. <https://www.wired.com/2016/08/trump-cambridge-analytica/>

[^cf12]: Bershidsky, Leonid. "No, Big Data Didn't Win the U.S. Election." Bloomberg View. 8 Dec. 2016. Web. 9 Jan. 2017. <https://www.bloomberg.com/view/articles/2016-12-08/no-big-data-didn-t-win-the-u-s-election>

[^cf13]: Eva Wolfangel. "Big Data: Haben psychologische Facebookdaten Trumps Sieg verursacht?." Spektrum.de. n.d. Web. 9 Jan. 2017. <http://www.spektrum.de/kolumne/haben-psychologische-facebookdaten-trumps-sieg-verursacht/1431745>

[^cf14]: N.a. "Cambridge Analytica – About Us." Cambridgeanalytica.org. 10 Jan. 2017. Web. 15 Jan. 2017. <https://cambridgeanalytica.org/about>

[^cf15]: YouTube. "The Power of Big Data and Psychographics." YouTube. 27 Sept. 2016. Web. 22 Jan. 2017. <https://www.youtube.com/watch?v=n8Dd5aVXLCc>

[^cf16]: Cambridge Analytica. "Cambridge Analytica – Better Audience Targeting." Cambridge Analytica. 10 Jan. 2017. Web. 22 Jan. 2017. <https://cambridgeanalytica.org/>

[^cf17]: Shvachko, Konstantin, et al. "The hadoop distributed file system." 2010 IEEE 26th symposium on mass storage systems and technologies (MSST). IEEE, 2010.

[^cf18]: Dean, Jeffrey, and Sanjay Ghemawat. "MapReduce: simplified data processing on large clusters." Communications of the ACM 51.1 (2008): 107-113.

[^cf19]: Sean Owen. "Why Apache Spark is a Crossover Hit for Data Scientists - Cloudera Engineering Blog." Cloudera Engineering Blog. 3 Mar. 2014. Web. 22 Jan. 2017. <http://blog.cloudera.com/blog/2014/03/why-apache-spark-is-a-crossover-hit-for-data-scientists/>

[^cf20]: N.a. "The Apache Software Foundation Announces Apache™ Spark™ as a Top-Level Project : The Apache Software Foundation Blog." Blogs.apache.org. 20 Jan. 2017. Web. 22 Jan. 2017. <https://blogs.apache.org/foundation/entry/the_apache_software_foundation_announces50>

[^cf21]: N.a. "Jupyter and the future of IPython — IPython." Ipython.org. 9 Jan. 2017. Web. 22 Jan. 2017. <http://ipython.org/index.html>

[^cf22]: N.a. "Project Jupyter." Jupyter.org. 17 Jan. 2017. Web. 22 Jan. 2017. <http://www.jupyter.org>

[^cf23]: N.a. "scikit-learn: machine learning in Python — scikit-learn 0.18.1 documentation." Scikit-learn.org. n.d. Web. 22 Jan. 2017. <http://scikit-learn.org/stable/>

[^cf24]: N.a. "Python Data Analysis Library — pandas: Python Data Analysis Library." Pandas.pydata.org. 26 Dec. 2016. Web. 22 Jan. 2017. <http://pandas.pydata.org/>

[^cf25]: N.a. "Matplotlib: Python plotting — Matplotlib 2.0.0 documentation." Matplotlib.org. 19 Jan. 2017. Web. 22 Jan. 2017. <http://matplotlib.org/>

[^cf26]: N.a. "Gartner Says 6.4 Billion Connected ." Gartner.com. n.d. Web. 22 Jan. 2017. <http://www.gartner.com/newsroom/id/3165317>

[^cf27]: Tony Danova. "Morgan Stanley: 75 Billion Devices Will Be Connected To The Internet Of Things By 2020." Business Insider. 2 Oct. 2013. Web. 22 Jan. 2017. <http://www.businessinsider.com/75-billion-devices-will-be-connected-to-the-internet-by-2020-2013-10>

[^cf28]: Larry Dignan. "Facebook's 10-year roadmap outlined, eyes AI, VR, Internet access infrastructure | ZDNet." ZDNet. 12 Apr. 2016. Web. 22 Jan. 2017. <http://www.zdnet.com/article/facebooks-10-year-roadmap-outlined-eyes-ai-vr-internet-access-infrastructure/>