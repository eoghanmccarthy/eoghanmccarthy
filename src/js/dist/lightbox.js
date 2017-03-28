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
			Lightbox.modal.bind();
			Lightbox.slides.bind();
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
		slides: {
			// Bind
			bind: function bind() {
				Lightbox.slides.compile();
				Lightbox.slides.top();
			},
			// Stack slides
			compile: function compile() {
				// Compile slides
				// let viewer = $('<div></div>');
				// for (let i = 1; i <= $('figure.media').length; i++) {
				// 	let slide = $(`<div class="slide slide-${i}"></div>`);
				// 	viewer.append(slide);
				// };
				var viewer = $('<div></div>');
				for (var i = 0; i <= $('figure img').length; i++) {
					var slide = $('<div class="slide"></div>');
					var image = $('figure img').eq(i).attr('src');
					slide.css('background', 'url(' + image + ')');
					// let image = $('figure img').attr('src');
					// slide.css('background', `url(${image})`);
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