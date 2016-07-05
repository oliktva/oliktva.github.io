    var nojsList = document.querySelectorAll(".no-js");
    var openMenu = document.querySelector(".hamburger");
    var navList = document.querySelector(".main-nav__list");
    var iconMenu = openMenu.querySelector(".icon-hamburger");

    for (var i = 0; i < nojsList.length; i++) {
      nojsList[i].classList.remove("no-js");
    }

   openMenu.addEventListener("click", function(event) {
      event.preventDefault();
      navList.classList.toggle("main-nav__list--hidden");
      iconMenu.classList.toggle("active");
    });
