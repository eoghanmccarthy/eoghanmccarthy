/*
 * Lightbox
 */

(() => {

	// Lightbox app
	const Lightbox = {
		// Init
		init: () => {
			Lightbox.bind();
		},
		// Bind
		bind: () => {
			Lightbox.modal.open();
			Lightbox.modal.close();
			Lightbox.slide.bind();
		},
		// Index
		// index: 1,
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
				$('#lightboxClose').on('click', () => {
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
				Lightbox.slide.display();
			},
			// Stack slides
			stack: () => {
				// Create deck
				// let deck = document.createDocumentFragment();
				// for (let i = 1; i <= $('figure.media').length; i++) {
				// 	let unit = document.createElement('div');
				// 	unit.className = 'slide slide-' + i;
				// 	deck.appendChild(unit);
				// };
				// // Prepend deck
				// $('#lightboxViewer').prepend(deck);
				for (let i = 1; i <= $('figure.media').length; i++) {
					$('#lightboxViewer').html($("<div class='slide slide-' + i></div>"));
				};
			},
			// Display clicked gallery image
			// top: () => {
			// 	deck[i].on('click'), () => {
			// 		Lightbox.index = i;
			// 	}
			// },
			// navigation: () => {
			// 	// Constructor
			// 	let nav = class {
			// 		constructor(button, x) {
			// 			$(button).on('click', () => {
			// 				Lightbox.index x= n);
			// 			});
			// 		}
			// 	};
			// 	// Button instances
			// 	const prev = new nav('#prev', -);
			// 	const next = new nav('#next', +);
			// },
			// display: (n) => {
			// 	if (n > $('.slide').length) {
			// 		index = 1;
			// 	}
			// 	if (n < 1) {
			// 		index = $('.slide').length;
			// 	}
			// 	for (let i = 0; i < $('.slide').length; i++) {
			// 		slides[i].hide();
			// 	}
			// 	slides[index-1].show();
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
