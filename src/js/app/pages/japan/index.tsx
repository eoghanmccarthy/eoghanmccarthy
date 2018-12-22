import React from "react";

import GalleryList from "components/gallery/list";

import galleryData from "app/config/galleries/japan";

const Japan = () => (
  <main>
    <GalleryList listData={galleryData} />
  </main>
);

export default Japan;
