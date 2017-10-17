# Hemuppgift 2 - Responsiv Layout

## Uppgiftsbeskrivning

Uppgiften är att skapa en hemsida som visar upp två motsatser i form av varsin bild,  
tillsammans med tillhörande texter. Hemsidan skall utvecklas steg för steg:  

1. Val av innehåll
2. Layoutbeskrivning/skiss (Utefter det innehåll ni har)
3. HTML-skelett, med klasser
4. CSS - mobil först 
5. Media queries för andra skärmar


## Uppgiftskrav

Grundläggande är:

* Två motsatser med bilder och texter enligt beskrivning
* Två Layouter, dator och mobil, enligt wireframe-skisser

[PC - Variant 1](https://wireframe.cc/z9QBIG) 

[PC - Variant 2](https://wireframe.cc/ksc1wN)

[Mobil](https://wireframe.cc/Ujjh2o)

[Tablet](https://wireframe.cc/i4MuOy)


### Krav på HTML
* Korrekt HTML, de fel som finns är mindre och påverkar inte hemsidan eller dess struktur märkbart
* Val av HTML-element är till största del motiverad eller självklar.
* Ingen CSS i html-filen
* Klassnamn och i vissa fall IDn som är beskrivande, inte för stil utan för innehåll, se nedan 
* Kommentarer i de fall klassnamn och elementval inte är beskrivande nog
* Ingen kod som inte används
* Sidan skall gå att läsa av även utan CSS
* Koden ska gå igenom https://html5.validator.nu/


### Krav på CSS
* Korrekt CSS, de fel som finns är mindre och påverkar inte hemsidan eller dess struktur märkbart
* Klassnamn och i vissa fall IDn som är beskrivande, inte för stil utan för innehåll, se nedan
* Kommentarer i de fall klassnamn och elementval inte är beskrivande nog
* Uppdelning av koden i grupper om,   
  HTML-element  
  Klasser  
  IDn  
* Ingen kod som inte används
* Koden ska gå igenom https://jigsaw.w3.org/css-validator/
  

### Sidans layout
* Layouten ska övergripande följa de skisser jag gjort.
* Färg- och typsnittsval är fritt och bedöms ej, däremot måste...
* ...Färger och typsnitt vara valda så att texter går att läsa och layouten är tydlig

## För högre betyg än C
* Ska även en version anpassad för tablets användas.

## Inlämning
Uppgiften ska lämnas in senast fredag den 27:e, kl 23:59.
Lämnas uppgiften in senare kommer en komplettering krävas
och uppgiften kan ej få högre betyg än E.

## Betygsättning
För godkänt skall punkterna i uppgiftkraven ovan följas, för högre betyg än C, se ovan.
Utöver detta används de kriterier som finns i uppgiften på Schoolsoft, viktigt att kolla på dem! Fråga mig
om du vill ha dessa förtydligade.


### Namngivning av klasser och IDn
När du skall namnge en klass eller ett ID är det dels viktigt att ha ett kort och beskrivande namn, men också
att ha namn som inte låser stilen för elementen.  
Till exempel är:
```CSS
  .big-red-text{
    color: red;
    font-size: 3em;
  }
```
inte ett bra namnval på exempelvis en varningstext, då vi kanske vill ändra storlek och färg.

Bättre vore  
```CSS
  .warning-text{
    color: orange;
    font-size: 0.9em;
  }
  ```
Som du ser låser inte namnet innehållet alls.


### Referenser/Länkar
[God praxis för webbutveckling](https://twiggy.smutje.se/index.php/God_praxis_f%C3%B6r_webbutveckling) - Lite om kommentarer, namngivning, etc.

[Använda HTML5 semantiska element](https://twiggy.smutje.se/index.php/Anv%C3%A4nda_HTML5_semantiska_element) - Vägledning för sidskelett och HTML5-element

Placering av element: 
* [Float](https://twiggy.smutje.se/index.php/Styla_horisontell_placering_med_CSS_float)
* [Flexbox](https://twiggy.smutje.se/index.php/Styla_horisontell_placering_med_CSS_flexbox) 
Flexbox är förmodligen lättast att använda sig av.

[Responsiv layout](https://twiggy.smutje.se/index.php/Skapa_en_webbsida_med_responsiv_layout) - Vägledning och tips för media queries och vad man ska tänka på vid design för olika enheter.
