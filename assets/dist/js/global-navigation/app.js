var MENU = [{
	id: 1,
	link: "travel.php",
	name: "travel"
}];

function Toggle(props) {
	return React.createElement(
		"div",
		{ className: "nav-global__toggle", onClick: props.onClick },
		React.createElement(
			"div",
			{ className: "bars" },
			React.createElement("span", null),
			React.createElement("span", null),
			React.createElement("span", null)
		)
	);
}

function Item(props) {
	return React.createElement(
		"li",
		null,
		React.createElement(
			"a",
			{ href: props.link },
			props.name
		)
	);
}

var App = React.createClass({
	displayName: "App",


	getInitialState: function () {
		return {
			active: "nav-global__modal"
		};
	},

	openModal: function () {
		this.setState({ active: "nav-global__modal active" });
	},

	render: function () {
		return React.createElement(
			"nav",
			{ className: "nav nav-global" },
			React.createElement(Toggle, { onClick: this.openModal }),
			React.createElement(
				"div",
				{ className: this.state.active },
				React.createElement(
					"ul",
					{ className: "nav-global__menu" },
					this.props.menu.map(function (item) {
						return React.createElement(Item, {
							key: item.id,
							link: item.link,
							name: item.name });
					}.bind(this))
				)
			)
		);
	}
});

// Render the UI
ReactDOM.render(React.createElement(App, { menu: MENU }), document.getElementById("globalNavigation"));