import React from "react";

export default class OnePage extends React.Component {
    render() {
        return (
            <div className={"container-text"}>
                {this.props.children}
            </div>
        );
    }
}