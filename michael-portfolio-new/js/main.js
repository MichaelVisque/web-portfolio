/* Web App's Firebase Configuration */
/* For Firebase JS SDK v7.20.0 and later, measurementId is optional */
var firebaseConfig = {
    apiKey: "AIzaSyAHJtSoHgftbH9xx11Qd-NUXo0HsAWMGag",
    authDomain: "visque-portfolio.firebaseapp.com",
    projectId: "visque-portfolio",
    storageBucket: "visque-portfolio.appspot.com",
    messagingSenderId: "252005524871",
    appId: "1:252005524871:web:9e73b0261f071e3e075f22",
    measurementId: "G-JSH9MP4CE2"
  };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

/* Reference Message Collection */
const messagesRef = firebase.database().ref("messages");

/* SHOW MENU */
const showMenu = (toggleId,navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener("click",() => {
            nav.classList.toggle("show-menu")
        })
    }
}
showMenu("nav-toggle","nav-menu")

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(e => e.addEventListener("click", linkAction))

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener("scroll", scrollActive)

/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* SHOW SCROLL TOP */
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/* MIXITUP FILTER PORTFOLIO */
const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});

/* LINK ACTIVE PORTFOLIO */
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio() {
    if(linkPortfolio) {
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))

/* MODALS */
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('modal__overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active')
    overlay.classList.add('active')
};

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active')
    overlay.classList.remove('active')
};

/* FORM SUBMIT */
document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    let name = getInputVal('name');
    let email = getInputVal('email');
    let company = getInputVal('company');
    let phone = getInputVal('phone');
    let message = getInputVal('message');

    /* Save Message */
    saveMessage(name, email, company, phone, message);

    /* Show Alert */
    document.querySelector(".contact-alert").style.display = "block";

    /* Hide Alert */
    setTimeout(function() {
    document.querySelector(".contact-alert").style.display = "none";
    },6000);


    document.getElementById("contact-form").reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

/* Save Messages to Firebase */
function saveMessage(name, email, company, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        company: company,
        phone: phone,
        message: message
    });
}


/* GSAP ANIMATION */
gsap.from(".home__data", {opacity: 0, duration: 2, delay:0.5, y:20})
gsap.from(".home__greeting, .home__name, .home__profession, .home__button", {opacity: 0, duration: 2, delay:0.8, y:25, ease: 'expo.out', stagger:0.2})

gsap.from(".nav__logo, .nav__toggle", {opacity: 0, duration: 2, delay:1, y:25, ease: 'expo.out', stagger:0.2})
gsap.from(".nav__item", {opacity: 0, duration: 2, delay:1.5, y:25, ease: 'expo.out', stagger:0.2})
gsap.from(".home__social-icon", {opacity: 0, duration: 2, delay:1.8, y:25, ease: 'expo.out', stagger:0.2})