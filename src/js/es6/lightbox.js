/*
 * Lightbox
 */

const gallery = document.getElementById("gallery");
const mediaContent = document.getElementsByClassName("media__content");
// const lightbox = document.getElementById("lightbox");
// const closeButton = document.getElementById("closeLightboxBtn");
// const lightboxViewer = document.getElementById("lightboxViewer");

const lightboxObj = {
    lightbox: document.getElementById("lightbox"),
    close: document.getElementById("closeLightboxBtn"),
    viewer: document.getElementById("lightboxViewer")
};

/* Constructor functions */
function Show() {
    this.style.display = "block";
}

function Hide() {
    this.style.display = "none";
}

/* Generate slide stack and CSS classes */
let galleryCount = gallery.childElementCount;
let slideStack = document.createDocumentFragment();

for (let i = 1; i <= galleryCount; i++) {
    let slideUnit = document.createElement("div");
    slideUnit.className = "slide slide-" + i;
    slideStack.appendChild(slideUnit);
}

/* Append slide stack fragment to viewer */
lightboxObj.viewer.appendChild(slideStack);

/* Open lightbox */
for (var i = 0; i < mediaContent.length; i++) {
    mediaContent[i].addEventListener("click", function() {
        lightbox.style.display = "block";
    });
}

/* Close lightbox */
lightboxObj.lightbox = () => {
    closeButton.addEventListener("click", function() {
        this.style.display = "none";
    });
}

/*
 * Navigation
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
const prvButton = document.getElementById("prv");
const nxtButton = document.getElementById("nxt");

// function LightboxNav(change) {
//     this.addEventListener("click", function() {
//         slideDisplay(index change);
//     });
// }
//
// prvButton LightboxNav("-= 1");
// nxtButton LightboxNav("+= 1");

prvButton.addEventListener("click", function() {
    slideDisplay(index -= 1);
});

nxtButton.addEventListener("click", function() {
    slideDisplay(index += 1);
});

/* Navigation controller */
function slideDisplay(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    /* Return index to 1 if 9 */
    if (n > slides.length) {
        index = 1;
    }
    /* Return index to 8 if 0 */
    if (n < 1) {
        index = slides.length;
    }
    /* Hide all slides */
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    /* Display current indexed slide */
    slides[index-1].style.display = "block";
}
