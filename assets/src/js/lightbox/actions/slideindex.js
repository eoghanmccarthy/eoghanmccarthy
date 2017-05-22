import * as SlideIndexActionTypes from '../actiontypes/slideindex';

export const updateSlideIndex = slideIndex => {
	return {
		type: SlideIndexActionTypes.UPDATE_SLIDE_INDEX,
		slideIndex
	};
};
