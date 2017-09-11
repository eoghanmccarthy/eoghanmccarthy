import * as SlideIndexActionTypes from '../actiontypes/slideindex';

export const decrementSlideIndex = slideIndex => {
	return {
		type: SlideIndexActionTypes.DECREMENT_SLIDE_INDEX,
		slideIndex
	};
};

export const incrementSlideIndex = slideIndex => {
	return {
		type: SlideIndexActionTypes.INCREMENT_SLIDE_INDEX,
		slideIndex
	};
};
