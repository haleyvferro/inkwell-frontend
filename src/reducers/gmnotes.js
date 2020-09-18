const initialState = []

export default function gmNotes(state=initialState, action) {
    switch (action.type) {
        case 'FETCH_NOTES_SUCCESS':
            return[...action.notes]
        case 'ADD_NOTE':
            return[...state, action.newNote]
        case 'DELETE_NOTE':
            return state.filter(note => note.id !== action.noteId)
        case 'UPDATE_NOTE':
            const prevState = state.filter(note  =>  note.id !== action.note.id)
          return [...prevState, action.note]
        default:
            return state
    }
}