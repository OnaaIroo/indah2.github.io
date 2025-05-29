/* -- NAVITIOM BAR FUNCTION --*/
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* -- ADD SHADOW ON NAVIGATIO BAR WHILE SCROLLING --*/
window.onscroll = function(){headerShadow()};

function headerShadow(){
    const navHeader = document.getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ){
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

/* -- TYPING EFFECT --*/
var typingEffect = new Typed(".typedText", {
    strings : ["Designer","Illustrator","Animator"],
    loop : true, 
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
})

/* -- SCROLL REVEAL ANIMATION --*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* -- HOME --*/
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- ABOUT BOX--*/
sr.reveal('.about-box',{interval: 200})
sr.reveal('.about',{interval: 200})

/* -- EXPERIENCE BOX--*/
sr.reveal('.experience-box',{interval: 200})

/* -- PORTFOLIO BOX--*/
sr.reveal('.portfolio-box',{interval: 200})

/* -- SKILLS--*/
sr.reveal('.skills-box',{interval: 200})
sr.reveal('.skills',{interval: 200})

/* -- CONTACT--*/
sr.reveal('.contact-box',{interval: 200})
sr.reveal('.contact',{interval: 200})

/* -- HEADINGS--*/
sr.reveal('.top-header',{})

/* -- SCROLL REVEAL LEFT_RGIHT ANIMATION --*/

/* -- ABOUT INFO & CONATCT INFO --*/
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX --*/
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* -- FORM --*/
const form = document.querySelector('form')

/* -- ACCORDION SKILLS --*/
const skillContent = document.getElementsByClassName('skill__content'),
      skillHeader = document.querySelectorAll('.header')

function toggleSkill() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillContent.length; i++) {
        skillContent[i].className = 'skill__content skill__close';
    }

    if (itemClass === 'skill__content skill__close') {
        this.parentNode.className = 'skill__content skill__open';
    }
}

skillHeader.forEach((el) => {
    el.addEventListener('click', toggleSkill)
})

/* -- CHANGE ACTIVE LINK --*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id');

        const navLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    })
}

/* -- SKILL BAR ANIMATION -- */
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".skill-bar");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const bar = entry.target;
      if (entry.isIntersecting) {
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
      } else {
        // reset ke 0 saat keluar viewport supaya bisa animasi ulang pas masuk lagi
        bar.style.width = '0';
      }
    });
  }, {
    threshold: 0.5
  });

  bars.forEach(bar => {
    observer.observe(bar);
  });
});

window.addEventListener('scroll', scrollActive)