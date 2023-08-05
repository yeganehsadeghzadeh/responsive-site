let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".header__icon");
let menuBtnIcon = document.querySelector(".header__icon i");

menuBtn.addEventListener("click", function () {
  if (menuBtnIcon.classList.contains("fa-bars")) {
    menu.style.left = "-206px";
    menuBtnIcon.classList = "fa fa-times";
  } else {
    menu.style.left = "-461px";
    menuBtnIcon.classList = "fa fa-bars";
  }
});
