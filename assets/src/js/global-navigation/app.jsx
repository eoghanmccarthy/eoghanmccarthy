var MENU = [
	{
		id: 1,
		href: "travel.php",
		label: "travel"
	}
]

function Toggle(props) {
	return (
		<div className={"nav-global__toggle " + props.toggleClass} onClick={props.onClick}>
 			<div className="bars">
 				<span></span>
 				<span></span>
 				<span></span>
 			</div>
	 	</div>
	)
}

function Item(props) {
	return (
		<li><a href={props.href}>{props.label}</a></li>
	)
}

var App = React.createClass({

	getInitialState: function() {
		return {
			active: "nav-global__modal"
		};
	},

	openModal: function() {
		this.setState({
			active: "nav-global__modal active"
		})
	},

	closeModal: function() {
		this.setState({
			active: "nav-global__modal"
		})
	},

	render: function() {
		return (
			<nav className="nav nav-global">
				<Toggle toggleClass="open" onClick={this.openModal} />
				<div className={this.state.active}>
					<ul className="nav-global__menu">
						{this.props.menu.map(function(item){
							return <Item
										key={item.id}
										href={item.href}
										label={item.label} />
						}.bind(this))}
					</ul>
					<Toggle toggleClass="close" onClick={this.closeModal} />
			 	</div>
			</nav>
		)
	}
});

// Render the UI
ReactDOM.render(
	<App menu={MENU} />,
	document.getElementById("globalNavigation")
);
