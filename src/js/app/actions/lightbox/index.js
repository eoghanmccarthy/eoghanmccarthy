import {
  TOGGLE_VISIBILITY,
  INITIALISE_GALLERY,
  SLIDE_INDEX_INCREMENT,
  SLIDE_INDEX_DECREMENT,
  SLIDE_INDEX_SET
} from "types/lightbox";

export const toggleVisibility = () => {
  return {
    type: TOGGLE_VISIBILITY
  };
};

export const initialiseGallery = data => {
  return {
    type: INITIALISE_GALLERY,
    data
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

export const slideIndexSet = index => {
  return {
    type: SLIDE_INDEX_SET,
    index
  };
};
