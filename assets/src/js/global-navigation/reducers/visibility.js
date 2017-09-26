import {
	TOGGLE_VISIBILITY
} from '../actiontypes/index';

const initialState = {
	visible: false
}

function visibilityReducer(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_VISIBILITY:
			return Object.assign({}, state, {
				visible: !state.visible
			})
		default:
			return state;
	}
}
  
export default visibilityReducer
