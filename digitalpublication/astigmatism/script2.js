document.addEventListener('DOMContentLoaded', () => {
  const videoWrapper = document.querySelector('.video-wrapper');
  const toggleButton = document.getElementById('toggle-button');

  toggleButton.addEventListener('click', () => {
      videoWrapper.classList.toggle('hidden');
  });
});

const headers = document.querySelectorAll('.section-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        // Toggle the open class on the parent section
        const section = header.parentElement;
        const arrow = header.querySelector('.section-toggle');

        // Toggle the "open" class on both the section and the arrow
        section.classList.toggle('open');
        arrow.classList.toggle('open');
        
        // Close other sections if open
        document.querySelectorAll('.section').forEach(sec => {
            if (sec !== section) {
                sec.classList.remove('open');
                sec.querySelector('.section-toggle').classList.remove('open'); // Reset other arrows
            }
        });
    });
});

document.querySelector('.button-30').addEventListener('click', function() {
    // Toggle the text-black class on the body or a specific container element
    document.body.classList.toggle('text-black');
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