function myFunction() {
    var x = document.getElementById("topNav");
    if (x.className === "nav nav-top") {
        x.className += " nav-top__mobile";
    } else {
        x.className = "nav nav-top";
    }
}
