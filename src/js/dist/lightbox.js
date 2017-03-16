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
		index: 1,
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
				var deck = document.createDocumentFragment();
				for (var _i = 1; _i <= $('figure.media').length; _i++) {
					var unit = document.createElement('div');
					unit.className = 'slide slide-' + _i;
					deck.appendChild(unit);
				};
				// Prepend deck
				$('#lightboxViewer').prepend(deck);
			},
			// Display clicked gallery image
			top: function top() {
				deck[i].on('click'), function () {
					Lightbox.index = i;
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