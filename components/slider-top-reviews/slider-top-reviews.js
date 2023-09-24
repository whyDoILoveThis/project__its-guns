const reviewSlider = document.querySelector('.top-reviews__slider');
const reviews = document.querySelectorAll('.top-reviews__review');
const reviewWidth = reviews[0].clientWidth;
let currentIndex = 0;
let isPaused = false;

// Function to check if the slider is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle slider visibility
function handleSliderVisibility() {
  let isVisible = true;

  reviews.forEach((review, index) => {
    if (index <= currentIndex + 2 && index >= currentIndex) {
      // Check if any of the visible reviews are in the viewport
      isVisible = isVisible || isElementInViewport(review);
    }
  });

  if (!isPaused) {
    if (!isVisible) {
      // If none of the visible reviews are in the viewport, pause sliding
      isPaused = true;
    }
  } else {
    // If slider is paused and at least one review is in view, resume sliding
    if (isVisible) {
      isPaused = false;
    }
  }
}

// Function to slide reviews
    function slideReviews(direction) {

      if (direction === 'right') {
        currentIndex = (currentIndex + 1) % (reviews.length - 2);
      } else if (direction === 'left') {
        currentIndex = (currentIndex - 1 + reviews.length - 2) % (reviews.length - 2);
      }
 // Define the gap in pixels (50px in your case)
const gap = 50;

// Calculate the width for each review item
const reviewWidth = reviews[0].offsetWidth;


// Now, you can use the calculated width for your JavaScript calculations
const offset = -currentIndex * (reviewWidth + gap - 0.35); // Account for gap
reviewSlider.style.transform = `translateX(${offset}px)`;


    }

// Interval to auto-slide reviews
let sliderInterval = setInterval(() => {
  if (!isPaused) {
    slideReviews('right');
  }
}, 3000);

// Pause slider on mouse hover
reviewSlider.addEventListener('mouseenter', () => {
  isPaused = true;
});

// Resume slider on mouse leave
reviewSlider.addEventListener('mouseleave', () => {
  isPaused = false;
});

reviewSlider.addEventListener('touchend', () => {
  isPaused = false;
});

// Check slider visibility on scroll and resize
window.addEventListener('scroll', handleSliderVisibility);
window.addEventListener('resize', handleSliderVisibility);

// Button event listeners
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

leftButton.addEventListener('click', () => {
  if (currentIndex >= 0) {
    slideReviews('left');
    isPaused = true; // Pause sliding when manually navigating
  }
});

rightButton.addEventListener('click', () => {
  if (currentIndex <= reviews.length - 2) {
    slideReviews('right');
    isPaused = true; // Pause sliding when manually navigating
  }
});

// Pause on button hover
leftButton.addEventListener('mouseenter', () => {
  isPaused = true;
});

leftButton.addEventListener('mouseleave', () => {
  isPaused = false;
});

rightButton.addEventListener('mouseenter', () => {
  isPaused = true;
});

rightButton.addEventListener('mouseleave', () => {
  isPaused = false;
});

// Initial check for slider visibility
handleSliderVisibility();
