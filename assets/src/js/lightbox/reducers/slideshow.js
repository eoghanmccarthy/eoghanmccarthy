import {
	SLIDE_INDEX_INCREMENT,
	SLIDE_INDEX_DECREMENT,
	SLIDE_INDEX_SET
} from '../actiontypes/index';

const initialState = {
	slideIndex: 0,
	gallery: document.querySelectorAll('figure img')
}

function slideShowReducer(state = initialState, action) {
	switch (action.type) {
		case SLIDE_INDEX_INCREMENT:
			if (state.slideIndex > state.gallery.length - 2) {
				return Object.assign({}, state, {
					slideIndex: 0
				})
			} else {
				return Object.assign({}, state, {
					slideIndex: state.slideIndex + 1
				})
			}
		case SLIDE_INDEX_DECREMENT:
			if (state.slideIndex < 1) {
				return Object.assign({}, state, {
					slideIndex: state.gallery.length - 1
				})
			} else {
				return Object.assign({}, state, {
					slideIndex: state.slideIndex - 1
				})
			}
		case SLIDE_INDEX_SET:
			return Object.assign({}, state, {
				slideIndex: action.i
			})
		default:
			return state;
	}
}
  
export default slideShowReducer
