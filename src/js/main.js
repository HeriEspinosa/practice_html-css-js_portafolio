
const navarShow = document.querySelector(".navbar");
const barraShow = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");
const menuShow = document.querySelector(".barra__menu");
const barraHidden = document.querySelector(".menu_show-hidden");

console.log(links);

menuShow.addEventListener("click", function(){
    navarShow.classList.toggle("menu_show");
});

menuShow.addEventListener("click", function(){
    barraShow.classList.toggle("menu_show");
});

menuShow.addEventListener("click", function(){
    menuShow.classList.toggle("menu_show-hidden");
});


links.forEach((link) => {
    link.addEventListener("click", function(){
        barraShow.classList.toggle("menu_show");
        navarShow.classList.toggle("menu_show");
        menuShow.classList.toggle("menu_show-hidden");
    });
});