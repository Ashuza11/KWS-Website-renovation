let chatbotToggle = document.querySelector('.chatbot-toggler');
let chatbot = document.querySelector('.chatboot-container');

let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#login-form-close');
let menuBar = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
const bookInfo = document.querySelector('.book-info');


window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');

    menuBar.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}


menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    bookInfo.classList.toggle('hide');

})

chatbotToggle.addEventListener('click', () => {
    chatbot.classList.toggle('active');
})

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
})

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
})

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

let swiper = new Swiper('.brand-slider', {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
   breakpoints: {
        450: {
            slidesPerView: 2,
        },
       768: {
           slidesPerView: 3,
       },
       991: {
           slidesPerView: 4,
       },
       1200: {
           slidesPerView: 5,
       },
   },
});


// Intersection Observer
ratio = .1
const options = {
    root: null,
    rootMargin: "0px",
    threshold: .1
  };

 const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.remove('reveal');
            observer.unobserve(entry.target);
        } 
        
    })
    console.log('handleIntersect');
 }
  
  const observer = new IntersectionObserver(handleIntersect, options);
  document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r);
  })
