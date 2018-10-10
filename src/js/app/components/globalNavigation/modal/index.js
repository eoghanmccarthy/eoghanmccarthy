import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "actions/globalNavigation";

import Button from "components/globalNavigation/button";
import List from "components/globalNavigation/list";

const Modal = ({ toggleVisibility }) => {
  return (
    <div className="nav-global__modal">
      <List />
      <Button buttonClass="close" onClick={toggleVisibility} />
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
