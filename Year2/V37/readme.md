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
    <tag id="id-namn"></tag>
    <tag class="klass-namn></tag>
I CSS,
    #id-namn{
        diverse: attribut;
    }
    .klass-namn{
        diverse: attribut;
    }
    
JavaScript funktioner:
definieras med
    function funktionsNamn(){
        vad ska hända?
    }
Det inom {} körs varje gång vi skriver "funktionsNamn();"

Ändring av HTML eller CSS?
document.getElementById("id").något_attribut = "värde";

Till exempel:
document.getElementById("box").style.background-color = "red";

Lägg till förklaring på math.random
