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
			Lightbox.slide.bind();
		},
		// Index
		// index: 1,
		// Modal
		modal: {
			// Open
			open: function open() {
				$('img.media__content').on('click', function () {
					$('.lightbox').css('display', 'block');
				});
			},
			// Close
			close: function close() {
				$('#lightboxClose').on('click', function () {
					$('.lightbox').css('display', 'none');
				});
			}
		},
		// Slides
		slide: {
			// Bind
			bind: function bind() {
				Lightbox.slide.stack();
				Lightbox.slide.top();
				Lightbox.slide.navigation();
				Lightbox.slide.display();
			},
			// Stack slides
			stack: function stack() {
				// Create deck
				// let deck = document.createDocumentFragment();
				// for (let i = 1; i <= $('figure.media').length; i++) {
				// 	let unit = document.createElement('div');
				// 	unit.className = 'slide slide-' + i;
				// 	deck.appendChild(unit);
				// };
				// // Prepend deck
				// $('#lightboxViewer').prepend(deck);
				for (var i = 1; i <= $('figure.media').length; i++) {
					$('#lightboxViewer').html($("<div class='slide slide-' + i></div>"));
				};
			}
		}
	};

	Lightbox.init();
})();

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