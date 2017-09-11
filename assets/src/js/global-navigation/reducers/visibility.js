import {
	TOGGLE_GLOBAL_NAVIGATION
} from '../actiontypes/index';

const initialState = {
	globalNavActive: false
}

function visibilityReducer(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_GLOBAL_NAVIGATION:
			return Object.assign({}, state, {
				globalNavActive: !state.globalNavActive
			})
		default:
			return state;
	}
}
  
export default visibilityReducer
