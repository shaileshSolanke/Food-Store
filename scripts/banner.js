banners = [
  { src: "./assets/images/advertisement-banners/banner01.png", alt: "banner-01" },
  { src: "./assets/images/advertisement-banners/banner02.png", alt: "banner-02" },
  { src: "./assets/images/advertisement-banners/banner03.png", alt: "banner-03" },
  { src: "./assets/images/advertisement-banners/banner04.png", alt: "banner-04" },
  { src: "./assets/images/advertisement-banners/banner05.png", alt: "banner-05" },
  { src: "./assets/images/advertisement-banners/banner06.png", alt: "banner-06" },
  { src: "./assets/images/advertisement-banners/banner07.png", alt: "banner-07" },
  
];

const slides = document.querySelector(".slides");
banners.forEach((slide) => {
  slides.innerHTML += `<img class="slide" src=${slide.src} alt=${slide.alt}>`;
});

let currentIndex = 0;
const allSlides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % allSlides.length;
  showSlide(currentIndex)
}

setInterval(autoSlide,7500)
