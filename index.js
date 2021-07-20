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
