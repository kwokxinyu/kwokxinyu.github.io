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