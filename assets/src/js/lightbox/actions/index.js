import {
	TOGGLE_LIGHTBOX,
	SLIDE_INDEX_INCREMENT,
	SLIDE_INDEX_DECREMENT,
	SLIDE_INDEX_SET
} from '../actiontypes/index';

export const toggleLightbox = () => {
	return {
		type: TOGGLE_LIGHTBOX
	};
};

export const slideIndexIncrement = () => {
	return {
		type: SLIDE_INDEX_INCREMENT
	};
};

export const slideIndexDecrement = () => {
	return {
		type: SLIDE_INDEX_DECREMENT
	};
};

export const slideIndexSet = i => {
	return {
		type: SLIDE_INDEX_SET,
		i
	};
};
