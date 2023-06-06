// Ici vous pouvez écrire du code JavaScript

function changeImageRock() {
    var image = document.getElementById('ClickRock');
    if (image.src.match("bw-image.jpg")) {
        image.src = "images/color-image.jpg";
        document.getElementById("RockDesc").style.display = "flex";
    }
    else {
        image.src = "images/bw-image.jpg";
        document.getElementById("RockDesc").style.display = "none";
    }
}
function changeImageVin() {
    var image = document.getElementById('ClickVin');
    if (image.src.match("bw-image.jpg")) {
        image.src = "images/color-image.jpg";
        document.getElementById("VinDesc").style.display = "flex";
    }
    else {
        image.src = "images/bw-image.jpg";
        document.getElementById("VinDesc").style.display = "none";
    }
}
function changeImagePute() {
    var image = document.getElementById('ClickPute');
    if (image.src.match("bw-image.jpg")) {
        image.src = "images/color-image.jpg";
        document.getElementById("PuteDesc").style.display = "flex";
    }
    else {
        image.src = "images/bw-image.jpg";
        document.getElementById("PuteDesc").style.display = "none";
    }
}
function changeImageJess() {
    var image = document.getElementById('ClickJess');
    if (image.src.match("bw-image.jpg")) {
        image.src = "images/color-image.jpg";
        document.getElementById("JessDesc").style.display = "flex";
    }
    else {
        image.src = "images/bw-image.jpg";
        document.getElementById("JessDesc").style.display = "none";
    }
}
function changeImageZita() {
    var image = document.getElementById('ClickZita');
    if (image.src.match("bw-image.jpg")) {
        image.src = "images/color-image.jpg";
        document.getElementById("ZitaDesc").style.display = "flex";
    }
    else {
        image.src = "images/bw-image.jpg";
        document.getElementById("ZitaDesc").style.display = "none";
    }
}

