'use strict'

/**
 Element toggle function
 */

const elemToggleFunc = function (elem) {
    elem.classList.toggle("active");
}

/**
 NAVBAR Toggle
 */
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navClosebtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelector("[data-nav-Link]");

const navElemArr = [overlay, navClosebtn, navOpenBtn];

/**
 close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) {
    navElemArr.push(navbarLinks[i]);
}

/**
 added event on all elemenets for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function () {
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
    });
}



/*  HEADER ACTIVE STATUS */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    this.window.scrollY >= 400 ? header.classList.add("active")
        : header.classList.remove("active");
})
