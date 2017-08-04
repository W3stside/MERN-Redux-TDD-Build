// REACT ROUTER
import createHistory from 'history/createBrowserHistory';
// REDUX
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
// REDUX-PERSIST
import { autoRehydrate } from 'redux-persist';
// REDUCER
import rootReducer from '../reducers';
// DEV TOOLS CONTAINER COMPONENT
import DevTools from '../containers/DevTools';

export const history = createHistory();
const middleware = applyMiddleware( thunk, routerMiddleware(history) );

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            middleware,
            autoRehydrate(),
            DevTools.instrument()
        )
    );
}
