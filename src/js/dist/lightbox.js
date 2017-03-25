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
			Lightbox.control();
			Lightbox.modal.open();
			Lightbox.modal.close();
			Lightbox.slide.bind();
		},
		control: function control() {
			// Index
			var index = 1;
			showSlide(index);
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
				// Display clicked gallery image
				top: (function () {
					var i = void 0;
					var array = $('img.media__content');
					array[i].on('click'), function () {
						showSlide(index = i);
					};
				});
			},
			// Display clicked gallery image
			// top: () => {
			// 	let i;
			// 	let array = $('img.media__content').get();
			// 	array[i].on('click'), () => {
			// 		showSlide(index = i);
			// 	}
			// },
			navigation: {
				// Next slide
				next: function next() {
					$('#nextButton').on('click', function () {
						showSlide(index + 1);
					});
				},
				// Previous slide
				prev: function prev() {
					$('#prevButton').on('click', function () {
						showSlide(index - 1);
					});
				}
			},
			display: function display() {
				function showSlide(n) {
					var i = void 0;
					var slides = $('div.slide');
					if (n > $('figure.media').length) {
						index = 1;
					}
					if (n < 1) {
						index = $('figure.media').length;
					}
					// for (let i = 0; i < $('figure.media').length; i++) {
					// 	slides[i].css('display', 'none');
					// }
					$('.slide').length.each(function () {
						slides[i].css('display', 'none');
					});
					slides[index - 1].css('display', 'block');
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