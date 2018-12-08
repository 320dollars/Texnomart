var buttonPopup = document.querySelector(".popup-write");
var popup = document.querySelector(".write-us");
var exitPopup = document.querySelector(".exit");
var buttonMap = document.querySelector(".open-map");
var map = document.querySelector(".map");
var exitMap = document.querySelector(".exit-map");
var tovat = document.querySelectorAll(".tovat");
var hidButtons = document.querySelectorAll('btv-tovat');


var slaider = document.querySelector(".slaider");
var buttonNext = document.querySelector(".next");
var buttonPrevious = document.querySelector(".previous");

function openThat(nameObj, modalWin, className) {
  nameObj.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalWin.classList.add(className);
  });
}

function closeThat(nameObj, modalWin, className) {
  nameObj.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalWin.classList.remove(className);
  });
}

openThat(buttonPopup, popup, "write-us-show");
openThat(buttonMap, map, "map-show");
closeThat(exitPopup, popup, "write-us-show");
closeThat(exitMap, map, "map-show");

for (var i = 0; i < tovat.length; i++) {
  tovat[i].addEventListener("mouseover", function(){
    hidButtons.classList.add("show-buttons");
  });
}
