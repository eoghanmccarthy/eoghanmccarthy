import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as lightboxActions from "actions/lightbox";

import Modal from "components/lightbox/modal";

const mapStateToProps = state => {
  return {
    visible: state.visible,
    gallery: state.gallery
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(lightboxActions, dispatch);
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

export default App;
