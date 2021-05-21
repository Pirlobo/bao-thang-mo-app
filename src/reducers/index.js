import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import securityReducer from './securityReducer'
import navbarReducer from './navbarRedurcer'
import uploadReducer from './uploadReducer'
export default combineReducers({
    error: errorReducer,
    security: securityReducer,
    navbar : navbarReducer,
    upload : uploadReducer,
})