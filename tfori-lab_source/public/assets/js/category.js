const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((item) => item.addEventListener("click", linkAction));

//Sections active
const sections = document.querySelectorAll("section[id]");
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener("scroll",scrollActive)

// Filter JS
$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter')
        if(value == 'all') {
            $('.post-box').show("1000");
        }
        else{
            $('.post-box').not('.' + value).hide("1000");
            $('.post-box').filter('.' + value).show("1000");
        }
    });
    // Activar el boton
    $('.filter-item').click(function (){
        $(this).addClass('active-filter').siblings().removeClass('active-filter');
    });
});

// Encabezado Scrolling
let header = document.querySelector('header');

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});
