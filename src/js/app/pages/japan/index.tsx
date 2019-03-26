import React from "react";

import Gallery from "components/gallery";

import galleryData from "app/data/galleries";

const Japan = () => (
  <main>
    <Gallery listData={galleryData.japan} />
  </main>
);

export default Japan;
