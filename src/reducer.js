
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import { applyMiddleware, combineReducers } from 'redux';
import { createStore } from 'redux'
import thunk from "redux-thunk"
import mainReducer from './mainReducer';



export const rootReducer = combineReducers({
 main: mainReducer
});

 const  store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)



export default store
