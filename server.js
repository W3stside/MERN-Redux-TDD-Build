// import .env vars
require('dotenv').config();
// connect db (before app)
require('./app/models/connection');

//create app
const express   = require('express');
const app       = express();
const PORT      = process.env.PORT;
//Webpack
const webpack   = require('webpack');

//DEVELOPMENT
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

} else {
    // Plug in Static Routes here
};

//Middleware
const bodyParser = require('body-parser');

//Routes
const apiRoutes  = require('./app/backendRoutes/apiRoutes');

//Express Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//Routing
app.use('/api', apiRoutes);

app.listen(PORT, 'localhost', function(err) {
    if (err) {
        console.log(err);
    }

    console.log(`Listening at localhost:${PORT}`);
});
