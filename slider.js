let activeSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

const left = document.querySelector('#click-left');
const right = document.querySelector('#click-right');

let interval;

// Function to start the autoplay
function startAutoplay() {
  interval = setInterval(updateNextSlide, 3000); // Change slide every 3 seconds
}

// Function to stop the autoplay
function stopAutoplay() {
  clearInterval(interval);
}

// Event listeners to stop autoplay on hover and resume on mouse leave
slides.forEach(slide => {
  slide.addEventListener('mouseenter', stopAutoplay);
  slide.addEventListener('mouseleave', startAutoplay);
});

left.onclick = function() {
  stopAutoplay();
  updatePrevSlide();
  startAutoplay();
}

right.onclick = function() {
  stopAutoplay();
  updateNextSlide();
  startAutoplay();
}

function updateNextSlide() {
  slides[activeSlide].classList.add("prev");
  slides[activeSlide].classList.remove("active");

  let nextSlide = (activeSlide < slides.length - 1) ? activeSlide + 1 : 0;

  slides[nextSlide].classList.remove("prev");
  slides[nextSlide].classList.remove("next");
  slides[nextSlide].classList.add("active");

  if (nextSlide < slides.length - 1) {
    slides[nextSlide + 1].classList.add("next");
    slides[nextSlide + 1].classList.remove("prev");
  } else {
    slides[0].classList.remove("prev");
    slides[0].classList.add("next");
  }

  updateActiveDot(nextSlide);
  activeSlide = nextSlide;
}

function updatePrevSlide() {
  slides[activeSlide].classList.add("next");
  slides[activeSlide].classList.remove("active");

  let prevSlide = (activeSlide > 0) ? activeSlide - 1 : slides.length - 1;

  slides[prevSlide].classList.remove("next");
  slides[prevSlide].classList.remove("prev");
  slides[prevSlide].classList.add("active");

  if (prevSlide > 0) {
    slides[prevSlide - 1].classList.add("prev");
    slides[prevSlide - 1].classList.remove("next");
  } else {
    slides[slides.length - 1].classList.remove("next");
    slides[slides.length - 1].classList.add("prev");
  }

  updateActiveDot(prevSlide);
  activeSlide = prevSlide;
}

function updateActiveDot(newActiveSlide) {
  dots[activeSlide].classList.remove("active");
  dots[newActiveSlide].classList.add("active");
}

// Optional: Add event listeners to dots for direct navigation
dots.forEach((dot, index) => {
  dot.onclick = function() {
    if (index !== activeSlide) {
      slides[activeSlide].classList.remove("active");
      slides[activeSlide].classList.add(index > activeSlide ? "prev" : "next");
      slides[index].classList.remove("next", "prev");
      slides[index].classList.add("active");
      updateActiveDot(index);
      activeSlide = index;
    }
  }
});


startAutoplay();