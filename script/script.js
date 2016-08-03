    var nojsList = document.querySelectorAll(".no-js");
    var openMenu = document.querySelector(".hamburger");
    var navList = document.querySelector(".main-nav__list");
    var navLink = document.querySelector(".main-nav__link");
    var iconMenu = openMenu.querySelector(".icon-hamburger");
    var formInputName = document.querySelector("#name");
    var formInputMail = document.querySelector("#email");
    var formTextareaMessage = document.querySelector("#message");
    var submitBtn = document.querySelector(".contact-form__btn");

    for (var i = 0; i < nojsList.length; i++) {
      nojsList[i].classList.remove("no-js");
    }

    if (formInputName.value == "" ||
        formInputMail.value == "" ||
        formTextareaMessage.value == "") {
          submitBtn.disabled = true;
    }

    formInputMail.addEventListener("keyup", function(event) {
      if (formInputName.value != "" &&
          formInputMail.value != "" &&
          formTextareaMessage.value != "") {
        submitBtn.disabled = false;
      }
      else {
        submitBtn.disabled = true;
      }
    });

    formTextareaMessage.addEventListener("keyup", function(event) {
      if (formInputName.value != "" &&
          formInputMail.value != "" &&
          formTextareaMessage.value != "") {
        submitBtn.disabled = false;
      }
      else {
        submitBtn.disabled = true;
      }
    });

    formInputName.addEventListener("keyup", function(event) {
      if (formInputName.value != "" &&
          formInputMail.value != "" &&
          formTextareaMessage.value != "") {
        submitBtn.disabled = false;
      }
      else {
        submitBtn.disabled = true;
      }
    });

   openMenu.addEventListener("click", function(event) {
      event.preventDefault();
      navList.classList.toggle("main-nav__list--hidden");
      iconMenu.classList.toggle("active");
    });

    navLink.addEventListener("click", function(event) {
       event.preventDefault();
       navList.classList.toggle("main-nav__list--hidden");
       iconMenu.classList.toggle("active");
     });

    jQuery(document).ready(function() {
      jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
        return false;
      });
    });
