/*
 * Main
 */

(() => {

	// Web app
	const Web = {
		// Init
		init: () => {
			Web.bind();
		},
		// Bind
		bind: () => {
			// Web.nav.toggle();
			Web.lazy.init();
		},
		// Global navigation
		// nav: {
		// 	// Toggle
		// 	toggle: () => {
		// 		$('#nav-global-toggle').on('click', () => {
		// 			$('#nav-global-modal').toggleClass('active');
		// 		});
		// 	}
		// }
		// Lazy Load
		lazy: {
			// Initialise
			init: () => {
				$("img.lazy").lazyload();
			}
		}
	};

	Web.init();

})();
