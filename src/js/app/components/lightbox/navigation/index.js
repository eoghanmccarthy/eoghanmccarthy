import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "actions/lightbox";

import Button from "components/lightbox/button";

const Navigation = ({ gallery, slideIndexIncrement, slideIndexDecrement }) => {
  return (
    <div className="btn-group btn-group__nav">
      <Button
        buttonClass="btn__nav btn__nav--prev"
        onClick={() => slideIndexDecrement(gallery.length)}
      />
      <Button
        buttonClass="btn__nav btn__nav--next"
        onClick={() => slideIndexIncrement(gallery.length)}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    gallery: state.gallery
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
