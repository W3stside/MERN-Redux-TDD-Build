import React from 'react';

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
    </div>;

export default TestComponent;
