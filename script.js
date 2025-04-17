let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide(direction) {
  currentIndex += direction;

  // Loop through the slides
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  updateSliderPosition();
}

function updateSliderPosition() {
  const slider = document.querySelector('.slider');
  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

// Optional: Auto-slide every 3 seconds
setInterval(() => {
  changeSlide(1);
}, 3000);
