'use strict';

/*
 * Lightbox
 */

(function () {

	// Lightbox app
	var Lightbox = {
		// Initialise
		init: function init() {
			Lightbox.bind();
		},
		// Bind
		bind: function bind() {
			//Lightbox.show();
			Lightbox.index();
			Lightbox.modal.open();
			Lightbox.modal.close();
			Lightbox.slide.bind();
		},
		index: function index() {
			// Index
			var slideIndex = 1;
			showSlide(slideIndex);
		},
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
				$('#closeButton').on('click', function () {
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
				// Compile slides
				var viewer = $('<div id="viewer"></div>');
				for (var i = 1; i <= $('figure.media').length; i++) {
					var unit = $('<div class="slide slide-' + i + '"></div>');
					viewer.append(unit);
				};
				// Prepend viewer
				$('#lightbox').prepend(viewer);
			},
			// Display clicked gallery image
			top: function top() {
				var i = void 0;
				var array = $('img.media__content').get();
				array[i].on('click'), function () {
					showSlide(slideIndex = i);
				};
			},
			navigation: {
				// Next slide
				next: function next() {
					$('#nextButton').on('click', function () {
						showSlide(slideIndex + 1);
					});
				},
				// Previous slide
				prev: function prev() {
					$('#prevButton').on('click', function () {
						showSlide(slideIndex - 1);
					});
				}
			},
			display: function display() {
				function showSlide(n) {
					var i = void 0;
					var slides = $('div.slide');
					if (n > $('figure.media').length) {
						slideIndex = 1;
					}
					if (n < 1) {
						slideIndex = $('figure.media').length;
					}
					for (var _i = 0; _i < $('figure.media').length; _i++) {
						slides[_i].css('display', 'none');
					}
					slides[slideIndex - 1].css('display', 'block');
				}
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