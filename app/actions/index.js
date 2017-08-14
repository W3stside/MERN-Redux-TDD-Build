/**
 * Redux actionCreator that fires when handling text inputs (input fields, forms etc)
 * @param  {string} type action type
 * @param  {string} input event.target.value from input nodes//components
 * @return {object}       object with TYPE and PAYLOAD for Reducer to handle
*/
export const handleTextInput = type => field => input => {
    return {
        type,
        payload: {
            input,
            field
        }
    };
};
