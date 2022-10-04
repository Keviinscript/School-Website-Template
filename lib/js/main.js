"use strict";

var aboutUs = document.querySelector('#aboutus'),
    aboutUsDropdown = document.querySelector('#aboutusdropdown'),
    menuIcon = document.querySelector('#menuicon'),
    menuItems = document.querySelector('#menuitems'),
    contactUs = document.querySelector('#contactus'),
    contactUsDropdown = document.querySelector('#contactusdropdown');
aboutUs.addEventListener('focusin', function () {
  aboutUsDropdown.classList.remove('hidden');
  aboutUsDropdown.classList.add('show');
});
aboutUs.addEventListener('focusout', function () {
  aboutUsDropdown.classList.add('hidden');
  aboutUsDropdown.classList.remove('show');
});
contactUs.addEventListener('focusin', function () {
  contactUsDropdown.classList.remove('hidden');
  contactUsDropdown.classList.add('show');
});
contactUs.addEventListener('focusout', function () {
  contactUsDropdown.classList.add('hidden');
  contactUsDropdown.classList.remove('show');
});
menuIcon.addEventListener('click', function () {
  menuItems.classList.toggle('hidden');
  menuItems.classList.add('mainshow');
}); // menuIcon.addEventListener('focusout', () => {
//     menuItems.classList.add('hidden')
//     menuItems.classList.remove('mainshow')
//     menuItems.classList.add('mainhide')
// })