import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { authReducer, moviesReducer } from '../reducers';

const mainReducer = combineReducers({
    auth: authReducer,
    movies: moviesReducer,
});

export const store = createStore(mainReducer, applyMiddleware(ReduxThunk));
