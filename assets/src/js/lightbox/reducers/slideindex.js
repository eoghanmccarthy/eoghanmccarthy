import * as SlideIndexActionTypes from '../actiontypes/slideindex';

const initialState = [
	{
		slideIndex: 1,
	},
];

export default function SlideIndexReducer(state=initialState, action) {
	switch (action.type) {
		case SlideIndexActionTypes.DECREMENT_SLIDE_INDEX:
			return [
				...state,
				{
					slideIndex: action.slideIndex -1,
				}
			];
		case SlideIndexActionTypes.INCREMENT_SLIDE_INDEX:
			return [
				...state,
				{
					slideIndex: action.slideIndex +1,
				}
			];
		default:
			return state;
	}
}
