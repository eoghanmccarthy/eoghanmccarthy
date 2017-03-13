'use strict';

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
			// Bind
			bind: function bind() {
				$('#menu-toggle').on('click', function () {
					var m = document.getElementById('menu');
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