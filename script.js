function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Lấy danh sách các slide
const slides = document.querySelectorAll('.about-containers.slide');
let currentSlide = 0;

// Ẩn tất cả các slide, ngoại trừ slide đầu tiên
hideAllSlides();
slides[currentSlide].classList.add('active');

function hideAllSlides() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
}

function showSlide(direction) {
    hideAllSlides();
    if (direction === 'next') {
        currentSlide = (currentSlide + 1) % slides.length;
    } else if (direction === 'prev') {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }
    slides[currentSlide].classList.add('active');
}

function redirectToPage(url) {
    window.open(url, '_blank');
}