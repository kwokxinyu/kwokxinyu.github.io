const redElement = document.getElementById('red');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            redElement.classList.add('reveal');
            observer.unobserve(entry.target); // Optional: stop observing once revealed
        }
    });
});

observer.observe(redElement);