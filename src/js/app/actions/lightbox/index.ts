import {
  OPEN_LIGHTBOX,
  CLOSE_LIGHTBOX,
  SET_LIGHTBOX_INDEX
} from "types/lightbox";

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

export const setLightboxIndex = (index: number) => {
  return {
    type: SET_LIGHTBOX_INDEX,
    index
  };
};
