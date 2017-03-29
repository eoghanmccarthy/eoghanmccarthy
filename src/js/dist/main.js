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
			Web.menu.toggle();
		},
		// Menu
		menu: {
			// Toggle
			toggle: function toggle() {
				$('#menu-toggle').on('click', function () {
					$('#menu').toggleClass('menu-nav__list--xs');
				});
			}
		}
	};

	Web.init();
})();