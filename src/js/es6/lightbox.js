/*
 * Lightbox
 */

(() => {

	// Lightbox app
	const Lightbox = {
		// Initialise
		init: () => {
			Lightbox.bind();
		},
		// Bind
		bind: () => {
			Lightbox.box.bind();
			Lightbox.slides.bind();
			Lightbox.navigation.bind();
			Lightbox.display();
		},
		// Index
		index: 1,
		// Modal
		box: {
			// Bind
			bind: () => {
				Lightbox.box.create();
				Lightbox.box.open();
				Lightbox.box.close();
			},
			// Create
			create: () => {
				// Create lightbox modal
				Lightbox.modal = $('<div></div>');
				Lightbox.modal.addClass('lightbox');
				$('body').append(Lightbox.modal);
			},
			// Open
			open: () => {
				// Click function
				$('figure img').on('click', () => {
					Lightbox.modal.css('display', 'block');
				});
			},
			// Close
			close: () => {
				let button = $('<span>');
				button.addClass('lightbox__close');
				button.html('&times;');
				let x = Lightbox.modal;
				x.append(button);
				// Click function
				button.on('click', () => {
					x.css('display', 'none');
				});
			}
		},
		// Slides
		slides: {
			// Bind
			bind: () => {
				Lightbox.slides.compile();
				Lightbox.slides.top();
			},
			// Compile
			compile: () => {
				// Create viewer
				let viewer = $('<div></div>');
				$('figure img').each(function(i) {
					let slide = $('<div></div>');
					slide.addClass('slide');
					let image = $('figure img').eq(i).attr('src');
					slide.css('background-image', `url(${image})`);
					let meta = $('<span></span>');
					meta.addClass('slide__meta');
					let title = $('figure img').eq(i).attr('title');
					meta.html(title);
					slide.append(meta);
					viewer.append(slide);
				});
				// Prepend viewer
				Lightbox.modal.prepend(viewer);
			},
			// Display clicked image
			top: () => {
				let i;
				// Click function
				$('figure img').eq(i).on('click', () => {
					Lightbox.display(Lightbox.index = i);
				});
			}
		},
		// Navigation
		navigation: {
			// Bind
			bind: () => {
				Lightbox.navigation.create();
				Lightbox.navigation.previous();
				Lightbox.navigation.next();
			},
			// Create
			create: () => {
				Lightbox.nav = $('<div></div>');
				Lightbox.nav.addClass('lightbox__nav');
				Lightbox.modal.append(Lightbox.nav);
			},
			// Previous
			previous: () => {
				let button = $('<a></a>');
				button.addClass('nav__prev');
				let icon = $('<i></i>');
				icon.addClass('fa fa-caret-left');
				button.append(icon);
				Lightbox.nav.append(button);
				// Click function
				button.on('click', () => {
					Lightbox.display(Lightbox.index -= 1);
				});
			},
			// Next
			next: () => {
				let button = $('<a></a>');
				button.addClass('nav__next');
				let icon = $('<i></i>');
				icon.addClass('fa fa-caret-right');
				button.append(icon);
				Lightbox.nav.append(button);
				// Click function
				button.on('click', () => {
					Lightbox.display(Lightbox.index += 1);
				});
			}
		},
		// Display
		display: (n) => {
			if (n > $('.slide').length) {
				Lightbox.index = 1;
			}
			if (n < 1) {
				Lightbox.index = $('.slide').length;
			}
			$('.slide').css('display', 'none');
			$('.slide').eq(Lightbox.index -1).css('display', 'block');
		}
	}

	Lightbox.init();

})();
