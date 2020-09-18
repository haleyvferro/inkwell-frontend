export const fetchGMNotebooksSuccess = (GMNotebooks) => {
    return {
        type: 'FETCH_GMNOTEBOOKS_SUCCESS',
        GMNotebooks 
    }
}

export const addGMNotebook = (newGMNotebook) => {
    return {
        type: 'ADD_GMNOTEBOOK',
        newGMNotebook
    }
}

export const deleteGMNotebook = (GMNotebookId) => {
    return {
        type: 'DELETE_GMNOTEBOOK',
        GMNotebookId
    }
}

export const updateGMNotebook = (GMNotebook) => {
    return {
        type: 'UPDATE_GMNOTEBOOK',
        GMNotebook
    }
}
