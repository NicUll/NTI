# Programmering

## Övningar

[Övning 1](#Övning-1), [Övning 2](#Övning-2), [Övning 3](#Övning-3), [Övning 3.5](#Övning-35),  
[Övning 4](#Övning-4), [Övning 5](#Övning-5), [Övning 6](#Övning-6)   
  
[Teorisammanfattning 1](#teorisammanfattning-1)  
  
[Övning 7](#Övning-7), [Övning 8](#Övning-8), [Övning 9](#Övning-9), [Övning 10](#Övning-10)   
[Övning 11](#Övning-11)  
  
[Teorisammanfattning 2](#teorisammanfattning-2)  
  
[Uppgift 1](Uppgift-1)


### Kom igång
* Öppna en ny flik i Chrome
* Skriv "about:blank" utan citattecken som adress i adressfältet
* Öppna utvecklarkonsolen genom att knappa in ```CTRL-SHIFT-J```.
* Skriv din kod rakt i konsolen  

För att tömma konsolen tryck på ```CTRL-L```.  
För att göra radbryt utan att köra programmet, tryck på ```SHIFT-ENTER```.  
För att bläddra bland tidigare skrivna kommandon och slippa skriva om dem, använd ```PIL UPP```  
***

### Övning 1

Få konsolen att skriva ut ditt namn med hjälp av: 
```javascript 
console.log();
```

log() är ett exempel på en funktion/metod. Den kör på objektet "console".
***

### Övning 2

Spara nu ditt namn i en variabel istället och skriv ut ditt namn med hjälp av:
```javascript
console.log(ditt-variabel-namn);
```
Vad är tillåtna variabelnamn? Ta reda på det.
***

### Övning 3

Skriv en funktion som skriver ut ditt namn åt dig. Kom ihåg att en funktion definieras med:
```javascript
function funktionsNamn(){
  //kod som ska köras
}
```
Kalla på funktionen, det görs ju med:
```javascript
funktionsNamn();
```
***

### Övning 3.5

Skriv en funktion som tar in ditt namn och skriver ut det åt dig:
```javascript
function funktionsNamn(inData){
  //kod som ska göras, gör saker med inData
}
//Kalla på den med

funktionsNamn("Nic");
```
***

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

Vad är skillnaden? Blir det något skillnad rent praktiskt?
***

### Övning 5

Skriv en funktion som tar in ett tal, och returnerar talet + 10.

```javascript
>numPlusTen(30); 
<-40
```
***

### Övning 6

Skriv en funktion som tar in två tal, och returnerar summan av dem.

```javascript
>multiply(5,9);
<-45
```
***

## Teorisammanfattning 1

Skriv ut saker till konsolen med ```console.log(text här);```  
Du kan skriva ut både ren text och variabler.

En variabel skapas med ```var minVariabel = ettVärde;```  
Exempel på olika variabler:  
```javascript
var liteText = "Hallå där"; //String
var ettTal = 46; //Number
var enLista = ["apa",49,"egon"]; //Array
var enBoolean = true; //En boolean
```

En funktion skapas med ```function funktionsNamn([data-in]){saker att göra}```  
Man måste inte ha med "in-data", det kan vara en funktion utan det.  
Till exempel såhär kan funktioner se ut: 
```javascript
function sagHej(){
  console.log("Hej");
}

function plussa(tal1, tal2){
  var summa = tal1 + tal2;
  console.log(summa);
}

function raknaSkatt(lon){
  var skatt = lon*0.3;
  return skatt;
}
```
Om vi skulle köra funktionerna skulle vi få följande output:
```javascript
>sagHej();
Hej

>plussa(5,8);
13

>console.log(raknaSkatt(20000));
6000
```

### Övning 7

Nu ska du få göra en lista, en lista skapas med hakparenteser; \[ och ].
Initiera en lista med 
```javascript
var minLista = [];
```
Du har nu gjort en tom lista. Pröva att lägga till värden med:
```javascript
minLista.push("apa");
```
Listan kommer nu se ut såhär:
```minLista = ["apa"]```

Det går lika bra att från början fylla i värden också:
```javascript
enAnnanLista = ["en","lista","med","olika","värden",1,8]
```

Du kommer åt listvärden med:
```javascript
enAnnanLista[0];
<-"en"
enAnnanLista[4];
<-"värden"
```
Tänk på att listor börjar från 0.
***

### Övning 8

Mera listor! 
* Skapa en lista med minst två objekt/element i sig.
* Fyll på listan med push, stoppa in minst två värden till  

Du ska nu ta reda på hur många element det är i listan. Skriv 
```javascript
listansNamn.length;
```
För att få veta hur lång listan är.
***

### Övning 9

Skriv en funktion där du skickar in en lista och den returnerar längden på listan.
```javascript
>var enLista = ["a","banan","äpple","etc"]
>listLength(enLista);
<-4
```
***

### Övning 10

Text går att sätta ihop med + (plus) tecknet.  
Pröva exempelvis:
```javascript
console.log("Hej " + "där!");
```
Det går också lika bra att skriva med en variabel istället för ren text:
```
var ettNamne = "Nic";
console.log("Hej " + ettNamn);
<-Hej Nic
```

Experimentera med att blanda variabler och ren text.   
Går det att spara ihopsatta textsträngar i en ny variabel?
***


### Övning 11

Skriv en for-loop.
En foor loop följer följande "regler":
for(vad-görs-först;kör-medan-detta-är sant;gör-detta-efter){
***

## Teorisammanfattning 2


### Uppgift 1

Skapa en liten anteckningsbok.
* Gör en tom lista.
* Skapa en funktion som tar emot en lista, och en text, och lägger till texten i listan. Kalla den "addNote".

Så om du har listan  
myNotes = [];  
Så ska man kunna köra
```javascript
addNote(myNotes, "Köpa mjölk!");
```
Och ett listelement med texten "Köpa mjölk!" ska läggas till.
***

## Guider, info, tips

[A Simple, Comprehensive Overview of Javascript – BetterExplained](https://betterexplained.com/articles/the-single-page-javascript-overview/)  
[JavaScript Syntax - W3Schools](https://www.w3schools.com/js/js_syntax.asp)  
[Javascript introduktion - kurswebben](https://twiggy.smutje.se/index.php/Javascript_introduktion)

## Övrig övning

[Länkar till övningssidor](V45/practice.md)
