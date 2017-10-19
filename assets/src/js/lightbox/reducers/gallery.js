import {
	INITIALISE_GALLERY
} from '../actiontypes/index';

export default function galleryReducer(state = [], action) {
	switch (action.type) {
		case INITIALISE_GALLERY:
			return action.data;
		default:
			return state;
	}
}