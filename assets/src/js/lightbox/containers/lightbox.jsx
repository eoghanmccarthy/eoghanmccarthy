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
			active: true
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

		let lightboxClass;
		if (this.state.active) {
			lightboxClass = 'lightbox active';
		} else {
			lightboxClass = 'lightbox';
		}

		return (
			<div className={lightboxClass}>
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
