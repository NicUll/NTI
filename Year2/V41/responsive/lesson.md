# HTML - Skelett

### W3C standard
* [Innehållstyper](http://w3c.github.io/html/dom.html#kinds-of-content)
* [Sektioner](http://w3c.github.io/html/sections.html#sections)

Följer man ovanstående ramar kan det inte bli fel, då det är W3C, eller, *"World Wide Web Consortium"* som utvecklat HTML.
Dock något saklig text.

### Tips och exempel
* [HTML och CSS template](https://tutorialzine.com/2010/02/html5-css3-website-template)
* [HTML5 template](https://gist.github.com/jaxon/3913867)
* [HTML5 på kurswebben](https://twiggy.smutje.se/index.php/Anv%C3%A4nda_HTML5_semantiska_element#Varf.C3.B6r_semantiska_element.3F)
* [Flowchart för val av element](http://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf)

Bland de här länkarna finns bra mallar som man kan utgå ifrån när man gör sin sida.
Den sista, *flowcharten*, kan man kika på om man inte vet vilka element man ska använda.

# CSS -

### Namngivning och selektorer
* [Hur namnger man css-klasser](http://bdavidxyz.com/blog/how-to-name-css-classes/)
* [Selektorer](https://www.w3schools.com/css/css_syntax.asp)

Inga regler, men tips på namngivning. 
Även guide i hur man väljer specifika element för styling.

### Styling
* [Text, W3 Schools](https://www.w3schools.com/css/css_text.asp)
* [Text, Mozilla](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)
* [Boxar](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes)

Textstyling samt allmän styling av element.

### Layout
#### Flexbox
* [CSS-tricks guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Flexbox på kurssidan](https://twiggy.smutje.se/index.php/Styla_horisontell_placering_med_CSS_flexbox) 
* [Mastering Flexbox - interaktiv sida](http://webdesignerwall.com/tutorials/master-css-flexbox-5-simple-steps)

Att föredra när man stället in layouten, smidig och enkel.


#### Float
* [CSS-tricks float](https://css-tricks.com/almanac/properties/f/float/)
* [Kurssidans](https://twiggy.smutje.se/index.php/Skapa_snyggt_bildgalleri)

Kan vara användbar för att styra innehållets flöde.


## Responsiv

* [Viewport](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag) - Måste finnas med.  
Använd som standard ```HTML <meta name="viewport" content="width=device-width, initial-scale=1">```
* [Responsiv layout](https://twiggy.smutje.se/index.php/Skapa_en_webbsida_med_responsiv_layout) - Vägledning och tips för media queries och vad man ska tänka på vid design för olika enheter.

Det är bara det enklaste som ska användas, inga avancerade media-queries behövs!

```css
/*definiera CSS som vanligt här, anpassa för mobil först*/

@media (min-width: 801px){
  /*Kod för datorskärmar*/
}

@media (min-width: 601px) and (max-width: 800px){
  /*Kod för tablets om man har det*/
}

```
Anpassa min och max lite efter vad som funkar för just din sida.


## Webbutveckling allmänt

* [God praxis för webbutveckling](https://twiggy.smutje.se/index.php/God_praxis_f%C3%B6r_webbutveckling) - Lite om kommentarer, namngivning, etc.

Hur ni ska namnge filer etc. struktur på projektet.


