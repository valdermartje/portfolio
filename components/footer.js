import React from "react";

let year = new Date().getFullYear();

export default class Footer extends React.Component {
    render() {
        if(this.props.color === "white") {
            return (
                <footer className={"flex"}>
                    <p style={{
                        color: `var(--white)`
                     }}>©Copyright {year}
                        <a href={"https://nl.linkedin.com/in/valdemar-v-0b9233184"}>{this.props.name}</a>
                    </p>
                    <div className={"socials right"}>
                        <a href={"https://www.facebook.com/vree.sign"}><ion-icon name="logo-instagram"></ion-icon></a>
                        <a href={"https://www.instagram.com/vreesign/"}><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href={"https://github.com/valdermartje"}><ion-icon name="logo-github"></ion-icon></a>
                    </div>
                </footer>
            )
        } else {
            return (
                <footer className={"flex"}>
                    <span>©Copyright {year +" "+ this.props.name} </span>
                </footer>
            )
        }

    }
}