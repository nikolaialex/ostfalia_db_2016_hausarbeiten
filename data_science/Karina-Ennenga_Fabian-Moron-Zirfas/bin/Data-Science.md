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
9. Januar 2017
Data Science 

----

  
# Abstrakt #  
# Was ist Data Science? #

Der Begriff „Data Science“ ist seit einigen Jahren ein Buzz Word, welches immer wieder im Zusammenhang mit anderen wie „Big Data“ und „Artificial Intelligence“ auftauchen. Aber was ist dieses „Data Science“ überhaupt? Wer sind diese Daten Wissenschaftler und was machen sie?  
Geboren wurde diese neue Art von Stellenbeschreibung wohl zusammen mit dem Aufkommen von Großen Datenmengen die von Unternehmen gesammelt werden. Um diesen Daten Herr zu werden bedarf es einiger Qualifikation. Der Umgang mit verschiedensten Datenbanken, die Methoden aus der Statistik, die Fähigkeit zu programmieren, das Wissen wie die Ergebnisse in eine visuelle Form gebracht werden können aus denen auch Informationen abgelesen und verstanden werden können und auch die Befähigung die Algorithmen zu schreiben, die effizient genug sind Ergebnisse nicht erst in 2 Wochen zu liefern.  

>> Every time you open Facebook, one of the world’s most influential, controversial, and misunderstood algorithms springs into action. It scans and collects everything posted in the past week by each of your friends, everyone you follow, each group you belong to, and every Facebook page you’ve liked. For the average Facebook user, that’s more than 1,500 posts. If you have several hundred friends, it could be as many as 10,000. Then, according to a closely guarded and constantly shifting formula, Facebook’s news feed algorithm ranks them all, in what it believes to be the precise order of how likely you are to find each post worthwhile. Most users will only ever see the top few hundred. [^cf1]
> And someone needs to write an algorithm to power those features. Facebook could take all that historical data and hand it off to a very talented statistician. And she would put her immense knowledge and experience to use, diving into R and producing an excellent model that infers the relationship between all of these variables. And that would, no doubt, yield valuable insights into which ads would perform best in different situations. [^cf2]

Für viele Unternehmen wird es immer wichtiger aus den bei ihnen anfallenden Daten auch Schlüsse zu ziehen. Hier kommt der Daten Wissenschaftler ins Spiel. Sei es, wie oben beschrieben, zu errechnen was jemand sehen will, um vorauszusagen welche Produkte auch interessant sein könnten, wann der Fahrstuhl gewartet werden muss oder um vorauszusagen wer der nächste Präsident der Vereinigten Staaten von Amerika wird. Für all diese Tätigkeiten kommen heut zu Tage Daten Wissenschafter zum Einsatz. Daher wurde von glassdoor.com auch die Stellenbeschreibung des „Data Scientist“ als der Top Job in 2016[^cf3] gekürt und von Harvard Business Review (hbr.org) sogar zum „Sexiest Job of the 21st Century“[^cf4]. Ob diese Voraussage sich hält werden wir in einigen Jahren sehen. Sicher ist jedoch, dass in Zeiten in denen wir in Petabytes oder sogar Exabytes denken jemand da sein muss die/der aus all dem gesammelten einen Sinn zieht. Sonst müsste es doch auch nicht gesammelt werden.  
# Data Science In der Anwendung #

Wie findet Data Science Anwendung?  
## Netflix ##

1. Datenerhebung

Netflix weiß von jedem Nutzer, was er schaut, wann er schaut, wie lange er etwas schaut, an welcher Stelle aufgehört wurde, zu schauen und wie er auf den Film oder die Serie aufmerksam geworden ist.

Diese riesige Menge an Daten wird von Algorithmen beobachtet. Laut dem amerikanischen Magazin The Atlantic beschäftigt Netflix allein 800 Ingenieure, die sich nur mit diesem Algorithmus beschäftigen.

The Atlantic hat recherchiert, wie die Algorithmen funktionieren. Auf die Funktionsweise des Algorithmus gehe ich im nächsten Abschnitt *Speicherung / Algorithmus* näher ein.

