import {
	TOGGLE_LIGHTBOX
} from '../actiontypes/index';

const initialState = {
	lightboxActive: false
}

function visibilityReducer(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_LIGHTBOX:
			return Object.assign({}, state, {
				lightboxActive: !state.lightboxActive
			})
		default:
			return state;
	}
}
  
export default visibilityReducer
