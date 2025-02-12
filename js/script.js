/* ==================== Scroll Reveal ==================== */
const navItems = document.querySelector(".nav").querySelectorAll("li");
const homeItems = document.querySelector(".home-items").querySelectorAll("li");

/* ========== NavBar ========== */
ScrollReveal().reveal(".logo", {delay: 100, easing: 'ease-in'})
var delay = 200;
for(let i = 0; i < navItems.length; i++){
  ScrollReveal().reveal(navItems[i], {delay: delay, easing: 'ease-in'});
  delay+=100;
}

/* ========== Home ========== */
for(let i = 0; i < homeItems.length; i++){
  ScrollReveal().reveal(homeItems[i], {delay: delay, easing: 'ease-in'});
  delay+=100;
}

/* ========== Socials + Email ========== */
ScrollReveal().reveal(".last-reveal", {delay: delay+100, easing: 'ease-in'});

/* ========== About ========== */
ScrollReveal().reveal(".about-title", {viewFactor: 0.1, delay: 100, easing: 'ease-in', reset: true})
ScrollReveal().reveal(".about-info-details", {viewFactor: 0.1, delay: 200, easing: 'ease-in', reset: true})
ScrollReveal().reveal(".about-img", {viewFactor: 0.1, delay: 400, easing: 'ease-in', reset: true})

/* ========== Experience ========== */
ScrollReveal().reveal(".experience-title", {viewFactor: 0.1, delay: 100, easing: 'ease-in', reset: true})
ScrollReveal().reveal(".experience-info-list", {viewFactor: 0.1, delay: 200, easing: 'ease-in', reset: true})
ScrollReveal().reveal(".experience-info-elements", {viewFactor: 0.1, delay: 400, easing: 'ease-in', reset: true})

/* ========== Work ========== */
ScrollReveal().reveal(".work-title", {viewFactor: 0.1, delay: 100, easing: 'ease-in', reset: true})
ScrollReveal().reveal(".work-info-details", {viewFactor: 0.1, delay: 200, easing: 'ease-in', reset: true})
ScrollReveal().reveal(".work-info-img", {viewFactor: 0.1, delay: 400, easing: 'ease-in', reset: true})

/* ========== Contact ========== */
ScrollReveal().reveal(".contact-title", {viewFactor: 0.1, delay: 100, easing: 'ease-in', reset: true})
ScrollReveal().reveal(".contact-info", {viewFactor: 0.1, delay: 200, easing: 'ease-in', reset: true})

/* ========== Footer ========== */
ScrollReveal().reveal(".footer-info", {viewFactor: 0.1, delay: 400, easing: 'ease-in', reset: true})

/* ==================== Typing animation ==================== */
var typed = new Typed(".typing", {
    strings:["Java Developer", "C/C++ Developer", "System Administrator", "Computer Science Student"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});

/* ==================== Jobs Box ==================== */
const experienceItems = document.querySelector(".experience-info-list").querySelectorAll("li");
const experienceElements = document.querySelector(".experience-info-elements").querySelectorAll(".experience-info-details");

for(let i = 0; i < experienceItems.length; i++){
  
  const e = experienceItems[i].querySelector("p");
  e.addEventListener("click", function() {
    
    for(let j = 0; j < experienceItems.length; j++){
      experienceItems[j].querySelector("p").classList.remove("active");
      experienceElements[j].classList.remove("hidden");
    }

    for(let j = 0; j < experienceElements.length; j++){
      if(j != i){
        experienceElements[j].classList.add("hidden");
      }
    }

    this.classList.add("active");
  })
}