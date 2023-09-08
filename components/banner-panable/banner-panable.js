const grid = document.querySelector('.banner-panable__product-grid');
const arrowLeft = document.querySelector('.banner-panable__arrow-left');
const arrowRight = document.querySelector('.banner-panable__arrow-right');
const container = document.querySelector('.banner-panable__product-container');
let scrollPosition = 0;

//? Add a window resize event listener to reset scrollPosition
window.addEventListener('resize', function () {
  // Set scrollPosition to 0 on window resize
  scrollPosition = 0;
  updateScrollPosition();
});

//* arrow-LEFT
arrowLeft.addEventListener('click', function () {
  //& MOBILE--2-cols
  //? if window is less than 768px
    if (window.innerWidth <= 768) {
        //? scroll 1 column (2 * 50%)
        scrollPosition -= 50;
        //? if already at start Wrap around to the end on mobile
        if (scrollPosition < 0) {
            scrollPosition = 300; 
        }
    }
  //& DESKTOP--4-cols
     //? if window is greater than 768px
     else {
        //? scroll 2 columns (4 * 50%)
        scrollPosition -= 50;
        //? if already at start Wrap around to the end on desktop
        if (scrollPosition < 0) {
            scrollPosition = 100; 
        }
    }
    //^ we need this because the flex columns change from 25% allowing 4 cols for desktop
    //^ to 50% allowing for 2 cols on mobile. So we have to know when the quary takes place
    //^ to adjust the scroll distance acordingly.
    
    updateScrollPosition();
});

//* arrow-RIGHT
arrowRight.addEventListener('click', function () {
    //& MOBILE--2-cols
    //? if window is less than 768px
    if (window.innerWidth <= 768) {
      //? scroll 1 column (2 * 50%)
      scrollPosition += 50;
        //? if already at start Wrap around to the end on mobile
        if (scrollPosition > 300) {
          scrollPosition = 0; 
        }
      }
    //& DESKTOP--4-cols
    //? if window is greater than 768px
      else {
        //? scroll 2 columns (4 * 50%)
        scrollPosition += 50;
        //? if already at start Wrap around to the end on desktop
        if (scrollPosition > 100) {
          scrollPosition = 0; 
        }
      }
    
  updateScrollPosition();
});



//~FUNCTIONS

function updateScrollPosition() {
  grid.style.transform = `translateX(-${scrollPosition}%)`;
}
