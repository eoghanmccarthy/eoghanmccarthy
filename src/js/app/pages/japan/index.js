import React, { Component } from "react";

import GalleryList from "components/gallery/list";

import galleryData from "app/config/galleries/japan";

export default class Japan extends Component {
  render() {
    return (
      <main>
        <GalleryList data={galleryData} />
      </main>
    );
  }
}
