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

window.onload = function() {
    let imageFilterVisible = false;

    function showImageFilter() {
      const imageFilter = document.querySelector('.imagefilter');
      if (imageFilter) {
        imageFilter.classList.add('visible');
        imageFilterVisible = true;
        addHideListeners();  // Re-attach listeners to detect interaction
      }
    }

    function hideImageFilter() {
      const imageFilter = document.querySelector('.imagefilter');
      if (imageFilter && imageFilterVisible) {
        imageFilter.classList.remove('visible');
        imageFilterVisible = false;

        // Remove event listeners after hiding
        window.removeEventListener('scroll', hideImageFilter);
        window.removeEventListener('mousemove', hideImageFilter);
        window.removeEventListener('touchstart', hideImageFilter);
        
        // Start the cycle again after a delay
        startImageFilterTimer();
      }
    }

    // Add event listeners for scroll, mouse move, or touch interactions
    function addHideListeners() {
      window.addEventListener('scroll', hideImageFilter);
      window.addEventListener('mousemove', hideImageFilter);
      window.addEventListener('touchstart', hideImageFilter, { passive: true });
    }

    // Function to start the 10-second timer to reveal the image filter
    function startImageFilterTimer() {
      setTimeout(showImageFilter, 10000); // Show the imagefilter after 10 seconds
    }

    // Start the initial timer when the page loads
    startImageFilterTimer();
};

function triggerBlurEffect() {
    const catalog = document.querySelector('.section');

    // Clear any previous animation by resetting the animation property
    catalog.style.animation = 'none';

    // Force reflow to reset animation
    void catalog.offsetWidth;

    // Reapply the blur animation to the catalog
    catalog.style.animation = 'gradualBlur 20s forwards';
}

// Debounced mousemove event listener
document.addEventListener('mousemove', debounce(triggerBlurEffect, 100));

// Initially start the blur effect on page load
triggerBlurEffect();