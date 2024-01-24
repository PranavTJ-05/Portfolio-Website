const dynamicText =document.querySelector(".text");
const words =["Electrical Engineer", "FrontEnd Developer", "AI/ML Developer", "UI/UX Designer"];
let wordIndex=0;
let charIndex=1;
let isDeleting =false;

const typeEffect = ()=> {
    const currentWord =words[wordIndex];
    const currentChar = currentWord.substring(0,charIndex);
    dynamicText.textContent =currentChar;
    if(!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect,100);
    }else if(isDeleting && charIndex>0){
        charIndex--;
        setTimeout(typeEffect,75);
    }else{
        isDeleting=!isDeleting;
        wordIndex=!isDeleting?(wordIndex+1)% words.length:wordIndex;
        setTimeout(typeEffect,1200)
    }
}
typeEffect();
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 }); 
