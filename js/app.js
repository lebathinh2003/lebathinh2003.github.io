var main_page;
var hamburger_menu;
var popular_crisps;
function declare() {
    main_page = document.querySelector(".main-page");
    hamburger_menu = document.querySelector(".hamburger-menu");
    popular_crisps = document.querySelector(".popular-crisps .row")
}

declare();

function events() {
    hamburger_menu.addEventListener("click", () => {
        main_page.classList.toggle("active");
    });
}

events();

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        1024: {
            items: 2
        }
    }
})
