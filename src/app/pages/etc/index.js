import React, { Fragment, useState } from "react";

import Gallery from "features/gallery";
import Lightbox from "features/lightbox";

import galleries from "app/utils/galleries";

const Etc = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Fragment>
      <Gallery
        list={galleries.etc}
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
        list={galleries.etc}
      />
    </Fragment>
  );
};

export default Etc;
