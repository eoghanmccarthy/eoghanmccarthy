import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "actions/lightbox";

class Slides extends Component {
  render() {
    const { gallery, slideIndex } = this.props;

    return (
      <div>
        {gallery.map((item, index) => (
          <div
            key={index}
            className={index !== slideIndex ? "slide" : "slide active"}
            style={{ backgroundImage: `url(${item.src})` }}
          >
            <span className="slide__caption">{item.title}</span>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gallery: state.gallery,
    slideIndex: state.slideIndex
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slides);
