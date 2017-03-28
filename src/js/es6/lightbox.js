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
			// Open
			create: () => {
				let lightbox = $('<div id="lightbox" class="lightbox"></div>');
				$('body').append(lightbox);
			},
			// Open
			open: () => {
				$('img.media__content').on('click', () => {
					$('.lightbox').css('display', 'block');
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
			// Stack slides
			compile: () => {
				// Compile slides
				// let viewer = $('<div></div>');
				// for (let i = 1; i <= $('figure.media').length; i++) {
				// 	let slide = $(`<div class="slide slide-${i}"></div>`);
				// 	viewer.append(slide);
				// };
				let viewer = $('<div></div>');
				for (let i = 0; i <= $('figure img').length; i++) {
					let slide = $('<div class="slide"></div>');
					let image = $('figure img').each().attr('src');
					slide.css('background', `url(${image})`);
					// let image = $('figure img').attr('src');
					// slide.css('background', `url(${image})`);
					viewer.append(slide);
				};
				// Prepend viewer
				$('#lightbox').prepend(viewer);
			},
			// Display clicked gallery image
			top: () => {
				let i;
				$('img.media__content').eq(i).on('click'), () => {
					Lightbox.display(Lightbox.index = i);
				}
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
			// Container
			create: () => {
				const nav = $('<div id="lightboxNav" class="lightbox__nav"></div>');
				$('#lightbox').append(nav);
			},
			// Previous
			previous: () => {
				let button = $('<a class="lightbox__nav--prv"><i class="fa fa-caret-left"></i></a>');
				$('#lightboxNav').append(button);
				button.on('click', () => {
					Lightbox.display(Lightbox.index -= 1);
				});
			},
			// Next
			next: () => {
				let button = $('<a class="lightbox__nav--nxt"><i class="fa fa-caret-right"></i></a>');
				$('#lightboxNav').append(button);
				button.on('click', () => {
					Lightbox.display(Lightbox.index += 1);
				});
			}
		},
		// Display
		display: (n) => {
			if (n > $('.slide').length) {Lightbox.index = 1;}
			if (n < 1) {Lightbox.index = $('.slide').length;}
			$('.slide').css('display', 'none');
			$('.slide').eq(Lightbox.index -1).css('display', 'block');
		}
	}

	Lightbox.init();

})();
