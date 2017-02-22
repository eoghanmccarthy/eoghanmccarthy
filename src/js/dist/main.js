'use strict';

/*
 * Main
 */

(function () {
    // Responsive navigation menu
    // Add mobile class when icon is clicked
    nav: {
        var icon = $('#navBarIcon');
        icon.addEventListener('click', function () {
            var menu = $('#navBar');
            if (menu.className === 'nav-bar') {
                menu.className += ' nav-bar--xs';
            } else {
                menu.className = 'nav-bar';
            }
        });
    }
})();

// const Web = {
//     // Responsive navigation menu
//     nav: {
//         menu: $('#navBar'),
//         icon: $('#navBarIcon'),
//         // Add mobile class when icon is clicked
//         toggle: function() {
//             Web.nav.icon.addEventListener('click', function () {
//                 if (Web.nav.menu.className === 'nav-bar') {
//                 this.className += ' nav-bar--xs';
//                 } else {
//                 this.className = 'nav-bar';
//                 }
//             });
//         }
//     }
// };

// /* Function to add mobile class when icon is clicked */
// const navBar = document.getElementById('navBar');
// const navBarIcon = document.getElementById('navBarIcon');
//
// navBarIcon.addEventListener("click", function() {
//     if (navBar.className === 'nav-bar') {
//         navBar.className += ' nav-bar--xs';
//     } else {
//         navBar.className = 'nav-bar';
//     }
// });