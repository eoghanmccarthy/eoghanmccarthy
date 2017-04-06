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
		// Index
		index: 0,
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
				Lightbox.modal = $('<div>');
				Lightbox.modal.addClass('lightbox');
				$('body').append(Lightbox.modal);
			},
			// Open
			open: function open() {
				// Click function
				$('figure img').on('click', function () {
					Lightbox.modal.css('display', 'block');
				});
			},
			// Close
			close: function close() {
				var button = $('<span>');
				button.addClass('lightbox__close');
				button.html('&times;');
				Lightbox.modal.append(button);
				// Click function
				button.on('click', function () {
					Lightbox.modal.css('display', 'none');
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
				var viewer = $('<div>');
				$('figure img').each(function (i) {
					var slide = $('<div>');
					slide.addClass('slide');
					var image = $('figure img').eq(i).attr('src');
					slide.css('background-image', 'url(' + image + ')');
					var meta = $('<span>');
					meta.addClass('slide__meta');
					var title = $('figure img').eq(i).attr('title');
					meta.html(title);
					slide.append(meta);
					viewer.append(slide);
				});
				// Prepend viewer
				Lightbox.modal.prepend(viewer);
			},
			// Display clicked image
			top: function top() {
				$('figure img').each(function (i) {
					$(this).on('click', function () {
						Lightbox.display(Lightbox.index = i);
					});
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
				Lightbox.nav = $('<div>');
				Lightbox.nav.addClass('lightbox__nav');
				Lightbox.modal.append(Lightbox.nav);
			},
			// Previous
			previous: function previous() {
				var button = $('<a>');
				button.addClass('nav__prev');
				var icon = $('<i>');
				icon.addClass('fa fa-caret-left');
				button.append(icon);
				Lightbox.nav.append(button);
				// Click function
				button.on('click', function () {
					undefined.display(Lightbox.index -= 1);
				});
			},
			// Next
			next: function next() {
				var button = $('<a>');
				button.addClass('nav__next');
				var icon = $('<i>');
				icon.addClass('fa fa-caret-right');
				button.append(icon);
				Lightbox.nav.append(button);
				// Click function
				button.on('click', function () {
					Lightbox.display(Lightbox.index += 1);
				});
			}
		},
		// Display
		display: function display(n) {
			var index = Lightbox.index;
			if (n > $('.slide').length - 1) {
				Lightbox.index = 0;
			}
			if (n < 0) {
				Lightbox.index = $('.slide').length - 1;
			}
			$('.slide').css('display', 'none');
			$('.slide').eq(Lightbox.index).css('display', 'block');
		}
	};

	Lightbox.init();
})();