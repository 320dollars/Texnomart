var buttonPopup = document.querySelector(".popup-write");
var popup = document.querySelector(".write-us");
var exitPopup = document.querySelector(".exit");
var buttonMap = document.querySelector(".open-map");
var map = document.querySelector(".map");
var exitMap = document.querySelector(".exit-map");

buttonPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("write-us-show");
});

exitPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("write-us-show");
});

buttonMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.add("map-show");
});

exitMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.remove("map-show");
});
