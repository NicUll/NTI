# HTML-Skelett


## Det statiska  

Skapa en sida som är för en restaurang. 
Börja med enbart HTML, alla taggar ska komma i logisk ordning, ingen CSS skall finnas med än så länge.

Det innehåll som ska finnas med är:  
* Header med titel
* Navigerings-meny som är under eller över titeln, valfritt, men i headern.
* [En bild från restaurangen](http://nicullman.se/webbutv/images.html)
* En liten text i bilden, "Mat Som Väcker Drömmar"
* En kort text om restaurangen
* En (mat)-meny
* Nyheter
* Kontaktinfo

Visa mig.

#### Texten om restaurangen  
Välkommen till Gräddhyllans Restaurang, där klassiska smaker får nytt liv. Grundat 1978 av kocken
Jan Grafham, med visionen att tillaga enkla rätter i världsklass. Gräddhyllan har sedan starten befunnit sig på vackra Skeppsholmen,
med en magiskt utsikt över vattnet. Titta gärna på vår meny(länka till menyn) nedan och låt dig frestas. 

#### Meny
Oxfilé  
Oxfilecarpaccio med ruccolasallad, pinjenötter, hyvlad parmesanost sam balsamicocreme. 135:-

Raggmunk  
Stekfläsk med raggmunk, koktpotatis & löksås. 89:-

Schnitzel
Ostschnitzel med kryddsmör & örtslungad potatis. 120:-

Högrev
Lättstekt högrev från Alpoxe med rosmarinsky, späda morötter och potatisgratäng

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
