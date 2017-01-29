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
29. Januar 2017
Data Science 

----

## Inhalt

<!-- toc -->

  
# 1 Abstrakt #

In der folgenden Arbeit setzen wir, die Autoren Karina Ennenga und Fabian Morón Zirfas für das Seminar Datenbanktechnologien (FHBSWF MIM 12 W16) betreut durch Nikolai Alex, uns mit „Data Science in der Anwendung“ auseinander. Im ersten Kapitel „Was ist Data Science?“ versuchen wir kurz zu umreißen, was unter dem Titel Data Science zu verstehen ist und wo es sich zum Beispiel von Statistik abgrenzt. Im zweiten Kapitel „Data Science in der Anwendung“ und seinen Unterkapiteln  „Netflix“ und „Cambridge Analytica“ betrachten wir exemplarisch diese zwei Unternehmen, um anhand dieser darstellen zu können, was Data Science für Firmen bedeutet. Im dritten Kapitel folgt ein kurzer „Ausblick“ in die Zukunft um im „Fazit“, dem vierten Kapitel, zu Enden.     
# 2 Was ist Data Science? #

Der Begriff „Data Science“ ist seit einigen Jahren ein Buzz Word, welches immer wieder im Zusammenhang mit anderen Begriffen wie „Big Data“ und „Artificial Intelligence“ auftauchen. Aber was ist dieses „Data Science“ überhaupt? Wer sind diese Daten Wissenschaftler und was machen sie?  
Geboren wurde diese neue Art von Stellenbeschreibung wohl zusammen mit dem Aufkommen von großen Datenmengen, die von Unternehmen gesammelt werden. Um diesen Daten Herr zu werden, bedarf es einiger Qualifikation. Zu diesen Qualifikationen zählen der Umgang mit verschiedensten Datenbanken, die Methoden aus der Statistik, die Fähigkeit zu programmieren, das Wissen wie die Ergebnisse in eine visuelle Form gebracht werden können, aus denen auch Informationen abgelesen und verstanden werden können und auch die Befähigung die Algorithmen zu schreiben, die effizient genug sind Ergebnisse nicht erst in zwei Wochen zu liefern.  

>> Every time you open Facebook, one of the world’s most influential, controversial, and misunderstood algorithms springs into action. It scans and collects everything posted in the past week by each of your friends, everyone you follow, each group you belong to, and every Facebook page you’ve liked. For the average Facebook user, that’s more than 1,500 posts. If you have several hundred friends, it could be as many as 10,000. Then, according to a closely guarded and constantly shifting formula, Facebook’s news feed algorithm ranks them all, in what it believes to be the precise order of how likely you are to find each post worthwhile. Most users will only ever see the top few hundred. [^cf1]
> And someone needs to write an algorithm to power those features. Facebook could take all that historical data and hand it off to a very talented statistician. And she would put her immense knowledge and experience to use, diving into R and producing an excellent model that infers the relationship between all of these variables. And that would, no doubt, yield valuable insights into which ads would perform best in different situations. [^cf2]

Für viele Unternehmen wird es immer wichtiger aus den bei ihnen anfallenden Daten auch Schlüsse zu ziehen. Hier kommt der Daten Wissenschaftler ins Spiel. Sei es, wie oben beschrieben, zu errechnen was jemand sehen will, um vorauszusagen, welche Produkte auch interessant sein könnten, wann der Fahrstuhl gewartet werden muss oder um vorherzusehen, wer der nächste Präsident der Vereinigten Staaten von Amerika wird. Für all diese Tätigkeiten kommen heut zu Tage Daten Wissenschafter zum Einsatz. Daher wurde von glassdoor.com auch die Stellenbeschreibung des „Data Scientist“ als der Top Job in 2016[^cf3] gekürt und von Harvard Business Review (hbr.org) sogar zum „Sexiest Job of the 21st Century“[^cf4]. Ob diese Voraussage sich hält werden wir in einigen Jahren sehen. Sicher ist jedoch, dass in Zeiten in denen eine Boeing 737 pro Turbine innerhalb von 30 Minuten 10 terabyte Daten produziert[^cf5], wir in Petabytes[^cf6] oder Exabytes denken, sich ein neues Feld von Beschäftigungen eröffnet. Diese Personen sind mehr als nur digitale Bibliothekare/innen. Sie müssen in der Lage sein große Datenmengen aus inkonsistenten Daten, von Video, über Text, bis Tweet und Animated GIF, zu bändigen um aus ihnen einen Schluss ziehen zu können.   
# 3 Data Science In der Anwendung #

Wie bereits im vorherigen Kapitel erwähnt, werden unglaubliche Datenmengen von Unternehmen gesammelt, gebündelt und ausgewertet. Es wird „getracked“ und gespeichert, wo es nur geht. Ein Unternehmen wie Google, _wenn es überhaupt noch ein zweites Unternehmen wie Google gibt_, sammelt über jede Art von Dienst den es zur Verfügung stellt, um so viele Data Points wie möglich über Nutzer/innen zu erhalten. Die offensichtlichen Punkte wo über uns gesammelt wird, sind Google Suchhistorie, Tracking Cookies, Adsense, Analytics, Youtube, Google+, Gmail, Google Drive, Google Documents, Android und viele mehr.[^cf7]
Nicht so offensichtlich jedoch auch vorstellbar als Methode uns als Einzelperson zu identifizieren sind Dinge wie Anschlagdynamik bei der Eingabe mit der Tastatur oder die Art wie wir uns verschreiben. Was Google damit macht, ist uns allen bekannt. Besser Werbung platzieren. Doch wie sieht es für die anderen Unternehmen aus? Besonders von denen, die nicht ihr Geld mit dem Platzieren von Werbung verdienen, ist unser Bild noch nebulös. Welchen Sinn stiftet es diese Unmengen an Daten zu sammeln, zu speichern, vorzuhalten und wie kann daraus Gewinn geschlagen werden?

Oder um es einfacher zu sagen: „Wie findet Data Science Anwendung?“  

In den folgenden beiden Unterabschnitten werden wir die Unternehmen Netflix und Cambridge Analytica betrachten, um zwei weitere Modelle aufzuzeigen in den „Big Data“ eine zentrale Rolle spielt.    
## 3.1 Netflix ##

In diesem Kapitel beschäftigen wir uns mit dem amerikanischen Unternehmen *Netflix, Inc* (im Folgenden Netflix genannt). Netflix wurde 1997 von Reed Hastings und Marc Randolphs in Los Gatos in Kalifornien gegründet. Zunächst agierte Netflix als Online-Videothek und hat DVD's und Blu-ray's an die Abonnenten verschickt. Seit 2007 ist Netflix ein Video-on-Demand-Anbieter und bietet seinen Abonnenten die Möglichkeit, Filme und Serien zu streamen. Seit 2011 beschäftigt sich Netflix auch mit der Produktion von eigenen Serien.    
### 3.1.1 Datenerhebung ###

Netflix weiß von jedem Nutzer, was er schaut, wann er schaut, wie lange er etwas schaut, an welcher Stelle aufgehört wurde, zu schauen und wie er auf den Film oder die Serie aufmerksam geworden ist.  
Diese riesige Menge an Daten wird von Netflix gespeichert und anschließend von Algorithmen beobachtet. Laut des Artikels „How Netflix Reverse Engineered Hollywood“ des amerikanischen Magazins „The Atlantic“ beschäftigt Netflix allein 800 Ingenieure, die sich nur mit diesem Algorithmus beschäftigen.[^cf8]  
„The Atlantic“ hat recherchiert, wie die Algorithmen funktionieren. Auf die Funktionsweise des Algorithmus gehen wir im nächsten Abschnitt „Speicherung / Algorithmus“ näher ein.  
Das Herzstück von Netflix ist sein Empfehlungsmechanismus. Dieser basiert auf dem Algorithmus, der CineMatch genannt wird. Um diesen Mechanismus noch weiter zu verbessern, wurde 2006 von Netflix-Chef Reed Hastings ein Wettbewerb „The Netflix Prize“ zur Verbesserung des Algorithmus, ausgeschrieben, so Xavier Amatriain und Justin Basilico im Artikel „Netflix Recommendations: Beyond the 5 stars (Part 1)“.[^cf9] Er versprach 1 Million Dollar für diejenigen, die es schaffen würde, den Algorithmus um 10 Prozent zu verbessern. Letztendlich gewann ein Team, das eine Verbesserung des Algorithmus um 8,43% geschafft hat. Das Team habe laut Xavier Amatriain and Justin Basilico 2000 Stunden Arbeit damit verbracht, um einen Kombination aus 107 Algorithmen zu präsentieren.
Um den Algorithmus einsetzen zu können, mussten allerdings einige Anpassungen auf Seiten von Netflix vorgenommen werden. So konnte beispielsweise der ursprüngliche Algorithmus nicht mehr als 100 Millionen Bewertungen händeln, wobei zu dem Zeitpunkt bereits 5 Milliarden Bewertungen vorhanden waren. Somit kam der Algorithmus nie wirklich zum Einsatz. In 2012 wurden bereits 75% der Filme und Serien aufgrund des Empfehlungssystems geschaut.
  
