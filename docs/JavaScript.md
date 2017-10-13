Kommentarer skrivs med ”//”, snedstreck, dubbla.

Compares görs med >,< ==, >=, <= osv
Dubbla ”==” används för enbart data-jämförelse, tripla ”===” används för även datatyps-jämförelse.
Logical operators are: &&, || and !

If-else-satser görs precis som vanligt: if(evaluation){ do } else if(evaluation){ do } else{ do }

Modulo görs som vanligt med ”%”.

Variabler deklareras med:
var varName = data;

Funktioner deklareras med: 

var varName = function(parameters, more_parameters){
	function stuff;
};

Kalla på funktioner med: varName(parameters);
Strängar kan konkateneras med ”+”, t.ex: ”Hej på dig ” + varName + ” kul att ses!”.

Return funkar precis som vanligt.

Variable-scope är där de blir definierade. Om man använder var igen innanför t.ex. en funktion så kommer inte den globala variabeln att användas, utan den blir omdefinierad.

For-loopar: 
for (var i=x; i<y; i++){
	do stuff;
}

while(condition){
	do stuff;
}
do{ } while(condition);

switch(var){
	case value:
		do this;
		break;
	default:
		break;
}

arrays: 
var name = [”String”, 4, ”Hej”, 567];
Koms åt med name[i]; använd arrayName.push(data); för att sätta nytt i slutet.
Strängar kan ”wrapas” med ”\”, alltså skrivas på ny rad sen.
 
Objekt skapas med:

var myObject = { key: value, key: value };	//Object literal
Eller:
var myObj = new Object();	//Dåligt, constructor notation
myObj[”key”] = value; alt ->
myObj.key = value;

for(var myVar in object/array){ do stuff }

Åtkomst med: 
myObj.key;
myObj[”key”];

Metoder skapas med:
myObj.methodName = function(parameters){ definition };
Kallas med:
myObj.methodName(parameters);

För att göra det allmänt för klassen skrivs:
var methodName = function(parameters) {
	this.property = value;
	etc.
};
Då måste även:
myObj.methodName = methodName; användas.

Konstruktor skapas med:
function className(param, [param,…]){
	this.property = param;
	etc. variabler

	metoder
}
var bob = new className(param, [param,…]);
 

”sträng”.length	Längd på sträng (eller array)
confirm(”meddelande”);	Ger en confirm-box
prompt(”meddelande”);	Begär textinfo
console.log(”Meddelande”)	Skriver till konsolen
”sträng”.substring(x, y)	x start chopping, y finish chopping (non-inc)
Math.random()	Nummer mellan 0-1.
Math.floor(float)	Gör till integer
isNaN(data)	Kollar om det inte är en int.
.toUpperCase()	Gör stort
.toLowerCase()	Gör smått
	
	
	
Funktioner
