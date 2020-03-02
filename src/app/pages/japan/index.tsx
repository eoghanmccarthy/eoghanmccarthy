import React from "react";

import Gallery from "features/gallery";
import galleries from "app/utils/galleries";

const Japan = () => (
  <main>
    <Gallery listData={galleries.japan} />
  </main>
);

export default Japan;
