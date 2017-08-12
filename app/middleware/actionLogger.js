/* eslint no-unused-vars: 0 */
/* eslint  no-console: 0 */

/**
 * Action Logger Middleware!
 * Simply logs each action before firing
 * @param  {object} store store instance Object with state
 * @return {function}     returns a function that calls next middleware in chain
 */
export const actionLogger = store => next => action => {
    console.log('FIRING ACTION: ', action);

    return next(action);
};
