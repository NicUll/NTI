Inkludera på hemsidan:
<script src=”jquery.min.js”></script> //jQuery
<script src=”application.js”></script> //Min egna kod

jQuery används överlag med:
jQuery(<code>);

Välj css-element med:
jQuery(”h1”); eller $(”h1”); //Väljer alla h1
$(”#container”); //Väljer ID ”container”
$(”.articles”); //Väljer klassen ”articles”

$(”#destinations li”); //Väljer ”li” inuti ID ”destinations”.
$(”#destinations > li”); //Väljer bara ”li” som är direkta barn till ID ”destinations”.

$(”li:first”); //Väljer första ”li”

Text kan ändras/hämtas med: 
$(”h1”).text(); //Hämta
$(”h1”).text(”Ny text”); //Ändra

Vänta på att dokumentet är redo:
jQuery(document).ready(function(){
	<code>
});
