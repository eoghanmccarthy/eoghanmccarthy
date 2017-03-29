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
			Lightbox.box.bind();
			Lightbox.slides.bind();
			Lightbox.navigation.bind();
			Lightbox.display();
		},
		index: 1,
		// Modal
		box: {
			// Bind
			bind: function bind() {
				Lightbox.box.create();
				Lightbox.box.open();
				Lightbox.box.close();
			},
			// Create
			create: function create() {
				// Create lightbox modal
				Lightbox.modal = $('<div></div>');
				Lightbox.modal.addClass('lightbox');
				$('body').append(Lightbox.modal);
			},
			// Open
			open: function open() {
				$('figure img').on('click', function () {
					return Lightbox.modal.css('display', 'block');
				});
			},
			// Close
			close: function close() {
				var button = $('<span>&times;</span>');
				button.addClass('lightbox__close');
				Lightbox.modal.append(button);
				button.on('click', function () {
					return Lightbox.modal.css('display', 'none');
				});
			}
		},
		// Slides
		slides: {
			// Bind
			bind: function bind() {
				Lightbox.slides.compile();
				Lightbox.slides.top();
			},
			// Compile
			compile: function compile() {
				// Create viewer
				var viewer = $('<div></div>');
				for (var i = 0; i < $('figure img').length; i++) {
					var slide = $('<div class="slide"></div>');
					slide.html('<span></span>');
					var image = $('figure img').eq(i).attr('src');
					slide.css('background-image', 'url(' + image + ')');
					viewer.append(slide);
				};
				// Prepend viewer
				Lightbox.modal.prepend(viewer);
			},
			// Display clicked image
			top: function top() {
				var i = void 0;
				$('figure img').eq(i).on('click', function () {
					return Lightbox.display(Lightbox.index = i);
				});
			}
		},
		// Navigation
		navigation: {
			// Bind
			bind: function bind() {
				Lightbox.navigation.create();
				Lightbox.navigation.previous();
				Lightbox.navigation.next();
			},
			// Create
			create: function create() {
				Lightbox.nav = $('<div></div>');
				Lightbox.nav.addClass('lightbox__nav');
				Lightbox.modal.append(Lightbox.nav);
			},
			// Previous
			previous: function previous() {
				var button = $('<a class="nav__prev"></a>');
				var icon = $('<i class="fa fa-caret-left"></i>');
				button.append(icon);
				Lightbox.nav.append(button);
				button.on('click', function () {
					return Lightbox.display(Lightbox.index -= 1);
				});
			},
			// Next
			next: function next() {
				var button = $('<a class="nav__next"></a>');
				var icon = $('<i class="fa fa-caret-right"></i>');
				button.append(icon);
				Lightbox.nav.append(button);
				button.on('click', function () {
					return Lightbox.display(Lightbox.index += 1);
				});
			}
		},
		// Display
		display: function display(n) {
			if (n > $('.slide').length) {
				Lightbox.index = 1;
			}
			if (n < 1) {
				Lightbox.index = $('.slide').length;
			}
			$('.slide').css('display', 'none');
			$('.slide').eq(Lightbox.index - 1).css('display', 'block');
		}
	};

	Lightbox.init();
})();