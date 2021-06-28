window.addEventListener('keydown', soundPlay);

function soundPlay(event) {
    const sound = document.getElementById(event.which);
    console.log(sound);

    sound.currentTime = 0;
    sound.play();
}