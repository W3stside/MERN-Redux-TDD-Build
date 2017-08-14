/* eslint no-console: 0 */
import React from 'react';
// REDUX
import { connect } from 'react-redux';
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

/**
 * Passes Users State to App for computing User login status
 * @param  {object} state store.getState()
 * @return {object}       maps chosen state to props
 */
const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

/**
 * Using Recompose + Redux - map state to Props and wrap in a HoC with lifecycle hooks
 * @type {HoC} HoC Provides componentDidMount() lifecycle hook which calls getStoredState from LocalStorage
 */
export default compose(
    connect(mapStateToProps),
    lifecycle({
        /**
         * componentDidMount() lifecycle Hook
         * @return {object} returns localStorage User state (loggedIn // registered)
         */
        componentDidMount() {
            // const {users, dispatch} = this.props;
            getStoredState( {}, (err, state) => {
                console.log(state.users);
                if(err) throw err;
                /** USE THIS TO PRELOAD PERSISTENT STATE
                * ex: Check if user is loggedIn from LocalStorage
                * IF TRUE, fire loggedIn action

                if(users.loggedIn) {
                    dispatch({
                        type: 'SOMETHING'
                    });
                    return;
                }

                */
            });
        }
    })
)(App);
