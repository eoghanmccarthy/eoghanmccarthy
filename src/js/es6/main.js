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
		},
		// Menu
		menu: {
			// Open
			toggle: () => {
				$('#menu-toggle').on('click', () => {
					$('#menu').toggleClass('menu-nav__list--xs');
				});
			}
		}
	};

	Web.init();

})();
