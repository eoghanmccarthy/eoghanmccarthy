import * as SlideIndexActionTypes from '../actiontypes/slideindex';

const initialState = [
	{
		slideIndex: 1,
	},
];

export default function SlideIndexReducer(state=initialState, action) {
	switch (action.type) {
		case SlideIndexActionTypes.UPDATE_SLIDE_INDEX:
			return [
				...state,
				{
					slideIndex: action.slideIndex,
				}
			];
		default:
			return state;
	}
}
