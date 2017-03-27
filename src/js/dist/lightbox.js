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
			Lightbox.display();
		},
		index: 1,
		// Modal
		modal: {
			// Bind
			bind: function bind() {
				Lightbox.modal.create();
				Lightbox.modal.open();
				Lightbox.modal.close();
			},
			// Open
			create: function create() {
				var lightbox = $('<div id="lightbox" class="lightbox"></div>');
				$('body').append(lightbox);
			},
			// Open
			open: function open() {
				$('img.media__content').on('click', function () {
					$('.lightbox').css('display', 'block');
				});
			},
			// Close
			close: function close() {
				var button = $('<span class="lightbox__close">&times;</span>');
				$('#lightbox').append(button);
				button.on('click', function () {
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
			},
			// Stack slides
			compile: function compile() {
				// Compile slides
				var viewer = $('<div></div>');
				for (var i = 1; i <= $('figure.media').length; i++) {
					var slide = $('<div class="slide slide-' + i + '"></div>');
					viewer.append(slide);
				};
				// Prepend viewer
				$('#lightbox').prepend(viewer);
			},
			// Display clicked gallery image
			top: function top() {
				var i = void 0;
				$('img.media__content').eq(i).on('click'), function () {
					Lightbox.display(Lightbox.index = i);
				};
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
			// Container
			create: function create() {
				var nav = $('<div id="lightboxNav" class="lightbox__nav"></div>');
				$('#lightbox').append(nav);
			},
			// Previous
			previous: function previous() {
				var button = $('<a class="lightbox__nav--prv"><i class="fa fa-caret-left"></i></a>');
				$('#lightboxNav').append(button);
				button.on('click', function () {
					Lightbox.display(Lightbox.index -= 1);
				});
			},
			// Next
			next: function next() {
				var button = $('<a class="lightbox__nav--nxt"><i class="fa fa-caret-right"></i></a>');
				$('#lightboxNav').append(button);
				button.on('click', function () {
					Lightbox.display(Lightbox.index += 1);
				});
			}
		},
		// Display
		display: function display(n) {
			var slides = $('.slide');
			if (n > slides.length) {
				Lightbox.index = 1;
			}
			if (n < 1) {
				Lightbox.index = slides.length;
			}
			slides.css('display', 'none');
			slides.eq(Lightbox.index - 1).css('display', 'block');
		}
	};

	Lightbox.init();
})();