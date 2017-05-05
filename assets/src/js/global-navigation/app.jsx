import React from 'react';
import ReactDOM from 'react-dom';

// Import components
import Toggle from './components/toggle';
import MenuItem from './components/menu-item';


// Navigation menu items
var MENU = [
	{
		id: 1,
		href: "travel.php",
		label: "travel"
	}
]

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: "nav-global__modal"
		};
	}
	// Add active class to open
	openModal() {
		this.setState({
			active: "nav-global__modal active"
		})
	}
	// Remove active class to close
	closeModal() {
		this.setState({
			active: "nav-global__modal"
		})
	}

	render(){
		return (
			<nav className="nav nav-global">
				<Toggle toggleClass="open" onClick={this.openModal.bind(this)} />
				<div className={this.state.active}>
					<ul className="nav-global__menu">
						{this.props.menu.map(function(item){
							return <MenuItem
										key={item.id}
										href={item.href}
										label={item.label} />
						}.bind(this))}
					</ul>
					<Toggle toggleClass="close" onClick={this.closeModal.bind(this)} />
			 	</div>
			</nav>
		)
	}
}

// Render the UI
ReactDOM.render(
	<App menu={MENU} />,
	document.getElementById("globalNavigation")
);
