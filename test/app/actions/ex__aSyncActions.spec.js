import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// For HTTP req
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
// Stub requests
import nock from 'nock';
// Expect lib
import {expect} from 'chai';

/** EXAMPLE Async REACT-REDUX UNIT TEST
****************************************

// ACTIONS to test
import * as userActions from '../../../app/actions/userActions';
import * as posterActions from '../../../app/actions/posterActions';

// Base API URL
const apiURL = '/api/some/URL';

// Axios by default changes http server to xmlhttp so use this to set defaults for axios
axios.defaults.host = apiURL;
axios.defaults.adapter = httpAdapter;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('async actions', () => {
    // DEBUG
    // const Console = console;
    afterEach(() => {
        nock.cleanAll();
    });
    // /////////////////////////////////////////////////////////////////////////
    // ///////////////////////// USERS
    // /////////////////////////////////////////////////////////////////////////
    describe('User related Action Creaors', () => {
        afterEach(() => {
            nock.cleanAll();
        });

        // GET users
        it('fires FETCHING_USERS then FETCHED_USERS when SUCCESS', () => {
            nock(apiURL)
                .get('/users')
                .reply(200, {
                    users: [
                        {
                            email: 'steve@steve.com',
                            name: 'steve',
                            title: 'Dr.'
                        }
                    ]
                });

            const expectedActions = [
                { type: 'FETCHING_USERS' },
                { type: 'FETCHED_USERS', payload: { users: [{name: 'steve', email: 'steve@steve.com', title: 'Dr.'}] }}
            ];
            // Create a mock Redux Store to test
            const store = mockStore({
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
            });
            return store.dispatch(userActions.fetchUsers()).then(() => {
                // return of async actions
                expect(store.getActions()).to.eql(expectedActions);
            });
        });
        // USER registration
        it('fires START_USER_REGISTRATION then END_USER_REGISTRATION then CLEAR_USER_INFO when SUCCESS', () => {
            const userData = {name: 'steve', email: 'steve@steve.com', title: 'Dr.'};
            nock(apiURL)
                .post('/users', userData)
                .reply(201, {
                    body: {
                        users: [userData]
                    }
                });

            const expectedActions = [
                { type: 'START_USER_REGISTRATION' },
                { type: 'END_USER_REGISTRATION'},
                { type: 'CLEAR_USER_INFO'}
            ];
            // Create a mock Redux Store to test
            const store = mockStore({
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
            });
            return store.dispatch(userActions.addUser(userData)).then(() => {
                // return of async actions
                expect(store.getActions(userData)).to.eql(expectedActions);
            });
        });
    });
});

***********************************************
*/
