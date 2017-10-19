import { combineReducers } from 'redux'
import visibilityReducer from './visibility'
import galleryReducer from './gallery'
import slideIndexReducer from './slideIndex'

const rootReducer = combineReducers({
    visible: visibilityReducer,
    gallery: galleryReducer,
    slideIndex: slideIndexReducer
})

export default rootReducer
