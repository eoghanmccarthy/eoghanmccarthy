import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/index'

// Import components
import Button from '../components/Button';
import Modal from '../components/Modal';

const App = ({ visible, toggleVisibility }) => {
	
	return (
		<div className="nav nav-global">
			
			<Button
				buttonClass="open"
				onClick={ toggleVisibility }
			/>

			{ visible === true &&

				<Modal />

			}

		</div>
	)
}

const mapStateToProps = state => {
	return {
		visible: state.visible
	}
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
