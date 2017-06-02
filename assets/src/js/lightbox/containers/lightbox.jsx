import React from 'react';
import { connect } from 'react-redux';

// Import components
import Viewer from '../components/viewer';
import Button from '../components/button';

class Lightbox extends React.Component {
	constructor(props) {
		super(props);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.state = {
			gallery: document.querySelectorAll('figure img'),
			active: false
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
			<div className={this.state.active ?
				"lightbox active" : "lightbox"}>
				<Viewer
					onClick={this.openModal}
					gallery={this.state.gallery} />
				<div className={"btn-group btn-group__close"}>
					<Button
						buttonClass={"btn__close"}
						onClick={this.closeModal}
					/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => (
	{}
);

export default connect(mapStateToProps)(Lightbox);
