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
			active: false,
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
			active: true
		})
	}
	// Remove active class to close modal
	closeModal() {
		this.setState({
			active: false
		})
	}

	render(){
		return (
			<div className="nav nav-global">
				<Toggle
					toggleClass="open"
					onClick={this.openModal}
				/>
				<div className={this.state.active ?
					"nav-global__modal active" : "nav-global__modal"}>
					<NavMenu menu={this.state.menu} />
					<Toggle
						toggleClass="close"
						onClick={this.closeModal}
					/>
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
