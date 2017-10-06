# CSS Presets

## Starttema

Vår restaurang-sida har nu en logisk struktur som går att följa, då kan vi börja arbeta med stilmallen.

#### Typsnitt och huvudfärg
Bestäm först två typsnitt som du vill använda på länken för typsnitt nedan. 
Bestäm dig sedan också för ett färgtema och ställ in i body de saker som ska gälla överallt.
Typsnitt, text-storlek, bakgrundsfärg, texthöjd, etc...

*Vad är syftet med detta?*  
Jo, du även om du inte definierat stilen för alla specifika element (p, div, h1, etc) så har
du ett enhetligt tema för din text på sidan.

#### Specifika färginstillningar

Börja sedan använda dina andra färger i temat och placera dem i relevanta klasser enligt nedan:

Ibland kan det vara en bra idé att ha några standardklasser i CSS som alltid beter sig på samma sätt.  
Några exempel kan vara .left, .right, .food-menu, .food-menu-item, etc.  
Där då till exempel .left är standarden för att placera ett objekt till vänster på sidan.

```CSS
.left {
  display: float;
  float: left;
  }
  
 .article {
   background-color: #330F77;
   border-color: #220066;
 }
```

Fundera över vilka default-stilar som kan behövas till vår matmeny.
Hur vill du gruppera ihop olika element på sidan. 
Ett element kan ha flera olika klasser.

Anpassa bara för mobil för nu.

## Några CSS kodsnuttar

```CSS
/*Om ni har tallriksbilden i header. Funkar dock att använda samma kod men i annan tagg.*/
header{
    position: relative;
    min-height: 50%; /*Detta är alltså 50% av den behållaren den befinner sig i, i detta fall <body>*/
    background-position: center;
    background-size: cover;
    background-image: url(img/restaurant.jpg);
}

/*Om ni har menylänkarna i en behållare med klass "menu", och vill ha
länkarna på rad, jämnt utspridda*/
.menu{
    width: 100%; 
    display: flex;
    flex-flow: row; /*Lägger dem i rad*/
    justify-content: space-around; /*Lägger elementen i så de sprids jämnt.*/
    
}

/*En klass som kan användas för att centrera element i sin behållare*/
.center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%); /*Flyttar så att referenspunkten inte blir övre vänstra hörnet, utan mitten på bilden.*/
}

```

## Skapa en responsiv meny

Följ guiden och gör en första meny, använd dina temafärger.  
https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_horizontal_responsive

Gör på en egen sida, testa. Visa mig.



## Skapa en matmeny-post

Bestäm hur en artikel på matmenyn ska se ut, har den ska visas upp.
Gör på en egen sida. Följ typsnitt och färg. Visa mig.



## Sätt ihop

Stoppa in dem i din sida, se till att dem beter sig korrekt.
Anpassa bara för mobil än så länge. 


### Länkar

[Typsnitt](https://fonts.google.com/)
[Färgtema](http://paletton.com/#uid=10H0u0kllllaFw0g0qFqFg0w0aF)
