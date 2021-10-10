$(document).ready(function () {
new Swiper('.hotel-slider', {
    loop: true,
    navigation: {
        nextEl: '.hotel-slider__button--next',
        prevEl: '.hotel-slider__button--prev',
    },
    speed: 1100,
    effect: 'coverflow',
    keyboard: {
        enabled: true,
        onlyInViewport: false,
        },
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


$(".form").each(function(){
    $(this).validate({
        errorClass: "invalid",
        messages: {
            name: {
                required: "Please specify your name",
                minlength: "The name must be at least 2 letters long",
            },
            email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com",
            },
            phone: {
                required:"Phone is required",
            },
        },
    });
})
$('input[type="tel"').mask('(000) 000-0000');
AOS.init();
});