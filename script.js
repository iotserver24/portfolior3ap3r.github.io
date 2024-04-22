window.onload = function() {
    let slides = document.querySelectorAll('.slideshow .slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        if (currentSlide === Math.floor(slides.length / 2)) {
            pauseSlideshow(); // Pause the slideshow when an image is in the center
        }
    }

    function pauseSlideshow() {
        clearInterval(slideshowInterval); // Clear the interval to pause the slideshow
        setTimeout(() => {
            slideshowInterval = setInterval(nextSlide, 1500); // Continue after 1.5 seconds
        }, 1500);
    }

    let slideshowInterval = setInterval(nextSlide, 1500); // Start the slideshow

    // Optional: Resume the slideshow if the user interacts with the page
    document.addEventListener('click', () => {
        clearInterval(slideshowInterval);
        slideshowInterval = setInterval(nextSlide, 1500);
    });
}
