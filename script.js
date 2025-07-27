// Get elements
const video = document.querySelector('.player__video');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const progressFilled = document.getElementById('progressFilled');
const volumeControl = document.getElementById('volumeControl');
const speedControl = document.getElementById('speedControl');
const rewindBtn = document.getElementById('rewindBtn');
const forwardBtn = document.getElementById('forwardBtn');

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = '❚ ❚'; // Change button to pause
    } else {
        video.pause();
        playPauseBtn.textContent = '►'; // Change button to play
    }
});

// Update the progress bar
video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.value = progress;
    progressFilled.style.width = `${progress}%`;
});

// Seek the video when the user clicks on the progress bar
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * video.duration;
    video.currentTime = seekTime;
});

// Volume control
volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value / 100;
});

// Playback speed control
speedControl.addEventListener('input', () => {
    video.playbackRate = speedControl.value / 100;
});

// Rewind 10 seconds
rewindBtn.addEventListener('click', () => {
    video.currentTime -= 10;
});

// Skip forward 25 seconds
forwardBtn.addEventListener('click', () => {
    video.currentTime += 25;
});
