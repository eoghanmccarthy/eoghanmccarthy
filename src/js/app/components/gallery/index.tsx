import React, { useContext } from "react";

import { LightboxContext } from "app/context";

import GalleryItem from "components/gallery/item";

const Gallery: React.FunctionComponent<{
  listData: Array<object>;
}> = ({ listData }) => {
  const lightboxContext = useContext(LightboxContext);

  return (
    <div className={"gallery"}>
      {listData.map((item: { src: string; label?: string }, index: number) => (
        <GalleryItem
          key={index}
          src={item.src}
          label={item.label}
          onClick={() => lightboxContext.openLightbox(listData, index)}
        />
      ))}
    </div>
  );
};

export default Gallery;
