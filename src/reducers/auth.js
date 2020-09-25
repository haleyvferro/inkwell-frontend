// const initialState = {
//     id: 1,
//     username: 'haleyvferro'
// }

export default function auth(state=null, action){
    let gmnb_index;
    let gmnote_index;
    switch(action.type){
        
        case 'LOGIN_SUCCESS':
        case 'CURRENT_USER':
            return action.user
        case 'LOGOUT_SUCCESS':
            return null
        default:
            return state

        case 'EDIT_GAME':
            return null
        case 'NEW GAME':
            return null
        
        // case 'EDIT_GM_NOTEBOOK':
        //     gmnb_index = state.game_master_notebooks.findIndex(game_master_notebook => game_master_notebook.id === action.gmnId);
        //     gmnote_index = state.game_master_notebooks[gmnb_index].gm_notes.findIndex(note => note.id === action.id);
        //     state.game_master_notebooks[gmnb_index].gm_notes.splice(gmnote_index, 1, action.note)
        //     return state;
        // case 'NEW_GM_NOTEBOOK':
        //     gmnb_index = state.game_master_notebooks.findIndex(game_master_notebook => game_master_notebook.id === action.gmnId);
        //     state.game_master_notebooks[gmnb_index].gm_notes.push(action.note)
        //     return state;

        case 'DELETE_GM_NOTE':
            gmnb_index = state.game_master_notebooks.findIndex(game_master_notebook => game_master_notebook.id === action.gmnId);
            gmnote_index = state.game_master_notebooks[gmnb_index].gm_notes.findIndex(note => note.id === action.id);
            state.game_master_notebooks[gmnb_index].gm_notes.splice(gmnote_index, 1)
            return state;
        case 'EDIT_GM_NOTE':
            gmnb_index = state.game_master_notebooks.findIndex(game_master_notebook => game_master_notebook.id === action.gmnId);
            gmnote_index = state.game_master_notebooks[gmnb_index].gm_notes.findIndex(note => note.id === action.id);
            state.game_master_notebooks[gmnb_index].gm_notes.splice(gmnote_index, 1, action.note)
            return state;
        case 'NEW_GM_NOTE':
            gmnb_index = state.game_master_notebooks.findIndex(game_master_notebook => game_master_notebook.id === action.gmnId);
            state.game_master_notebooks[gmnb_index].gm_notes.push(action.note)
            return state;

        // case 'DELETE_CHARACTER_NOTE':
        //     cnb_index = state.character_notebooks.findIndex(character_notebook => character_notebook.id === action.cnId);
        //     cnote_index = state.character_notebooks[cnb_index].c_notes.findIndex(note => note.id === action.id);
        //     state.character_notebooks[cnb_index].c_notes.splice(cnote_index, 1)
        //     return state;
        // case 'EDIT_CHARACTER_NOTE':
        //     cnb_index = state.character_notebooks.findIndex(character_notebook => character_notebook.id === action.cnId);
        //     cnote_index = state.character_notebooks[cnb_index].c_notes.findIndex(note => note.id === action.id);
        //     state.character_notebooks[cnb_index].c_notes.splice(cnote_index, 1, action.note)
        //     return state;
        // case 'NEW_CHARACTER_NOTE':
        //     cnb_index = state.character_notebooks.findIndex(character_notebook => character_notebook.id === action.cnId);
        //     state.character_notebooks[cnb_index].c_notes.push(action.note)
        //     return state;
        
    }
}

// passing in two arguments: game notebook id and the note id
// we're finding the notebook by it's id first 
// go into that notebook's notes 
// find the note with the note id
// 
// game_master_notebooks.gm_notes

// gmnotebook = gamemasternotebooks.find