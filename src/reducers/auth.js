const initialState = {
    id: 1,
    username: 'haleyvferro'
}

export default function auth(state=initialState, action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
        case 'CURRENT_USER':
            return action.user
        case 'LOGOUT_SUCCESS':
            return null
        default:
            return state
    }
}