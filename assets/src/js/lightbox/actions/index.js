import {
	TOGGLE_VISIBILITY,
	SLIDE_INDEX_INCREMENT,
	SLIDE_INDEX_DECREMENT,
	SLIDE_INDEX_SET
} from '../actiontypes/index';

export const toggleVisibility = () => {
	return {
		type: TOGGLE_VISIBILITY
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
