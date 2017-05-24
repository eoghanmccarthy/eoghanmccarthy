import React from 'react';
import { connect } from 'react-redux';

// Import components
import Viewer from '../components/viewer';
import Button from '../components/button';

class Lightbox extends React.Component {
	constructor(props) {
		super(props);
		this.closeModal = this.closeModal.bind(this);
		this.state = {
			active: "lightbox active",
		};
	}
	// Add active class to open modal
	openModal(i) {
		this.setState({
			active: "lightbox open"
		})
	}
	// Remove active class to close modal
	closeModal() {
		this.setState({
			active: "lightbox"
		})
	}

	render(){

		let gallery = document.querySelectorAll('figure img');
		for (let i = 0; i < gallery.length; i++) {
			 gallery[i].onclick = this.openModal.bind(this, i);
		}

		return (
			<div className={this.state.active}>
				<Viewer />
				<div className={"btn-group btn-group__close"}>
					<Button buttonClass={"btn__close"} onClick={this.closeModal} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => (
	{}
);

export default connect(mapStateToProps)(Lightbox);
