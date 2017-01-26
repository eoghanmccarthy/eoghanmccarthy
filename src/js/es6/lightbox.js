/*
 * Lightbox
 *
 * 100% Modular
 */

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const viewer = document.getElementById('viewer');

/* Generate divs and CSS classes */
let divCount = gallery.childElementCount;
let toAdd = document.createDocumentFragment();

for (let i = 1; i <= divCount; i += 1) {
    let slideDiv = document.createElement('div');
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
let indxSlide = 1;
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
    let i;
    let slides = document.getElementsByClassName('slide');
    if (n > slides.length) {indxSlide = 1}
    if (n < 1) {indxSlide = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[indxSlide-1].style.display = 'block';
}
