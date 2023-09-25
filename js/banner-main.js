const banner = document.querySelector('.banner');
const bannerSection = banner.querySelectorAll('.banner__section');
let bannerMainCurrentIndex = 0;

function showBannerSection(index) {
    bannerSection[bannerMainCurrentIndex].classList.remove('active');
    bannerMainCurrentIndex = (index + bannerSection.length) % bannerSection.length;
    bannerSection[bannerMainCurrentIndex].classList.add('active');
}

function nextSection() {
    showBannerSection(bannerMainCurrentIndex + 1);
}

setInterval(nextSection, 3000); // Change image every 3 seconds (adjust as needed)
