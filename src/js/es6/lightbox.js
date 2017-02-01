/*
 * Lightbox
 *
 * 100% Modular
 */

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxViewer = document.getElementById('lightboxViewer');

/* Generate slide stack and CSS classes */
let galleryCount = gallery.childElementCount;
let slideStack = document.createDocumentFragment();

for (let i = 1; i <= galleryCount; i += 1) {
    let slideUnit = document.createElement('div');
    slideUnit.className = 'slide slide-' + i;
    slideStack.appendChild(slideUnit);
}

/* Append slide stack fragment to viewer */
lightboxViewer.appendChild(slideStack);

/* Open and close lightbox */
const mediaContent = document.getElementsByClassName('media__content');
const closeLightbox = document.getElementById('closeLightbox');

/* Open lightbox */
mediaContent.addEventListener('click', () => {
    lightbox.style.display = 'block';
});

/* Close lightbox */
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

/*
 * Lightbox navigation
 */

/*
 * Set initial index
 * Indexed slide will display only
 */

let index = 1;
slideDisplay(index);

/* Set clicked gallery image as index */
function topSlide(n) {
    slideDisplay(index = n);
}

/* Click to navigate through slides */
const prv = document.getElementById('prv');
const nxt = document.getElementById('nxt');

prv.addEventListener('click', () => {
    slideDisplay(index -= 1);
});

nxt.addEventListener('click', () => {
    slideDisplay(index += 1);
});

// const nav = {
//     prv: document.getElementById('prv'),
//     nxt: document.getElementById('nxt'),
//     prvGo: this.prv ('click', () => {
//         slideDisplay(index -= 1);
//     }),
//     nxtGo: this.nxt ('click', () => {
//         slideDisplay(index += 1);
//     }),
// };

/* Navigation controller */
function slideDisplay(n) {
    let i;
    let slides = document.getElementsByClassName('slide');
    /* Return index to 1 if 9 */
    if (n > slides.length) {
        index = 1
    }
    /* Return index to 8 if 0 */
    if (n < 1) {
        index = slides.length
    }
    /* Hide all slides */
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    /* Display current indexed slide */
    slides[index-1].style.display = 'block';
}
