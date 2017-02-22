'use strict';

/*
 * Main
 */

(function () {
    // Responsive navigation menu
    // Add mobile class when icon is clicked
    nav: {
        $('#navBarIcon').click(function () {
            var menu = $('#navBar');
            if (menu.className === 'nav-bar') {
                menu.className += ' nav-bar--xs';
            } else {
                menu.className = 'nav-bar';
            }
        });
    }
})();

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