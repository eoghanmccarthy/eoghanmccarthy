'use strict';

/*
 * Lightbox
 *
 * 100% Modular
 */

var gallery = document.getElementById('gallery');
var lightbox = document.getElementById('lightbox');
var viewer = document.getElementById('viewer');

/* Generate divs and CSS classes */
var divCount = gallery.childElementCount;
var toAdd = document.createDocumentFragment();

for (var i = 1; i <= divCount; i += 1) {
    var slideDiv = document.createElement('div');
    slideDiv.className = 'slide slide-' + i;
    toAdd.appendChild(slideDiv);
}

/* Append divs to container element */
viewer.appendChild(toAdd);

/* Function to open lightbox */
function lghtbxOpen() {
    lightbox.style.display = 'block';
}

/* Function to close lightbox */
function lghtbxClose() {
    lightbox.style.display = 'none';
}

/*
 * Lightbox navigation
 */

/* */
var indxSlide = 1;
showSlide(indxSlide);

/* Function to navigate to next slide */
function navSlide(n) {
    showSlide(indxSlide += n);
}

/* Function to */
function currentSlide(n) {
    showSlide(indxSlide = n);
}

/* Function to */
function showSlide(n) {
    var i = void 0;
    var slides = document.getElementsByClassName('slide');
    if (n > slides.length) {
        indxSlide = 1;
    }
    if (n < 1) {
        indxSlide = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[indxSlide - 1].style.display = 'block';
}