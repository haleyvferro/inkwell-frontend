import { combineReducers } from 'redux'
import gmNotes from './gmnotes'
import gmNotebooks from './gmNotebooks'
import games from './games'
import auth from './auth'

export default combineReducers({
    auth,
    // gmNotes,
    gmNotebooks,
    games,
})