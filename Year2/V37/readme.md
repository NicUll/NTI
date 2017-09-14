# Sammanfattning vecka 37

## Lite användbar kod

### HTML

|Tagg|Kommentar|Typiska Attribut|
|----|---------|----------------|
|```<div>```|Div som i division, vanligt att gruppera element genom att innesluta dem i "div"ar.| Inga specifika|
|```<a>```|Anchor-element. Används för länkar.|href="url-att-länka-till", <br> target="&#95;blank"(öppna i ny flik/sida)|



### CSS
```css
text-decoration: none; /*Ta bort underline på länkar*/
line-height: 2em; /* Ändra radavstånd */
```

Klasser och ID:  
I HTML, 
```html
    <tag id="id-namn"></tag>
    <tag class="klass-namn></tag>
```
I CSS,  
```css
    #id-namn{
        diverse: attribut;
    }
    .klass-namn{
        diverse: attribut;
    }
```
### JavaScript
`console.log("Text att skriva ut");`  
Ovanstående funktion kommer vara användbar under programmeringens gång, då det är ett bra sätt att felsöka kod på.
För att se utskriften som blir av console.log, öppna javascript-konsolen i webbläsaren. Detta göra genom att trycka in `ctrl + skift + j` i Chrome, alternativt kan man trycka på `F12` och sedan välja console.

If-satsen:
```javascript

    Det är sant att fem är större än tre. Det är sant att jag heter "Nic". Det är falskt att jag äger en Mac.  
    Hur använder vi oss av sådant här för att få liv i sidan?

    if(testValue){ //testValue är då något som ska vara sant eller falskt
        //Kör det här om det ovanför är sant
    }
    //Fortsätt här nere när vi är klara.
    
    //Vi kanske undrar vad som är störst, 13/8 eller 19/5
    //In i en if så vet vi!  
    
    if(13/8 > 19/9){
        console.log("13/8 är större än 19/9"); //Skrivs bara ut om 13/8 ÄR större än 19/9.
    }
    
    //Men om 19/9 är störst då? Och vi vill berätta det? Perfekt med en "else"
    if(13/8 > 19/9{
        console.log("13/8 är större än 19/9");
    }
    else{
        console.log("19/9 är större än 13/8"); //Körs bara om if-satsen inte var sann
    }
```

While-satsen:
```javascript
    while(testValue){ //Testvalue är, precis som för en if, något som är sant eller falskt.
        //Den här koden körs om och om igen tills testValue inte längre är sann.
    }
    //Det är nödvändigt att det som kollas om det är sanning eller inte, uppdateras på något sätt/ändrar värde. Annars kommer vi vara fast i while-loopen för alltid!  

//Tex:
printAmount = 0;
function outPutHello(){
    while(printAmount < 6){
        console.log("Hejsan! "); /
        printAmount++; //Ökar printamount med +1
    }
}

```

For-satsen:
```javascript
    For används för att stega igenom innehållet i saker, som en lista.
    for(var number=0;number<4;number++){
        //Först gör vi variabeln number, sätter den till noll.
        //Sedan säter vi ett slutvärde där for ska sluta, tex innan fyra
        //Sedan bestämmer vi hur number ska förändras. 
        //number++ är detsammma som att öka number med +1.
        
        //Kod här inne körs
        console.log("Vi är på print omgång nummer " + number);
    }
```

Funktioner definieras med:
```javascript
    function funktionsNamn(){
        vad ska hända?
    }
```
Det inom {} körs varje gång vi skriver "`funktionsNamn();`"

Ett exempel:  
```javascript
    function countToTen(){
        for(var x=1; x<11; x++){
            console.log("Nummer " + x);
        }
    }
    //och sedan kör vi
    countToTen();
    countToTen();
    
    //Blir väl mest yrt?

Ändring av HTML eller CSS?
Läs gärna [https://www.w3schools.com/js/js_htmldom.asp](här) om DOM.
JavaScript håller hela tiden koll på vår HTML, och alla taggarna är bara objekt i dokumentet(hemsidan).


document.getElementById("id").något_attribut = "värde";
document- vår html kod
getElementById("id") - en metod. Ger oss ett javascipt-oject.
  På detta objekt kan vi förändra saker eller hämta uppdateringar iaf.
.något_attribut - vi väljer ut ett visst attribut. Vad vill vi veta eller ändra på?
"värde" - Det nya värdet som vi ska ändra till.

Till exempel:
document.getElementById("box").style.background-color = "red";
Föutsätter att något med id "box" ens finns.

math.random();
-  genererar slumpsiffra mellan 0 till 1
