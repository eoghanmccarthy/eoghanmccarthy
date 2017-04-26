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
			Web.nav.toggle();
			// Web.lazy.init();
		},
		// Global navigation
		nav: {
			// Toggle
			toggle: function toggle() {
				$('#nav-global-toggle').on('click', function () {
					$('#nav-global-modal').toggleClass('active');
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