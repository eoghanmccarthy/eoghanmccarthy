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
			Lightbox.control();
			Lightbox.modal.open();
			Lightbox.modal.close();
			Lightbox.slide.bind();
		},
		control: function control() {
			// Index
			var index = 1;
			Lightbox.slide.display.show(index);
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
				Lightbox.slide.compile();
				Lightbox.slide.top();
				Lightbox.slide.navigation.next();
				Lightbox.slide.navigation.prev();
				Lightbox.slide.display.show();
			},
			// Stack slides
			compile: function compile() {
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
				var topslide = $('img.media__content').get();
				topslide[2].on('click'), function () {
					show(index = 2);
				};
			},
			navigation: {
				// Next slide
				next: function next() {
					$('#nextButton').on('click', function () {
						show(index += 1);
					});
				},
				// Previous slide
				prev: function prev() {
					$('#prevButton').on('click', function () {
						show(index -= 1);
					});
				}
			},
			display: {
				// Display functionality
				show: function show(n) {
					var i = void 0;
					var slides = $('div.slide');
					// if (n > $('figure.media').length) {index = 1;}
					// if (n < 1) {index = $('figure.media').length;}
					// for (let i = 0; i < $('figure.media').length; i++) {
					// 	slides[i].css('display', 'none');
					// }
					$('.slide').each(function () {
						slides[i].css('display', 'block');
					});
					//slides[index - 1].css('display', 'block');
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