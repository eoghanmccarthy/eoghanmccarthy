import React from "react";

const GalleryItem: React.FunctionComponent<{
  src: string;
  label?: string;
  onClick: () => void;
}> = ({ src, label, onClick }) => (
  <figure className={"media"} onClick={onClick}>
    {label && <img className={"media__content"} src={src} title={label} />}
  </figure>
);

GalleryItem.defaultProps = {
  label: ""
};

export default GalleryItem;
