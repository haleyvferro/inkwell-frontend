const initialState = []

export default function gmNotebooks(state=initialState, action) {
    switch (action.type) {
        case 'FETCH_GMNOTEBOOKS_SUCCESS':
            return[...action.GMNotebooks]
        case 'ADD_GMNOTEBOOK':
            return[...state, action.newGMNotebook]
        case 'DELETE_GMNOTEBOOK':
            return state.filter(GMNotebook => GMNotebook.id !== action.GMNotebookId)
        case 'UPDATE_GMNOTEBOOK':
            const prevState = state.filter(GMNotebook => GMNotebook.id !== action.GMNotebookId)
          return [...prevState, action.GMNotebook]
        default:
            return state
    }
}