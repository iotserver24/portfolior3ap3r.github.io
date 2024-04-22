window.onload = function() {
    let slides = document.querySelectorAll('.slideshow .slide');
    let currentSlide = 0;
    let isPaused = false;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        if (currentSlide === Math.floor(slides.length / 2)) {
            isPaused = true; // Pause the slideshow when an image is in the center
            setTimeout(() => {
                isPaused = false; // Continue after 1.5 seconds
            }, 1500);
        }
    }

    slides[currentSlide].classList.add('active');
    setInterval(() => {
        if (!isPaused) {
            nextSlide();
        }
    }, 1500); // Change slide every 1.5 seconds
}
