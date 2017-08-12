import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

/**
 * Redux root Reducer - exports imported Reducers with each KEY as a REDUCER
 * IMPORTANT: import each separate Reducer with the same NAME as the slice of STATE it handles
 * @type {object}
 */
const rootReducer = combineReducers({
    routing
});

export default rootReducer;
