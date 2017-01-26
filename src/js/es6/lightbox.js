/*
 * Lightbox
 *
 * 100% Modular
 */

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const viewer = document.getElementById('viewer');

/* Generate slide divs and CSS classes */
let galleryCount = gallery.childElementCount;
let slideStack = document.createDocumentFragment();

for (let i = 1; i <= galleryCount; i += 1) {
    let slideUnit = document.createElement('div');
    slideUnit.className = 'slide slide-' + i;
    slideStack.appendChild(slideUnit);
}

/* Append slide stack fragment to viewer */
viewer.appendChild(slideStack);

/* Open lightbox */
function lightboxOpen() {
    lightbox.style.display = 'block';
}

/* Close lightbox */
function lightboxClose() {
    lightbox.style.display = 'none';
}

/*
 * Lightbox navigation
 */

/* */
let slideIndex = 1;
showSlide(slideIndex);

/* Display clicked gallery image*/
function topSlide(n) {
    showSlide(slideIndex = n);
}

/* Navigate through slides */
function slidesVia(n) {
    showSlide(slideIndex += n);
}

/* Function to */
function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName('slide');
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'block';
}
