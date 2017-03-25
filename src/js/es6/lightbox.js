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
			//Lightbox.show();
			Lightbox.control();
			Lightbox.modal.open();
			Lightbox.modal.close();
			Lightbox.slide.bind();
		},
		control: () => {
			// Index
			let index = 1;
			Lightbox.slide.display.show(index);
		},
		// Modal
		modal: {
			// Open
			open: () => {
				$('img.media__content').on('click', () => {
					$('.lightbox').css('display', 'block');
				});
			},
			// Close
			close: () => {
				$('#closeButton').on('click', () => {
					$('.lightbox').css('display', 'none');
				});
			}
		},
		// Slides
		slide: {
			// Bind
			bind: () => {
				Lightbox.slide.compile();
				Lightbox.slide.top();
				Lightbox.slide.navigation.next();
				Lightbox.slide.navigation.prev();
				Lightbox.slide.display.show();
			},
			// Stack slides
			compile: () => {
				// Compile slides
				let viewer = $('<div id="viewer"></div>');
				for (let i = 1; i <= $('figure.media').length; i++) {
					let unit = $(`<div class="slide slide-${i}"></div>`);
					viewer.append(unit);
				};
				// Prepend viewer
				$('#lightbox').prepend(viewer);
				// Display clicked gallery image
				// top: () => {
				// 	let i;
				// 	let array = $('img.media__content');
				// 	array[i].on('click'), () => {
				// 		showSlide(index = i);
				// 	}
				// }
			},
			// Display clicked gallery image
			top: () => {
				let i;
				let array = $('img.media__content');
				array[i].on('click'), () => {
					show(index = i);
				}
			},
			navigation: {
				// Next slide
				next: () => {
					$('#nextButton').on('click', () => {
						show(index + 1);
					});
				},
				// Previous slide
				prev: () => {
					$('#prevButton').on('click', () => {
						show(index - 1);
					});
				}
			},
			display: {
				// Display functionality
				show: (n) => {
					let i;
					let slides = $('div.slide');
					if (n > $('figure.media').length) {
						index = 1;
					}
					if (n < 1) {
						index = $('figure.media').length;
					}
					// for (let i = 0; i < $('figure.media').length; i++) {
					// 	slides[i].css('display', 'none');
					// }
					$('.slide').each(function() {
						slides[i].css('display', 'none');
					});
					slides[index - 1].css('display', 'block');
				}
			}
		}
	}

	Lightbox.init();

})();


	//
    // /*
    // * Set initial index
    // * Indexed slide will display only
    // */
	//
    // let index = 1;
    // showSlide(index);
	//
    // /* Set clicked gallery image as index */
    // function topSlide(n) {
    //     showSlide(index = n);
    // }
