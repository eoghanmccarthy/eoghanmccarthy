/*
 * Main navigation
 */

/* Function to add mobile class when icon is clicked */
const navBar = document.getElementById("navBar");
const navBarIcon = document.getElementById("navBarIcon");

navBarIcon.addEventListener("click", () => {
    if (navBar.className === "nav-bar") {
        navBar.className += " nav-bar--xs";
    } else {
        navBar.className = "nav-bar";
    }
});

// function toggleNav() {
//     let x = document.getElementById("topNav");
//     if (x.className === "nav-bar") {
//         x.className += " nav-bar--xs";
//     } else {
//         x.className = "nav-bar";
//     }
// }
