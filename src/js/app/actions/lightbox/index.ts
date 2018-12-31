import { OPEN_LIGHTBOX, CLOSE_LIGHTBOX } from "types/lightbox";

export const openLightbox = (data: Array<object>, index: number) => {
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
