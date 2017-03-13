/*
 * Main
 */

 // Toggle mobile nav
$('#menu-toggle').on('click', function() {
	let navBar = $('#menu');
	if (navBar.className === 'menu-nav__list') {
		navBar.className += ' menu-nav__list--xs';
	} else {
		navBar.className = 'menu-nav__list';
	}
});

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
// const navBar = document.getElementById('menu');
// const navBarIcon = document.getElementById('menu-toggle');
//
// navBarIcon.addEventListener("click", function() {
// 	if (navBar.className === 'menu-nav__list') {
// 		navBar.className += ' menu-nav__list--xs';
// 	} else {
// 		navBar.className = 'menu-nav__list';
// 	}
// });
