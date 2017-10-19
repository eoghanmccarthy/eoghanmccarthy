import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/index'

// Import components
import Button from './Button'

const Navigation = ({ gallery, slideIndexIncrement, slideIndexDecrement }) => {

	return (

		<div className="btn-group btn-group__nav">
			<Button
				buttonClass="btn__nav btn__nav--prev"
				onClick={ () => slideIndexDecrement(gallery) }
			/>
			<Button
				buttonClass="btn__nav btn__nav--next"
				onClick={ () => slideIndexIncrement(gallery) }
			/>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
        gallery: state.gallery
    }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Navigation);
