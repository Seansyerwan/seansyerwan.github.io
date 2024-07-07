var audio = new Audio("background_music.mp3");
var page2_audio = new Audio("page2_music.mp3");

audio.loop = true;
page2_audio.loop = true;
var currentpath = window.location.pathname;


//depending on the page, we play a song. 
if(currentpath.includes("1")){
    window.onload= audio.play();
    console.log("Playing wii music");
}
else if (currentpath.includes("2")){
    window.onload = page2_audio.play();
    console.log("Playing clair de lune");
}

//We calculate where the window has scrolled as to hide the menu bar. 
var position = window.scrollY;
window.onscroll = function() {
    var currentpos = window.scrollY;

    if(position > currentpos){
        document.getElementById("general_toolbar").style.top = "0";
    }
    else{
        document.getElementById("general_toolbar").style.top = "-50px";
    }
    position = currentpos;
}