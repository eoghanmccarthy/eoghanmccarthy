'use strict';

/*
 * Lightbox
 *
 * 100% Modular
 */

var gallery = document.getElementById('gallery');
var lightbox = document.getElementById('lightbox');
var viewer = document.getElementById('viewer');

/* Generate slide divs and CSS classes */
var galleryCount = gallery.childElementCount;
var slideStack = document.createDocumentFragment();

for (var i = 1; i <= galleryCount; i += 1) {
    var slideUnit = document.createElement('div');
    slideUnit.className = 'slide slide-' + i;
    slideStack.appendChild(slideUnit);
}

/* Append slide stack fragment to viewer */
viewer.appendChild(slideStack);

/* Function to open lightbox */
function lightboxOpen() {
    lightbox.style.display = 'block';
}

/* Function to close lightbox */
function lightboxClose() {
    lightbox.style.display = 'none';
}

/*
 * Lightbox navigation
 */

/* */
var slideIndex = 1;
showSlide(slideIndex);

/* Function to */
function slideVisible(n) {
    showSlide(slideIndex = n);
}

/* Function to navigate through slides */
function slidesVia(n) {
    showSlide(slideIndex += n);
}

/* Function to */
function showSlide(n) {
    var i = void 0;
    var slides = document.getElementsByClassName('slide');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}