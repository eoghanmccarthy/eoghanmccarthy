'use strict';

/*
 * Lightbox JavaScript
 *
 * Modular
 */

// Generate html elements to contain slides
var toAdd = document.createDocumentFragment();
for (var i = 1; i < 9; i += 1) {
    var newDiv = document.createElement('div');
    newDiv.className = 'slide slide-' + i;
    toAdd.appendChild(newDiv);
}

document.getElementById('lightboxViewer').appendChild(toAdd);

// Open lightbox
function openModal() {
    document.getElementById('lightbox').style.display = "block";
}

// Close lightbox
function closeModal() {
    document.getElementById('lightbox').style.display = "none";
}

//
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

//
function showSlides(n) {
    var i = void 0;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}