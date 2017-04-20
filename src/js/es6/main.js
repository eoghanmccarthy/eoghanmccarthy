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
			Web.menu.toggle();
			// Web.lazy.init();
		},
		// Menu
		menu: {
			// Toggle
			toggle: () => {
				$('#menu-toggle').on('click', () => {
					$('#menu').toggleClass('menu-nav__list--xs');
				});
			}
		}
		// Lazy load
		// lazy: {
		// 	// Initialise
		// 	init: () => {
		// 		$("img.lazy").lazyload();
		// 	}
		// }
	};

	Web.init();

})();
