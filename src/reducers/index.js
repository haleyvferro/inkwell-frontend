import { combineReducers } from 'redux'
import gmNotes from './gmnotes'
import gmNotebooks from './gmnotebooks'
import auth from './auth'

export default combineReducers({
    auth,
    // gmNotes,
    gmNotebooks,
})