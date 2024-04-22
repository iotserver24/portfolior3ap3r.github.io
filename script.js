window.onload = function() {
    let slides = document.querySelectorAll('.slideshow .slide');
    let currentSlide = 0;
    let isPaused = false;
    let imagesLoaded = 0;

    // Preload all images
    slides.forEach(slide => {
        let image = new Image();
        image.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === slides.length) {
                activateSlide(currentSlide); // Start the slideshow when all images are loaded
            }
        };
        image.src = slide.getAttribute('src');
    });

    function activateSlide(index) {
        slides[index].classList.add('active');
        if (!isPaused) {
            setTimeout(() => {
                slides[index].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                activateSlide(currentSlide);
            }, 1500); // Change slide every 1.5 seconds
        } else {
            setTimeout(() => {
                isPaused = false;
                activateSlide(currentSlide);
            }, 1500); // Pause for 1.5 seconds
        }
    }

    // Pause the slideshow when an image is in the center
    slides.forEach((slide, index) => {
        slide.addEventListener('transitionend', () => {
            if (slide.classList.contains('active') && !isPaused) {
                isPaused = true;
                setTimeout(() => {
                    slide.classList.remove('active');
                    currentSlide = (currentSlide + 1) % slides.length;
                    activateSlide(currentSlide);
                }, 1500); // Pause for 1.5 seconds when image is in center
            }
        });
    });
}
