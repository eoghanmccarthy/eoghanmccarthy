'use strict';

/*
 * Main
 */

(function () {

    // Web app
    var Web = {
        // Init
        init: function init() {
            Web.bind();
        },
        // Bind
        bind: function bind() {
            undefined.menu.bind();
        },
        // Menu
        menu: {
            // Bind
            bind: function bind() {
                $('#menu-toggle').on('click', function () {
                    var m = $('#menu');
                    if (m.className === 'menu-nav__list') {
                        m.className += ' menu-nav__list--xs';
                    } else {
                        m.className = 'menu-nav__list';
                    }
                });
            }
        }
    };

    Web.init();
})();

// /* Function to add mobile class when icon is clicked */
// const navBar = document.getElementById('menu');
// const navBarIcon = document.getElementById('menu-toggle');
//
// navBarIcon.addEventListener("click", function() {
//     if (navBar.className === 'menu-nav__list') {
//         navBar.className += ' menu-nav__list--xs';
//     } else {
//         navBar.className = 'menu-nav__list';
//     }
// });