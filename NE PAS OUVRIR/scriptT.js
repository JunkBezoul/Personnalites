// Ici vous pouvez écrire du code JavaScript

function changeImageRock() {
    var image = document.getElementById('ClickRock');
    if (image.src.match("bw-imageT.jpg")) {
        image.src = "imagesT/color-imageT.jpg";
        document.getElementById("RockDesc").style.display = "flex";
    }
    else {
        image.src = "imagesT/bw-imageT.jpg";
        document.getElementById("RockDesc").style.display = "none";
    }
}
function changeImageVin() {
    var image = document.getElementById('ClickVin');
    if (image.src.match("bw-imageT.jpg")) {
        image.src = "imagesT/color-imageT.jpg";
        document.getElementById("VinDesc").style.display = "flex";
    }
    else {
        image.src = "imagesT/bw-imageT.jpg";
        document.getElementById("VinDesc").style.display = "none";
    }
}
function changeImagePute() {
    var image = document.getElementById('ClickPute');
    if (image.src.match("bw-imageT.jpg")) {
        image.src = "imagesT/color-imageT.jpg";
        document.getElementById("PuteDesc").style.display = "flex";
    }
    else {
        image.src = "imagesT/bw-imageT.jpg";
        document.getElementById("PuteDesc").style.display = "none";
    }
}
function changeImageJess() {
    var image = document.getElementById('ClickJess');
    if (image.src.match("bw-imageT.jpg")) {
        image.src = "imagesT/color-imageT.jpg";
        document.getElementById("JessDesc").style.display = "flex";
    }
    else {
        image.src = "imagesT/bw-imageT.jpg";
        document.getElementById("JessDesc").style.display = "none";
    }
}
function changeImageZita() {
    var image = document.getElementById('ClickZita');
    if (image.src.match("bw-imageT.jpg")) {
        image.src = "imagesT/color-imageT.jpg";
        document.getElementById("ZitaDesc").style.display = "flex";
    }
    else {
        image.src = "imagesT/bw-imageT.jpg";
        document.getElementById("ZitaDesc").style.display = "none";
    }
}




function Start() {
    var image = document.getElementById('StartScreen');
    if (image.src.match("start.jpg")) {
        image.src = "imagesT/start.jpg";
        document.getElementById("StartScreen").style.display = "flex";
        document.getElementById("ZitaDesc").style.display = "none";
        document.getElementById("JessDesc").style.display = "none";
        document.getElementById("PuteDesc").style.display = "none";
        document.getElementById("VinDesc").style.display = "none";
        document.getElementById("RockDesc").style.display = "none";
    }
    else {
        image.src = "imagesT/start.jpg";
        document.getElementById("StartScreen").style.display = "none";
        document.getElementById("ZitaDesc").style.display = "flex";
        document.getElementById("JessDesc").style.display = "flex";
        document.getElementById("PuteDesc").style.display = "flex";
        document.getElementById("VinDesc").style.display = "flex";
        document.getElementById("RockDesc").style.display = "flex";
    }
}

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 