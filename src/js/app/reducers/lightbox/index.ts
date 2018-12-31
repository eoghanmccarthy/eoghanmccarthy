import { combineReducers } from "redux";

import { OPEN_LIGHTBOX, CLOSE_LIGHTBOX } from "types/lightbox";

const initialState = {
  isVisible: false,
  data: [],
  initialIndex: null
};

const lightbox = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_LIGHTBOX:
      return {
        isVisible: true,
        data: action.data,
        initialIndex: action.index
      };
    case CLOSE_LIGHTBOX:
      return initialState;
    default:
      return state;
  }
};

export default lightbox;
