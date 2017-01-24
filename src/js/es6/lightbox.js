// Generate lightbox html
var toAdd = document.createDocumentFragment();
for (var i = 1; i < 9; i += 1) {
   var newDiv = document.createElement('div');
   newDiv.className = 'slide slide-' + i;
   toAdd.appendChild(newDiv);
}
document.getElementById('photoLightbox').appendChild(toAdd);

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
