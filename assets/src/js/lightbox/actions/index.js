import {
    TOGGLE_VISIBILITY,
    INITIALISE_GALLERY,
	SLIDE_INDEX_INCREMENT,
	SLIDE_INDEX_DECREMENT,
	SLIDE_INDEX_SET
} from '../actiontypes/index';

export const toggleVisibility = () => {
	return {
		type: TOGGLE_VISIBILITY
	};
}

export const initialiseGallery = data => {
	return {
        type: INITIALISE_GALLERY,
        data
	};
}

export const slideIndexIncrement = gallery => {
	return {
        type: SLIDE_INDEX_INCREMENT,
        gallery
	};
}

export const slideIndexDecrement = gallery => {
	return {
        type: SLIDE_INDEX_DECREMENT,
        gallery
	};
}

export const slideIndexSet = index => {
	return {
		type: SLIDE_INDEX_SET,
		index
	};
}
