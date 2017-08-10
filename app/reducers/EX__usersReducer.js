import * as types from '../actions/types';

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
