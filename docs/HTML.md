
# HTML

## Basic
```HTML
<!—kommentar -->

<br /> self closing, XHTML, bara för att vara kompatibel med XML
<b> och <strong> för bold
<em> och <i> för italic
<strong> och <em> för important //Strong = bold, em = italic
<p>This is regular text </p> //Kan radbrytas
<p><b> bold text </b></p>
<p><big> big text </big></p>
<p><i> italic text </i></p>
<p><small> small text </small></p>
<p><strong> strong text </strong></p>
<p><sub> subscripted text </sub></p>
<p><sup> superscripted text </sup></p>
<p><ins> inserted text </ins></p>
<p><del> deleted text </del></p>
<ol><li>Lista</li></ol>
<ul><li>oordnad lista</li></ul>
<hr /> Horizontal linje
```

## Tabeller
```HTML
<table> - Ny tabell
<tr> Ny tabellrad
<td> Ny tabellkolumn
<tbody> och <thead>, lägger huvud och kropp
I thead kan man använda <th> för titel
```

## Block
```HTML
<div> används för att styla block, kort för ”division”
<span> används för att styla t.ex. del av text
```


## Vettigheter
```HTML
<img src=”image.jpg” />
<a href=”http://google.se” target=”_blank”>, öppnas i ny flik eller ruta
<a href=”#anchor”>Link text</a> En anchor-tag. Hoppa på samma sida.
Ett anchor görs med <a name=”anchor”></a>, ex:
<a href=”#raptors”>Read more about raptors</a>
<a name=”raptors”></a>
```


## Formulär
```HTML
<form> för formulär
<form action=”en länk”></form>, redirectar någonstans när klart
method=”GET” eller ”POST” – POST syns inte i URL:en
<input type=”text” name=”username” />, eller t.ex. password
Fler typer är: 
radio – behöver value=”något”
chechbox – behöver value=”något”
submit – behöver value=”något”
```

## HTML5-Specifikt
```HTML
<nav> - används för att länka till andra sidor eller sektioner på en sida.
<article> - istället för <div> typ
<section> - För att dela av hemsidan
<aside> - relaterat men separerat från något innehåll

<audio src=”ljudfil.mp3” controls>Text om inte funkar</audio> alternativt
<audio controls> <source src=”ljud.mp3” type=”audio/mpeg”> </audio>
	Några attribut på audio är: autoplay controls loop

<video control> <source src=”video.mp4” type=”video/mp4”> Text om inte funkar </video>
	Samma attribut som ljudfiler.

<progress min=”0” max=”100” value=”35”></progress> - använd med javasript för dynamik
```

## Web storage
```
sessionStorage()
localStorage()

localStorage.setItem(”key1”,”value1”); - spara värde
alert(localStorage.getItem(”key1”)); - hämtar men även skriver ut (antalle JS)
localStorage.removeItem(”key1”); - raderar ett värde
localStorage.clear(); - raderar alla värden
Allt är samma med sessionStorage



```

## Diverse

```
Dragbar:
<img draggable=”true” /> - gör den dragbar, kräver JS.
navigator.geolocation.getCurrentPosition(); - GPS
```

## SVG
```
<svg width=”1000” height=”1000”> <circle cx=”80” cy=”80” r=”50” fill=”green” /> </svg> - gör en cirkel.
<rect>, <line>, <polyline>, <ellipse>, <polygon>
<animate> - för att animera
<path> - gör en path, ritar
<canvas> - gör en container för graphics
```

## Formulär
```HTML
Nytt är placeholders, de kan hinta på vad man ska skriva
<input type=”text” placeholder=”email@example.com” autofocus/>
autofocus används för att markera rutan direkt. required används när det måste fyllas i
<input id="cat" type="text" list="colors" />
<datalist id="colors">
<option value="Red">
<option value="Green">
<option value="Yellow">
</datalist> - Vettigt för förval
<select name="job">
<option value="">Select...</option>
<option value="SA">Safety</option>
<option value="FO">Food</option>
</select>

Fler input types är:
email, url, tel, color, date, datetime, datetime-local, month, number, range, search, time, week
Fler attribut är:
form, formaction, formenctype, formmethod, formnovalidate, formtarget, height, width, list, min, max, multiple, pattern(regex), placeholder, step
```

