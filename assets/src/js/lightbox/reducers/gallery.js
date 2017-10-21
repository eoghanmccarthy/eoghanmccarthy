import {
	INITIALISE_GALLERY
} from '../actiontypes/index';

export default function galleryReducer(state = null, action) {
	switch (action.type) {
        case INITIALISE_GALLERY:
            const imageStack = new Array();

            for (let elem of action.data) {
                let item = {
                    src: elem.src,
                    title: elem.title
                }

                imageStack.push(item);
            }
			return imageStack;
		default:
			return state;
	}
}
