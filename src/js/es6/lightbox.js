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
			Lightbox.modal.bind();
			Lightbox.slides.bind();
			Lightbox.navigation.bind();
			Lightbox.display();
		},
		index: 1,
		// Modal
		modal: {
			// Bind
			bind: () => {
				Lightbox.modal.create();
				Lightbox.modal.open();
				Lightbox.modal.close();
			},
			// Create
			create: () => {
				Lightbox.box = $('<div id="lightbox" class="lightbox"></div>');
				$('body').append(Lightbox.box);
				// Create lightbox
				// let lightbox = $('<div id="lightbox" class="lightbox"></div>');
				// $('body').append(lightbox);
			},
			// Open
			open: () => {
				$('figure img').on('click', () => {
					// $('.lightbox').css('display', 'block');
					Lightbox.box.css('display', 'block');
				});
			},
			// Close
			close: () => {
				let button = $('<span class="lightbox__close">&times;</span>');
				$('#lightbox').append(button);
				button.on('click', () => {
					$('.lightbox').css('display', 'none');
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
				for (let i = 0; i < $('figure img').length; i++) {
					let slide = $('<div class="slide"></div>');
					let image = $('figure img').eq(i).attr('src');
					slide.css('background-image', `url(${image})`);
					viewer.append(slide);
				};
				// Prepend viewer
				$('#lightbox').prepend(viewer);
			},
			// Display clicked image
			top: () => {
				let i;
				$('img.media__content').eq(i).on('click', () => {
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
				let nav = $('<div id="lightboxNav" class="lightbox__nav"></div>');
				$('#lightbox').append(nav);
			},
			// Previous
			previous: () => {
				let button = $('<a class="nav__prev"></a>');
				let icon = $('<i class="fa fa-caret-left"></i>');
				button.append(icon);
				$('#lightboxNav').append(button);
				button.on('click', () => {
					Lightbox.display(Lightbox.index -= 1);
				});
			},
			// Next
			next: () => {
				let button = $('<a class="nav__next"></a>');
				let icon = $('<i class="fa fa-caret-right"></i>');
				button.append(icon);
				$('#lightboxNav').append(button);
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
