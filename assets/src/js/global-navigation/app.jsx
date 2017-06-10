import React from 'react';
import ReactDOM from 'react-dom';

// Import components
import Toggle from './components/toggle';
import NavMenu from './components/nav-menu';

class App extends React.Component {
	constructor(props) {
		super(props);
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
	// Toggle modal visibilty
	toggleModal(event) {
		this.setState({
			active: event
		})
	}

	render(){
		return (
			<div className="nav nav-global">
				<Toggle
					toggleClass="open"
					onClick={ ()=> this.toggleModal(true) }
				/>
				{ this.state.active === true &&
					<div className="nav-global__modal">
						<NavMenu menu={ this.state.menu } />
						<Toggle
							toggleClass="close"
							onClick={ ()=> this.toggleModal(false) }
						/>
				 	</div>
				}
			</div>
		)
	}
}

// Render the UI
ReactDOM.render(
	<App />,
	document.getElementById("globalNavigation")
);
