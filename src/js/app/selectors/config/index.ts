import { createSelector } from "reselect";

const selectConfig = state => state.config;

const selectConfigIsFetching = createSelector(
  [selectConfig],
  config => config.isFetching
);

const selectConfigIsLoaded = createSelector(
  [selectConfig],
  config => config.isLoaded
);

const selectConfigError = createSelector(
  [selectConfig],
  config => config.error
);

const selectConfigData = createSelector(
  [selectConfig],
  config => config.data
);

export {
  selectConfigIsFetching,
  selectConfigIsLoaded,
  selectConfigError,
  selectConfigData
};
