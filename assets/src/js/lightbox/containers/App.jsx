import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/index'

// Import components
import Modal from '../components/Modal';

const mapStateToProps = state => {
	return {
        visible: state.visible,
        gallery: state.gallery
	}
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(Modal);

export default App