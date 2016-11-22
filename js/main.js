function myFunction() {
    var x = document.getElementById("topNav");
    if (x.className === "header__nav") {
        x.className += " responsive";
    } else {
        x.className = "header__nav";
    }
}
