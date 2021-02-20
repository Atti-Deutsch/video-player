const video = document.querySelector('video');
const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const currentTime = document.querySelector('.time-elapsed');
const duration = document.querySelector('.time-duration');
const fullscreenBtn = document.querySelector('.fullscreen');

// Play & Pause ----------------------------------- //

function showPlayIcon() {  /* this function when video ends show play */
    playBtn.classList.replace('fa-pause', 'fa-play');   
    playBtn.setAttribute('title', 'Play'); 
}

function togglePlay() { /* toggle named because "function" both pause and play */
    if (video.paused) {
        video.play();
        playBtn.classList.replace('fa-play', 'fa-pause');   /* when video is playing show "pause" btn and vice versa */
        playBtn.setAttribute('title', 'Pause'); 
    } else {
        video.pause();
        showPlayIcon(); /* Calling this function when video ends */
    }
}  

// On Video End, show play button icon
video.addEventListener('ended', showPlayIcon);

// Progress Bar ---------------------------------- //

// Calculate display time format
function displayTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60); /* reminder anything above 60 return that value */
    seconds = seconds > 9 ? seconds : `0${seconds}`;
    return `${minutes}:${seconds}`;
}

// Update prograss bar as video plays
function updateProgress() {
    progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
    currentTime.textContent = `${displayTime(video.currentTime)} /`;
    duration.textContent = `${displayTime(video.duration)}`;
}

// Click to seek within the video
function setProgress(e) {
    const newTime = e.offsetX / progressRange.offsetWidth;
    progressBar.style.width = `${newTime * 100}%`;
    video.currentTime = newTime * video.duration;
}

// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //

// Event Listeners
playBtn.addEventListener('click', togglePlay);  
video.addEventListener('click', togglePlay);  /* click anywhere on video to pause*/ 
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('canplay', updateProgress);
progressRange.addEventListener('click', setProgress);