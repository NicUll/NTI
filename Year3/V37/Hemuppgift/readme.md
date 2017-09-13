# Hemuppgift 1 
### Rörlig CSS och animeringar i p5

## Uppgiften
1. Skapa en meny
  * Tydlig grafisk meny, knapp-liknande.
  * Lägg till respons då muspekaren förs över en menyknapp
  * Responsen måste innehålla rörelse, men det måste inte nödvändigtvis  
  vara knappen som rör på sig. Kan exempelvis vara en liten boll som ramlar ner  
  på knappen. Så länge det är tydligt.
  * Om exempelvis skuggor eller rundade hörn används, tänk på om  
  det passar in eller inte. Använd inte för mycket "flashigt".
  * Minst tre, max sex knappar.
2. Gör en p5 animation
  * Det ska vara en rörelse/förändring som upprepar sig.
  * Det ska finnas minst tre saker som ändrar på sig,  
  behöver inte vara lika snabbt (kan alltså bli osynkat mot hur det började).
  * Tillåtet att använda andra p5 bibliotek än p5.js och p5.dom.js.
3. Placera meny och animation
  * Centrera p5 canvasen.
  * Placera menyn under canvasen.
  * Se till att de hänger ihop även om sidan ändrar storlek.
4. Gör animeringen interaktiv
  * Hämta in menyknapparna i er p5-kod.
  * Skriv funktioner för hur respektive animation ska ändras vid knapptryckning  
  på tillhörande knapp.
  * Koppla samman funktion och knapp så att funktionen kallas -> animation ändras,  
  vid knapptryckning.
  
  
## Teori

#### CSS

##### Hover
Selectorn ```:hover``` går inte bara att använda på ```<a>``` taggarna i CSS, 
den går att använda på vad som helst. Det som står innanför den selectorn kommer då att appliceras som  
stil när musen förs över elementet, och tas bort som stil när musen flyttas igen.  
Exempel, ändra färg från grön till röd på klassen "menu-item"
```css
.menu-item{
  background-color: green;
}
.menu-item:hover{
  background-color: red;
}
```

*Vilken egenskap som helst kan läggas in i hover, så man kan vara kreativ*.

##### Transition 
Transition används för att bestämma övergången mellan stilar.
```css
transition: property duration timing-function [delay];
```
property - Vilket attribut regeln ska gälla (exempelvis color, width, margin, etc.)
duration - Tiden hela övergången ska ta
timing-function - Ska det börja långsamt? Sluta fort? Gå lika fort hela tiden?
[delay] - Om man vill lägga till en fördröjning på starten

Vill man ha olika övergångar för olika element går det bra att skriva upp  
flera olika samtidigt, se bara till att komma-separera.
```css
transition: element1 duration1 timing-function1 [delay1], element2 duration2 timing-function2 [delay2];
```
*Fundera över vad som händer om man skriver samma element två gånger, men med olika delay, testa gärna.*  
[Läs mer om transitions här.](https://www.w3schools.com/cssref/css3_pr_transition.asp "W3 Schools Transitions")

##### Transform
En smidig CSS-egenskap är *transform*. Transform låter dig förändra utseende/plats/form  
på ett element, utgående ifrån elementets nuvarande egenskaper. Exempel: du kanske vill  
förstora en låda till dubbla sin storlek samt vrida den 45 grader, men vet inte hur stor lådan är eller  
dess nuvarande vinkel. 
```css
transform: scale(2,2) rotate(45deg);
```

#### p5.js
p5.js är ett javascript-bibliotek som förenklar vissa saker, som att rita, genom att ha fördefinierade funktioner  
vi kan använda. Officiell hemsida [http://p5js.org](http://p5js.org).

[Introduktionen från lektionen finns här.](https://docs.google.com/presentation/d/16S8WNefWnqZJhShyeTlebmYRF6i5zEyx0c8GtCximxo/edit?usp=sharing)

[Ladda ner](https://github.com/processing/p5.js/releases/download/0.5.14/p5.zip) biblioteket (alternativt använd [CDN-länkarna](https://cdnjs.com/libraries/p5.js)).

Utgå ifrån kodskeletten:
```html
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <title>Tree Demo</title>
    <script src="libraries/p5.js"></script>
    <script src="libraries/p5.dom.js"></script>
    <script src="sketch.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>


</body>
</html>
```

```javascript
//Här uppe ser ni till att skriva variabler som ska användas i hela dokumentet om ni har några sådanna.

//Skriv era funktioner, om de används i setup ska de skrivas innan setup, annars kan de stå efter setup, men innan draw.

function setup(){
  //Körs enbart en gång
}

function draw(){
  //Loopar hela tiden
}
```

All info som behövs hittar ni bland [koden vi använt på lektionen](../work), 
