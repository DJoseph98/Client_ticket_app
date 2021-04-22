import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import ticketReducer from '../reducers/ticketReducer';
import errorReducer from '../reducers/errorReducer';
import filterReducer from '../reducers/filterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(
    combineReducers({
        tickets: ticketReducer,
        error: errorReducer,
        filters: filterReducer
    })
    , composeEnhancer);

export default store;