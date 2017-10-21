import {
	INITIALISE_GALLERY
} from '../actiontypes/index';

export default function galleryReducer(state = null, action) {
	switch (action.type) {
        case INITIALISE_GALLERY:
            const imageStack = new Array();
            
            for (let i = 0; i < action.data.length; i++) {
                let item = {
                    src: action.data[i].src,
                    title: action.data[i].title
                }

                imageStack.push(item);
            }
			return imageStack;
		default:
			return state;
	}
}
