# Aufgabe 11 - Shopping Clauses
Heute geht es um die Anwendung von if-else und switch statements in Ihrem Code.

## Status und Kommentare

Ampelstufe | Sternchen gesamt | Anmerkungen zur Aufgabe
------------ | ------------- | -------------
![green](https://www.t7lab.com/images/hfu/green.png) ![yellow](https://www.t7lab.com/images/hfu/yellow.png) ![red](https://www.t7lab.com/images/hfu/red.png) | | ...

## Hinweise
- Die Unterlagen der Vorlesungen sind hier zu finden [Link](https://github.com/T7Lab/eia1-vl-typescript)
- Letztmögliche Abgabe dieser Aufgabe: Sonntag, 20.01.2019 - EOD (End of Day === 00:00 Uhr)
- Am Ende der Aufgaben befinden sich die allgemeinen "Spielregeln" des Praktikums, sowie das Ampelsystem und Kommentare, welche im Lauf des folgenden Tags unsererseits hinterlegt werden
- Prüfen Sie Ihr HTML-Dokument auf W3C Konformität mit Hilfe des W3-Validators: [W3C HTML Validator](https://validator.w3.org/) und stellen Sie sicher, dass keine Errors und keine Warnings erscheinen
- Prüfen Sie Ihr CSS-Dokument auf W3C Konformität mit Hilfe des W3-Validators: [W3C CSS Validator](http://jigsaw.w3.org/css-validator/) und stellen Sie sicher, dass keine Errors und keine Warnings erscheinen
- Aktivieren Sie GitHub Pages damit Ihre Seite über eine URL aufrufbar ist

## Einschränkungen
Keine Einschränkungen vorgegeben.

### 10.1 Skizze
Heute wird keine Skizze benötigt.

### 10.2 Störer
Erweitern Sie Ihre Funktion writeHTML um eine konditionale Abfrage, die abhängig davon, ob ein Störer (Die Dinger um besondere Angebote anzuzeigen) gesetzt werden soll, den Störer entsprechend anzeigt oder eben nicht anzeigt. Falls nötig, müssen Sie hierfür Ihr Interface `Product` erweitern, damit jedes Produkt über ein Boolean für so einen Störer verfügt.


### 10.3 Filter 1
Erweitern Sie Ihren TypeScript-Code um eine Filterfunktion zur Filterung nach 4 von Ihnen festgelegten Preissegmenten, z.B. 0 – 10 € / 10 – 30 € / 30 – ... € / alle
Die Filterung soll über verschiedene Buttons erfolgen, die Sie vorher in Ihr HTML- Dokument einbauen sollten. Ein Klick auf so einen Filter soll die Ausgabe der Produkte entsprechend filtern (also nicht auf der Konsole, sondern tatsächlich in der visuellen Darstellung).


### 10.4 Filter 2
Bauen Sie zwei weitere Buttons zur Filterung ein, z.B. Farbe, Größe, ...


## Spielregeln Praktikum

#### 1. Studium
Die Bearbeitung der Aufgaben setzt intensive eigenständige Recherchen voraus. Die Arbeit mit den angegebenen Quellen ist zu üben und die darin enthaltenen Informationen sind tatsächlich intensiv zu studieren. Sie sind nicht nur wichtig für die Lösung der aktuellen Aufgabe. Experimentieren Sie weiter damit, auch wenn die gestellte Aufgabe bereits gelöst ist. Stellen Sie sich selbst weitere Aufgaben und Ziele!

#### 2. Kennzeichnung Ihrer Arbeit
Platzieren Sie zu Beginn ihres Programmcodes, außer bei Aufgabe 0, immer folgende Kommentarzeilen, wobei Sie die Texte in Klammern durch ihre persönlichen bzw. aktuellen Daten ersetzen
```
/*
Aufgabe: (Nummer und Titel der Aufgabe) Name: (Ihr Name)
Matrikel: (Ihre Matrikelnummer)
Datum: (Datum der letzten Bearbeitung) Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
```
Hinweis: Bei HTML-Dokumente nehmen Sie den Kommentar in den Body-Bereich und beachten Sie, wie HTML-Kommentare erstellt werden.

#### 3. Quellen
Sie dürfen sämtliche Quellen nutzen, die Ihnen zur Verfügung stehen – auch Ihre Kommilitonen und deren Arbeiten auf der Kursseite. Ein reger Wissensaustausch wird empfohlen, ebenso wie die Bildung von Lerngruppen. Nicht akzeptiert wird allerdings die unreflektierte Übernahme fremden Gedankengutes.

#### 4. Hilfestellung
Bei technischen Problemen fragen und antworten Sie im Forum der Veranstaltung. Dieses wird auch von den Betreuern und dem Professor überwacht und beantwortet. Wenden Sie sich bei persönlichen Problemen, beispielsweise bei einem nicht selbst zu verantwortendem Verzug bei der Abgabe, direkt an Ihre Betreuer. Falls die Probleme auf dieser Ebene nicht gelöst werden können, wenden Sie sich an den Lehrbeauftragten.

#### 5. Konzeption
Beginnen Sie die Arbeit an jeder Aufgabe mit einem Konzept. Dieses enthält immer eine oder mehrere Skizzen, eine Beschreibung der Lösung und eine Analyse, bei der bereits die wichtigsten Algorithmen aufgezeigt werden. Halten Sie sich immer Papier und Bleistift bereit, um auch während des Praktikums zu planen und zu skizzieren.

#### 6. Kommentare
Schreiben Sie sinnvolle Kommentare in Ihren Code und sparen Sie nicht daran. Sie machen es sich und Ihren Betreuern damit leichter sich zu Recht zu finden.

#### 8. Vorbereitung
Versuchen Sie sich - sofern die Aufgaben vorher publiziert wurden - für das Praktikum vorzubereiten. Eine Skizze kann hier sehr hilfreich sein. Diese soll Ihnen helfen, die eigentliche Aufgabe zu verstehen und Ihren möglichen Lösungsansatz im Voraus und frei von jeglicher Technik anzugehen.

#### 8. GitHub Classroom
In der README eines jeden Projekts wird Ihre Ampelstufe gepflegt. Beachten Sie, dass Ihre aktuelle Ampelstufe immer in der aktuellsten Aufgabe zu finden ist.
Ist eine Lösung zur aktuellen Aufgabe zum Abgabetermin nicht in Ihrem Repository, wird die Ampel um eine Stufe hochgeschaltet, die nicht mehr zurückgenommen wird.
Eine unzureichende Lösung oder ein Plagiatsverdacht wiederum hat die Schaltung einer halben Ampelstufe zur Folge. Sie erhalten dazu die Aufforderung, Ihre Arbeit im folgenden Praktikum vor dem Betreuer zu verteidigen. Sofern Sie dabei die erforderliche Kompetenz nachweisen können, wird die Ampel um die halbe Ampelstufe zurückgeschaltet.
Erreicht die Ampel die Stufe rot, führt dies zur Disqualifikation.
