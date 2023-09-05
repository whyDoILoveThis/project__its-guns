const banner = document.querySelector('.banner');
const bannerSection = banner.querySelectorAll('.banner__section');
let currentIndex = 0;

function showBannerSection(index) {
    bannerSection[currentIndex].classList.remove('active');
    currentIndex = (index + bannerSection.length) % bannerSection.length;
    bannerSection[currentIndex].classList.add('active');
}

function nextSection() {
    showBannerSection(currentIndex + 1);
}

setInterval(nextSection, 3000); // Change image every 3 seconds (adjust as needed)
