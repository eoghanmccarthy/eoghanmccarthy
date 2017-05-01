var MENU = [{
	id: 1,
	href: "travel.php",
	label: "travel"
}];

function Toggle(props) {
	return React.createElement(
		"div",
		{ className: "nav-global__toggle " + props.toggleClass, onClick: props.onClick },
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
			{ href: props.href },
			props.label
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
		this.setState({
			active: "nav-global__modal active"
		});
	},

	closeModal: function () {
		this.setState({
			active: "nav-global__modal"
		});
	},

	render: function () {
		return React.createElement(
			"nav",
			{ className: "nav nav-global" },
			React.createElement(Toggle, { toggleClass: "open", onClick: this.openModal }),
			React.createElement(
				"div",
				{ className: this.state.active },
				React.createElement(
					"ul",
					{ className: "nav-global__menu" },
					this.props.menu.map(function (item) {
						return React.createElement(Item, {
							key: item.id,
							href: item.href,
							label: item.label });
					}.bind(this))
				),
				React.createElement(Toggle, { toggleClass: "close", onClick: this.closeModal })
			)
		);
	}
});

// Render the UI
ReactDOM.render(React.createElement(App, { menu: MENU }), document.getElementById("globalNavigation"));