let slides = document.querySelectorAll('.slideshow .slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 1500); // Change slide every 1.5 seconds
