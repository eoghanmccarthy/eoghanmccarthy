import produce from "immer";

import {
  FETCH_GLOBAL_CONFIG,
  FETCH_GLOBAL_CONFIG_SUCCESS,
  FETCH_GLOBAL_CONFIG_ERROR
} from "types/config";

const initialState = {
  isFetching: false,
  isLoaded: false,
  error: "",
  data: {}
};

const config = (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_GLOBAL_CONFIG:
        draft.isFetching = true;
        draft.error = "";
        return;
      case FETCH_GLOBAL_CONFIG_SUCCESS:
        draft.isFetching = false;
        draft.isLoaded = true;
        draft.data = action.data;
        return;
      case FETCH_GLOBAL_CONFIG_ERROR:
        draft.isFetching = false;
        draft.error = action.error.message;
        return;
    }
  });

export default config;
