import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as lightboxActions from "actions/lightbox";

import GalleryItem from "components/gallery/item";

class GalleryList extends Component {
  _openLightbox = (data, index) => {
    this.props.openLightbox(data, index);
  };

  render() {
    const { data } = this.props;

    return (
      <div className={"gallery"}>
        {data.map((item, index) => (
          <GalleryItem
            key={index}
            src={item.src}
            label={item.label}
            onClick={() => this._openLightbox(data, index)}
          />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(lightboxActions, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(GalleryList);
