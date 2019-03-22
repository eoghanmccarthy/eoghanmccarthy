import { combineReducers } from "redux";

import config from "reducers/config";
import lightbox from "reducers/lightbox";

const rootReducer = combineReducers({
  config,
  lightbox
});

export default rootReducer;
