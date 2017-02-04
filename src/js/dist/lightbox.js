'use strict';

/*
 * Lightbox
 *
 * 100% Modular
 */

var gallery = document.getElementById("gallery");
var mediaContent = document.getElementsByClassName('media__content');
var lightbox = document.getElementById('lightbox');
var closeLightboxBtn = document.getElementById("closeLightboxBtn");
var lightboxViewer = document.getElementById('lightboxViewer');

/* Generate slide stack and CSS classes */
var galleryCount = gallery.childElementCount;
var slideStack = document.createDocumentFragment();

for (var i = 1; i <= galleryCount; i++) {
    var slideUnit = document.createElement('div');
    slideUnit.className = 'slide slide-' + i;
    slideStack.appendChild(slideUnit);
}

/* Append slide stack fragment to viewer */
lightboxViewer.appendChild(slideStack);

/* Open lightbox */
var openLightbox = function openLightbox() {
    lightbox.style.display = "block";
    for (var i = 0; i < mediaContent.length; i++) {
        mediaContent[i].addEventListener("click", openLightbox);
    }
};

closeLightboxBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
});

/*
 * Lightbox navigation
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
var prv = document.getElementById('prv');
var nxt = document.getElementById('nxt');

prv.addEventListener('click', function () {
    slideDisplay(index -= 1);
});

nxt.addEventListener('click', function () {
    slideDisplay(index += 1);
});

/* Navigation controller */
function slideDisplay(n) {
    var i = void 0;
    var slides = document.getElementsByClassName('slide');
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
        slides[i].style.display = 'none';
    }
    /* Display current indexed slide */
    slides[index - 1].style.display = 'block';
}