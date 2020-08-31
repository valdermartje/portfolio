import React from 'react';
import Header from "../components/header";

export default class PageNotFound extends React.Component {
    render() {
        return (
            <div className={"container"}>
                <Header headerName={"404 - Page not found"} />
                <p style={{
                    color: `var(--white)`
                }}>Sorry, we can redirect you if you want to.</p>
                 <a style={{
                     color: `var(--white)`
                 }} href={"./"}>Home</a>
            </div>
        );
    }
}