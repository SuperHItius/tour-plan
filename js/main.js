
new Swiper('.hotel-slider', {
    loop: true,
    navigation: {
        nextEl: '.hotel-slider__button--next',
        prevEl: '.hotel-slider__button--prev',
    },
    speed: 1100,
    effect: 'coverflow',
});

const swiper = document.querySelector('.hotel-slider').swiper;

addEventListener("keydown", function(event) {
    if (event.code === 'ArrowRight') {
        swiper.slideNext();
    }

    if (event.code === 'ArrowLeft') {
        swiper.slidePrev();
    }
});

new Swiper('.reviews-slider', {
    loop: true,
    navigation: {
        nextEl: '.reviews-slider__button--next',
        prevEl: '.reviews-slider__button--prev',
    },
});

// $('.parallax-window').parallax({imageSrc: '../image/newsletter-bg.jpg'});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function () {
    console.log('Клик по кнопке меню');
    document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
});