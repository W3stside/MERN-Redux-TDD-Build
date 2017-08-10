/* eslint no-console: 0 */
// Expect lib
import {expect} from 'chai';
// ACTIONS to test
import * as actions from '../../../app/actions';

/** EXAMPLE React Redux Sync Actions Unit Test
**********************************************
**/

describe('actions', () => {
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
