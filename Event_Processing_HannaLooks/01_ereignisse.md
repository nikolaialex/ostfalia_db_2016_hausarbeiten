# Ereignisse
> Ereignis (event): „Anything that happens, or is contemplated as happening“ [LuSc11]

Jeder einzelne, genauer betrachtete Datensatz lässt sich als ein eigenständiges Ereignis auffassen, das mit dem Auftreten von bestimmten Geschehnissen in der Anwendungsdomäne korrespondiert. 
Jedes Ereignis enthält  entsprechende relevante Daten zu einem betreffenden Vorkommnis oder Sachverhalt. [BrDu15]
Nach [ChSc10] ist ein Ereignis alles, was geschieht oder als geschehen betrachtet wird. Ein Ereignisobjekt ist ein Objekt, das darstellt, kodiert oder aufzeichnet, was geschieht. 
Eine isolierte Betrachtung eines Ereignisses reicht zumeist nicht aus, um einen Sachverhalt beurteilen zu können. Zunächst müssen die Ereignisse in einen Zusammenhang gestellt werden und es muss eine Betrachtung mehrere Ereignisse über einen längeren Zeitraum erfolgen, um einen entsprechenden Informationsgehalt ableiten und Schlussfolgerungen ziehen zu können. [BrDu15]
Um eine Verarbeitung eines Ereignisses zu ermöglichen, muss dieses entsprechende Daten mit sich führen. Ereignisdaten bestehen aus allgemeinen Metadaten und spezifischen Kontextdaten und beschreiben somit den Kontext, in dem das Ereignis aufgetreten ist. Jedes Ereignis muss allgemeine und unabhängige Metadaten beinhalten und benötigt eine eindeutige Ereignis-ID zur Identifikation. Ebenso benötigt ein Ereignis einen Zeitstempel, um den Zeitpunkt des Auftretens zu repräsentieren. Des Weiteren muss ein Ereignis den eingetretenen Sachverhalt beschreiben, es muss Nutzdaten mitführen. 
Eine linear geordnete Sequenz von kontinuierlich eintreffenden Ereignissen wird als Ereignisstrom (event stream) bezeichnet. [BrDu15]  
Mit Hilfe von Event Processing wird aus den Ereignissen höheres und wertvolleres Wissen in Form von komplexen Ereignissen abgeleitet. 
Durch Event Processing werden Ereignisse in den Fokus der Softwarearchitektur gesetzt.  