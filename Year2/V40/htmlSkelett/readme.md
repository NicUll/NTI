# HTML-Skelett


## Det statiska  

Skapa en sida som är för en restaurang. 
Börja med enbart HTML, alla taggar ska komma i logisk ordning, ingen CSS skall finnas med än så länge.

Det innehåll som ska finnas med är:  
* Header med titel
* Navigerings-meny som är under titeln
* [En bild från restaurangen](http://nicullman.se/webbutv/images.html)
* En liten text i bilden, "Mat Som Väcker Drömmar"
* En kort text om restaurangen
* En (mat)-meny
* Nyheter
* Kontaktinfo

Visa mig.

## Att bläddra på samma sida

Använd <a name="my-link"></a> för att skapa en länk på samma sida i ett dokument.  
För att komma till den länkade plats, gör en länk med href="#my-link", alltså:

```HTML
<!-- Inledande HTML, head osv -->

<a href="#bunnies">Hoppa till text om kaniner</a>

...
Massa text om helt andra saker  
...  

<a name"bunnies">Du bläddrar automatiskt hit i webbläsaren om du klickar på #bunnies-länken.</a>

```
