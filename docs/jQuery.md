# jQuery

## Grunder

### Inkludera på hemsidan:
```html
<script src=”jquery.min.js”></script> <!-- jQuery -->
<script src=”application.js”></script> <!-- Min egna kod -->
```

jQuery används överlag med:
```javascript
jQuery(<code>); //eller
$(<code>);
```
## Välja saker i DOM-en
```javascript

/*Precis som CSS*/
$(”h1”); //Väljer alla h1
$(”#container”); //Väljer ID ”container”
$(”.articles”); //Väljer klassen ”articles”

$(”#destinations li”); //Väljer ”li” inuti ID ”destinations”.
$(”#destinations > li”); //Väljer bara ”li” som är direkta barn till ID ”destinations”.

$(”li:first”); //Väljer första ”li”

/*jQuery specifikt*/
$("element").first(); //Ger första elementet bland de hämtade
$("section").find("li"); //Hittar alla <li> i <section>
```

## Ändra/hämta info
```javascript
$(”h1”).text(); //Hämta
$(”h1”).text(”Ny text”); //Ändra

$("div").addClass("Klassnamn");

```

## Vänta på att dokumentet är redo:
```javascript
jQuery(document).ready(function(){
	<code>
});
//Korthand för detta är:
$(function() {
	<code>
});
```
