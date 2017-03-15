'use strict';

/*
 * Main
 */

(function () {

	// Web app
	var Web = {
		// Init
		init: function init() {
			Web.bind();
		},
		// Bind
		bind: function bind() {
			Web.menu.bind();
		},
		// Menu
		menu: {
			// Open
			bind: function bind() {
				$('#menu-toggle').on('click', function () {
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