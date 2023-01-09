let selectIndoorOutdoor = document.querySelector("#mySelection");
let mySelection;
const slideShow = document.querySelector("#slideShow")
selectIndoorOutdoor.addEventListener("change", (event) => {
  document.querySelector(".Outdoor").style.display = "none";
  document.querySelector(".Indoor ").style.display = "none";
  if (event.target.value === "Indoor") {
    document.querySelector(".Indoor ").style.display = "block";
  } else if (event.target.value === "Outdoor") {
    document.querySelector(".Outdoor ").style.display = "block";
  } else if (event.target.value === "InAndOut") {
    document.querySelector(".Indoor ").style.display = "block";
    document.querySelector(".Outdoor ").style.display = "block";
  } else {
    alert("Please Input a selection");
  }
});






























{
  myName: "thing"
 }





