/*
 * Lightbox JavaScript
 *
 * Modular
 */

// Generate html elements to contain slides
let toAdd = document.createDocumentFragment();
for (let i = 1; i < 9; i += 1) {
    let newDiv = document.createElement('div');
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
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

//
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
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