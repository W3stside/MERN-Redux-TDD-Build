import * as types from '../actions/types';

/**
 * initialState passed to Reducer below
 * @type {Object}
 */
const initialState = {
    // USER DATA
    userData: {
        name: '',
        id: '',
        email: '',
        password: '',
    },
    // ASYNC action states
    aSyncWorking: false,
    aSyncFinished: false,
    // USER AUTH states
    loggedIn: false,
    registered: false,
    fetched: false,
    // DATA
    users: [],
    // ERRORS
    errors: null
};

/**
 * Users Reducer - handles Users slice of State object
 * @param  {object} [state=initialState] initialState - see top
 * @param  {object} action               returned from relevant actionCreator
 * @return {object}                      returns a MERGED (non-mutated) new Store object with NEW STATE
 */
const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.TEXT_INPUT:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    [action.payload.field]: action.payload.input
                },
            };

        default:
            return state;
    }
};

export default usersReducer;
