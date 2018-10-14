import React, { Component } from "react";

import GalleryList from "components/gallery/galleryList";

import galleryData from "app/config/galleries/japan";

export default class Japan extends Component {
  render() {
    const { galleryData } = this.props;

    return (
      <main>
        <GalleryList data={galleryData} />
      </main>
    );
  }
}