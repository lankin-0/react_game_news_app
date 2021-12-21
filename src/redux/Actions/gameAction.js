import { FETCH_GAMES } from "./actionTypes";
import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL} from "../../api";

//Action Creator
export const loadGames = () => async (dispatch) => {
    //Fetch AXIOS
    const popularData = await axios.get(popularGamesURL())
    const newData = await axios.get(newGamesURL())
    const upcomingData = await axios.get(upcomingGamesURL())
    
    dispatch({
        type: FETCH_GAMES,
        payload: {
            popular: popularData.data.results,
            newGames: newData.data.results,
            upcomingGames: upcomingData.data.results
        }
    });
}

export const fetchSearched = (game_name) => async(dispatch) => {
    const searchGames = await axios.get(searchGameURL(game_name));

    dispatch({
        type: "FETCHED_SEARCHED",
        payload:{
            searched: searchGames.data.results
        }
    })
}