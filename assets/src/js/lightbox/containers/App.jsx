import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/index'

// Import components
import Modal from '../components/Modal';

const mapStateToProps = state => {
	return {
		lightboxActive: state.lightboxActive.lightboxActive,
		slideIndex: state.slideIndex.slideIndex,
		gallery: state.slideIndex.gallery
	}
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Modal);