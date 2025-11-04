var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});


// for hamburger

const menu = document.querySelector('#menu-btn');
const navBar = document.querySelector('.nav-bar');

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times'); // switch bars → X icon
  navBar.classList.toggle('active'); // show/hide nav
});
// when a hamburger link is clicked
document.querySelectorAll('.nav-bar a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
  });
});



