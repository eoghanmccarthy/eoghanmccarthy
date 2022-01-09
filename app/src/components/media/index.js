import React, { useState } from "react";

import Gallery from "components/gallery";
import Lightbox from "components/lightbox";

const Media = ({ post }) => {
  const [isOpen, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageData = React.useMemo(() => {
    if (Array.isArray(post.media)) {
      return post.media.filter((item) => item.type === "image");
    }
  }, [post]);

  const videoData = React.useMemo(() => {
    if (Array.isArray(post.media)) {
      return post.media.filter((item) => item.type === "video");
    }
  }, [post]);

  return (
    <div className={"media"}>
      {Array.isArray(imageData) && !!imageData.length ? (
        <Gallery list={imageData} />
      ) : null}
      {Array.isArray(videoData) && !!videoData.length
        ? videoData.map((item) => {
            return <video width="400" controls autoPlay src={item.src} />;
          })
        : null}
    </div>
  );
};

export default Media;
