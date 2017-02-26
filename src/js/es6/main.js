/*
 * Main
 */

(function () {

    // Web app
    var Web = {
        // Init
        init: function() {
            this.nav();
        },
        // Menu
        nav: function() {
            $('#navBarIcon').on('click', function() {
                let menu = $('#navBar');
                if (menu.className === 'nav-bar') {
                    menu.className += ' nav-bar--xs';
                } else {
                    menu.className = 'nav-bar';
                }
            });
        }
    };

    Web.init();

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
