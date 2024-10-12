const video = document.getElementById('myVideo');

// Make sure there's no delay when the video ends by restarting immediately
video.addEventListener('ended', () => {
    video.currentTime = 0;
    video.play();
});

document.addEventListener('DOMContentLoaded', () => {
    const videoWrapper = document.querySelector('.video-wrapper');
    const toggleButton = document.getElementById('toggle-button');

    toggleButton.addEventListener('click', () => {
        videoWrapper.classList.toggle('hidden');
    });
});