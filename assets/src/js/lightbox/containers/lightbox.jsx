import React from 'react';
import { connect } from 'react-redux';

// Import components
import Viewer from '../components/viewer';
import Button from '../components/button';

class Lightbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gallery: document.querySelectorAll('figure img'),
			active: false
		};
	}
	// Toggle modal
	toggleModal(event) {
		this.setState({
			active: event
		})
	}

	render(){
		return (
			<div className={ this.state.active ?
				"lightbox active" : "lightbox" }>
				<Viewer
					openModal={ () => this.toggleModal(true) }
					gallery={ this.state.gallery } />
				<div className="btn-group btn-group__close">
					<Button
						buttonClass="btn__close"
						onClick={ () => this.toggleModal(false) }
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
