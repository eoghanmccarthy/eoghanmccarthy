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
			// Lightbox.control();
			Lightbox.modal.bind();
			Lightbox.slide.bind();
			Lightbox.navigation.bind();
			Lightbox.display.bind();
		},
		index: 1,
		// Modal
		modal: {
			// Bind
			bind: function bind() {
				Lightbox.modal.open();
				Lightbox.modal.close();
			},
			// Open
			open: function open() {
				$('img.media__content').on('click', function () {
					$('.lightbox').css('display', 'block');
				});
			},
			// Close
			close: function close() {
				var button = $('<span>&times;</span>');
				button.addClass('lightbox__close');
				button.on('click', function () {
					$('.lightbox').css('display', 'none');
				});
				$('#lightbox').append(button);
			}
		},
		// Slides
		slide: {
			// Bind
			bind: function bind() {
				Lightbox.slide.compile();
				//Lightbox.slide.top();
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
			}
		},
		// Navigation
		navigation: {
			// Bind
			bind: function bind() {
				Lightbox.navigation.next();
				Lightbox.navigation.prev();
				Lightbox.navigation.console();
			},
			// Next
			next: function next() {
				var button = $('<a></a>');
				button.addClass('lightbox__nav--nxt');
				var icon = $('<i></i>');
				icon.addClass('fa fa-caret-right');
				button.append(icon);
				button.on('click', function () {
					Lightbox.display(Lightbox.index += 1);
				});
			},
			// Previous
			prev: function prev() {
				var button = $('<a></a>');
				button.addClass('lightbox__nav--prv');
				var icon = $('<i></i>');
				icon.addClass('fa fa-caret-left');
				button.append(icon);
				$('#prevButton').on('click', function () {
					Lightbox.display(Lightbox.index -= 1);
				});
			},
			// Console
			console: function console() {
				var nav = $('<div></div>');
				nav.addClass('lightbox__nav');
				nav.append(Lightbox.navigation.next.button);
				nav.append(Lightbox.navigation.prev.button);
				$('#lightbox').append(nav);
			}
		},
		// Display
		display: function display(n) {
			// Show
			var i = void 0;
			var slides = $('div.slide');
			if (n > $('figure.media').length) {
				Lightbox.index = 1;
			}
			if (n < 1) {
				Lightbox.index = $('figure.media').length;
			}
			// for (let i = 0; i < $('figure.media').length; i++) {
			// 	slides[i].css('display', 'none');
			// }
			$('.slide').each(function () {
				slides.css('display', 'block');
			});
			//slides[index - 1].css('display', 'block');
		}
	};

	Lightbox.init();
})();