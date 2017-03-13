/*
 * Main
 */

// Toggle mobile nav
// $('#menu-toggle').on('click', function() {
// 	let navBar = document.getElementById('menu');
// 	if (navBar.className === 'menu-nav__list') {
// 		navBar.className += ' menu-nav__list--xs';
// 	} else {
// 		navBar.className = 'menu-nav__list';
// 	}
// });

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
			// Bind
			bind: () => {
				$('#menu-toggle').on('click', () => {
					let m = document.getElementById('menu');
					if (m.className === 'menu-nav__list') {
						m.className += ' menu-nav__list--xs';
					} else {
						m.className = 'menu-nav__list';
					}
				});
			}
		}
	};

	Web.init();

})();
