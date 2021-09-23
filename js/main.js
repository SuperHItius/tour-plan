
new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.slider-button--next',
        prevEl: '.slider-button--prev',
    },
    speed: 1100,
    effect: 'coverflow',
});

const swiper = document.querySelector('.swiper').swiper;

addEventListener("keydown", function(event) {
    if (event.code === 'ArrowRight') {
        swiper.slideNext();
    }

    if (event.code === 'ArrowLeft') {
        swiper.slidePrev();
    }
});