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
			Web.menu.open();
			Web.menu.close();
		},
		// Menu
		menu: {
			// Open
			open: () => {
				$('#menu-toggle').on('click', () => {
					// let m = document.getElementById('menu');
					// if (m.className === 'menu-nav__list') {
					// 	m.className += ' menu-nav__list--xs';
					// } else {
					// 	m.className = 'menu-nav__list';
					// }
					if ($('#menu').hasClass('menu-nav__list')) {
						$('#menu').addClass('menu-nav__list--xs');
					}
					// else {
					// 	m.className = 'menu-nav__list';
					// }
				});
			},
			close: () => {
				$('#menu-toggle').on('click', () => {
					if ($('#menu').hasClass('menu-nav__list--xs')) {
						$('#menu').removeClass('menu-nav__list--xs');
					}
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
