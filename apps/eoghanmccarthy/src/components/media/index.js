import React, { useState } from "react";

import Gallery from "components/gallery";
import Lightbox from "components/lightbox";

const Media = ({ post }) => {
  const [isOpen, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryData = React.useMemo(() => {
    if (Array.isArray(post.media)) {
      return post.media.filter(
        (item) => item.type === "image" || item.type === "video"
      );
    }
  }, [post]);

  if (!Array.isArray(galleryData) || !galleryData.length) {
    return null
  }

  return (
    <div className={"media"}>
      <Gallery list={galleryData} />
    </div>
  );
};

export default Media;
