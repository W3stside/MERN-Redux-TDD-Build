// import .env vars
require('dotenv').config();
// connect db (before app)
// require('./app/models/connection');

// create app
const express   = require('express');
const app       = express();
const PORT      = process.env.PORT || 3000;
//Webpack
const webpack   = require('webpack');
//path
const path      = require('path');

// DEVELOPMENT
if (process.env.NODE_ENV !== 'production') {
    const webpackDevMiddleware  = require('webpack-dev-middleware');
    const webpackHotMiddleware  = require('webpack-hot-middleware');
    const config                = require('./webpack.config');
    const compiler              = webpack(config);

    //Plug Webpack into Express server
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        stats: {
            colors: true
        }
    }));
    app.use(webpackHotMiddleware(compiler));
// PRODUCTION
} else {
    // Plug in Static Routes here
    app.use('/', express.static(path.resolve(__dirname, 'static')));
};

// Middleware
const bodyParser = require('body-parser');

// Routes
// EXAMPLE: const apiRoutes  = require('./app/backendRoutes/apiRoutes');

// Express Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Routes
// EXAMPLE: app.use('/api', apiRoutes);

//Main Input
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'app/index.html'));
})

app.listen(PORT, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Listening at localhost:${PORT} ... have fun!`);
    }
});
