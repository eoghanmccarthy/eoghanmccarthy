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
		index: 0,
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
				Lightbox.modal = $('<div>');
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
				Lightbox.modal.append(button);
				// Click function
				button.on('click', () => {
					Lightbox.modal.css('display', 'none');
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
				let viewer = $('<div>');
				$('figure img').each(function(i) {
					let slide = $('<div>');
					slide.addClass('slide');
					let image = $('figure img').eq(i).attr('data-original');
					slide.css('background-image', `url(${image})`);
					let meta = $('<span>');
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
				$('figure img').each(function(i) {
					$(this).on('click', () => {
						Lightbox.display(Lightbox.index = i);
					});
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
				Lightbox.nav = $('<div>');
				Lightbox.nav.addClass('lightbox__nav');
				Lightbox.modal.append(Lightbox.nav);
			},
			// Previous
			button: (aClass, iClass) => {
				let button = $('<a>');
				button.addClass(`${aClass}`);
				let icon = $('<i>');
				icon.addClass(`fa fa-caret-${iClass}`);
				button.append(icon);
				$('body').append(button);
			},
			previous: () => {
				let button = $('<a>');
				button.addClass('nav__prev');
				let icon = $('<i>');
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
				let button = $('<a>');
				button.addClass('nav__next');
				let icon = $('<i>');
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
			let index = Lightbox.index;
			if (n > $('.slide').length -1) {
				Lightbox.index = 0;
			}
			if (n < 0) {
				Lightbox.index = $('.slide').length -1;
			}
			$('.slide').css('display', 'none');
			$('.slide').eq(Lightbox.index).css('display', 'block');
		}
	}

	Lightbox.navigation.button('nav__prev', 'right');
	Lightbox.init();

})();
