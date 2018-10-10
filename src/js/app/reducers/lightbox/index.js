import {
  INITIALISE_GALLERY,
  TOGGLE_VISIBILITY,
  SLIDE_INDEX_INCREMENT,
  SLIDE_INDEX_DECREMENT,
  SLIDE_INDEX_SET
} from "types/lightbox";

const galleryReducer = (state = null, action) => {
  switch (action.type) {
    case INITIALISE_GALLERY:
      const imageStack = new Array();

      for (let elem of action.data) {
        let item = {
          src: elem.src,
          title: elem.title
        };

        imageStack.push(item);
      }
      return imageStack;
    default:
      return state;
  }
};

const visibilityReducer = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_VISIBILITY:
      return !state;
    default:
      return state;
  }
};

const slideIndexReducer = (state = 0, action) => {
  switch (action.type) {
    case SLIDE_INDEX_INCREMENT:
      if (state > action.length - 2) {
        return (state = 0);
      } else {
        return state + 1;
      }
    case SLIDE_INDEX_DECREMENT:
      if (state < 1) {
        return action.length - 1;
      } else {
        return state - 1;
      }
    case SLIDE_INDEX_SET:
      return action.index;
    default:
      return state;
  }
};

const lightboxReducer = combineReducers({
  gallery: galleryReducer,
  visible: visibilityReducer,
  slideIndex: slideIndexReducer
});

export default lightboxReducer;
