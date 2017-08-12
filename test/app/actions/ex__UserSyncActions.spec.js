/* eslint no-console: 0 */
// Expect lib
import {expect} from 'chai';
// ACTIONS to test
import * as actions from '../../../app/actions';

/** EXAMPLE React Redux Sync Actions Unit Test
 * How to test Action Creators
 * @type {function}
 * @param {string} string Top level description of entire test
 * @param {function} function Fires first it() unit test
 */
describe('actions', () => {
    /**
     * Individual tests within describe block
     * @type {function}
     * @param {string} string Specific description of unit test
     * @param {function} function Fires actual test
     */
    it('TEXT_INPUT action should add Input', () => {
        const input = 'poop';
        const field = 'NAME';
        const expectedAction = {
            type: 'TEXT_INPUT',
            payload: {
                input: 'poop',
                field: 'NAME',
            }
        };
        console.log(actions.handleTextInput(input)(field));
        expect(actions.handleTextInput(input)(field)).to.eql(expectedAction);
    });
});
