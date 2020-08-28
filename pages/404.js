import React from 'react';

export default class PageNotFound extends React.Component {
    render() {
        return (
            <div className={"container"}>
                <h2>&#x3C;/404 - Page not found&#x3E;</h2>
                <span>Sorry, we can redirect you if you want to.</span>
                 <a href={"/"}>Home</a>
            </div>
        );
    }
}