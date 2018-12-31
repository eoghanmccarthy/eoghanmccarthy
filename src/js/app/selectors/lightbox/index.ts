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

const selectLightboxInitialIndex = createSelector(
  [selectLightbox],
  lightbox => lightbox.initialIndex
);

export {
  selectLightboxIsVisible,
  selectLightboxData,
  selectLightboxInitialIndex
};
