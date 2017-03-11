/*
 * Lightbox
 */

// (() => {
//
//     // Lightbox app
//     const Lightbox = {
//         // Init
//         init: () => {
//             Lightbox.bind();
//         },
//         // Bind
//         bind: () => {
//
//         },
//         // Console
//         console: $('#lightbox'),
//         // Open
//         open: () => {
//             let media = $('.media__content');
//             for (let i = 0; i < media.length; i++) {
//                 media[i].on('click', () => {
//                     this.console.style.display = 'block';
//                 });
//             }
//         },
//         // Close
//         close: () => {
//             let button = $('#lightboxClose');
//             button.on('click', () => {
//                 this.console.style.display = 'none';
//             });
//         },
//         // Slide
//         slide: {
//             stack: () => {
//                 const gallery = $('#gallery');
//                 let count = gallery.childElementCount;
//                 for (let i = 1; i <= count; i++) {
//                     let unit = document.createElement('div');
//                     unit.className = "slide slide-" + i;
//                     let deck = document.createDocumentFragment();
//                     deck.appendChild(unit);
//                 },
//                 // Append slide stack fragment to viewer
//                 const viewer = $('#lightboxViewer');
//                 viewer.appendChild(stack);
//             },
//             // Index
//             index: 1,
//             // Show clicked image as top slide
//             current: function top(n) {
//                 this.index = n;
//             },
//
//             function slideDisplay(n) {
//                 let i;
//                 let slides = $class("slide");
//                 /* Return index to 1 if 9 */
//                 if (n > slides.length) {
//                  index = 1;
//                 }
//                 /* Return index to 8 if 0 */
//                 if (n < 1) {
//                  index = slides.length;
//                 }
//                 /* Hide all slides */
//                 for (i = 0; i < slides.length; i++) {
//                 Hide(slides[i])
//                 }
//                 /* Display current indexed slide */
//                 Show(slides[index-1])
//             }
//         },
//     };
//
//     Lightbox.init();
//
// })();
//
//
//     /* Helper functions */
//     function $id(element) {
//         document.getElementById(element);
//     }
//
//     function $class(element) {
//         document.getElementsByClassName(element);
//     }
//
//     const gallery = $id("gallery");
//     const media = $class("media__content");
//
//     const lightbox = $id("lightbox");
//     const close = $id("lightboxClose");
//     const viewer = $id("lightboxViewer");
//
//     /* Constructor functions */
//     function show(x) {
//         x.style.display = "block";
//     }
//
//     function  hide(x) {
//         x.style.display = "none";
//     }
//
//     /* Generate slide stack and CSS classes */
//     let galleryCount = gallery.childElementCount;
//     let slideStack = document.createDocumentFragment();
//
//     for (let i = 1; i <= galleryCount; i++) {
//         let slideUnit = document.createElement("div");
//         slideUnit.className = "slide slide-" + i;
//         slideStack.appendChild(slideUnit);
//     }
//
//     /* Append slide stack fragment to viewer */
//     viewer.appendChild(slideStack);
//
//     /* Open lightbox */
//     for (var i = 0; i < media.length; i++) {
//         media[i].addEventListener("click", function() {
//             Show(lightbox);
//         });
//     }
//
//     /* Close lightbox */
//     close.addEventListener("click", function() {
//         Hide(lightbox);
//     });
//
//     /*
//     * Navigation
//     */
//
//     /*
//     * Set initial index
//     * Indexed slide will display only
//     */
//
//     let index = 1;
//     slideDisplay(index);
//
//     /* Set clicked gallery image as index */
//     function topSlide(n) {
//         slideDisplay(index = n);
//     }
//
//     let prv = $id("navBack");
//     let nxt = $id("navForward");
//
//     function nav(x) {
//         this.addEventListener("click", function() {
//          slideDisplay(index `${x= 1}`);
//         });
//     };
//
//     prv = nav(`-`);
//     nxt = nav(`+`);
//
//     // back.addEventListener("click", function() {
//     //     slideDisplay(index -= 1);
//     // });
//     //
//     // forward.addEventListener("click", function() {
//     //     slideDisplay(index += 1);
//     // });
//
//     /* Navigation controller */
//     function slideDisplay(n) {
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
"use strict";