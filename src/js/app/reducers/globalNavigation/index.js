import { TOGGLE_VISIBILITY } from "types/globalNavigation";

export default function visibilityReducer(state = false, action) {
  switch (action.type) {
    case TOGGLE_VISIBILITY:
      return !state;
    default:
      return state;
  }
}
