import { TOGGLE_VISIBILITY } from "types/globalNavigation";

const initialState = {
  visible: false
};

const visibility = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_VISIBILITY:
      return {
        ...state,
        visible: !state.visible
      };
    default:
      return state;
  }
};

export default visibility;
