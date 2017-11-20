# Programmering

## Övningar

### Kom igång
* Öppna en ny flik i Chrome
* Skriv "about:blank" utan citattecken som adress i adressfältet
* Öppna utvecklarkonsolen genom att knappa in ```CTRL-SHIFT-J```.
* Skriv din kod rakt i konsolen  

För att tömma konsolen tryck på ```CTRL-L```.  
För att göra radbryt utan att köra programmet, tryck på ```SHIFT-ENTER```.  
För att bläddra bland tidigare skrivna kommandon och slippa skriva om dem, använd ```PIL UPP```  

### Övning 1

Få konsolen att skriva ut ditt namne med hjälp av: 
```javascript 
console.log();
```

log() är ett exempel på en funktion/metod. Den kör på objektet "console".

### Övning 2

Spara nu ditt namn i en variabel istället och skriv ut ditt namn med hjälp av:
```javascript
console.log(ditt-variabel-namn);
```
Vad är tillåtna variabelnamn? Ta reda på det.

### Övning 3

Skriv en funktion som skriver ut ditt namn åt dig. Kom ihåg att en funktion definieras med:
```javascript
function funktionsNamn([indata]){
  //kod som ska köras
}
```
Kalla på funktionen, det görs ju med:
```javascript
funktionsNamn([data-till-funktionen]);
```

### Övning 4

Den här övning är nästan exakt som övning 3, förutom att nu ska inte funktionen ta in och sedan skriva ut namnet, utan returnera namnet.
Definiera  funktionen som innan, men den ska inte ta något invärde. Däremot ska den returnera ditt namn.
Kalla på funktionen på två sätt:

```javascript
/* Sätt ett */
var mittNamn = minNamnFunktion();
console.log(mittNamn);

/* Sätt två */

console.log(minNamnFunktion());
```

## Guider, info, tips

[A Simple, Comprehensive Overview of Javascript – BetterExplained](https://betterexplained.com/articles/the-single-page-javascript-overview/)  
[JavaScript Syntax - W3Schools](https://www.w3schools.com/js/js_syntax.asp)  
[Javascript introduktion - kurswebben](https://twiggy.smutje.se/index.php/Javascript_introduktion)

## Övrig övning

[Länkar till övningssidor](V45/practice.md)
