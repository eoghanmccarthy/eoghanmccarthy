import { combineReducers } from "redux";

import {
  OPEN_LIGHTBOX,
  CLOSE_LIGHTBOX,
  SLIDE_INDEX_INCREMENT,
  SLIDE_INDEX_DECREMENT
} from "types/lightbox";

const initialState = {
  isVisible: false,
  data: [],
  index: null
};

const lightbox = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_LIGHTBOX:
      return {
        isVisible: true,
        data: action.data,
        index: action.index
      };
    case CLOSE_LIGHTBOX:
      return initialState;
    case SLIDE_INDEX_INCREMENT:
      if (state.index >= state.data.length - 1) {
        return {
          ...state,
          index: 0
        };
      } else {
        return {
          ...state,
          index: state.index + 1
        };
      }
    case SLIDE_INDEX_DECREMENT:
      if (state.index <= 0) {
        return {
          ...state,
          index: state.data.length - 1
        };
      } else {
        return {
          ...state,
          index: state.index - 1
        };
      }
    default:
      return state;
  }
};

export default lightbox;
