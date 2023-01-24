// let selectIndoorOutdoor = document.querySelector("#service-select");
// let mySelection;


// const slideShow = document.querySelector("#slideShow")
// selectIndoorOutdoor.addEventListener("change", (event) => {
//   document.querySelector(".outdoor").style.display = "none";
//   document.querySelector(".indoor ").style.display = "none";
//   if (event.target.value === "indoor") {
//     document.querySelector(".indoor ").style.display = "block";
//   } else if (event.target.value === "outdoor") {
//     document.querySelector(".outdoor ").style.display = "block";
//   } else if (event.target.value === "InAndOut") {
//     document.querySelector(".indoor ").style.display = "block";
//     document.querySelector(".outdoor ").style.display = "block";
//   } else {
//     alert("Please Input a selection");
//   }
// });


const overlay = document.querySelector(".overlay");
const barMenuIcon = document.querySelector(".x");
const navMenuItems = document.querySelector("nav");

const ShowHideMenu = (event) => {
  if (event.type === "scroll" && overlay) {
    navMenuItems.style.display = "none";
    overlay.style.display = "flex";
    return;
  }
  // console.log(navMenuItems.style.display);
  if (event.type === "click" && navMenuItems.style.display !== "flex") {
    navMenuItems.style.display = "flex";
    overlay.style.display = "none";
  } else if (event.type === "click" && navMenuItems.style.display === "flex") {
    navMenuItems.style.display = "none";
    overlay.style.display = "flex";
  }
};
document.addEventListener("scroll", ShowHideMenu);
let myClick = barMenuIcon.addEventListener("click", ShowHideMenu);



