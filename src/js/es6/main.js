/*
 * Main
 */

(function () {

    // Web app
    const Web = {
        // Init
        init: () => {
            Web.nav();
        },
        // Menu
        nav: () => {
            $('#navBarIcon').on('click', () => {
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
