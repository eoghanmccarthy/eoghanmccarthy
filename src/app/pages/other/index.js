import React, { Fragment, useState } from "react";

import Gallery from "features/gallery";
import Lightbox from "features/lightbox";

import galleries from "app/utils/galleries";

const Japan2 = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Fragment>
      <Gallery
        list={galleries.other}
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
        list={galleries.other}
      />
    </Fragment>
  );
};

export default Japan2;
