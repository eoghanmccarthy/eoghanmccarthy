import React, { Component } from "react";

import GalleryItem from "components/gallery/galleryItem";

export default class GalleryList extends Component {
  render() {
    const { data } = this.props;

    return (
      <div class="gallery">
        {data.map((item, index) => {
          <GalleryItem src={item.src} label={item.label} />;
        })}
      </div>
    );
  }
}
