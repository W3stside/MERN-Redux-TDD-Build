# David's Custom MERN-TDD Build (forked and customized from jpsierens original found [here](https://github.com/jpsierens/webpack-react-redux))
A full boilerplate for playing around with react, redux and react-router with the help of webpack, express, mongoDB + mongoose and full TDD suite.

Contains:

* simple functional component layout - Recompos for HoC layouts.
* ES6 - 7 Support with Babel
* Redux dev tools to help you keep track of the app's state
* Routing
* hot module replacement support so you can change modules or react components without having to reload the browser
* a webpack production config so you can build the app and make it ready for production
* Sass support, just import your styles wherever you need them
* eslint to keep your js readable
* much more...

## Run the app

0. ```npm install```
0. ```npm start```

Once running, if you want to hide the redux dev monitor: ```CTRL+H```

Yes, it takes a while to load the first time you open the app.

The app updates without the browser having to reload. You don't lose state!

## Build the app
```npm run build```

This will build the app into the "dist" directory in the root of the project. It contains the index.html along with the minified assets, ready for production.

![](http://i.imgur.com/uUg2A3S.png)

It should look something like the above image.

## Test the app
``npm run test``

This will fire tests from ./test and configure using test-config.js file 

> Huge thanks to jpsierens for the original build.
> W3stside Test App - uses React + Redux + Router // Express // Node
