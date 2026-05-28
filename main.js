function setupCarousel(carouselId) {
    const container = document.getElementById(carouselId);
    const slides = container.querySelectorAll('.fade-slide');
    let current = 0;
    let paused = false;
    let interval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function startCarousel() {
    interval = setInterval(() => {
        if (!paused) {
        current = (current + 1) % slides.length;
        showSlide(current);
        }
    }, 4000); // Cambia cada 3 segundos
}

slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        if (!paused) {
        paused = true;
        slide.classList.add('zoom');
        clearInterval(interval);
        }
    });

    slide.addEventListener('mouseleave', () => {
        if (paused) {
        paused = false;
        slide.classList.remove('zoom');
        startCarousel();
        }
    });
});

// Inicial
    showSlide(current);
    startCarousel();
}
setupCarousel("carousel1");
setupCarousel("carousel2");
setupCarousel("carousel3");





