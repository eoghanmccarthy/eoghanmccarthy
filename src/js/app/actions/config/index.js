import {
  FETCH_GLOBAL_CONFIG,
  FETCH_GLOBAL_CONFIG_SUCCESS,
  FETCH_GLOBAL_CONFIG_ERROR
} from "types/config";

export const fetchGlobalConfig = () => {
  return {
    type: FETCH_GLOBAL_CONFIG
  };
};

export const fetchGlobalConfigSuccess = data => {
  return {
    type: FETCH_GLOBAL_CONFIG_SUCCESS,
    data
  };
};

export const fetchGlobalConfigError = error => {
  return {
    type: FETCH_GLOBAL_CONFIG_ERROR,
    error
  };
};
