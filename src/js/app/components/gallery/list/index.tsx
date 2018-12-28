import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as lightboxActions from "actions/lightbox";

import GalleryItem from "components/gallery/item";

const GalleryList: React.FunctionComponent<{
  listData: Array<object>;
  openLightbox: (data: Array<object>, index: number) => void;
}> = ({ listData, openLightbox }) => {
  const _openLightbox = (data: Array<object>, index: number) => {
    openLightbox(data, index);
  };

  return (
    <div className={"gallery"}>
      {listData.map((item: { src: string; label?: string }, index: number) => (
        <GalleryItem
          key={index}
          src={item.src}
          label={item.label}
          onClick={() => _openLightbox(listData, index)}
        />
      ))}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(lightboxActions, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(GalleryList);
