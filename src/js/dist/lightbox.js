'use strict';

/*
 * Lightbox
 */

(function () {

   // Lightbox app
   var Lightbox = {
      // Init
      init: function init() {
         Lightbox.bind();
      },
      // Bind
      bind: function bind() {
         Lightbox.modal.open();
         Lightbox.modal.close();
      },
      // Modal
      modal: {
         // Open
         open: function open() {
            $('img.media__content').on('click', function () {
               $('.lightbox').style.display = 'block';
            });
         },
         // Close
         close: function close() {
            $('#lightboxClose').on('click', function () {
               $('.lightbox').style.display = 'none';
            });
         }
      },
      // Slide
      slide: {
         stack: function stack() {
            var count = $('#gallery').childElementCount;
            for (var i = 1; i <= count; i++) {
               var unit = document.createElement('div');
               unit.className = 'slide slide-' + i;
               var deck = document.createDocumentFragment();
               deck.appendChild(unit);
            }
            // Append slide stack fragment to viewer
            //const viewer = $('#lightboxViewer');
            $('#lightboxViewer').appendChild(Lightbox.slide.stack);
         }
      }
      //     // Index
      //     index: 1,
      //     // Show clicked image as top slide
      //     current: function top(n) {
      //         this.index = n;
      //     },
      // 	// Slide navigation
      // 	nav: () => {
      // 		// Previous slide
      // 		prv: () => {
      // 			let prevBtn = $('#prevBtn');
      // 			prevBtn.on('click', () => {
      //                 show(index += n);
      //             });
      // 		},
      // 		// Next slide
      // 		nxt: () => {
      // 			let nextBtn = $('#nextBtn');
      // 			nextBtn.on('click', () => {
      //                 show(index -= n);
      //             });
      // 		}
      // 	},
      //
      //     function showSlide(n) {
      //         let i;
      //         let slides = $class("slide");
      //         /* Return index to 1 if 9 */
      //         if (n > slides.length) {
      //          index = 1;
      //         }
      //         /* Return index to 8 if 0 */
      //         if (n < 1) {
      //          index = slides.length;
      //         }
      //         /* Hide all slides */
      //         for (i = 0; i < slides.length; i++) {
      //         Hide(slides[i])
      //         }
      //         /* Display current indexed slide */
      //         Show(slides[index-1])
      //     }
      // },
   };

   Lightbox.init();
})();

// /* Helper functions */
// function $id(element) {
//     document.getElementById(element);
// }
//
// function $class(element) {
//     document.getElementsByClassName(element);
// }
//
// const gallery = $id("gallery");
// const media = $class("media__content");
//
// const lightbox = $id("lightbox");
// const close = $id("lightboxClose");
// const viewer = $id("lightboxViewer");
//
// /* Constructor functions */
// function show(x) {
//     x.style.display = "block";
// }
//
// function  hide(x) {
//     x.style.display = "none";
// }
//
// /* Generate slide stack and CSS classes */
// let galleryCount = gallery.childElementCount;
// let slideStack = document.createDocumentFragment();
//
// for (let i = 1; i <= galleryCount; i++) {
//     let slideUnit = document.createElement("div");
//     slideUnit.className = "slide slide-" + i;
//     slideStack.appendChild(slideUnit);
// }
//
// /* Append slide stack fragment to viewer */
// viewer.appendChild(slideStack);
//
// /* Open lightbox */
// for (var i = 0; i < media.length; i++) {
//     media[i].addEventListener("click", function() {
//         Show(lightbox);
//     });
// }
//
// /* Close lightbox */
// close.addEventListener("click", function() {
//     Hide(lightbox);
// });
//
// /*
// * Navigation
// */
//
// /*
// * Set initial index
// * Indexed slide will display only
// */
//
// let index = 1;
// showSlide(index);
//
// /* Set clicked gallery image as index */
// function topSlide(n) {
//     showSlide(index = n);
// }
//
// // Constructor function
// function plusSlides(n) {
// 	show(index += n);
// }
//
// let prv = $id("navBack");
// let nxt = $id("navForward");
//
// function nav(x) {
//     this.addEventListener("click", function() {
//      showSlide(index `${x= 1}`);
//     });
// };
//
// prv = nav(`-`);
// nxt = nav(`+`);
//
// back.addEventListener("click", function() {
//     showSlide(index -= 1);
// });
//
// forward.addEventListener("click", function() {
//     showSlide(index += 1);
// });
//
// /* Navigation controller */
// function showSlide(n) {
//     let i;
//     let slides = $class("slide");
//     /* Return index to 1 if 9 */
//     if (n > slides.length) {
//      index = 1;
//     }
//     /* Return index to 8 if 0 */
//     if (n < 1) {
//      index = slides.length;
//     }
//     /* Hide all slides */
//     for (i = 0; i < slides.length; i++) {
//     Hide(slides[i])
//     }
//     /* Display current indexed slide */
//     Show(slides[index-1])
// }