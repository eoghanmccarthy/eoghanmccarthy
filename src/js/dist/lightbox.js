"use strict";

var _templateObject = _taggedTemplateLiteral(["", ""], ["", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*
 * Lightbox
 */

!function () {

    /* Helper functions */
    function $id(element) {
        document.getElementById(element);
    }

    function $class(element) {
        document.getElementsByClassName(element);
    }

    var gallery = $id("gallery");
    var media = $class("media__content");

    var lightbox = $id("lightbox");
    var close = $id("lightboxClose");
    var viewer = $id("lightboxViewer");

    /* Constructor functions */
    function show(x) {
        x.style.display = "block";
    }

    function hide(x) {
        x.style.display = "none";
    }

    /* Generate slide stack and CSS classes */
    var galleryCount = gallery.childElementCount;
    var slideStack = document.createDocumentFragment();

    for (var _i = 1; _i <= galleryCount; _i++) {
        var slideUnit = document.createElement("div");
        slideUnit.className = "slide slide-" + _i;
        slideStack.appendChild(slideUnit);
    }

    /* Append slide stack fragment to viewer */
    viewer.appendChild(slideStack);

    /* Open lightbox */
    for (var i = 0; i < media.length; i++) {
        media[i].addEventListener("click", function () {
            Show(lightbox);
        });
    }

    /* Close lightbox */
    close.addEventListener("click", function () {
        Hide(lightbox);
    });

    /*
    * Navigation
    */

    /*
    * Set initial index
    * Indexed slide will display only
    */

    var index = 1;
    slideDisplay(index);

    /* Set clicked gallery image as index */
    function topSlide(n) {
        slideDisplay(index = n);
    }

    var prv = $id("navBack");
    var nxt = $id("navForward");

    function nav(x) {
        this.addEventListener("click", function () {
            slideDisplay(index(_templateObject, x = 1));
        });
    };

    prv = nav("-");
    nxt = nav("+");

    // back.addEventListener("click", function() {
    //     slideDisplay(index -= 1);
    // });
    //
    // forward.addEventListener("click", function() {
    //     slideDisplay(index += 1);
    // });

    /* Navigation controller */
    function slideDisplay(n) {
        var i = void 0;
        var slides = $class("slide");
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
            Hide(slides[i]);
        }
        /* Display current indexed slide */
        Show(slides[index - 1]);
    }
}();