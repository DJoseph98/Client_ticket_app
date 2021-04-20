import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import ticketReducer from '../reducers/ticketReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(ticketReducer, composeEnhancer);

export default store;