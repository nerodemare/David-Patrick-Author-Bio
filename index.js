function HomeButton () {
    document.getElementById("home-drop-down").classList.toggle("show");
}

function NewsButton () {
    document.getElementById("news-drop-down").classList.toggle("show");
}

function ContactButton () {
    document.getElementById("contact-drop-down").classList.toggle("show");
}

function AboutButton () {
    document.getElementById("about-drop-down").classList.toggle("show");
}

function TestButton () { 
    document.getElementById("test-drop-down").classList.toggle("show");
}

function ChangeLogo () {  
    document.getElementById("Logo").src="David_Patrick_black_GIF_transparent_background_rev.gif";
    setTimeout(ChangeLogoBack, 2000);
}

function ChangeLogoBack () { 
    document.getElementById("Logo").src="Logo 2.jpg"
}


//Create at least 3 variables (var, const, or let), set their values in JavaScript, and display the values somewhere on your page


function YesButton() {
    var str = "Sucker!";
    var result = str.italics();
    document.getElementById("YesButton").innerHTML = result;
    document.getElementById("NoButton").innerHTML = "No way, you thieves!";
    document.getElementById("MaybeButton").innerHTML = "I'm feeling wishy-woshy.";
}

function NoButton() {
    var str = "That wasn't very cash money of you . . .";
    var result = str.italics();
    document.getElementById("NoButton").innerHTML = result;
    document.getElementById("YesButton").innerHTML = "Absolutely! Just doing my part!";
    document.getElementById("MaybeButton").innerHTML = "I'm feeling wishy-woshy.";
}

function MaybeButton() {
    var str = "Yeah, whatever. Sure.".italics();
    var result = str.italics();
    document.getElementById("MaybeButton").innerHTML = result;
    document.getElementById("YesButton").innerHTML =  "Absolutely! Just doing my part!";
    document.getElementById("NoButton").innerHTML = "No way, you thieves!";
}