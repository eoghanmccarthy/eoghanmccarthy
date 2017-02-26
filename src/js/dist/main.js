'use strict';

/*
 * Main
 */

// (() => {
//
//     // Web app
//     const Web = {
//         // Init
//         init: () => {
//             Web.menu.bind();
//         },
//         // Menu
//         menu: {
//             // Bind menu
//             bind: () => {
//                 $('#menu-toggle').on('click', () => {
//                     let m = $('#menu');
//                     if (m.className === 'menu-nav__list') {
//                         m.className += ' menu-nav__list--xs';
//                     } else {
//                         m.className = 'menu-nav__list';
//                     }
//                 });
//             }
//         }
//     };
//
//     Web.init();
//
// })();

/* Function to add mobile class when icon is clicked */
var navBar = document.getElementById('menu');
var navBarIcon = document.getElementById('menu-toggle');

navBarIcon.addEventListener("click", function () {
    if (navBar.className === 'menu-nav__list') {
        navBar.className += ' menu-nav__list--xs';
    } else {
        navBar.className = 'menu-nav__list';
    }
});