let lastScrollTop = 0;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

if (currentScroll > lastScrollTop) {
    header.classList.add('hide');
} else {
    header.classList.remove('hide');
}

lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Safari
});

