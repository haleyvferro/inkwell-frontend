// const initialState = {
//     id: 1,
//     username: 'haleyvferro'
// }

export default function auth(state=null, action){
    let gmnb_index;
    let gmnote_index;
    let gmNotebook;
    let cnb_index;
    let cnote_index;
    let characterNotebook;
    switch(action.type){
        
        case 'LOGIN_SUCCESS':
        case 'CURRENT_USER':
            return action.user
        case 'LOGOUT_SUCCESS':
            return null
        default:
            return state

        case 'NEW_GAME':
            state.games.push(action.game)
            return state;

        case 'NEW_GAME_MASTER_NOTEBOOK':
            state.game_master_notebooks.push(action.gameMasterNotebook)
            return state;

        case 'NEW_CHARACTER_NOTEBOOK':
            state.character_notebooks.push(action.characterNotebook)
            return state;

        case 'NEW_GAME_PLAYER':
            state.game_players.push(action.gamePlayer)
            return state;
        
        // case 'EDIT_GM_NOTEBOOK':
        //     gmnb_index = state.game_master_notebooks.findIndex(game_master_notebook => game_master_notebook.id === action.gmnId);
        //     gmnote_index = state.game_master_notebooks[gmnb_index].gm_notes.findIndex(note => note.id === action.id);
        //     state.game_master_notebooks[gmnb_index].gm_notes.splice(gmnote_index, 1, action.note)
        //     return state;
        // case 'NEW_GM_NOTEBOOK':
        //     gmnb_index = state.game_master_notebooks.findIndex(game_master_notebook => game_master_notebook.id === action.gmnId);
        //     state.game_master_notebooks[gmnb_index].gm_notes.push(action.note)
        //     return state;

        case 'DELETE_GAME_PLAYER':
            state.game_players.filter(invite => invite.id !== action.inviteId)
            return state;

        case 'CHANGE_INVITE_PENDING':
            const invite_index = state.game_players.findIndex(invite => invite.id === action.inviteId)
            state.game_players.splice(invite_index, 1, action.invite)
            return state;

        case 'DELETE_GM_NOTE':
            gmNotebook = state.game_master_notebooks.find(game_master_notebook => game_master_notebook.id === action.gmnId);
            if (gmNotebook) {
                gmnb_index = state.game_master_notebooks.findIndex(game_master_notebook => game_master_notebook.id === action.gmnId);
                gmnote_index = state.game_master_notebooks[gmnb_index].gm_notes.findIndex(note => note.id === action.id);
                state.game_master_notebooks[gmnb_index].gm_notes.splice(gmnote_index, 1)
                return state;
            } else {return state}
        case 'EDIT_GM_NOTE':
            gmNotebook = state.game_master_notebooks.find(game_master_notebook => game_master_notebook.id === action.gmnId);
            if (gmNotebook.gm_notes) {
                gmnb_index = state.game_master_notebooks.findIndex(game_master_notebook => game_master_notebook.id === action.gmnId);
                gmnote_index = state.game_master_notebooks[gmnb_index].gm_notes.findIndex(note => note.id === action.id);
                state.game_master_notebooks[gmnb_index].gm_notes.splice(gmnote_index, 1, action.note)
                return state;
            } else {return state}
        case 'NEW_GM_NOTE':
            gmNotebook = state.game_master_notebooks.find(game_master_notebook => game_master_notebook.id === action.gmnId);
            if (gmNotebook) {
                gmnb_index = state.game_master_notebooks.findIndex(game_master_notebook => game_master_notebook.id === action.gmnId);
                state.game_master_notebooks[gmnb_index].gm_notes.push(action.note)
                return state;
            } else {return state}
                
        case 'DELETE_CHARACTER_NOTE':
            characterNotebook = state.character_notebooks.find(character_notebook => character_notebook.id === action.cnId);
            if (characterNotebook.character_notes) {
                cnb_index = state.character_notebooks.findIndex(character_notebook => character_notebook.id === action.cnId);
                cnote_index = state.character_notebooks[cnb_index].character_notes.findIndex(note => note.c_note_id === action.id);
                state.character_notebooks[cnb_index].character_notes.splice(cnote_index, 1)
            return state;
            } else {return state}
        case 'EDIT_CHARACTER_NOTE':
            characterNotebook = state.character_notebooks.find(character_notebook => character_notebook.id === action.cnId);
            if (characterNotebook.character_notes) {
                cnb_index = state.character_notebooks.findIndex(character_notebook => character_notebook.id === action.cnId);
                cnote_index = state.character_notebooks[cnb_index].character_notes.findIndex(note => note.c_note_id === action.id);
                state.character_notebooks[cnb_index].character_notes.splice(cnote_index, 1, action.note)
            return state;
        } else {return state}
        case 'NEW_CHARACTER_NOTE':
            characterNotebook = state.character_notebooks.find(character_notebook => character_notebook.id === action.cnId);
            if (characterNotebook) {
                cnb_index = state.character_notebooks.findIndex(character_notebook => character_notebook.id === action.cnId);
                state.character_notebooks[cnb_index].character_notes.push(action.note)
                return state;            
        } else {return state}

        
    }
}

// passing in two arguments: game notebook id and the note id
// we're finding the notebook by it's id first 
// go into that notebook's notes 
// find the note with the note id
// 
// game_master_notebooks.gm_notes

// gmnotebook = gamemasternotebooks.find