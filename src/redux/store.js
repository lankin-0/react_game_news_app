import { createStore, applyMiddleware } from "redux";
//DEVTOOLS
import { composeWithDevTools } from "redux-devtools-extension";
//ROOT REDUCER
import rootReducer from "./Reducers";
//THUNK
import thunk from "redux-thunk";


const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
    );


export default store;