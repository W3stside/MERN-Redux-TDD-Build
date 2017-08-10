import * as types from './types';

/** EXAMPLE ACTION:
export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}
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