Das Herzstück von Netflix ist sein Empfehlungsmechanismus. Dieser basiert auf dem Algorithmus, der Cinematch genannt wird. Um diesen Mechanismus noch weiter zu verbessern, wurde 2006 von Netflix-Chef Reed Hastings ein Wettbewerb “The Netflix Prize” zur Verbesserung des Algorithmus, ausgeschrieben. Er versprach demjenigen, der es schaffen würde, den Algorithmus um 10 Prozent zu verbessern, 1 Million Dollar. (http://techblog.netflix.com/2012/04/netflix-recommendations-beyond-5-stars.html)

Letztendlich gewann ein Team, das eine Verbesserung von 8,43% geschafft hat. Das Team habe 2000 Stunden Arbeit damit verbracht, um einen Kombination aus 107 Algorithmen zu präsentieren.
Um den Algorithmus einsetzen zu können, mussten einige Anpassungen vorgenommen werden. So konnte beispielweise der ursprüngliche Algorithmus nicht mehr als 100 Millionen Bewertungen händeln, wobei zu dem Zeitpunkt bereits 5 Milliarden Bewertungen vorhanden waren.
In 2012 wurden 75% der Filme und Serien aufgrund des Empfehlungssystems geschaut.

2. Speicherung / Algorithmus

In Anbetracht der Tatsache, dass Netflix mehr als 85 Millionen Abonnenten hat (stand von Oktober 2016 laut http://www.wiwo.de/unternehmen/it/netflix-in-deutschland-mehr-abonnenten-als-einwohner/14702184.html), wird klar, dass sie ein riesiges Repertoire an “personalisierten Genres” haben.

In dem Artikel *How Netflix Reverse Engineered Hollywood* vom 02.01.2014 beschreibt das Magazin The Atlantic ihre Recherchearbeiten zum Algorithmus von Netflix.
Sie haben herausgefunden, dass Netflix zu diesem Zeitpunkt 76.897 Genres besitzt, um Filmtypen zu beschreiben. Zum heutigen Zeitpunkt sind es mehr als 93.000 (https://docs.google.com/spreadsheets/d/1eISFvq42Sll10xekyV-XQdwoG7_gjZpreNG40Pz8G0k/edit#gid=2125244376).

Zu den neuesten zählen “Golden Globe Award-winning Understated Comedies” und “Critically-acclaimed Biographical Drug Documentaries”.

The Atlantic habe herausgefunden, dass Netflix jeden einzelnen denkbaren Film und jede Serie analysiert hat und sich somit eine enorme Datenbasis aufgebaut hat.
Dies gelang Ihnen, indem sie Menschen engagiert haben, die Filme schauen und diese mit sämtlichen Metadaten zu beschreiben.

3. Visualisierung
  
## Cambridge Analytica ##

Zum Grauen vieler zog zu Beginn des Dezembers 2016 ein Artikel mit dem Titel „Ich habe nur gezeigt, dass es die Bombe gibt“[^cf5] seine Runde durch die verschiedensten Sozialen Medien. In ihm wird erläutert wie psychologische Methoden und öffentlich und zugänglich oder erwerbbare Daten von der Firma [„Cambridge Analytica“ (CA)](https://cambridgeanalytica.org/)  genutzt wurden um Donald Trump zum Sieg über Hillary Clinton in den Präsidentschaftswahlen der U.S.A. von 2016  zu verhelfen. Ob dies wirklich  eins zu eins so statt fand soll an dieser Stelle bezweifelt werden. (Siehe WDR Blog[^cf6], Spiegel Online[^cf7], wired.com[^cf8], bloomberg.com[^cf9] oder spektrum.de[^cf10])Es gibt einige Tatsachen die dagegen sprechen. Dennoch erweckt dies so sehr die Aufmerksamkeit der Autoren, dass hier einmal die Methoden und der Technologie Stack  dieser Firma so weit es geht unter die Lupe genommen werden.  

### Die Behauptung.

To be defiend

### Technologie Stack

Natürlich lässt eine Firma wie CA sich nicht direkt in die Karten schauen. Aus den Stellenangeboten für Data Engineers und besonders für Data Scientists auf ihrer Seite lassen sich jedoch einige Schlüsse ziehen. Bei Datenbanken werden Erfahrungen und Fähigkeiten im Umgang mit  MySQL und, aus dem Sektor der NoSQL Datenbanken, MongoDB erwünscht. Im Bereich Big Data scheinen die Frameworks Spark und Hadoop zum Einsatz zu kommen und die gewünschten Sprachen sind Python, Java oder Scala und entsprechenden Objekt Orientierten Programmier Paradigmen. Des weiteren natürlich der Umgang mit Versions Kontroll Systemen.  
# Ausblick #

----

# Quellen #

Quellen

[^cf1]: Oremus, Will. "Who Really Controls What You See in Your Facebook Feed—and Why They Keep Changing It   ." Slate Magazine. Slate.com, 03 Jan. 2016. Web. 08 Jan. 2017. <http://www.slate.com/articles/technology/cover_story/2016/01/how_facebook_s_news_feed_algorithm_works.html>.

[^cf2]: The Signal. "What is data science vs. statistics? - The Signal." The Signal. 30 Mar. 2016. Web. 8 Jan. 2017. <https://blog.mixpanel.com/2016/03/30/this-is-the-difference-between-statistics-and-data-science/>

[^cf3]: Glassdoor. " Best Jobs in America ." Glassdoor. n.d. Web. 8 Jan. 2017. <https://www.glassdoor.com/List/Best-Jobs-in-America-LST_KQ0,20.htm>

[^cf4]: Harvard Business Review. "Data Scientist: The Sexiest Job of the 21st Century." Harvard Business Review. 1 Oct. 2012. Web. 8 Jan. 2017. <https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century>

[^cf5]: Von Hannes Grassegger Und Mikael Krogerus. "Ich habe nur gezeigt, dass es die Bombe gibt - Das Magazin." Das Magazin. 3 Dec. 2016. Web. 8 Jan. 2017. <https://www.dasmagazin.ch/2016/12/03/ich-habe-nur-gezeigt-dass-es-die-bombe-gibt/>

[^cf6]: Horn, Dennis. "Hat wirklich der große Big-Data-Zauber Trump zum Präsidenten gemacht?." Digitalistan. 5 Dec. 2016. Web. 9 Jan. 2017. <https://blog.wdr.de/digitalistan/hat-wirklich-der-grosse-big-data-zauber-trump-zum-praesidenten-gemacht/>

[^cf7]: Spiegel Online, Hamburg, Germany. "US-Wahl und Daten-Ingenieure: Ich ganz allein habe Trump ins Amt gebracht - SPIEGEL ONLINE - Netzwelt." SPIEGEL ONLINE. 5 Dec. 2016. Web. 9 Jan. 2017. <http://www.spiegel.de/netzwelt/netzpolitik/donald-trump-und-die-daten-ingenieure-endlich-eine-erklaerung-mit-der-alles-sinn-ergibt-a-1124439.html>

[^cf8]: Issie Lapowsky. "A Lot of People Are Saying Trump’s New Data Team Is Shady." WIRED. 15 Aug. 2016. Web. 9 Jan. 2017. <https://www.wired.com/2016/08/trump-cambridge-analytica/>

[^cf9]: Bershidsky, Leonid. "No, Big Data Didn't Win the U.S. Election." Bloomberg View. 8 Dec. 2016. Web. 9 Jan. 2017. <https://www.bloomberg.com/view/articles/2016-12-08/no-big-data-didn-t-win-the-u-s-election>

[^cf10]: Eva Wolfangel. "Big Data: Haben psychologische Facebookdaten Trumps Sieg verursacht?." Spektrum.de. n.d. Web. 9 Jan. 2017. <http://www.spektrum.de/kolumne/haben-psychologische-facebookdaten-trumps-sieg-verursacht/1431745>