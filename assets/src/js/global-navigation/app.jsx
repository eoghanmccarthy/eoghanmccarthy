import React from 'react';
import ReactDOM from 'react-dom';

// Import components
import Toggle from './components/toggle';
import NavMenu from './components/nav-menu';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.state = {
			active: "nav-global__modal",
			menu: [
				{
					id: 1,
					href: "travel.php",
					label: "travel"
				}
			]
		};
	}
	// Add active class to open modal
	openModal() {
		this.setState({
			active: "nav-global__modal active"
		})
	}
	// Remove active class to close modal
	closeModal() {
		this.setState({
			active: "nav-global__modal"
		})
	}

	render(){
		return (
			<div className="nav nav-global">
				<Toggle toggleClass="open" onClick={this.openModal} />
				<div className={this.state.active}>
					<NavMenu menu={this.state.menu} />
					<Toggle toggleClass="close" onClick={this.closeModal} />
			 	</div>
			</div>
		)
	}
}

// Render the UI
ReactDOM.render(
	<App />,
	document.getElementById("globalNavigation")
);
