const initialState = []

export default function gmNotebooks(state=initialState, action) {
    switch (action.type) {
        case 'FETCH_GMNOTEBOOKS_SUCCESS':
            return[...action.gmNotebooks]
        case 'ADD_GMNOTEBOOK':
            return[...state, action.newgmNotebook]
        case 'DELETE_GMNOTEBOOK':
            return state.filter(gmNotebook => gmNotebook.id !== action.gmNotebookId)
        case 'UPDATE_GMNOTEBOOK':
            const prevState = state.filter(gmNotebook => gmNotebook.id !== action.gmNotebookId)
          return [...prevState, action.gmNotebook]
        default:
            return state
    }
}