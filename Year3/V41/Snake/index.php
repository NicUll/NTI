<?php
/**
 * Created by PhpStorm.
 * User: nic.lundmarkullman
 * Date: 2017-10-27
 * Time: 13:02
 */

include_once "config.php";
include_once "player.php";

$playerList = array();

try {
    $DBConn = new PDO("mysql:host=$servername;dbname=games", $username, $password);
    $DBConn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $DBConn->query("SELECT * FROM snake ORDER BY score DESC LIMIT 3");
    foreach($stmt as $row){
        $tempPlayer = new Player($row['name'],$row['score']);
        array_push($playerList, $tempPlayer);
    }




} catch (PDOException $e) {
    echo "Connection failure: " . $e->getMessage();
}

?>


<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <title>Snake</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js"></script>

    <script src="script/snake.js"></script>
    <script src="script/game.js"></script>
    <script src="script/main.js"></script>
    <link rel="stylesheet" href="style.css">

</head>
<body>

<div id="highscore">
    <?php
    foreach($playerList as $player){

    }
    ?>

</div>

<footer>
    <p class="author">By Nic Ullman</p>
</footer>
</body>
</html>
