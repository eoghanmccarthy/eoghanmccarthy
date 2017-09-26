import { combineReducers } from 'redux'
import visibilityReducer from './visibility'
import slideShowReducer from './slideshow'

const rootReducer = combineReducers({
    visibility: visibilityReducer,
    slides: slideShowReducer
})

export default rootReducer
