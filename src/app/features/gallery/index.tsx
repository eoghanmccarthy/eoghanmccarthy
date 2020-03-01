import React, { useContext } from "react";

import { LightboxContext } from "app/context";

const Gallery = ({ listData }) => {
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

const GalleryItem = ({ src = "", label = "", onClick }) => (
  <figure className={"media"} onClick={onClick}>
    {label && <img className={"media__content"} src={src} title={label} />}
  </figure>
);
