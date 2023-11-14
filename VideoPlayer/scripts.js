/* Get our Elements*/
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle'); 
const skipButtons = player.querySelectorAll('[data-skip]'); 
const ranges = player.querySelectorAll('.player__slider'); 
const controlFullScreen = player.querySelector('.player__fullscreen');

/* Build out functions*/
function togglePlay() {
    console.log("456")
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    // if (video.paused){
    //     video.play();
    // }else{
    //     video.pause();
    // }
}

function updateButton(){
    console.log("123")
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;

}

function skip(){
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function fullScreen(){
    if(video.requestFullscreen) {
        video.requestFullscreen();
    } else if(video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if(video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if(video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);

video.addEventListener('timeupdate', handleProgress);
controlFullScreen.addEventListener('click', fullScreen); 

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));
