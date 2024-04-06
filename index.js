let videoPlayer = document.querySelector('.videoPlayer');
let playButton = document.querySelector('.playPauseButton');
let videoUploadInput = document.querySelector('#uploadFile');

videoUploadInput.addEventListener('input', (e) => {
    let file = videoUploadInput.files[0];
    let fileReal = URL.createObjectURL(file)
    videoPlayer.setAttribute('src', fileReal)
})
playButton.addEventListener('click', () => {
    if (videoPlayer.getAttribute('src')) {
        if (videoPlayer.paused) {
            videoPlayer.play();
            playButton.setAttribute("src", "pause-button.png")
        } else {
            videoPlayer.pause();
            playButton.setAttribute("src", "play-button.png")
        }
    } else {
        console.log('No se encontró el video.')
    }
})