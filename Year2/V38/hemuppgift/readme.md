# Hemuppgift v38

### Uppgiften

Skapa en sida som beter sig olika beroende på skärmstorlek. Det räcker med att
sidan består av en enda sak, så som en textrad eller bild, men får gärna innehålla fler saker.

När man tittar på sidan på en vanlig datorskärm, så ska den utvalda egenskapen vara på ett sätt, exempelvis en röd text.  
När man tittar på sidan med en smalare skärm, så ska den utvalda egenskapen vara på ett annat sätt, exempelvis att texten är blå.

#### Krav
* Man ska använda sig av media queries.
* Sidans stil/layout ska vara beroende av fönstrets bredd.
* Det behöver inte finnas något mer på sidan än det element ni ändrar någon egenskap på. 
* Ni måste separera HTML och CSS, ingen CSS direkt i er HTML.

### Teori

Ni kan läsa mer om media queries på [W3 Schools](https://www.w3schools.com/css/css3_mediaqueries.asp) och på [Mozilla Developer Pages](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries).

Det grundläggande att använda är: 

```CSS
/*Antingen media queries direkt i er CSS */
@media not|only mediatype and (expressions) {
    CSS-Code;
}
/*Mer konkret*/
@media screen and (min-width: 500px){
  .myBox{
    some: thing;
   }
}
```

```HTML
<!--Eller direkt i er HTML genom att använda olika stilmallar beroende på skärmstorlek -->
<!DOCTYPE html>
<html>
<head>
  <title>Media Queries</title>
  <link rel="stylesheet" media="screen and (min-width: 500px)" href="style.css">
</head>
<body>
</body>
</html>

```

