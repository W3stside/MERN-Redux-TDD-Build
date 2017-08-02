const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('')).window;

const exposedProperties = ['window', 'navigator', 'document'];

// -------------------------------
// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.

['.css', '.scss', '.png', '.jpg'].forEach(ext => {
    require.extensions[ext] = () => null;
});

global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};
