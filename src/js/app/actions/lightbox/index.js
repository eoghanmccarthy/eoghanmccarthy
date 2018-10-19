import {
  OPEN_LIGHTBOX,
  CLOSE_LIGHTBOX,
  SLIDE_INDEX_INCREMENT,
  SLIDE_INDEX_DECREMENT
} from "types/lightbox";

export const openLightbox = (data, index) => {
  return {
    type: OPEN_LIGHTBOX,
    data,
    index
  };
};

export const closeLightbox = () => {
  return {
    type: CLOSE_LIGHTBOX
  };
};

export const slideIndexIncrement = length => {
  return {
    type: SLIDE_INDEX_INCREMENT,
    length
  };
};

export const slideIndexDecrement = length => {
  return {
    type: SLIDE_INDEX_DECREMENT,
    length
  };
};
