var buttonPopup = document.querySelector(".popup-write");
var popup = document.querySelector(".write-us");
var exitPopup = document.querySelector(".exit");
var buttonMap = document.querySelector(".open-map");
var map = document.querySelector(".map");
var exitMap = document.querySelector(".exit-map");
var login = popup.querySelector("input[name=name]");
var form = popup.querySelector("form");
var email = popup.querySelector("input[name=e-mail]");
var text = popup.querySelector("textarea");

var isStorageSupport = true;
var storage = "";

try {
  storage.localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

if (storage) {
  login.value = storage;
  email.focus();
} else {
  login.focus();
}

function openThat(nameObj, modalWin, className) {
  nameObj.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalWin.classList.add(className);
    login.focus();
  });
}

function closeThat(nameObj, modalWin, className) {
  nameObj.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalWin.classList.remove(className);
    popup.classList.remove("modal-error");
  });
}

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!login.value || !email.value || !text.value) {
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

function downEsc(nameObj, className) {
  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();

      if (nameObj.classList.contains(className)) {
        nameObj.classList.remove(className);
      }
    }
  });
}

openThat(buttonPopup, popup, "write-us-show");
openThat(buttonMap, map, "map-show");
closeThat(exitPopup, popup, "write-us-show");
closeThat(exitMap, map, "map-show");
downEsc(popup, "write-us-show");
downEsc(map, "map-show");
