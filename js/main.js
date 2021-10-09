$(document).ready(function () {
    
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


var menuButton = $(".menu-button");
menuButton.on('click', function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
});

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal)

function openModal() {
    var targetModal = $(this).attr('data-href');
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
}

function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
}
});