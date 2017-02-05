"use strict";

/*
 * Lightbox
 */

var gallery = document.getElementById("gallery");
var mediaContent = document.getElementsByClassName("media__content");
var lightbox = document.getElementById("lightbox");
var closeButton = document.getElementById("closeLightboxBtn");
var lightboxViewer = document.getElementById("lightboxViewer");

var lbox = {
    viewer: document.getElementById("lightboxViewer"),
    close: document.getElementById("closeLightboxBtn")
};

/* Constructor functions */
function _show(x) {
    x.style.display = "block";
}

function _hide(x) {
    x.style.display = "none";
}

/* Generate slide stack and CSS classes */
var galleryCount = gallery.childElementCount;
var slideStack = document.createDocumentFragment();

for (var _i = 1; _i <= galleryCount; _i++) {
    var slideUnit = document.createElement("div");
    slideUnit.className = "slide slide-" + _i;
    slideStack.appendChild(slideUnit);
}

/* Append slide stack fragment to viewer */
lbox.viewer.appendChild(slideStack);

/* Open lightbox */
for (var i = 0; i < mediaContent.length; i++) {
    mediaContent[i].addEventListener("click", function () {
        _show(lightbox);
    });
}

/* Close lightbox */
closeButton.addEventListener("click", function () {
    _hide(lightbox);
});

/*
 * Navigation
 */

/*
 * Set initial index
 * Indexed slide will display only
 */

var index = 1;
slideDisplay(index);

/* Set clicked gallery image as index */
function topSlide(n) {
    slideDisplay(index = n);
}

/* Click to navigate through slides */
var prvButton = document.getElementById("prv");
var nxtButton = document.getElementById("nxt");

// function LightboxNav(change) {
//     this.addEventListener("click", function() {
//         slideDisplay(index change);
//     });
// }
//
// prvButton LightboxNav("-= 1");
// nxtButton LightboxNav("+= 1");

prvButton.addEventListener("click", function () {
    slideDisplay(index -= 1);
});

nxtButton.addEventListener("click", function () {
    slideDisplay(index += 1);
});

/* Navigation controller */
function slideDisplay(n) {
    var i = void 0;
    var slides = document.getElementsByClassName("slide");
    /* Return index to 1 if 9 */
    if (n > slides.length) {
        index = 1;
    }
    /* Return index to 8 if 0 */
    if (n < 1) {
        index = slides.length;
    }
    /* Hide all slides */
    for (i = 0; i < slides.length; i++) {
        _hide(slides[i]);
    }
    /* Display current indexed slide */
    _show(slides[index - 1]);
}