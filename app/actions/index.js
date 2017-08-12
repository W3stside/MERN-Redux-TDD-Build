import * as types from './types';

/**
 * Redux actionCreator that fires when handling text inputs (input fields, forms etc)
 * @param  {string} input event.target.value from input nodes//components
 * @return {object}       object with TYPE and PAYLOAD for Reducer to handle
 */
export const handleTextInput = input => field => {
    return {
        type: types.TEXT_INPUT,
        payload: {
            input,
            field
        }
    };
};
