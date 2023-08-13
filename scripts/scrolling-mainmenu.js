const tes = ['../img/boc-logo-circ.png','../img/silver-jubilee.jpg','../img/boc-header.jpg','../img/boc-tour.png','../img/boc-answer.png'];
let index = 0;
const background = document.getElementById("mainmenu-header");
var Opacity = 1;
var FadeTimer; 
const delay = 50;
const value = 0.05;

function changeBackground(){
    FadeTimer = setInterval(fadeOut,delay);
}

function fadeIn(){
    if(Opacity < 1){
        Opacity += value;
        background.style.opacity = Opacity;
    }else{
        clearInterval(FadeTimer);
        index = (index + 1) % tes.length;
        setTimeout(changeBackground,4500);
    }
}

function fadeOut(){
    if(Opacity > 0){
        Opacity -= value;
        background.style.opacity = Opacity;
    }else{
        clearInterval(FadeTimer);
        background.style.backgroundImage = "url('"+tes[index]+"')";
        FadeTimer = setInterval(fadeIn,delay);
    }
}


changeBackground();
