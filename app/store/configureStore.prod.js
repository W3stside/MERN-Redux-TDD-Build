// REACT ROUTER
import createHistory from 'history/createBrowserHistory';
// REDUX
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
// REDUCERS
import rootReducer from '../reducers';

export const history = createHistory();
const middleware = applyMiddleware( thunk, routerMiddleware(history) );

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        middleware,
    );
}
