import React from "react";

import Gallery from "components/gallery";

import galleryData from "app/config/galleries/japan";

const Japan = () => (
  <main>
    <Gallery listData={galleryData} />
  </main>
);

export default Japan;