### 3.1.2 Speicherung / Algorithmus ###

Netflix hat ein riesiges Repertoire an „personalisierten Genres“. Personalisierte Genres wären zum Beispiel Genres wie „Golden Globe Award-winning Understated Comedies“ oder ¡African-American Crime Documentaries“. Personalisiert sind die deswegen, weil sie aus den Nutzerverhalten der Abonnenten automatisch generiert werden. In Anbetracht der Tatsache, dass Netflix mehr als 85 Millionen Abonnenten hat[^cf10], kann man sich vorstellen, wie riesig dieses Repertoire an personalisierten Genres ist.
In dem Artikel von „The Atlantic“ beschreibt der Autor Alexis C. Madrigal seine Recherchearbeiten zum Algorithmus von Netflix.
Er hat herausgefunden, dass Netflix zu diesem Zeitpunkt 76.897 Genres besitzt, um Filmtypen zu beschreiben. Zum heutigen Zeitpunkt sind es fast 93.000. [^cf11] 
„The Atlantic“ hat außerdem herausgefunden, dass Netflix jeden einzelnen denkbaren Film und jede Serie auf dutzende Eigenschaften analysiert hat und sich somit eine enorme Datenbasis aufgebaut hat. Dies gelang Ihnen, indem sie Menschen engagieren, die Filme schauen und diese mit unterschiedlichsten Metadaten beschreiben. Diese ausgebildeten Filmeschauer bewerten unter anderem der Romantiklevel, wie blutrünstig ein Film ist, den Moralstatus der Charaktere sowie auch erzählerische Daten, wie beispielsweise die Schlüssigkeit der Handlung. Diese Eigenschaften werden mit den Gewohnheiten der Netflix User kombiniert, woraus ein großer Wettbewerbsvorteil für Netflix entsteht. In folgender Grafik sieht man beispielsweise die 10 am häufigsten verwendeten Adjektive für die Beschreibung von Filmen und Serien:

