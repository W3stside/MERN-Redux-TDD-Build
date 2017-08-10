import {expect} from 'chai'

// TEST RELATED IMPORTS
import reducer from '../../../app/reducers/ex__usersReducer'
import * as types from '../../../app/actions/types'

const state = {
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
}

// REDUCER SIGNATURE REFRESH
// reducer( initialState, action ) => ...

describe('USERS reducer', () => {
    it('should return the initial state', () => {
        // Pass in undefined when initializing to pass in initialState
        expect( reducer(undefined, {}) ).to.eql(state)
    })

    it('should handle TEXT_INPUT', () => {
        expect(
            reducer(state, {
                type: types.TEXT_INPUT,
                payload: {
                    input: 'Steve Irwin',
                    field: 'name'
                }
            })
        ).to.eql({
            ...state,
            userData: {
                email: '',
                id: '',
                name: 'Steve Irwin',
                password: '',
            }
        })

        expect( reducer(
            // State
            {
                ...state,
                userData: {
                    email: '',
                    id: '',
                    name: 'Steve Irwin',
                    password: '',
                }
            },
            // Actions
            {
                type: types.TEXT_INPUT,
                payload: {
                    input: 'hunter12',
                    field: 'password'
                },
            })
        ).to.eql({
            ...state,
            userData: {
                ...state.userData,
                name: 'Steve Irwin',
                password: 'hunter12'
            }
        })
    })
})
