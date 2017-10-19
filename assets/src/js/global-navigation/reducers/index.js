import { combineReducers } from 'redux'
import visibilityReducer from './visibility'

const rootReducer = combineReducers({
    visible: visibilityReducer
})

export default rootReducer