import { combineReducers } from 'redux'
import visibilityReducer from './visibility'

const rootReducer = combineReducers({
    visibility: visibilityReducer
})

export default rootReducer