import React , { Component } from 'react';

class error extends React.Component {
    render() {
        return(
        <div class="container-error bg-gray">
        <div class="boo-wrapper">
            <div class="boo">
            <div class="face"></div>
            </div>
            <div class="shadow"></div>

            <h1>Whoops!</h1>
            <p>
            We couldn't find the page you
            <br />
            were looking for.
            </p>
        </div>
        </div>
        )
    }
}


export default error