const initialState = []

export default function games(state=initialState, action) {
    switch (action.type) {
        case 'FETCH_GAMES_SUCCESS':
            return[...action.games]
        case 'ADD_GAME':
            return[...state, action.newGame]
        case 'DELETE_GAME':
            return state.filter(game => game.id !== action.gameId)
        case 'UPDATE_GAME':
            const prevState = state.filter(game  =>  game.id !== action.game.id)
          return [...prevState, action.game]
        default:
            return state
    }
}