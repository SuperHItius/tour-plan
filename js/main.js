
const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.slider-button--next',
        prevEl: '.slider-button--prev',
    },
    speed: 1100,
    effect: 'coverflow',
});