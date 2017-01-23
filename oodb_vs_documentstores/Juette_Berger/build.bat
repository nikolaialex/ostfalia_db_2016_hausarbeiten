cd .\Kapitel
type *.md > .\..\Ausarbeitung.md
cd ..
pandoc --bibliography=quellen.bib -cls=din-1505-2-numeric-alphabetical.csl --toc -V lang=de Ausarbeitung.md -o Ausarbeitung.pdf
