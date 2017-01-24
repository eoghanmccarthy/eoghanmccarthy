/*
 * Main navigation
 *
 * Add mobile nav class when icon is clicked
 */
function toggleNav() {
    let x = document.getElementById("topNav");
    if (x.className === "nav-bar") {
        x.className += " nav-bar--xs";
    } else {
        x.className = "nav-bar";
    }
}
