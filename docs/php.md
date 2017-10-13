Allmäna regler
För att definiera en funktion används – function name(parameters){ def }
Variabler lever kvar även om php-taggen avslutas, in till nästa.
I echo konkateneras strängar med ”.” (punkt)

Klasser funkar som i Java – class Classname {}
För att göra nytt objekt används helt enkelt $variable = new Classname();
Instansvariablerna sparas överst i klassdeklarationen.
För att hämta värde skrivs - $objekt->variabel;

Konstruktor görs med – public function __construct(){}
Tilldelning av värde på variabel gör genom - $object->variabel = $variable
Istället för objektsvariabeln kan man i konstruktorn skriva $this

För att kalla på en metod skriver man - $obj -> method();

Extends funkar precis som i Java

Konstanter görs med – const variabel = värde;
Konstanter har ingen $
Åtkomst görs genom Class::constant
Statiska metoder koms åt på samma sätt – Class::funktion();

Associative Arrays, typ hashmap. skrivs – array(”nyckel” => värde, osv);
Åtkomst görs med $anArray[”nyckel”];
För att loopa genom – foreach($array as $nyckel[=>$värde]){}

PHP har superglobal variabler, dessa är - $_SERVER, $_GLOBALS, $_REQUEST, $_POST, $_GET, $_FILES, $_ENV, $_COOKIE och $_SESSION.

En viktig sådan variabel (eller faktiskt; array) är $_POST som används för att komma åt data från formulär. För att värden ska sparas i den används method=”post” i formuläret.
Används istället $_GET så kommer datan att ligga i URLen och är synlig för alla.
Används $_SESSION kommer datan sparas tills användaren stänger webbläsaren, detta kräver dock att ”session_start();” kallas på i början av koden. Kan avslutas med session_unset() eller session_destroy().
$_COOKIE funkar likadant, man kan använda isset($_COOKIE[’nyckel’]) för att ta reda på om den finns.

Filer öppnas med – fopen(”sökväg”, ”r/w/a…”), stäng med fclose(filvariabel)
Skriv till en fil med – fwrite(filvariabel, data)
En hel fil kan läsas med – file(”sökväg”) den sparas då i en array
Om vi vill ha mängden element i en array använder vi ju – count($array) samma om den är ifrån en fil

Tre lika-med-tecken, jämför även datatypen – ’1’ == 1 : true, ’1’ === 2 : false
För att jag ska SLUTA FUCKING GLÖMMA: array görs - $variable = array();

För att inkludera variabler i en sträng kan vi använda {} – ”Lite text {$var1} mer text”;

 
Klasser och objekt

I konstruktorn kan vi ha default values:

function __construct($var1, $var2, $var3 = 5, $var4 = ”Hej”){}

Parents koms åt med ”::”, alltså:
parent::__construct($var1, $var2);
Ta med detta i child-konstruktorn.

Funkar med alla metoder:
parent::someMethod();
Använd i en override metod, för att använda base-metoden.

Använd keywordet ”final” för att göra en klass un-inheritable eller för att göra en metod 
non-overridable.

Interceptor Methods:
Används för hantering av specialfall på objekt.
__get($property)	Undefined property is accessed
__set($property, $value)	Value assigned to und. property
__isset($property)	isset() is called on undefined property
__unset($property)	unset() is called on undefined property
__call($method, $arg_array)	Undefined method is called.

För att kopiera ett objekt används ”clone”:
$first = new someObject();
$second = clone $first; 
Funktion	Förklaring	Exempel
array();	Skapar en array	array(5,4,0,2);
array_push(invärde)	Stoppar in ett nytt värde	array_push($array, $value);
sort(invärde);	Sortera en array (tar även text)	sort($array);
rsort(invärde);	Sortera en array baklänges	rsort($array);
join(”text”,inlista);	Sätt ihop en lista med ”text” emellan	join(”:”, $array);
strtoupper(invärde)	Gör texten caps	
strtolower	Gör texten lower	
rand([min],[max])	Returnerar en random integer, max är inclusive	
mt_rand()	Se ovan	
count()	Returnerar längden på an array	
strlen()	Returnerar längden på en sträng	
		
		
		

 
Objektmetod	Förklaring	Exempel
is_a($objekt, ”Typ”)	Kolla om ett objekt är av en viss typ	
property_exists($objekt, ”egenskap”)	Kolla om egenskap finns	
method_exists($objekt, ”metod”)	Kolla om viss metod finns	
		
		
		
		

