function toggleNav() {
    var x = document.getElementById("topNav");
    if (x.className === "nav nav-top") {
        x.className += " nav-top__mobile";
    } else {
        x.className = "nav nav-top";
    }
}

function openModal() {
  document.getElementById('photoLightbox').style.display = "block";
}

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
  var slides = document.getElementsByClassName("lightbox__slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
