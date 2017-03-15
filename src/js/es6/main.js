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
			Web.menu.bind();
		},
		// Menu
		menu: {
			// Open
			bind: () => {
				$('#menu-toggle').on('click', () => {
					$('#menu').toggleClass('menu-nav__list--xs');
				});
			}
		}
	};

	Web.init();

})();

// Toggle mobile nav
// $('#menu-toggle').on('click', function() {
// 	let m = document.getElementById('menu');
// 	if (m.className === 'menu-nav__list') {
// 		m.className += ' menu-nav__list--xs';
// 	} else {
// 		m.className = 'menu-nav__list';
// 	}
// });
