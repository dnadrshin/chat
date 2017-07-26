import {combineReducers} from 'redux'
import authReducer from './Auth/reducer'
import chatReducer from './Chat/reducer'

let
    reducers = {
        auth: authReducer,
        chat: chatReducer
    }

export default combineReducers(reducers)