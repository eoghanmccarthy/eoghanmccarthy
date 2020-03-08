import React, { Fragment, useState } from "react";

import Gallery from "features/gallery";
import Lightbox from "features/lightbox";

import galleries from "app/utils/galleries";

const Japan = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Fragment>
      <Gallery
        list={galleries.japan}
        onClick={index => {
          setCurrentIndex(index);
          setOpen(true);
        }}
      />
      <Lightbox
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        list={galleries.japan}
      />
    </Fragment>
  );
};

export default Japan;
