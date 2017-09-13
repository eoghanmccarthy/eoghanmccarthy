import { combineReducers } from 'redux'
import visibilityReducer from './visibility'
import slideShowReducer from './slideshow'

const rootReducer = combineReducers({
    lightboxActive: visibilityReducer,
    slideIndex: slideShowReducer,
    slideIndexSet: slideShowReducer
})

export default rootReducer
