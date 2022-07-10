"use strict";

/*=============== Contact ===============*/
var body = document.body;
var showContact = document.getElementById('showContact');
var hideContact = document.getElementById('hideContact');
var filterSection = document.getElementById('filters');
var contactBtn = document.getElementById('contactBtn');
var contactSection = document.getElementById('contact');
var userName = document.getElementById('name');
var userEmail = document.getElementById('email');
var userMessage = document.getElementById('message');
var successNotification = document.getElementById('success');
var failedNotification = document.getElementById('failed');
showContact.addEventListener('click', function () {
  body.classList.toggle('show');
});
hideContact.addEventListener('click', function () {
  body.classList.toggle('show');
});
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.contact__form').addEventListener('submit', function (event) {
    fetch("https://formsubmit.co/ajax/8cfd44e7be444302d0b82778fb518b5f", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Name: userName.value,
        Email: userEmail.value,
        Message: userMessage.value
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.success === 'true') {
        // empty the inputs only after submit is done
        userName.value = '';
        userEmail.value = '';
        userMessage.value = 'The message is sent and i will get to you back soon'; // show success notificaion and then hide it after 8s

        contactSection.classList.add('success-send'); // if the user click on the notification it will disappear

        successNotification.addEventListener('click', function () {
          contactSection.classList.remove('success-send');
        });
        setTimeout(function () {
          contactSection.classList.remove('success-send');
        }, 8000);
      } else if (data.success === 'false') {
        console.log('sorry there is an error '); // if there is an error we will get faild to sent notification and it will hide in 8s aswell

        contactSection.classList.add('failed-send'); // if the user click on the notification it will disappear

        failedNotification.addEventListener('click', function () {
          contactSection.classList.remove('failed-send');
        });
        setTimeout(function () {
          contactSection.classList.remove('failed-send');
        }, 8000);
      }
    })["catch"](function (error) {
      console.log(error);
      contactSection.classList.add('failed-send');
      setTimeout(function () {
        contactSection.classList.remove('failed-send');
      }, 8000);
    });
    event.preventDefault();
  });
});
/*=============== FILTERS TABS ===============*/

var tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');
tabs.forEach(function (tab) {
  tab.addEventListener('click', function () {
    var target = document.querySelector(tab.dataset.target);
    /* console.log(tab.dataset.target)  so when you click on about you get back #projects
                                    becuase this element have data-target="#projects" */

    tabContents.forEach(function (tc) {
      tc.classList.remove('filters__active');
    });
    target.classList.add('filters__active');
    tabs.forEach(function (t) {
      t.classList.remove('filter-tab-active');
    });
    tab.classList.add('filter-tab-active');
  });
});
/*=============== DARK LIGHT THEME ===============*/

var themeButton = document.getElementById('theme-button');
var darkTheme = 'dark-theme';
var iconTheme = 'ri-sun-line'; // Previously selected topic (if user selected)

var selectedTheme = localStorage.getItem('selected-theme');
var selectedIcon = localStorage.getItem('selected-icon'); // console.log(selectedIcon, selectedTheme)
// We obtain the current theme that the interface has by validating the dark-theme class

var getCurrentTheme = function getCurrentTheme() {
  return document.body.classList.contains(darkTheme) ? 'dark' : 'light';
};

var getCurrentIcon = function getCurrentIcon() {
  return themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';
}; // We validate if the user previously chose a topic


if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
} // Activate / deactivate the theme manually with the button


themeButton.addEventListener('click', function () {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme); // We save the theme and the current icon that the user chose

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
var laptop = document.querySelector('.laptop');
var happyFace = document.querySelector('.face');
var pen = document.querySelector('.pen');
window.addEventListener('mousemove', function (evt) {
  var x = -(window.innerWidth / 2 - evt.pageX) / 17;
  var y = -(window.innerHeight / 2 - evt.pageY) / 17;
  console.log(x);
  laptop.style.transform = "translateY(".concat(y / 4 * -1, "px) translateX(").concat(x / 4 * -1, "px)");
  happyFace.style.transform = "translateY(".concat(y / 1.5, "px) translateX(").concat(x / 1.5, "px)");
  pen.style.transform = "translateY(".concat(y / 5, "px) translateX(").concat(x / 5, "px)");
});
/*=============== SCROLL REVEAL ANIMATION ===============*/

var sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
}); // sr.reveal(`.profile__border`)
// sr.reveal(`.logo-link`, {delay: 100}) 
// sr.reveal(`.change-theme`, {delay: 250})
// sr.reveal(`.profile__name`, {delay: 500})
// sr.reveal(`.profile__profession`, {delay: 600})
// sr.reveal(`.profile__social`, {delay: 700})
// sr.reveal(`.profile__info-group`, {interval: 100, delay: 700})
// sr.reveal(`.profile__buttons`, {delay: 800})
// sr.reveal(`.filters__content`, {delay: 900})
// sr.reveal(`.filters`, {delay: 1000})