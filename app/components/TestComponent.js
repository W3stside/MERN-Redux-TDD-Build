import React from 'react';
// ROUTER
import { Link } from 'react-router-dom'

const TestComponent = () =>
    <div>
        <div>Hello! Here is my custom implementation of a MERN app. Hope you like the build.</div>
        <div>
            Thanks to the original Redux-React-Webpack build found
            <a
                onClick={() => {window.location.assign('https://github.com/jpsierens/webpack-react-redux');}}
                style={{color: 'teal', cursor: 'pointer'}}
                > HERE!</a>
        </div>
        <h1 style={{backgroundColor: 'yellow', color: 'black'}}>#HEJA BVB! :)</h1>
        <Link to="about" > About </Link>
        <Link to="contact" > Contact </Link>
    </div>;

export default TestComponent;
