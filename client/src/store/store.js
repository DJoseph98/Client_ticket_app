import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import ticketReducer from '../reducers/ticketReducer';
import errorReducer from '../reducers/errorReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(
    combineReducers({
        tickets: ticketReducer,
        error: errorReducer
    })
    , composeEnhancer);

export default store;