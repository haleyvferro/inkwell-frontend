export const fetchGMNotebooksSuccess = (gmNotebooks) => {
    return {
        type: 'FETCH_GMNOTEBOOKS_SUCCESS',
        gmNotebooks 
    }
}

export const addGMNotebook = (newgmNotebook) => {
    return {
        type: 'ADD_GMNOTEBOOK',
        newgmNotebook
    }
}

export const deleteGMNotebook = (gmNotebookId) => {
    return {
        type: 'DELETE_GMNOTEBOOK',
        gmNotebookId
    }
}

export const updateGMNotebook = (gmNotebook) => {
    return {
        type: 'UPDATE_GMNOTEBOOK',
        gmNotebook
    }
}
