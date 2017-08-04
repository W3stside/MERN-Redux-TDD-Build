const initialState = {
    userData: {
        name: 'Steve Irwin',
        id: '1234',
        email: 'steve@crikey.com'
    },
    loggedIn: true
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SOMETHING':
            return {
                ...state
            };
        default:
            return state;
    }
};

export default usersReducer;
