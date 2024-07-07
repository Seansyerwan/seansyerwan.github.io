var audio = new Audio("background_music.mp3");
var page2_audio = new Audio("page2_music.mp3");

audio.loop = true;
page2_audio.loop = true;
var currentpath = window.location.pathname;

if(currentpath.includes("1")){
    window.onload= audio.play();
    console.log("Playing wii music");
}
else if (currentpath.includes("2")){
    window.onload = page2_audio.play();
    console.log("Playing clair de lune");
}

