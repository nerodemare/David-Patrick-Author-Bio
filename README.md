# David Patrick Author Biography

This is a BIO WEB PAGE for the author David Patrick. This project for Code Louisville Class of May 2021 exemplifies rudimentary features in HTML, CSS, and JS. Below you will find examples of code that specifically impacted the minimalist design layout of the web page. Enjoy! 


## Features Implemented
(index.html - Lines # 14 thru # 25) ===> Import Bootstrap from a CDN, then use Bootstrap’s column system to organize content areas based on mobile or desktop views (cannot be used on the same page as the Flexbox/CSS Grid requirement above

```    
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
```
```
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
```
```
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
    integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
    crossorigin="anonymous"></script>
```
```
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
    integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
    crossorigin="anonymous"></script>
```
```
<script src="index.js"></script>
```

(index.html - Line # 234) ===> Show/Hide one or more content areas or elements on your site through clicking a button or some other user interaction - must be done with some JavaScript code.
```
    <button class="YesButton" id="YesButton" onClick="YesButton()">Absolutely! Just doing my part!</button>
    <button class="NoButton" id="NoButton" onClick="NoButton()">No way, you thieves!</button>
    <button class="MaybeButton" id="MaybeButton" onClick="MaybeButton()">I'm feeling wishy-woshy</button>
```

(index.js - Line # 34) ===> Create at least 3 variables (var, const, or let), set their values in JavaScript, and display the values somewhere on your page.

```
function NoButton() {
    var str = "That wasn't very cash money of you . . .";
    var result = str.italics();
    document.getElementById("NoButton").innerHTML = result;
    document.getElementById("YesButton").innerHTML = "Absolutely! Just doing my part!";
    document.getElementById("MaybeButton").innerHTML = "I'm feeling wishy-woshy.";
}
```
```
function MaybeButton() {
    var str = "Yeah, whatever. Sure.".italics();
    var result = str.italics();
    document.getElementById("MaybeButton").innerHTML = result;
    document.getElementById("YesButton").innerHTML =  "Absolutely! Just doing my part!";
    document.getElementById("NoButton").innerHTML = "No way, you thieves!";
}
```

(index.html - Lines 97 & 111) ===> Use Bootstrap COLUMN classes to create a two column layout on larger screen sizes and a single layout on smaller screen sizes.

```
<div class="col-xl-6">
```

I implemented a toggle menu using the following Javascript to toggle a class on the menu: 

```
function ToggleMenu() { 
    const menu = document.getElementById("menu"); 
    menu.classList.toggle("hide"); 
}
```

The menu defaults to a column layout on a mobile screen, then toggles to a row layout on larger screens. 


## Setup Instructions 
Open Index.HTML file in a browser. 

