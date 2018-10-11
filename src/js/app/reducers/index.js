import { combineReducers } from "redux";

import globalNavigation from "reducers/globalNavigation";
import lightbox from "reducers/lightbox";

const rootReducer = combineReducers({
  globalNavigation: globalNavigation,
  lightbox
});

export default rootReducer;
