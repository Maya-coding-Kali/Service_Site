let selectIndoorOutdoor = document.querySelector("#service-select");
let mySelection;

// const barMenuIcon = document.querySelector(".fa-bar-color");
// const navMenuItems = document.querySelector("nav");
// const overlay = document.querySelector(".overlay");

// const slideShow = document.querySelector("#slideShow");
selectIndoorOutdoor.addEventListener("change", (event) => {
  document.querySelector(".outdoor").style.display = "none";
  document.querySelector(".indoor ").style.display = "none";
  if (event.target.value === "indoor") {
    document.querySelector(".indoor ").style.display = "block";
  } else if (event.target.value === "outdoor") {
    document.querySelector(".outdoor ").style.display = "block";
  } else if (event.target.value === "InAndOut") {
    document.querySelector(".indoor ").style.display = "block";
    document.querySelector(".outdoor ").style.display = "block";
  } else {
    alert("Please Input a selection");
  }
});
