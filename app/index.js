/* eslint no-console: 0 */
// REACT
import React from 'react';
import { render } from 'react-dom';
// REACT HOT LOADER CONTAINER
import { AppContainer } from 'react-hot-loader';
// REDUX
import { configureStore, history } from './store/configureStore';
// REDUX-PERSIST
import { persistStore } from 'redux-persist';
// CONTAINERS
import Root from './containers/Root';
// STYLING - adds default styling to index.html availble throughout app - please refer to ./styles/default.
// import './styles/default';

// Call Configured Store
const store = configureStore();

/** persistStore()
 * Configures what part of State to persist to localStorage
 * @param  {object} store   State
 * @param  {object} config  configures what to persist or not to persist
 * WHITELIST: what slice of state to persist to localStorage
 * >> add by reducer // state KEY
 * @return {object}         slice of STATE object to persist to localStorage
 */
persistStore(store, /* {whitelist: ['users']}, */ () => {
    console.log('Rehydration complete');
});

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const newConfigureStore = require('./store/configureStore');
        const newStore = newConfigureStore.configureStore();
        const newHistory = newConfigureStore.history;
        const NewRoot = require('./containers/Root').default;
        // Persist the Store
        persistStore(newStore, /* {whitelist: ['users']}, */ () => {
            console.log('Rehydration complete');
        });
        render(
            <AppContainer>
                <NewRoot store={newStore} history={newHistory} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
