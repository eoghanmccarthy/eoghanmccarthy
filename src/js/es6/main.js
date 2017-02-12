/*
 * Main
 */

var web = {
    // Top navigation
    topnav: {
        navBar: $("#navBar"),
        navBarIcon: $("#navBarIcon"),
        // Add mobile class when icon is clicked
        nav: navBarIcon.addEventListener("click", function() {
            if (navBar.className === "nav-bar") {
                navBar.className += " nav-bar--xs";
            } else {
                navBar.className = "nav-bar";
            }
        })
    }
}

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
