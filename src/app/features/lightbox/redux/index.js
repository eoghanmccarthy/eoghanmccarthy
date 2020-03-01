import produce from "immer";

const OPEN_LIGHTBOX = "lightbox/OPEN";
const CLOSE_LIGHTBOX = "lightbox/CLOSE";
const SET_LIGHTBOX_INDEX = "lightbox/SET_INDEX";

const initialState = {
  isVisible: false,
  data: [],
  index: null
};

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case OPEN_LIGHTBOX:
        return (draft = {
          isVisible: true,
          data: action.data,
          index: action.index
        });
      case CLOSE_LIGHTBOX:
        draft = initialState;
        return;
      case SET_LIGHTBOX_INDEX:
        draft.index = action.index;
        return;
    }
  });

export default reducer;

export const openLightbox = payload => {
  return {
    type: OPEN_LIGHTBOX,
    payload
  };
};

export const closeLightbox = () => {
  return {
    type: CLOSE_LIGHTBOX
  };
};

export const setLightboxIndex = payload => {
  return {
    type: SET_LIGHTBOX_INDEX,
    payload
  };
};
