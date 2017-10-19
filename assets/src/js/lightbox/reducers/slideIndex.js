import {
	SLIDE_INDEX_INCREMENT,
	SLIDE_INDEX_DECREMENT,
	SLIDE_INDEX_SET
} from '../actiontypes/index';

export default function slideIndexReducer(state = 0, action) {
	switch (action.type) {
		case SLIDE_INDEX_INCREMENT:
			if (state > action.gallery.length - 2) {
				return state = 0;
			} else {
				return state + 1;
			}
		case SLIDE_INDEX_DECREMENT:
			if (state < 1) {
				return action.gallery.length - 1;
			} else {
				return state - 1;
			}
		case SLIDE_INDEX_SET:
			return action.index;
		default:
			return state;
	}
}