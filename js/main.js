// Add mobile nav class when icon is clicked
function toggleNav() {
    var x = document.getElementById("topNav");
    if (x.className === "nav-bar") {
        x.className += " nav-bar--xs";
    } else {
        x.className = "nav-bar";
    }
}

// Generate lightbox html
var html;
for (var i = 1; i <= 8; i += 1 ) {
    html += '<div class="slide slide-0' + i + '"></div>';
}
document.getElementById('lightboxSlides').innerHTML = html;

// Open lightbox
function openModal() {
    document.getElementById('photoLightbox').style.display = "block";
}

// Close lightbox
function closeModal() {
    document.getElementById('photoLightbox').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
