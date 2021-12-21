import axios from "axios";
import { GET_DETAIL } from "./actionTypes";
import {gameDetailsURL, gameScreenshotsURL} from '../../api';

export const loadDetail = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAIL",
        payload:{
            isLoading: true
        }
    })

    const detailData = await axios.get(gameDetailsURL(id));
    const screenShotData = await axios.get(gameScreenshotsURL(detailData.data.slug));

    dispatch({
        type: GET_DETAIL,
        payload:{
            game: detailData.data,
            screen: screenShotData.data
        }
    })
}