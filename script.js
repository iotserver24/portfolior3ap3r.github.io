window.onload = function() {
    let slides = document.querySelectorAll('.slideshow .slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Initial activation of all slides
    slides.forEach((slide, index) => {
        setTimeout(() => {
            slide.classList.add('active');
        }, 1500 * index); // Delay activation based on index
    });

    setInterval(nextSlide, 1500 * slides.length); // Change slide every (1.5 * number of slides) seconds
}
