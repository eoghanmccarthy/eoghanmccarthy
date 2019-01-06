import produce from "immer";

import {
  OPEN_LIGHTBOX,
  CLOSE_LIGHTBOX,
  SET_LIGHTBOX_INDEX
} from "types/lightbox";

const initialState = {
  isVisible: false,
  data: [],
  index: null
};

const lightbox = (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case OPEN_LIGHTBOX:
        return (draft = {
          isVisible: true,
          data: action.data,
          index: action.index
        });
      case CLOSE_LIGHTBOX:
        return (draft = initialState);
      case SET_LIGHTBOX_INDEX:
        draft.index = action.index;
    }
  });

export default lightbox;
