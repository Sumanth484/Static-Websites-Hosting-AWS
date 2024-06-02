audioElement = new Audio("sound.mp3");

document.getElementsByClassName("car")[0].addEventListener("click", () => {
    if (audioElement.paused) {
        audioElement.play()
        audioElement.loop = true;
    }
    else {
        audioElement.pause();
    }
    
})
