import { createSelector } from "reselect";

const selectLightbox = state => state.lightbox;

const selectLightboxIsVisible = createSelector(
  [selectLightbox],
  lightbox => lightbox.isVisible
);

const selectLightboxData = createSelector(
  [selectLightbox],
  lightbox => lightbox.data
);

const selectLightboxIndex = createSelector(
  [selectLightbox],
  lightbox => lightbox.index
);

export { selectLightboxIsVisible, selectLightboxData, selectLightboxIndex };
