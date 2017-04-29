var MENU = [
	{
		id: 1,
		link: "travel.php",
		name: "travel"
	}
]

function Toggle(props) {
	return (
		<div className="nav-global__toggle" onClick={props.onClick}>
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
		<li><a href={props.link}>{props.name}</a></li>
	)
}

var App = React.createClass({

	getInitialState: function() {
		return {
			active: "nav-global__modal"
		};
	},

	openModal: function() {
		this.setState({ active: "nav-global__modal active" })
	},

	render: function() {
		return (
			<nav className="nav nav-global">
				<Toggle onClick={this.openModal} />
				<div className={this.state.active}>
					<ul className="nav-global__menu">
						{this.props.menu.map(function(item){
							return <Item
										key={item.id}
										link={item.link}
										name={item.name} />
						}.bind(this))}
					</ul>
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
