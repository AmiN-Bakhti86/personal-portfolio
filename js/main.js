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
});


// ======================
// Contact Form
// ======================
const contactForm = document.querySelector(".contact__form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("پیام شما با موفقیت ارسال شد!");
});




// ======================
// typewriter
// ======================
const typewriterElement = document.getElementById("typewriter");
const words = ["توسعه‌دهنده فرانت‌اند.", "طراح سایت وردپرسی.", "علاقه‌مند به UI/UX."];

let wordIndex = 0; 
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;    
    }

    let typeSpeed = isDeleting ? 110 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; 
        isDeleting = true;    
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; 
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

setTimeout(typeEffect, 700);


/* ==========================================
   DARK / LIGHT MODE
========================================== */
const themeBtns = document.querySelectorAll(".theme-toggle");

themeBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        document.body.classList.toggle("light-mode");
        
        themeBtns.forEach(themeBtn => {
            if(document.body.classList.contains("light-mode")) {
                themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            } else {
                themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            }
        });
    });
});

/* ==========================================
   ACTIVE NAV LINK ON SCROLL 
========================================== */
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function() {
    let currentScroll = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; 
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if(currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
            
            document.querySelectorAll(".header__nav a, .header_nav a").forEach(link => {
                link.classList.remove("active-link");
            });
            
            const activeDesktopLink = document.querySelector(`.header__nav a[href="#${sectionId}"]`);
            const activeMobileLink = document.querySelector(`.header_nav a[href="#${sectionId}"]`);
            
            if(activeDesktopLink) activeDesktopLink.classList.add("active-link");
            if(activeMobileLink) activeMobileLink.classList.add("active-link");
        }
    });
});
