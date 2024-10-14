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

function triggerBlurEffect() {
    // Clear any previous animation by removing the class
    document.body.style.animation = 'none';
    
    // Force a reflow to reset the animation
    void document.body.offsetWidth;

    // Add the class back to restart the animation
    document.body.style.animation = 'gradualBlur 50s forwards';
}

// Detect mouse movement on the whole document
document.addEventListener('mousemove', function() {
    triggerBlurEffect(); // Restart blur effect when mouse moves
});

// Initially start the blur effect on page load
triggerBlurEffect();