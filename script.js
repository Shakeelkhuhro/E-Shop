var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function toggleMenu() {
    var nav = document.getElementById("myNav");
    if (nav.className === "nav3") {
        nav.className += " responsive";
    } else {
        nav.className = "nav3";
    }
}
