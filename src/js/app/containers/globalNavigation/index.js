import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "actions/globalNavigation";

import Button from "components/globalNavigation/button";
import Modal from "components/globalNavigation/modal";

const GlobalNavigation = ({ visible, toggleVisibility }) => {
  return (
    <div className="nav nav-global">
      <Button buttonClass="open" onClick={toggleVisibility} />

      {visible === true && <Modal />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    visible: state.visible
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalNavigation);
