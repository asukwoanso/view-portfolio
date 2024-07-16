//Dark mode
const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});
//where user click on the menu button - open menu
function myMenuFunction() {
  var navMenu = document.getElementById("navMenu");
  if (navMenu.className === "nav_menu") {
    navMenu.className += " responsive";
  } else {
    navMenu.className = "nav_menu";
  }
}
//where user click on the close(x) button - open menu
function menuClose() {
  var navMenu = document.getElementById("navMenu");
  navMenu.className = "nav_menu";
}
//modal box must be shown on small device only - not on desktop or large Viewport
var modals = document.querySelectorAll(".modal");
//Get button that opens th modal
var btn = document.querySelectorAll("a.link");
//Get button that close th modal
var closeBtn = document.getElementsByClassName("close");
//Get the media query of the viewport
const mediaQuery = window.matchMedia("max-width: 1084px");
//function to allow the modal box to be visible if they match the media query
function handleMediaQueryChange(event) {
  if (event.matches) {
    // Open the modal when user clicks the link
    for (var i = 0; i < btn.length; i++) {
      btn[i].onclick = function (e) {
        e.preventDefault();
        var modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
      };
    }
    //close the modal when user clicks the close btn
    for (var i = 0; i < closeBtn.length; i++) {
      closeBtn[i].onclick = function () {
        for (var index in modals) {
          if (typeof modals[index].style !== "undefined") {
            modals[index].style.display = "none";
          }
        }
      };
    }
    //close the modal when user clicks the anywhere outside the modal
    window.onclick = function (event) {
      if (event.target.classList.contains("modal")) {
        for (var index in modals) {
          if (typeof modals[index].style !== "undefined") {
            modals[index].style.display = "none";
          }
        }
      }
    };
  } else {
    for (var i = 0; i < btn.length; i++) {
      btn[i].onclick = function (e) {
        e.preventDefault();
        var modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "none";
      };
    }
  }
}
handleMediaQueryChange(mediaQuery);

//Add event listener
mediaQuery.addEventListener("change", handleMediaQueryChange);

//close the side navbar where user click on the link
const navLink = document.querySelectorAll(".link");

function linkAction() {
  const navMenu = document.getElementById(".navMenu");
  navMenu.classList.remove("responsive");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
