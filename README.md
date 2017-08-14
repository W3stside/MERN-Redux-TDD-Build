# David's Custom MERN-TDD Build (forked and customized from jpsierens original found [here](https://github.com/jpsierens/webpack-react-redux))
A full boilerplate for playing around with react, redux and react-router with the help of webpack, express, mongoDB + mongoose and full TDD suite.

Contains:

* simple functional component layout - Recompos for HoC layouts.
* ES6 - 7 Support with Babel
* Redux dev tools to help you keep track of the app's state
* Routing
* hot module replacement support so you can change modules or react components without having to reload the browser
* a webpack production config so you can build the app and make it ready for production
* Sass support, just import your styles wherever you need them
* Default styling available in ./styles/default.js
    * allows <code>className="cssClassNameHere justLike normalCSS"</code> - no {} curly braces necessary.
    * added a flex implementation via flexP12 flexP6 etc - refer to default.js for more details
    * disabled by default - remove entirely if needed - sets inline styles at top of index file - only caveat
* eslint to keep your js readable
* much more...

## Run the app

0. ```npm install```
0. ```npm start```

Once running, if you want to hide the redux dev monitor: ```CTRL+H```

Yes, it takes a while to load the first time you open the app.

The app updates without the browser having to reload. You don't lose state!

## Build the app
```npm run build```

This will build the app into the "dist" directory in the root of the project. It contains the index.html along with the minified assets, ready for production.

![](http://i.imgur.com/uUg2A3S.png)

It should look something like the above image.

## Test the app
``npm run test``

This will fire tests from ./test and configure using test-config.js file

> Huge thanks to jpsierens for the original build.
> W3stside Test App - uses React + Redux + Router // Express // Node

  /////////////////////////////////////////////////////////////////////////////
 //////////////////////////////// EXAMPLES ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

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
**/

// ACTIONS + CONSTANTS to test
import {aSync} from '../../../app/actions/aSyncGET'
// import * as types from '../../../app/actions/types'

// Base API URL
const apiURL = 'https://jsonplaceholder.typicode.com';
// Endpoint
const endpoint = 'posts';
// Variable URL param
const param = 1;

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
        it('fires USERS_ASYNC_WORKING then USERS_ASYNC_DONE when SUCCESS', () => {
            const userASyncGET = aSync('GET');
            nock(apiURL)
                .get('/posts/1')
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
                { type: 'USERS_ASYNC_WORKING' },
                { type: 'USERS_ASYNC_DONE', payload: { users: [{name: 'steve', email: 'steve@steve.com', title: 'Dr.'}] }}
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
            return store.dispatch(
            userASyncGET(`https://jsonplaceholder.typicode.com/${endpoint}/${param}`))
            .then(() => {
                // return of async actions
                expect(store.getActions()).to.eql(expectedActions);
            })
        });
        // USER registration
        it('fires START_USER_REGISTRATION then END_USER_REGISTRATION then CLEAR_USER_INFO when SUCCESS', () => {
            const data = {userID: 20, id: 40, title: 'Hello', body: 'World'};
            const userASyncPOST = aSync('POST');
            nock(apiURL)
                .post('/posts', data)
                .reply(201, {
                    post: data
                });

            const expectedActions = [
                { type: 'USERS_ASYNC_WORKING' },
                {
                    type: 'USERS_ASYNC_DONE',
                    payload: {
                        post: {
                            body: 'World',
                            id: 40,
                            title: 'Hello',
                            userID: 20
                        }
                    }
                },
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
            return store.dispatch(
            userASyncPOST('https://jsonplaceholder.typicode.com/posts', data))
            .then(() => {
                // return of async actions
                expect(store.getActions(data)).to.eql(expectedActions);
            });
        });
    });
});
