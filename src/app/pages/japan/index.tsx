import React from "react";

import Gallery from "features/gallery";
import galleries from "app/utils/galleries";

const Japan = () => (
  <main>
    <Gallery list={galleries.japan} />
  </main>
);

export default Japan;
