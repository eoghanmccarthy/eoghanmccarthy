/*
 * Lightbox
 *
 * 100% Modular
 */

/* Generate divs and CSS classes */
let toAdd = document.createDocumentFragment();
for (let i = 1; i < 9; i += 1) {
    let slideDiv = document.createElement('div');
    slideDiv.className = 'slide slide-' + i;
    toAdd.appendChild(slideDiv);
}

/* Append divs to container element */
document.getElementById('lightboxViewer').appendChild(toAdd);

/* Function to open lightbox */
function openModal() {
    document.getElementById('lightbox').style.display = "block";
}

/* Function to close lightbox */
function closeModal() {
    document.getElementById('lightbox').style.display = "none";
}

/*
 * Lightbox navigation
 */

/* */
let slideIndex = 1;
showSlides(slideIndex);

/* Function to navigate to next slide */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/* Function to */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Function to */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
