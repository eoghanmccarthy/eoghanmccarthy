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
			bind: () => {
				Lightbox.modal.open();
				Lightbox.modal.close();
			},
			// Open
			open: () => {
				$('img.media__content').on('click', () => {
					$('.lightbox').css('display', 'block');
				});
			},
			// Close
			close: () => {
				let button = $('<span id="closeButton" class="lightbox__close">&times;</span>');
				button.on('click', () => {
					$('.lightbox').css('display', 'none');
				});
				$('#lightbox').append(button);
			}
		},
		// Slides
		slide: {
			// Bind
			bind: () => {
				Lightbox.slide.compile();
				//Lightbox.slide.top();
			},
			// Stack slides
			compile: () => {
				// Compile slides
				const viewer = $('<div id="viewer"></div>');
				for (let i = 1; i <= $('figure.media').length; i++) {
					let unit = $(`<div class="slide slide-${i}"></div>`);
					viewer.append(unit);
				};
				// Prepend viewer
				$('#lightbox').prepend(viewer);
			},
			// Display clicked gallery image
			// top: () => {
			// 	let i;
			// 	let topslide = $('img.media__content');
			// 	topslide[i].on('click'), () => {
			// 		Lightbox.display(Lightbox.index = i);
			// 	}
			// }
		},
		// Navigation
		navigation: {
			// Bind
			bind: () => {
				Lightbox.navigation.next();
				Lightbox.navigation.prev();
			},
			// Next
			next: () => {
				$('#nextButton').on('click', () => {
					Lightbox.display(Lightbox.index += 1);
				});
			},
			// Previous
			prev: () => {
				$('#prevButton').on('click', () => {
					Lightbox.display(Lightbox.index -= 1);
				});
			}
		},
		// Display
		display: (n) => {
			// Show
			let i;
			let slides = $('div.slide');
			if (n > $('figure.media').length) {Lightbox.index = 1;}
			if (n < 1) {Lightbox.index = $('figure.media').length;}
			// for (let i = 0; i < $('figure.media').length; i++) {
			// 	slides[i].css('display', 'none');
			// }
			$('.slide').each(function() {
				slides.css('display', 'block');
			});
			//slides[index - 1].css('display', 'block');
		}
	}

	Lightbox.init();

})();
