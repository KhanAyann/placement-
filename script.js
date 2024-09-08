gsap.from(".img1", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  y: -60
})


gsap.from(".heading", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  x: -50
})

gsap.from(".nav", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  y: -10
})








gsap.from(".card, #heading-x1", {
  opacity: 0,
  stagger: 0.4,
  // duration :1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 60%",
    marker: true
  }
})




// ---Initialize the Swiper 


// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




