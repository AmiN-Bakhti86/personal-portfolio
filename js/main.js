const header = document.getElementById("header");
const menu_open = document.getElementById("menu_open");
const mobileMenu = document.querySelector(".header_nav");


// ======================
// Header Scroll
// ======================
window.addEventListener("scroll", function(){
    if(window.scrollY > 20){
        header.classList.add("scrolled")
    }else{
        header.classList.remove("scrolled")
    }
});


// ======================
// Mobile Menu
// ======================
menu_open.addEventListener("click",function(){
    
    mobileMenu.classList.toggle("active");

    const icon = document.querySelector("#menu_open svg");

    icon.classList.toggle("fa-bars");

    icon.classList.toggle("fa-xmark");

});


// ======================
// Close Menu
// ======================
const menulist = document.querySelectorAll(".header_nav a");
menulist.forEach(function(link){
    link.addEventListener("click",function(){
        mobileMenu.classList.remove("active");
        const icon = document.querySelector("#menu_open svg");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    })
})
