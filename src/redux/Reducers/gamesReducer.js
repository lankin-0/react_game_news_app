import { FETCH_GAMES } from "../Actions/actionTypes"

const initialState = {
    popular: [],
    newGames: [],
    upcomingGames: [],
    searched: []
}

const gamesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_GAMES:
            return {
                ...state,
                 popular: action.payload.popular,
                 newGames: action.payload.newGames,
                 upcomingGames: action.payload.upcomingGames
                }
        case "FETCHED_SEARCHED":
            return{
                ...state,
                searched: action.payload.searched
            }
        case "CLEAR_SEARCHED":
            return{
                ...state,
                searched: []
            }
        default: 
            return {...state}
    }
}

export default gamesReducer;