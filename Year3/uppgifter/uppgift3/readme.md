# Responsiv design

## Steg 1. HTML

### Övergripande arbetsgång

1. Välj innehåll
2. [Bestäm tema](#theme)
   * Typografi
   * Färger
   * Former
   * Avstånd
3. [Skissa design](#design)
    * Skärmstorlekar
      * Mobil
      * PC/stor skärm
      * (Tablet)
    * Tydlig meny
4. [Strukturera arbetet](#structure)
    * Dela in i byggblock
    * Gruppera element
    * Markera behållare
5. [Skriv HTML skelett](#skeleton)
    * Skriv utan innehållet först
    * Börja utifrån och in (behållare först, detaljerna sen)
    * Fyll i innehållet
6. [Kontrollera](#check)
    * Kolla på sidan utan CSS, ser den ok ut?
    * Validera HTML
    * (kolla av med mig)
  
### <a name="theme">2. Bestäm Tema</a>
[Gränssnitt på kurswebben](https://twiggy.smutje.se/index.php/Gr%C3%A4nssnittdesign)  

[Typografi - "10 regler", video](https://www.youtube.com/watch?v=gWo1ueIayj4)  
[Typografi - "trender", video](https://www.youtube.com/watch?v=NWIruxSx22Q)  
  
[Färger, "Färgpsykologi", video](https://www.youtube.com/watch?v=r9gYdD-REI0)  
[Färger, "Trick för att välja", video](https://www.youtube.com/watch?v=MjulRnUvttM)  
[Färger, "Paletton", verktyg](http://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF)  


### <a name="design">3. Skissa design</a>
[Layout, "Layout", video](https://www.youtube.com/watch?v=A8pSoqEfayU)

[Repsonsiva sidor, "responsive resources", massa massa länkar](http://bradfrost.github.io/this-is-responsive/resources.html)

### <a name="structure">4. Strukturera arbetet</a>

[Exempel på gruppering på kurswebben](https://twiggy.smutje.se/index.php/Ekol%C3%A5dans_webbshop)  
[Flowchart för val av element](http://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf) (så har man något att utgå ifrån)  

### <a name="skeleton">5. Skriv HTML skelett</a>

[HTML5 template](https://gist.github.com/jaxon/3913867)  
[HTML5 på kurswebben](https://twiggy.smutje.se/index.php/Anv%C3%A4nda_HTML5_semantiska_element#Varf.C3.B6r_semantiska_element.3F)  
[Flowchart för val av element](http://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf)  

Bland de här länkarna finns bra mallar som man kan utgå ifrån när man gör sin sida.  
Den sista, *flowcharten*, kan man kika på om man inte vet vilka element man ska använda.

### <a name="check">6. Kontrollera koden</a>
[W3C Validator](http://html5.validator.nu/)

## Steg 2. CSS

### Övergripande arbetsgång

1. [Skriv CSS som vanligt fast för mobil](#mobile)    
2. Skriv media queries längst ner
    * Skriv CSS för störres skärmar
    * Skriv bara med det som *skiljer sig åt*
3. Experimentera fram en bra breakpoint

### <a name="mobile">CSS för mobilen</a>
* [Exempel på mobil design](http://www.mobile-patterns.com/)
* [Vanliga fallgropar](http://bradfrost.com/blog/post/mobile-web-problems/)

