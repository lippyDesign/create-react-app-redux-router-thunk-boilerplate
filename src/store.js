import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import authReducer from './auth/reducer';

const reducers = combineReducers({
  authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

export default store;