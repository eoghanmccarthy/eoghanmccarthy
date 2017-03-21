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
			Lightbox.index();
			Lightbox.modal.open();
			Lightbox.modal.close();
			Lightbox.slide.bind();
		},
		index: () => {
			// Index
			let slideIndex = 1;
			// showSlide(slideIndex);
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
				Lightbox.slide.stack();
				Lightbox.slide.top();
				Lightbox.slide.navigation();
				//Lightbox.slide.display();
			},
			// Stack slides
			stack: () => {
				// Compile slides
				let viewer = $('<div id="viewer"></div>');
				for (let i = 1; i <= $('figure.media').length; i++) {
					let unit = $(`<div class="slide slide-${i}"></div>`);
					viewer.append(unit);
				};
				// Prepend viewer
				$('#lightbox').prepend(viewer);
			},
			// Display clicked gallery image
			top: () => {
				let navnav = $('img.media__content').length;
				navnav[i].on('click'), () => {
					showSlide(slideIndex = i);
				}
			},
			navigation: {
				// Next slide
				next: () => {
					$('#nextButton').on('click', () => {
						showSlide(slideIndex + 1);
					});
				},
				// Previous slide
				prev: () => {
					$('#prevButton').on('click', () => {
						showSlide(slideIndex - 1);
					});
				}
			},
			// display: () => {
			// 	function showSlide(n) {
			// 		if (n > $('.slide').length) {
			// 			index = 1;
			// 		}
			// 		if (n < 1) {
			// 			index = $('.slide').length;
			// 		}
			// 		for (let i = 0; i < $('.slide').length; i++) {
			// 			slides[i].hide();
			// 		}
			// 		slides[index-1].show();
			// 	}
			// }
		}
	};

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
