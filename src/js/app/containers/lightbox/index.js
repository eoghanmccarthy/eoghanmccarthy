import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as lightboxActions from "actions/lightbox";

import {
  selectLightboxIsVisible,
  selectLightboxData,
  selectLightboxIndex
} from "selectors/lightbox";

import Modal from "components/lightbox/modal";

const mapStateToProps = state => {
  return {
    isVisible: selectLightboxIsVisible(state),
    data: selectLightboxData(state),
    index: selectLightboxIndex(state)
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
