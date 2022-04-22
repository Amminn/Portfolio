"use strict";

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
};

console.log('hello'); // We validate if the user previously chose a topic

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
/*=============== SCROLL REVEAL ANIMATION ===============*/

var sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
});
sr.reveal(".profile__border");
sr.reveal(".logo-link", {
  delay: 100
});
sr.reveal(".change-theme", {
  delay: 250
});
sr.reveal(".profile__name", {
  delay: 500
});
sr.reveal(".profile__profession", {
  delay: 600
});
sr.reveal(".profile__social", {
  delay: 700
});
sr.reveal(".profile__info-group", {
  interval: 100,
  delay: 700
});
sr.reveal(".profile__buttons", {
  delay: 800
});
sr.reveal(".filters__content", {
  delay: 900
});
sr.reveal(".filters", {
  delay: 1000
});