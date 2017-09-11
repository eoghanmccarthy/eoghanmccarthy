import { combineReducers } from 'redux'
import visibilityReducer from './visibility'

const rootReducer = combineReducers({
    globalNavActive: visibilityReducer
})

export default rootReducer