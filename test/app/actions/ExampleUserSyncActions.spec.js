// Expect lib
import {expect} from 'chai';

/** EXAMPLE React Redux Sync Actions Unit Test
**********************************************

// ACTIONS to test
import * as userActions from '../../../app/actions/userActions';

describe.skip('actions', () => {
    it('userAction.addName() should set PAYLOAD as const text = STEVE', () => {
        const text = 'STEVE';
        const expectedAction = {
            type: 'USER_INFO_NAME',
            payload: text
        };
        expect(userActions.addName(text)).to.eql(expectedAction);
    });
    it('userAction.addEmail() should set PAYLOAD as const email = STEVE@STEVE.COM', () => {
        const email = 'STEVE@STEVE.COM';
        const expectedAction = {
            type: 'USER_INFO_EMAIL',
            payload: email
        };
        expect(userActions.addEmail(email)).to.eql(expectedAction);
    });
    it('userAction.addTitle() should set PAYLOAD as const title = Dr.', () => {
        const title = 'Dr.';
        const expectedAction = {
            type: 'USER_INFO_TITLE',
            payload: title
        };
        expect(userActions.addTitle(title)).to.eql(expectedAction);
    });
});

******************************************************************
*/
