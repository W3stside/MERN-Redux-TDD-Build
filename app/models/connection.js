/* eslint no-console: 0 */
const mongoose = require('mongoose');

// cache URI
let dbURI;

// DEVELOPMENT DBURI
if(process.env.NODE_ENV !== 'production') {
    dbURI = process.env.TEST_MONGODB_URI || 'mongodb://localhost:27017';
// PRODUCTION DBURI
} else {
    dbURI = process.env.PROD_MONGODB_URI;
}

// use default promises
mongoose.Promise = global.Promise;

mongoose.connect(dbURI)
    .then( () => {
        console.log(`Successfully connected to ${dbURI}`);
    })
    .catch( (err) => {
        console.log(`ERROR unsuccessful connection to ${dbURI}. Error = ${err}`);
    });

// shut down
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose successfully shut down.');
});
