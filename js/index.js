const slideShow = document.querySelectorAll(".slideShow > div");
const ShowLow = document.querySelector(".product-items");

let i = 0;
let opacityFade = 1;
let fadeInOut = true;
let happened = false;
//makes a slide show
setInterval(() => {
  if (opacityFade >= 1.4) {
    slideShow[i].style.display = "none";
    opacityFade = 0;
    if (i === 2) {
      i = -1;
    }
    fadeInOut = !fadeInOut;
    slideShow[++i].style.display = "block";
  }
  slideShow[i].style.opacity = `${(opacityFade += 0.009)}`;
}, 35);
// animates the products
document.addEventListener("scroll", (event) => {
  if (window.scrollY > 750) {
    ShowLow.style.display = "flex";
    happened = true;
  }
});
