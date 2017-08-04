import React from 'react';
// Recompose toolbelt
import {compose, lifecycle} from 'recompose';
// Redux-Persist Initial State setter from LocalStorage
import {getStoredState} from 'redux-persist';
// import { Link } from 'react-router-dom';
import Routes from '../routes';

const App = () =>
    <div>
        <h1>Hello!</h1>
        { Routes }
    </div>;

export default compose(
    lifecycle({
        componentDidMount() {
            getStoredState( {}, (err, state) => {
                console.log(state);
                /** USE THIS TO PRELOAD PERSISTENT STATE
                * ex:
                if(err) throw err;

                if(state.users.loggedIn) {
                    dispatch({
                        type: 'END_USER_LOGIN'
                    })
                    return;
                }
                */
            });
        }
    })
)(App);

// export default App;