![adjectives](./images/adjectives.png)  
Quelle [How Netflix Reverse Engineered Hollywood - The Atlantic](http://www.theatlantic.com/technology/archive/2014/01/how-netflix-reverse-engineered-hollywood/282679/)[^cf12]

Durch den beschriebenen Algorithmus hat Netflix eine neue Form des Empfehlens geschaffen. Im folgenden beschreiben wir zwei unterschiedliche Filtermethoden für Empfehlungssysteme. In seiner Diplomarbeit beschreibt Benedikt Hebeisen zwei verschiedene Filtermethoden für Empfehlungssysteme.[^cf13] Auf diese zwei Methoden - das kollaborative Filtern, sowie das inhaltsbasierte Filtern - gehe wir im Folgenden genauer ein.  
#### 3.1.2.1 Kollaboratives Filtern ####

Die am häufigsten verbreitete Filtermethode für Empfehlungssysteme ist laut Hebeisen heutzutage das kollaborative Filtern. Ein kollaboratives System ist ein lernendes System, welches eine vorhandene Datenbasis nutzt. Anhand dieser Datenbasis sollen Verhaltensmuster von Nutzereingaben zu erkennen sein und es soll versucht werden, eine Verbindung zwischen eingegebenen und bereits vorhandenen Daten herzustellen (User-to-User). Es werden also Empfehlungen auf Basis von Bewertungen anderer Nutzer gegeben. Das Interessenprofil eines Nutzers soll auf das Interessenprofil eines anderen Nutzers übertragen werden. Bewertungen erfolgen hierbei entweder durch konkrete Bewertungen einer bestimmten Sache (zum Beispiel eines Filmes), indem beispielsweise anhand einer Skala ein Rating abgegeben wird oder angegeben wird, ob etwas nützlich war, oder aber auch durch das implizite Verhalten des Nutzers. Hierbei wird zum Beispiel berücksichtigt, wie lange ein Nutzer etwas angeschaut hat oder was angeschaut wurde.
Beim kollaborativen Filtern wird davon ausgegangen, dass man ein statistischer Nachbar ist, wenn man ähnliche Bewertungen abgegeben hat und dass etwas für einen Nutzer relevant oder interessant ist, wenn es auch für den statistischen Nachbarn interessant war.
Wenn Anna zum Beispiel Film 1 mit 3 Sternen, Film 3 mit 4 Sternen und Film 5 mit 2 Sternen bewertet hat und Julia Film 1 mit 2 Sternen, Film 3 mit 5 Sternen, Film 4 mit 4 Sternen und Film 5 mit 1 Stern bewertet hat, dann scheinen die beiden Benutzer Anna und Julia ähnlich zu sein. Anna kann also nach der kollaborativen Filtertechnik der Film 4 vorgeschlagen werden, den sie ja noch nicht gesehen hat, da ihre statistische Nachbarin Julia diesen Film interessant fand, bzw. ausreichend gut bewertet hat.

![kollaboratives Filtern](./images/userItemRating.png)  

Bei dem kollaborativen Empfehlungssystem wurde versucht vorherzusagen, wie viele Sterne man einem Film geben würde. Dafür musste man möglichst viele Filme bewerten, um daraus überhaupt eine Tendenz und ein Profil des Nutzers erstellen zu können.
Das Hauptproblem von kollaborativen Empfehlungssystemen ist dementsprechend das Fehlen einer Datenbasis. Neue Nutzer haben noch keine Bewertungen abgegeben und haben somit auch keine statistischen Nachbarn. Selbes gilt auch für die Objekte, die einem System neu hinzugefügt werden. Wird also beispielsweise ein Film neu hinzugefügt, hat er zu Beginn keine Bewertungen und kann somit nicht bei der Technik des kollaborativen Filtern berücksichtigt werden.  
#### 3.1.2.2 Inhaltsbasiertes Filtern ####

Eine andere Filtermethode ist das inhaltsbasierte Filtern. Hier werden Empfehlungen anhand von Ähnlichkeiten von Objekten oder Nutzerprofilen generiert. Die Objekte werden hierbei durch ihre Inhalte oder durch Eigenschaften und Metadaten beschrieben. Anders als beim kollaborativen Filtern wird hier nicht versucht, eine Verbindung zwischen mehreren Nutzern herzustellen, sondern es wird versucht, eine Verbindung zwischen mehreren Objekten herzustellen (Item-to-Item). Ein Nutzerprofil beinhaltet Interessen über Objekt-Attribute, die zum einen durch direkte Eingabe oder durch implizites Nutzungsverhalten (zum Beispiel der Analyse der Tätigkeiten des Nutzers) gesammelt werden. Empfehlungen werden ausgesprochen, wenn eine nahe Verbindung zwischen Nutzerpräferenzen und Objekteigenschaft besteht.
Netflix nutzt eher das inhaltsbasierte Filtern. In die Empfehlungen fließen aber auch Bewertungen von Freunden, wie beim kollaborativen Filtern, ein.
 TODO noch mehr Bezug zu Netflix
 Im folgenden Kapitel wird darauf eingegangen, wie die riesige Menge an gespeicherten Daten analysiert werden.  
### 3.1.3 Analyse der Daten ###

Um Schlussfolgerungen aus Datenerhebungen zu ziehen, muss zuerst eine gewisse Menge an Daten zur Analyse bereit stehen. Erst wenn genug Menschen beispielsweise an einer bestimmten Stelle Pause gedrückt oder vorgespult haben, kann man anfangen, Schlussfolgerungen aus diesem Verhalten zu ziehen. Wenn ständig an der gleichen Stelle Pause gedrückt wird, könnte die Handlung zu langwierig oder langweilig geworden sein um das Interesse der Zuschauer zu halten. Es könnte auch sein, dass der Plot zu kompliziert wurde. Wenn genug Nutzer nach der Pause nie weiter schauen, könnte die Annahme getroffen werden, dass die Sendung schlecht ist. Natürlich sind das alles aber nur Annahmen. Trotz der gigantischen gesammelten Datenmenge kann Netflix nicht mit 100%iger Sicherheit sagen, was dieses Verhalten der User bedeutet.
Aufgezeichnet werden alle erdenklichen Daten, von Standort des Nutzers, Gerät des Nutzers, Uhrzeit am Nutzungsort, Dauer der Nutzung, in welcher Sprache geschaut wird, ob ganze Folgen/Filme schaut werden oder ob abgebrochen wird, wann und wie lange pausiert wird, ob vorgespult wird, wann gestoppt wird und was geschaut wird natürlich, gespeichert. Außerdem werden die Ratings, die Likes, die geteilten Inhalte sowie die Interaktionen, wie Scrollen, Sucheingaben und das Hinzufügen zu Listen gespeichert.
Zum einen weiß Netflix durch die Analyse dieser Daten, welche Schauspieler und welche Genres bevorzugt werden. Zum anderen kann so aber auch herausgefunden werden, ob am Wochenende eher Serien oder eher Filme geschaut werden. Dies wird dann bei den nächsten Empfehlungen berücksichtigt und es wird mehr von den favorisierten Formaten vorgeschlagen.  
### 3.1.4 Nutzung der Daten ###

Laut des Artikels „How Netflix is turning viewers into puppets“ auf www.salon.com arbeitet Netflix seit 2012 daran, insofern Nutzen aus ihrer Big Data Kapazität zu ziehen, als dass sie versuchen damit ihre Programmauswahl zu beeinflussen. Konkret bedeutet es, dass sie Serien aufgrund ihrere Analyseergebnisse kaufen oder produzieren.[^cf14]
Das Pilot-Projekt dieser Strategie ist die Serie „House Of Cards“. „House Of Cards“ war ursprünglich eine britische Miniserie, die 1990 auf dem britischen Kanal BBC ausgestrahlt wurde. Die Serie bestand nur aus vier Episoden und handelt von einem Politiker, der zusammen mit seiner Ehefrau Rachepläne ausübt, nachdem er vom Premierminister hintergangen wurde. Aufgrund der Big Data-Analyse von Netflix wurde die Entscheidung getroffen, eine Neuauflage der britischen Serie „House Of “ zu produzieren.
Den Analyseergebnissen konnte man entnehmen, dass dieselben Personen, die das britische Original von *House Of Cards* liebten, ebenfalls Filme lieben, bei denen Kevin Spacey mitspielt oder die unter der Regie von David Fincher produziert wurden.
Die Argumente waren also:

- Die britische Version von „House of Cards“ hatte ein großes Publikum
- „The Social Network“, bei dem David Fincher Regie geführt hat, hatte ein großes Publikum
- Nutzer, die die britische Version von „House Of Cards“ geschaut haben, schauten oft auch Filme mit Kevin Spacey und/oder Filme, die unter der Regie von David Fincher entstanden sind.

Somit sollte das Remake der Serie, die für 13 Episoden 100 Millionen Dollar gekostet hat, für Netflix ein Kinderspiel werden.
Verglichen zu traditionellen Studios, die außer den verkauften Tickets und DVDs kein Feedback ihrer Kunden bekommen, ist Netflix, was das Feedback und die Analyse angeht, absolut im Vorteil. Netflix kann viel schneller handeln und reagieren als ihre traditionelle Konkurrenz. Netflix muss vor der Produktion eines Film oder einer Serie nicht mehr ahnen, was die Nutzer sehen wollen, sondern stützt sich auf ihre Analysen. Sie können die Daten sogar bis auf die Postleitzahl herunterbrechen und herausfinden, welche Shows mit welchen Schauspielern die Nutzer in bestimmten Regionen am liebsten sehen.
Die traditionellen Studios haben einen großen Nachteil. Einer der größten Posten bei den Kosten einer Filmproduktion ist das Marketing. Es gibt aber keine Möglichkeit herauszufinden, welche der Marketingstrategien erfolgreich waren und welche nicht und ob es das Marketing überhaupt etwas bringt. Theoretisch können Millionen ins Marketing fließen und der Film kann trotzdem  erfolglos bleiben.
Der Vorteil von Netflix ist also, dass seine Nutzer durch ihr Nutzungsverhalten entscheiden, was produziert wird und was nicht. Ebenso legen sie fest, welche Schauspieler sie sehen wollen. Netflix hat es geschafft, eine Brücke zwischen Nutzern und Produzenten zu bauen. Das Team, das entscheidet, was produziert wird, kann sich so ganz einfach an den Daten der Nutzer orientieren.  
### 3.1.5 Visualisierung ###

Die Darstellung einzelner Sendungen hängt nicht vom Zufall ab, meinen die Autoren Chris Alvino und Justin Basilico des Artikels “Learning a Personalized Homepage“[^cf15]. Ganz im Gegenteil: Die Platzierung und Auswahl der richtigen Sendungen für die einzelnen Zeilen ist ein wichtiger Teil des Personalisierungsansatzes von Netflix. Es muss also herausgefunden werden, welche Zeilen am relevantesten für jeden einzelnen Nutzer sind sowie mit welchen Sendungen die Zeilen gefüllt werden sollten. Außerdem muss entschieden werden, an welcher Stelle der limitierten Startseite jede Zeile platziert wird, so dass die Auswahl des nächsten Videos möglichst intuitiv geschehen wird.
Hierfür nutzt Neflix das maschinelle Lernen. Die Maschine lernt, historische Informationen zu nutzen. Historische Informationen wären zum Beispiel:  

+ welche Homepages wurden bereits einmal für die Mitglieder erstellt
+ wie interagieren die Mitglieder
+ was schauen die Mitglieder tatsächlich gerade an
+ was spielen sie überhaupt ab

Es gibt offenbar einige Herausforderungen für das Anlernen des Modells für maschinelles Lernen. Die Trainingsdaten für den Algorithmus müssen sehr bedacht ausgewählt werden. Die Herausforderung ist auch, wie die Zuordnung im Modell erlaubt ist. Wenn ein Nutzer ein Video aus einer bestimmten Zeile in der Vergangenheit abgespielt hat, heißt es nicht, dass der Nutzer dieses Video ebenfalls ausgewählt hätte, wenn es in einer anderen Zeile an erster Stelle gestanden hätte. Es könnte die Benennung der Zeile und nicht die Position in der Zeile ausschlaggebend für das Abspielen gewesen sein.
Um diese Herausforderungen zu bewältigen, ist es wichtig, eine gute Metrik auszuwählen. Von hoher Wichtigkeit für die Seitengenerierung ist, wie die Qualität der Seiten, die durch einen Algorithmus erzeugt wurden, zu bewerten ist. Jede mögliche Verbesserung des Algorithmus wird sofort online in einem A/B-Test geprüft. Netflix möchte in der Lage sein, die wertvollen A/B-Testressourcen auf Algorithmen anzuwenden, von denen angenommen wird, dass sie die Qualität der Seiten wahrscheinlich verbessern. Die Parameter der Algorithmen sollten vor dem A/B-Test abgestimmt werden. Dazu können historische Daten verwendet werden, um hypothetische Seiten aus dem neuen algorithmischen Ansatz zu generieren.
Für die Entwicklung von Qualitätsmetriken auf Seitenebene hat sich Netflix von in der Informationsrückgewinnung bereits etablierten Ranking-Metriken inspirieren lassen. Sie haben als Beispiel eine Metrik für eine eindimensionale Liste genommen und daraus eine neue Metrik erstellt, die in einem zweidimensionalen Layout funktioniert.
Als Beispiel geben Sie die Metrik „Recall@n“ an. Diese misst die Anzahl der relevanten Items in den Top n geteilt durch die Gesamtanzahl der relevanten Items. Netflix hat diese Metrik in zwei Dimensionen erweitert zu „Recall@m-by-n“. So kann die Anzahl der relevanten Items der ersten m Zeilen und n Spalten auf der Seite geteilt durch die Gesamtanzahl der relevanten Items gezählt werden. „Recall@3-by-4“ kann also die Qualität der Videos, die im sichtbaren Bereich eines Geräts angezeigt werden, das nur 3 Zeilen mit jeweils 4 Videos zur Zeit anzeigen kann, repräsentieren. Eine nette Eigenschaft von Recalls, die auf diese Weise definiert werden, ist, dass es automatisch Sonderfälle, wie doppelte Videos oder kurze Zeilen behandeln kann. Außerdem könnte man einen der Werte, also n oder m fixieren und die jeweils anderen durchtauschen, um zu berechnen, wie sich der Recall im sichtbaren Bereich erhöhen würde, wenn der Nutzer die Seite nach unten scrollen würde. Solch definierte Metriken kann Netflix nutzen, um Änderungen an jedem der algorithmischen Ansätze, die für die Generierung der Seite genutzt werden, oder jede der eingegebenen Daten, zu bewerten. 
Laut des Artikels „To Be Continued: Helping you find shows to continue watching on Netflix“, geschrieben von Hossein Taghavi, Ashok Chandrashekar, Linas Baltrunas und Justin Basilico auf dem Netflix eigenen Blog, ist das große Ziel des Empfehlungssystem von Netflix, die perfekte Serie oder den perfekten Film für jeden Nutzer zu kennen und diesen direkt beim Start von Netflix zu starten.[^cf16]
Wenn ein Nutzer Netflix öffnet, möchte er entweder eine ganz neue, für ihn unbekannte Sendung entdecken oder die nächste Folge einer bereits bekannten Serie sehen, bzw. einen angefangenen Film zu Ende schauen. Wenn Netflix vorhersagen kann, dass der Nutzer beim Öffnen gerade eine Serie oder einen Film weiterschauen möchte, so würde es Sinn machen, diese/n an präsenter Stelle auf der Startseite zu platzieren.
Grundsätzlich fokussiert Netflix sich hier auf die Zeile „Weiterschauen“. Ein nicht unerheblicher Anteil der Streaming-Zeit erfolgt aufgrund der Platzierung der Serie oder des Films in dieser Zeile. Wie die Zeile auf der Seite platziert wurde, hing von einigen Regeln ab, die wiederum vom der Plattform abhängig waren. Laut des Blog-Artikels will Netflix dies nun über die Plattformen hinweg vereinheitlichen um die Nutzererfahrung der "Weiterschauen"-Zeile anhand folgender zweier Dimensionen zu verbessern:  

+ Verbesserung der Platzierung der Zeile: Sie soll höher platziert werden, wenn ein Nutzer im "Weiterschauen-Modus" ist. Sie soll tiefer platziert werden, wenn ein Nutzer eher nach einem neuen Titel sucht, sich also im "Entdeckungs-Modus" befindet. 
+ Verbesserung der Reihenfolge der zuletzt angeschauten Sendungen in der Zeile in Abhängigkeit der Wahrscheinlichkeit, dass sie beim nächsten Aufruf von Netflix angeschaut/weitergeschaut werden.
Herauszufinden, wie hoch die Wahrscheinlichkeit ist, dass sich ein Nutzer gerade im „Weiterschauen-Modus“ befindet, versucht Netflix über die Definition unterschiedlicher Aktivitätsmuster. Ein Nutzer ist möglicherweise gewollt, eine Sendung fortzusetzen, wenn er:

+ schon viele Folgen einer Serie geschaut hat, diese aber noch nicht komplett zu Ende geschaut hat
+ vor Kurzem einen Film angefangen hat
+ eine Show vermehrt zu einer bestimmten Zeit am Tag oder über das aktuelle Gerät geschaut hat

Im „Entdeckungs-Modus“ befindet sich der Nutzer eher, wenn er:

+ gerade einen Film zu Ende oder alle Staffeln und Episoden einer Serie geschaut hat
+ in letzter Zeit nichts mehr geschaut hat
+ sich neu bei Netflix angemeldet hat

Diese Hypothesen haben Netflix laut oben genanntem Artikel dazu motiviert, ein maschinenlernendes Modell zu bauen, welches obige Muster identifiziert und nutzt, um eine bessere „Weiterschauen“-Zeile zu generieren.
Um ein Empfehlungsmodell für die „Weiterschauen“-Zeile zu kreieren, braucht man zunächst Merkmale, die Muster aus dem Verhalten der Nutzer erkennen. Diese sollen dabei helfen, eine Vorhersage zu treffen, wann ein Nutzer eine Serie oder einen Film weitersehen möchte. Diese Merkmale werden als Input für das Erstellen des maschinenlernenden Modells genutzt. Die wichtigsten Merkmale können dann später nach einigen Testläufen optimiert und ausgewählt werden. Die Autoren des Blog-Artikels haben drei mögliche Ideen für das Erstellen des Weiterschauen-Modells berücksichtigt, darunter:

+ Eigenschaften auf Mitgliedsebene:
    + Daten über das Abonnement des Mitglieds, wie zum Beispiel die Dauer des Abonnements, das Land der Registrierung und die Sprachpräferenzen
    + Wie aktiv das Mitglied in letzter Zeit war
    + Die letzten Bewertungen des Mitglieds sowie Präferenzen in Genres
+ Eigenschaften über eine Sendung sowie die Interaktion des Nutzers mit dieser:
    + Wie lange ist es her, dass eine Sendung zu dem Katalog hinzugefügt, bzw. vom Mitglied geschaut wurde
    + Wie viel der Sendung hat das Mitglied geschaut
    + Metadaten über die Sendung, wie zum Beispiel Typ, Genre, Anzahl der Episoden. Beispielsweise werden Kindersendungen öfter wiederholt geschaut
    + Beliebtheit und Relevanz der Sendung für das Mitglied
    + Wie oft das Mitglied die Sendung weitergeschaut hat
+ Kontextbezogene Eigenschaften:
    + Aktuelle Uhrzeit sowie Wochentag
    + Standort
    + Genutztes Gerät des Mitglieds

Für die optimale Darstellung der „Weiterschauen“-Zeile gibt es zwei Aufgaben: Sortierung der Ergebnisse innerhalb der Zeile sowie die Platzierung der Ergebnisse an eine sinnvolle Stelle auf der Startseite des Mitglieds. Für die Sortierung der Ergebnisse innerhalb der „Weiterschauen“-Zeile hat Netflix ein Modell trainiert, das Sessions nutzt, in denen das Mitglied eine zuvor angesehene Sendung weiter schaut. In jeder Session lernt das Modell zwischen den Sendungen, die wiederholt werden, zu unterscheiden und ordnet diese in der vorhergesagten Wahrscheinlichkeit an. Um die „Weiterschauen“-Zeile sinnvoll, bzw. an einer geeigneten Stelle auf der Startseite des Mitglieds zu platzieren, möchte Netflix die Wahrscheinlichkeit abschätzen, ob sich das Mitglied gerade im „Weiterschauen-Modus“ oder aber im „Entdeckungs-Modus“s befindet, so die Autoren des Blog-Artikels. Aufgrund dieser Wahrscheinlichkeit könnten mehrere Ansätze verfolgt werden. Ein einfacher Ansatz wäre, dass es nur zwei Möglichkeiten gibt, die Zeile zu platzieren: oben auf der Seite oder weiter unten auf der Seite.
Durch Anwendung eines Schwellenwertes auf die vorhergesehene Wahrscheinlichkeit kann Netflix entscheiden, in welcher dieser beiden möglichen Positionen die Zeile platziert wird.   
## 3.2 Cambridge Analytica ##

Zum Grauen vieler zog zu Beginn des Dezembers 2016 ein Artikel mit dem Titel „Ich habe nur gezeigt, dass es die Bombe gibt“[^cf17] seine Runde durch die verschiedensten „Sozialen Medien“. In ihm wird erläutert wie die psychologische Methode des Abgleichens von Facebook Daten mit Psychometrie Umfragen, entworfen von Michal Kosinski et. Al., im großen Stil mit öffentlich und zugänglich oder erwerbbare Daten von der Firma [„Cambridge Analytica“ (CA)](https://cambridgeanalytica.org/) genutzt wurden, um Donald Trump zum Sieg über Hillary Clinton in den Präsidentschaftswahlen der U.S.A. von 2016 zu verhelfen. Diese Methode soll es ermöglicht haben Personen so genau zu kategorisieren, dass Werbespots auf ihre persönlichen Ängste, Wünsche und politische Haltungen zurechtgeschnitten werden konnten. Der extrovertierte Unterstützer der National Rifle Association (NRA) bekommt Werbung für den Erhalt von Werten, die seit Generationen von Vater zu Sohn weitergegeben wurden, wohingegen die introvertierte Mutter durch Angst vor Terroristen zum Wählen des Kandidaten animiert werden soll. Ob dies wirklich eins zu eins so stattfand soll an dieser Stelle bezweifelt werden. Es gibt einige Tatsachen die dagegen sprechen. So ist ein Artikel, dessen gesamte Beweisführung sich auf die Aussagen von zwei Personen stützt, von denen eine noch ein großes Interesse daran hat genau so wahrgenommen zu werden, wenig fundiert. Ebenfalls trifft der Artikel einen bestimmten Nerv, schlägt genau in die richtige Kerbe zum richtigen Zeitpunkt. Nach einem langen und schmutzigen US-Wahlkampf, gewinnt __der von dem es die wenigsten geglaubt hätten__. Da ist es nur recht und billig einen Sündenbock zu finden. Nicht soziale Spannung, die wir uns nicht vorstellen können waren es, es muss eine neue bisher unbekannte Technologie _(vielleicht eine künstliche Intelligenz?)_ gewesen sein und irgendwie spielen unsere Daten die Facebook über uns sammelt da mit. Siehe WDR Blog[^cf18], Spiegel Online[^cf19], wired.com[^cf20], bloomberg.com[^cf21] oder spektrum.de[^cf22].   
Dennoch erweckt dies so sehr die Aufmerksamkeit der Autoren, dass hier einmal die Methoden und der Technologie Stack dieser Firma so weit es geht unter die Lupe genommen werden soll. Ebenfalls möchten wir auf die Möglichkeiten oder Gefahren, das liegt im Auge des Betrachters, die mit zielgerichteter Wahlwerbung vor uns stehen, aufmerksam machen. Als weiterführende Literatur empfehlen wir die Artikel „Algorithmen Allmächtig? Freiheit in den Zeiten der Statistik“[^cf23] und „Parteien in Deutschland haben noch keine Position zu Wähler-Targeting“[^cf24].    
### 3.2.1 Die Dienstleistung ###

Nach eigenen Aussagen kann die Firma Cambrige Analytica hinzugezogen werden, um auf eine neue Weise Kontakt zu seinem Publikum aufzunehmen. Auf ihrer Website versprechen sie bis zu 5000 Daten Punkten pro Person (derzeit nur US Bürger) zu sammeln und deren Verhalten auf Grund von verschiedenen Modellen vorauszusagen. 

> _5,000 data points per person_  
> We collect up to 5,000 data points on over 220 million Americans, and use more than 100 data variables to model target audience groups and predict the behavior of like-minded people.[^cf25]

Laut Angaben von Alexander Nix (CEO CA) auf dem 2016 Concordia Summit, werden demographische Daten Verbraucher-Daten und Daten aus dem Bereich Lifestyle, von Unternehmen geliefert wie [acxiom](http://www.acxiom.com/), [infogroup](http://www.infogroup.com/), [Experian](http://www.experian.com/), [data trust](http://thedatatrust.com/), [Facebook](https://www.facebook.com/), [L2](http://www.l2political.com/), [Aristotle](http://aristotle.com/), GOP, MRI, [Nielsen](http://www.nielsen.com/), [Magellan strategies](http://magellanstrategies.com/) mit psychographischen Daten verbunden.[^cf26] Mit diesen Informationen sollen in unserem Fall Wähler gezielt angesprochen worden sein. In dem Artikel, der unsere Recherche angestossen hat, wird von personalisierter Wahlwerbung gesprochen die bei der „Vote Leave“ Kampagne für den Ausstieg von Gross Britannien aus der Europäischen Union, bei der Präsidentschaftswahl 2016 in den Vereinigten Staaten von Amerika, zuerst für Ted Cruz und dann für Donald Trump, eingesetzt wurde.  
### 3.2.2 Der Technologie Stack ###

Natürlich lässt eine Firma wie Cambridge Analytica sich nicht direkt in die Karten schauen. Daher mussten wir einen andere Weg finden, um eine Idee zu bekommen mit welchen Technologien bei CA gearbeitet wird. Unser Ansatz ist, dass sich aus den aktuellen Stellenangeboten der Firma ein ungefähre Schätzung möglich ist, welche Technologien dort in den Alltagsgebrauch gehören. Zum aktuellen Zeitpunkt wurden dort zwei Stellen ausgeschrieben aus denen wir Schlüsse ziehen konnten. Es gab ein Stellenangebot für Data Engineers und eines für Data Scientists auf ihrer Seite. [^cf27]Bei Datenbanken werden Erfahrungen und Fähigkeiten im Umgang mit MySQL und, aus dem Sektor der NoSQL Datenbanken, MongoDB erwünscht. MySQL ist eine Variante der „Structured Query Language“, die um 1995 von der Firma MySQL AB entworfen und unter einer GNU General Public License veröffentlicht wurde. NoSQL steht nicht für die Verneinung von SQL Datenbanken, sondern für „Not Only SQL“. Damit werden unterschiedliche Typen von Datenbanken bezeichnet wie zum Beispiel die von CA gewünschte MongoDB. Im Bereich Big Data scheinen die Frameworks Spark und Hadoop zum Einsatz zu kommen und die gewünschten Sprachen sind Python, Java oder Scala und entsprechenden „Objekt Orientierten Programmier Paradigmen“. Des weiteren natürlich der Umgang mit Versions Kontroll Systemen. Anhand dieser Punkte werden wir versuchen die verwendeten Technologien zu betrachten.     
#### 3.2.2.1 Speicherung ####

Wenn die Aussagen der Firma Cambridge Analytica über die von ihnen gesammelten Datenmengen der Bewohner der Vereinigten Staaten von Amerika stimmen, ist es offensichtlich, dass ein einzelne relationale Datenbank nicht ausreicht, um diese 5000 Datenpunkte zu speichern. Diese Daten können aus unterschiedlichsten Typen bestehen, man spricht auch von einer Datenvielfalt in diesem Zusammenhang. Es können Bilddaten, Text, Video, Audio Informationen sein. Die von bereits geordneten Informationen in einer Tabelle bis hin zu dem „Twitter-Stream“ einer Person gehen können. Hier kommt das Hadoop Distributed File System (HDFS) zum Einsatz.  
Hadoop ist ein Open Source in Java geschriebenes Projekt, welches von Googles proprietären Google File System (GFS) und dem „MapReduce“ Framework inspiriert wurde. Mit diesem System können sehr große Datensätze zuverlässig gespeichert werden und mit hoher Bandbreite an Anwendungen, sogenannte HDFS Clients, übertragen werden. Die HDFS Architektur besteht aus einem einzigen NameNode, vielen DataNodes und dem HDFS Client. Der NameNode organisiert die Anfragen und die Ablage von Daten durch die Clients auf den DataNodes. Damit kann der NameNode als Eintrittspunkt betrachtet werden. Die DataNodes sind Kindelemente in diesem Netzwerk. Die Clients, auch EdgeNodes genannt, sind Softwareanwendungen, die von Aussen auf die Daten zugreifen oder Prozesse anstoßen.[^cf28] Das HDFS wurde absichtlich so entworfen, dass es auf günstiger Hardware laufen kann. Dies hat den Vorteil einer kostengünstigen Skalierung. Ebenfalls ist beim Design des Systems von vornherein mit in Rechnung genommen, dass bei einem System in dem viele Hundert oder Tausende Computer eingebunden sind, Ausfälle zu Regel gehören und nicht die Ausnahme sind. Aus diesem Grund werden Daten, die in Blöcken organisiert sind standardmäßig repliziert. Ein weiterer Grundgedanke des Systems ist, dass das Bewegen von Daten, gerade bei großen von Gigabyte oder Terabyte wie sie in Big Data auftreten können, ist kostenintensiv. Das Bewegen von Berechnungen nicht. Daher bietet das HDFS die Möglichkeit die Clients näher an die Daten heran zu bringen.[^cf29] Das Hadoop MapReduce Framework wurde entworfen um Speicherung- und Berechnungsaufgaben über viele tausend Server zu verteilen und bei Bedarf zu skalieren (Eine genau Erklärung von MapReduce folgt im nächsten Kapitel). Als Randnotiz sei zu bemerken, dass Hadoop mittlerweile in einer erweiterten Version 2 existiert. Diese läuft unter dem Namen YARN und trennt das „MapReduce“ Verfahren von dem Dateisystem.[^cf30] Hadoop liefert bereits das MapReduce Verfahren mit. Im Fall von CA wird jedoch ein weiteres Framework benutzt, da MapReduce nicht für die iterativen Prozesse des maschinellen Lernens geeignet ist.
Auch die Analyse kann nicht auf einer einzigen Maschine stattfinden. Damit setzten wir uns im folgende Kapitel „Analyse“ auseinander.  
  
#### 3.2.2.2 Analyse ####

Das Hadoop System ist die Infrastruktur zum Handhaben dieser Datenmengen. Zur Analyse dieser Daten könnte dann, wie ebenfalls aus den Anforderungen der Stellenbeschreibung hervorgeht, das Apache Spark Framework verwendet werden. Mit Spark können Daten aus einer vielen verschiedenen Quellen verarbeitet werden. Zum Beispiel auch aus dem HDFS, aber auch aus NoSQL Datenbank Systemen oder relationalen  Datenbanken. Mit Spark können Daten aus dem HDFS schneller verarbeitet werden und es existieren flexiblere Alternativen zum Hadoop „MapReduce“ Verfahren.

„MapReduce“ ist ein Verfahren welches von Google für große Datenmengen entworfen wurde. Dieses Verfahren kann in zwei Abschnitte unterteilt werden. Der Erste Abschnitt ist „Map“. Daten werden über einen Cluster von Rechner verteilt nach einer bestimmten Funktion abgearbeitet. Der Zweite Teil ist der „Reduce“ Abschnitt. Die einzelnen Teile des Clusters liefern nur einen Wert zurück.[^cf31] 

Um MapReduce besser zu verstehen, folgt ein kurzes Beispiel in JavaScript mit einfachen Daten. Als Erstes müssen wir einen Datensatz zur Verfügung stellen.

```js
const animals = [
    ['elefant', 'mice', 'cat', 'dog', 'unicorn', 'elefant', 'unicorn', 'cat', 'unicorn'],
    ['elefant', 'horse', 'cat', 'fish', 'mice', 'fish'],
    ['pony', 'sloth', 'frog', 'fish', 'pony']
];
```

In unserem Fall haben wir ein Multidimensionales Array mit dem Namen `animals`. Die einzelnen Datensätze in diesem Array wären im HDFS auf mehreren DataNodes verteilt. 
Es folgt die Funktion `map`. Hier wird jedem Element in einem Array ein Wert 1 zugeordnet und als neuer Datensatz bestehend aus einem doppeltem Key Value Paar in ein neues Ergebnis Array geschrieben. Diese Sammlung an Ergebnissen wird zurückgegeben. 

```js
function map (arr) {
  let result = [];
  arr.forEach(function(element, index, array) {
    result.push({animal: element, count: 1});
  });
  return result;
}
```

Als Nächstes werfen wir einen Blick auf unsere `reduce` Funktion. Hier muss jedes einzelne Objekt inspiziert werden und mit allen anderen Elementen im Array verglichen werden. Ist es noch nicht in der Ergebnismenge enthalten, wird ein neuer Eintrag erstellt. Ist es bereits enthalten, wird der entsprechende Zähler inkrementiert. In diesem speziellen Fall nutzen wir ein temporäres Objekt um wiederkehrende Einträge vergleichen zu können. Die zweite Schleife `for(let key in obj)…` ist nur dazu da um die Daten wieder in das gleiche Format aufzubereiten in dem sie auch eingetroffen sind.     

```js
function reduce (arr) {
  let result = [];
  let obj = {};
  for(let i = 0; i < arr.length; i++) {
    if(obj.hasOwnProperty(arr[i].animal) !== true) {
      obj[arr[i].animal] = arr[i].count;
    }else{
      obj[arr[i].animal]++;
    }
  }
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      result.push({animal: key, count: obj[key]});
    }
  }
  return result;
}
```

Nun fehlt noch die ausführende Funktion `main`. Hier wird zuerst die `map` Funktion auf den rohen Datensatz angewandt und dann das Reduktionsverfahren eingeleitet. Wir erhalten nach der ersten Reduktion wiederum drei Datensätze die uns das Vorkommen von den unterschiedlichen Tieren in unseren drei Ausgangs-Datensätzen zeigen. Danach fassen wir alle drei Ergebnisse zusammen und wenden nochmals die `reduce` Funktion an um aus allen drei Sätzen einen gemeinsamen zu machen.   

```js
function main() {
  let mapped = [];
  animals.forEach(function (e) {
    mapped.push(map(e));
  });

  let reduced = [];
  mapped.forEach(function(e) {
    reduced.push(reduce(e));
  });

  let all = [];
  reduced.forEach(function(ele) {
    ele.forEach(function(e) {
      all.push(e);
    });
  });
  let result = [];
  result.push(reduce(all));
  console.log(result);
}
main();
```

Das Ergebnis ist ein Datensatz, der uns genau zeigt wie oft welches Tier in allen Datensätzen vorkommt.  

```shell
[ [ { animal: 'elefant', count: 3 },
    { animal: 'mice', count: 2 },
    { animal: 'cat', count: 3 },
    { animal: 'dog', count: 1 },
    { animal: 'unicorn', count: 3 },
    { animal: 'horse', count: 1 },
    { animal: 'fish', count: 3 },
    { animal: 'pony', count: 2 },
    { animal: 'sloth', count: 1 },
    { animal: 'frog', count: 1 } ] ]
```

Spark kommt gebündelt mit einer Bibliothek für maschinelles Lernen (MLib), was immer iterative Prozesses bedeutet, hat eine REPL (Read Eval Print Listen) Schnittstelle und kann ähnlich wir R oder Python explorativ für statistische Aufgaben verwendet werden.[^cf32] Seit Anfang 2014 gilt Spark als Top Level Project bei der Apache Foundation[^cf33]. Dieses Framework ist noch sehr jung und kann Hadoop oder YARN (Hadoop 2) noch nicht ersetzten, wird aber als zukunftsträchtiges Projekt angesehen.  
Wenn Datenmengen bearbeitet werden sollen, die auf einer einzigen Maschine existieren und verarbeitet werden können, kommt auch gerne die Programmiersprache Python, in ihren interaktiven Umgebungen wie iPython[^cf34] oder Jupyter[^cf35], mit Paketen wie scikit-learn[^cf36] oder pandas[^cf37] zum Einsatz. Pandas zum Bearbeiten von Datenstrukturen und scikit-learn zum Analysieren von Daten. Weiter übliche Module sind Matplotlib[^cf38] für die Ausgabe als Plot um die Ergebnisse auch sichtbar zu machen. Dies ist eine oft unterschätzter Anteil an Arbeit. Aus Tabellen und Zahlenkolonnen lässt sich nur schlecht ein Verhalten von Werten ablesen. Als einfaches Beispiel hierzu kann das Anscombe Quartett betrachtet werden.[^cf39]

    +------+------+------+------+-------+------+-------+------+
    |  x1  |  x2  |  x3  |  x4  |  y1   |  y2  |  y3   |  y4  |
    +======+======+======+======+=======+======+=======+======+
    |  10  |  10  |  10  |  8   | 8.04  | 9.14 | 7.46  | 6.58 |
    +------+------+------+------+-------+------+-------+------+
    |  8   |  8   |  8   |  8   | 6.95  | 8.14 | 6.77  | 5.76 |
    +------+------+------+------+-------+------+-------+------+
    |  13  |  13  |  13  |  8   | 7.58  | 8.74 | 12.74 | 7.71 |
    +------+------+------+------+-------+------+-------+------+
    |  9   |  9   |  9   |  8   | 8.81  | 8.77 | 7.11  | 8.84 |
    +------+------+------+------+-------+------+-------+------+
    |  11  |  11  |  11  |  8   | 8.33  | 9.26 | 7.81  | 8.47 |
    +------+------+------+------+-------+------+-------+------+
    |  14  |  14  |  14  |  8   | 9.96  | 8.1  | 8.84  | 7.04 |
    +------+------+------+------+-------+------+-------+------+
    |  6   |  6   |  6   |  8   | 7.24  | 6.13 | 6.08  | 5.25 |
    +------+------+------+------+-------+------+-------+------+
    |  4   |  4   |  4   |  19  | 4.26  | 3.1  | 5.39  | 12.5 |
    +------+------+------+------+-------+------+-------+------+
    |  12  |  12  |  12  |  8   | 10.84 | 9.13 | 8.15  | 5.56 |
    +------+------+------+------+-------+------+-------+------+
    |  7   |  7   |  7   |  8   | 4.82  | 7.26 | 6.42  | 7.91 |
    +------+------+------+------+-------+------+-------+------+
    |  5   |  5   |  5   |  8   | 5.68  | 4.74 | 5.73  | 6.89 |
    +------+------+------+------+-------+------+-------+------+

![Anscombe Quartett Plot](./images/anscombe-quartet.png)  

Aus der oben stehenden Tabelle lassen sich wenig bis gar keine Schlüsse auf das Verhalten der Werte schließen. Durch die Visualisierung der Werte kann schnell ein Muster oder eine Abweichung festgestellt werden.    
# 4 Ausblick #

Algorithmen, maschinelles Lernen und künstliche Intelligenz halten Einzug in jeden Bereich unseres Lebens. Automatisiertes Handel ist schon seit Jahren üblich. „Big Data“ ist ein Interessenfeld für viele Unternehmen. Daten Wissenschaften sind ein neues Feld von Studien, von dem wir noch nicht sagen können, wo es uns hin führen wird. Denn es ist schwer abzusehen was in den nächsten 5, 10, 15 Jahren auf diesen Feldern passieren wird. Eines ist jedoch klar. Die Mengen an Daten werden nicht geringer. Mit dem Bereich des „Internet of Things“ (IoT) kommen laut Gartner bis im Jahr 2020 mehr als 20 Milliarden Geräte ans Netz.[^cf40] Ältere Voraussagen gingen noch von 75 Milliarden Geräte[^cf41]. All diese Objekte werden Daten erzeugen, an einen Server spielen oder sie durch ihn hin druchleiten und dann? Genauso werden die sozialen Netzwerke versuchen immer weiter in unser Leben einzudringen. Die Idee von Facebook solargetriebene Flugzeuge, die Internet Zugang bis in die entlegensten Winkel der Welt bringen, zu bauen, ist bestimmt nicht aus reinem Altruismus geboren.[^cf42] Wer das Netz liefert kann auch sehen, was gesehen wird. Die Liste geht weiter und weiter. Von Amazon Echo, über Googles selbstfahrende Autos oder Heim-Automations-Systemen, zu Snapchats Brillen mit Videofunktion. Basierend auf diesen Informationen werden für alle Bereiche des Lebens Modelle unseres Verhaltens und unserer Vorlieben entwickelt um uns noch besser kontrollieren oder bewerben zu können. Sei es um uns Serien zu liefern die genau unseren Interessen entsprechen oder um die richtige Partei zu wählen, das richtige Produkt zu kaufen oder um uns vor uns selber zu schützen. Für den einen mag diese Aussicht spannend sein für den anderen erschreckend. Sicher, egal ob „Schöne neue Welt“ oder „1984“, wir leben in spannenden Zeiten.   
# 5 Fazit #

Es ist schwer einem global agierenden Unternehmen in die Karten zu schauen. Alle Informationen die sich finden lassen geben zwar einen Überblick jedoch keinen direkten Einblick. Glücklicherweise ist das wohlgeplante teilen von Informationen mittlerweile Teil einer Corporate Identity womit wir zumindest etwas an der Oberfläche dieser Themen kratzen konnten. Wir hoffen dennoch wir konnten dem geneigten Leser etwas Wissenszuwachs bescheren. 

Karina Ennenga & Fabian Morón Zirfas  
# 6 Quellen #

Ende

[^cf1]: Oremus, Will. "Who Really Controls What You See in Your Facebook Feed—and Why They Keep Changing It   ." Slate Magazine. Slate.com, 03 Jan. 2016. Web. 08 Jan. 2017. <http://www.slate.com/articles/technology/cover_story/2016/01/how_facebook_s_news_feed_algorithm_works.html>.

[^cf2]: The Signal. "What is data science vs. statistics? - The Signal." The Signal. 30 Mar. 2016. Web. 8 Jan. 2017. <https://blog.mixpanel.com/2016/03/30/this-is-the-difference-between-statistics-and-data-science/>

[^cf3]: Glassdoor. " Best Jobs in America ." Glassdoor. n.d. Web. 8 Jan. 2017. <https://www.glassdoor.com/List/Best-Jobs-in-America-LST_KQ0,20.htm>

[^cf4]: Harvard Business Review. "Data Scientist: The Sexiest Job of the 21st Century." Harvard Business Review. 1 Oct. 2012. Web. 8 Jan. 2017. <https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century>

[^cf5]: Stacey Higginbotham. "Sensor Networks Top Social Networks for Big Data." Gigaom.com. 13 Sept. 2010. Web. 15 Jan. 2017. <https://gigaom.com/2010/09/13/sensor-networks-top-social-networks-for-big-data-2/>

[^cf6]: A Petabyte is approximately 1,000 Terabytes or one million Gigabytes. It's hard to visualize what a Petabyte could hold. 1 Petabyte could hold approximately 20 million 4-door filing cabinets full of text. It could hold 500 billion pages of standard printed text. It would take about 500 million floppy disks to store the same amount of data. N.a. "Megabytes, Gigabytes, Terabytes - What Are They?." Whatsabyte.com. n.d. Web. 15 Jan. 2017. <http://www.whatsabyte.com/>

[^cf7]: Long, Moe. "How Much Does Google Really Know About You?." MakeUseOf. n.d. Web. 15 Jan. 2017. <http://www.makeuseof.com/tag/how-much-google-know-about-you/>

[^cf8]: Alexis C. Madrigal. "How Netflix Reverse Engineered Hollywood." The Atlantic. n.d. Web. 29 Jan. 2017. <http://www.theatlantic.com/technology/archive/2014/01/how-netflix-reverse-engineered-hollywood/282679/>

[^cf9]: Xavier Amatriain. "Netflix Recommendations: Beyond the 5 stars (Part 1)." Techblog.netflix.com. n.d. Web. 29 Jan. 2017. <http://techblog.netflix.com/2012/04/netflix-recommendations-beyond-5-stars.html>

[^cf10]: N.a. "Nutzungshinweise | WirtschaftsWoche Online." Wiwo.de. n.d. Web. 29 Jan. 2017. <http://www.wiwo.de/impressum/nutzungshinweise/blocker/?callback=%2Funternehmen%2Fit%2Fnetflix-in-deutschland-mehr-abonnenten-als-einwohner%2F14702184.html>

[^cf11]: Google Docs. "Netflix Genres by ID - 1 to 100,000." Google Docs. n.d. Web. 29 Jan. 2017. <https://docs.google.com/spreadsheets/d/1eISFvq42Sll10xekyV-XQdwoG7_gjZpreNG40Pz8G0k/edit?usp=embed_facebook>

[^cf12]: Alexis C. Madrigal. "How Netflix Reverse Engineered Hollywood." The Atlantic. n.d. Web. 29 Jan. 2017. <http://www.theatlantic.com/technology/archive/2014/01/how-netflix-reverse-engineered-hollywood/282679/>

[^cf13]: N.a. "." Inka.htw-berlin.de. 24 Sept. 2012. Web. 29 Jan. 2017. <http://inka.htw-berlin.de/Sieck/Abschlussarbeiten/Hebeisen.pdf>

[^cf14]: Andrew Leonard. "How Netflix is turning viewers into puppets." Salon. 1 Feb. 2013. Web. 29 Jan. 2017. <http://www.salon.com/2013/02/01/how_netflix_is_turning_viewers_into_puppets/>

[^cf15]: Justin Basilico. "Learning a Personalized Homepage." Techblog.netflix.com. n.d. Web. 29 Jan. 2017. <http://techblog.netflix.com/2015/04/learning-personalized-homepage.html>

[^cf16]: Justin Basilico. "To Be Continued: Helping you find shows to continue watching on Netflix." Techblog.netflix.com. n.d. Web. 29 Jan. 2017. <http://techblog.netflix.com/2016/10/to-be-continued.html>

[^cf17]: Von Hannes Grassegger Und Mikael Krogerus. "Ich habe nur gezeigt, dass es die Bombe gibt - Das Magazin." Das Magazin. 3 Dec. 2016. Web. 8 Jan. 2017. <https://www.dasmagazin.ch/2016/12/03/ich-habe-nur-gezeigt-dass-es-die-bombe-gibt/>

[^cf18]: Horn, Dennis. "Hat wirklich der große Big-Data-Zauber Trump zum Präsidenten gemacht?." Digitalistan. 5 Dec. 2016. Web. 9 Jan. 2017. <https://blog.wdr.de/digitalistan/hat-wirklich-der-grosse-big-data-zauber-trump-zum-praesidenten-gemacht/>

[^cf19]: Spiegel Online, Hamburg, Germany. "US-Wahl und Daten-Ingenieure: Ich ganz allein habe Trump ins Amt gebracht - SPIEGEL ONLINE - Netzwelt." SPIEGEL ONLINE. 5 Dec. 2016. Web. 9 Jan. 2017. <http://www.spiegel.de/netzwelt/netzpolitik/donald-trump-und-die-daten-ingenieure-endlich-eine-erklaerung-mit-der-alles-sinn-ergibt-a-1124439.html>

[^cf20]: Issie Lapowsky. "A Lot of People Are Saying Trump’s New Data Team Is Shady." WIRED. 15 Aug. 2016. Web. 9 Jan. 2017. <https://www.wired.com/2016/08/trump-cambridge-analytica/>

[^cf21]: Bershidsky, Leonid. "No, Big Data Didn't Win the U.S. Election." Bloomberg View. 8 Dec. 2016. Web. 9 Jan. 2017. <https://www.bloomberg.com/view/articles/2016-12-08/no-big-data-didn-t-win-the-u-s-election>

[^cf22]: Eva Wolfangel. "Big Data: Haben psychologische Facebookdaten Trumps Sieg verursacht?." Spektrum.de. n.d. Web. 9 Jan. 2017. <http://www.spektrum.de/kolumne/haben-psychologische-facebookdaten-trumps-sieg-verursacht/1431745>

[^cf23]: Gastbeitrag. "Algorithmen Allmächtig? Freiheit in den Zeiten der Statistik." netzpolitik.org. 25 Jul. 2014. Web. 25 Jan. 2017. <https://netzpolitik.org/2014/algorithmen-allmaechtig-freiheit-in-den-zeiten-der-statistik/>

[^cf24]: Markus Reuter. "Parteien in Deutschland haben noch keine Position zu Wähler-Targeting (Update)." netzpolitik.org. 6 Dec. 2016. Web. 25 Jan. 2017. <https://netzpolitik.org/2016/parteien-in-deutschland-haben-noch-keine-position-zu-waehler-targeting/>

[^cf25]: N.a. "Cambridge Analytica – About Us." Cambridgeanalytica.org. 10 Jan. 2017. Web. 15 Jan. 2017. <https://cambridgeanalytica.org/about>

[^cf26]: YouTube. "The Power of Big Data and Psychographics." YouTube. 27 Sept. 2016. Web. 22 Jan. 2017. <https://www.youtube.com/watch?v=n8Dd5aVXLCc>

[^cf27]: Cambridge Analytica. "Cambridge Analytica – Better Audience Targeting." Cambridge Analytica. 10 Jan. 2017. Web. 22 Jan. 2017. <https://cambridgeanalytica.org/>

[^cf28]: Shvachko, Konstantin, et al. "The hadoop distributed file system." 2010 IEEE 26th symposium on mass storage systems and technologies (MSST). IEEE, 2010.

[^cf29]: N.a. "HDFS Architecture Guide." Hadoop.apache.org. 4 Aug. 2013. Web. 25 Jan. 2017. <https://hadoop.apache.org/docs/r1.2.1/hdfs_design.html>

[^cf30]: Margaret Rouse. "Apache Hadoop YARN (Yet Another Resource Negotiator)." SearchDataManagement. n.d. Web. 25 Jan. 2017. <http://searchdatamanagement.techtarget.com/definition/Apache-Hadoop-YARN-Yet-Another-Resource-Negotiator>

[^cf31]: Dean, Jeffrey, and Sanjay Ghemawat. "MapReduce: simplified data processing on large clusters." Communications of the ACM 51.1 (2008): 107-113.

[^cf32]: Sean Owen. "Why Apache Spark is a Crossover Hit for Data Scientists - Cloudera Engineering Blog." Cloudera Engineering Blog. 3 Mar. 2014. Web. 22 Jan. 2017. <http://blog.cloudera.com/blog/2014/03/why-apache-spark-is-a-crossover-hit-for-data-scientists/>

[^cf33]: N.a. "The Apache Software Foundation Announces Apache™ Spark™ as a Top-Level Project : The Apache Software Foundation Blog." Blogs.apache.org. 20 Jan. 2017. Web. 22 Jan. 2017. <https://blogs.apache.org/foundation/entry/the_apache_software_foundation_announces50>

[^cf34]: N.a. "Jupyter and the future of IPython — IPython." Ipython.org. 9 Jan. 2017. Web. 22 Jan. 2017. <http://ipython.org/index.html>

[^cf35]: N.a. "Project Jupyter." Jupyter.org. 17 Jan. 2017. Web. 22 Jan. 2017. <http://www.jupyter.org>

[^cf36]: N.a. "scikit-learn: machine learning in Python — scikit-learn 0.18.1 documentation." Scikit-learn.org. n.d. Web. 22 Jan. 2017. <http://scikit-learn.org/stable/>

[^cf37]: N.a. "Python Data Analysis Library — pandas: Python Data Analysis Library." Pandas.pydata.org. 26 Dec. 2016. Web. 22 Jan. 2017. <http://pandas.pydata.org/>

[^cf38]: N.a. "Matplotlib: Python plotting — Matplotlib 2.0.0 documentation." Matplotlib.org. 19 Jan. 2017. Web. 22 Jan. 2017. <http://matplotlib.org/>

[^cf39]: Turner, Stephen. "Using and Abusing Data Visualization: Anscombe’s Quartet and Cheating Bonferroni." R-bloggers. 26 Feb. 2015. Web. 25 Jan. 2017. <https://www.r-bloggers.com/using-and-abusing-data-visualization-anscombes-quartet-and-cheating-bonferroni/>

[^cf40]: N.a. "Gartner Says 6.4 Billion Connected ." Gartner.com. n.d. Web. 22 Jan. 2017. <http://www.gartner.com/newsroom/id/3165317>

[^cf41]: Tony Danova. "Morgan Stanley: 75 Billion Devices Will Be Connected To The Internet Of Things By 2020." Business Insider. 2 Oct. 2013. Web. 22 Jan. 2017. <http://www.businessinsider.com/75-billion-devices-will-be-connected-to-the-internet-by-2020-2013-10>

[^cf42]: Larry Dignan. "Facebook's 10-year roadmap outlined, eyes AI, VR, Internet access infrastructure | ZDNet." ZDNet. 12 Apr. 2016. Web. 22 Jan. 2017. <http://www.zdnet.com/article/facebooks-10-year-roadmap-outlined-eyes-ai-vr-internet-access-infrastructure/>