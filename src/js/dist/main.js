'use strict';

/*
 * Main
 */

// (() => {
//
//     // Web app
//     var Web = {
//         // Init
//         init: () => {
//             Web.bind();
//         },
//         // Bind
//         bind: () => {
//         Web.menu.bind();
//         },
//         // Menu
//         menu: {
//             // Bind
//             bind: () => {
//                 $('#menu-toggle').on('click', () => {
//                     let m = $('#menu');
//                     if (m.className === 'menu-nav__list') {
//                         m.className += ' menu-nav__list--xs';
//                     } else {
//                         m.className = 'menu-nav__list';
//                     }
//                 });
//             }
//         }
//     };
//
//     Web.init();
//
// })();

// Function to add mobile class when icon is clicked
var menu = $('#menu');
var menuToggle = $('#menu-toggle');

menuToggle.on('click', function () {
	if (menu.className === 'menu-nav__list') {
		menu.className += ' menu-nav__list--xs';
	} else {
		menu.className = 'menu-nav__list';
	}
});