Kommandon skrivs med versaler.

CREATE TABLE table_name (column_1 data_type, column_2 data_type);
CREATE TABLE table_name(column_1 data_type PRIMARY KEY, column_2 data_type); - PRIMARY KEY ser till att kolumnen inte har NULL som värde, och att varje kolumn har ett unikt värde.

INSERT INTO table_name (id, name, age) VALUES (id_value, id_name, id_age); - den första parentesen väljer vilka kolumner datan ska in i.
SELECT * FROM table_name; - visar värdena i tabellen. * betyder vad som helst (alla)
Används istället t.ex. – SELECT name FROM table_name; så hämtas kolumnen name.
UPDATE table_name SET column_name = value WHERE id = id_value;
ALTER TABLE table_name ADD COLUMN column_name data_type;
DELETE FROM table_name WHERE column_name IS value (ex. NULL);
SELECT DISTINCT column_name FROM table_name; - visar inte dubletter

Använd WHERE när vi har krav på datan, som column_name > 8, eller liknande.
Vanliga operatorer är =, !=, >, <, >=, <=

SELECT * FROM movies WHERE name LIKE ’Se_en’; - väljer värden från name som börjar på ”Se” och slutar på ”en”. Karaktären ”_” (underscore) betyder vilken karaktär som helst.
LIKE istället för ”=” gör att det är case-insensitive.
Använd ”%” (procenttecken) för att välja godtyckligt antal karaktärer, vilket som.

Använd BETWEEN för att få värden mellan två värden;
SELECT * FROM movies WHERE name BETWEEN ’A’ AND ’J’;
SELECT * FROM movies WHERE year BETWEEN 1990 AND 2000;
SELECT * FROM movies WHERE column IN (1,2,4); - Om värdet finns i listan.
Släng in ett AND efter för att ha fler val.
OR kan användas för att få resultat med antingen eller.

SELECT * FROM movies ORDER BY imdb_rating DESC; - sorterar resultatet efter imdb_rating
ASC funkar också för sortering. 
Lägger vi till LIMIT 3 t.ex., så kommer endast tre resultat att returneras.

SELECT COUNT(*) FROM table_name; returnerar antalet element(rader) i en tabell
Man kan använda kolumn_namn istället för stjärna, räknar då antalet rader där värdet inte är NULL

Det går utmärkt att använda WHERE efter COUNT, den räknar då enbart de rader som stämmer in på de restriktioner man ställt.

GROUP BY kan användas för att gruppera likadana data med varandra
SELECT price, COUNT(*) FROM fake_apps GROUP BY price;

SUM(kolumn) – summerar värdena i en kolumn.
MAX(kolumn) – returnernar maxvärdet i en kolumn.
MIN(kolumn) – returnerar minvärdet i en kolumn.
AVG(kolumn) – returnerar medelvärdet av en kolumn.
ROUND(value, d-places) – avrundar till specificerat antal decimaler. Utan d-places blir det en INT.

LEFT JOIN – kräver inte att uttrycket som följer stämmer, LEFT innebär bara att det är tabellen till vänster (den först skrivna) som avses. Man kan alltså även skriva RIGHT JOIN.

AS används för att hämta kolumninfo och ge det ett alias, SELECT column_id AS ’Alias’

SELECT CONCAT(column1, ’,’ , column2) FROM table; - sätter ihop kolumnerna. Funkar bra att använda ihop med ’AS’, för att ge den nya kolumnen ett namn.

Det går att stoppa in matte i queryn:
SELECT column1, column2, column1-x AS new_name FROM table;

SELECT column1, column2 FROM table_name; - välj flera kolumner,

ORDER BY column_name ASC/DESC; - sortering.

LIMIT num_limit OFFSET num_offset;

INNER JOIN table1 ON table2.column_name = table1.column_name; - Väljer de kolumner i två tabeller som matchar kolumnen ”column_name”.

LEFT JOIN och RIGHT JOIN tar med data oavsett om det finns i den andra tabellen, ex:
SELECT * FROM table_A LEFT JOIN table_B ON table_A.column_name = table_B.column_name;
Tar med columner från tabell A oavsett om matchning finns i tabell B.
FULL JOIN – tar med allt oavsett om matchning finns.

AGG_FUNC(column_or_expression) :
COUNT(* [alt. column_name])
MIN(column), MAX(column), AVG(column), SUM(column)


GROUP BY column – Grupperar rader med samma värde i en viss kolumn.
HAVING – sätts efter GROUP BY för att filtrera grupperingen.

  
Bra exempel

SELECT name, category, MAX(downloads) FROM fake_apps GROUP BY category;
Return the names of the most downloaded apps in each category.

SELECT name, category, MIN(downloads) FROM fake_apps GROUP BY category;
Return the name of the apps that have been downloaded the least number of times in each category.

SELECT * FROM albums JOIN artists ON albums.artist_id = artists.id;
Används när vi har två tabeller. Visar alla kolumner men väljer bara de rader där albums.artist_id är densamma som artists.id.

SELECT * FROM albums LEFT JOIN artists ON albums.artist_id = artists.id;






 
SQL i PHP

$conn = new mysqli($servername, $username, $password, [$dbname]);

Kolla kontakt
if ($conn->connect_error){
	die(”Meddelande” . $conn->connect_error); }
echo ”Connected successfully”;

$sql = ”SQL kod;”;
Appenda mer med
$sql .= ”SQL kod;”;

Sätt in – 
if ($conn->query($sql) === TRUE){
	echo ”funkade fint”; }
else{
	echo”Gick fel”; }
$conn->close();
