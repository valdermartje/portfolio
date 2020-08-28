import React from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

import PageNotFound from "../pages/404";
import Index from "../pages";
import About from "../pages/about";
import Projects from "../pages/projects";
import Contact from "../pages/contact";

import logo from '../img/icons/logo.svg';

let email = "info@vreesign.nl";

export default class Menu extends React.Component {
    constructor() {
        super();

        this.state = {
            collapsed: false
        }
    }

    collapseMenu = () => {
        if(this.state.collapsed === false) {
            this.setState({
                collapsed: true
            })
        } else {
            this.setState({
                collapsed: false
            })
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className={"menu"}>
                    <div className={"flex container"}>
                        <div className={"left"}>
                            <img src={logo} className={"logo"} alt={"logo VreeSign"} />
                        </div>

                        <div className={"right center-top"}>
                            <div className={"menu-icon"} onClick={this.collapseMenu}>
                                <div className={"streep"} style={{
                                    transform: `${ this.state.collapsed ? "rotate(45deg)" : "rotate(0deg)"}`,
                                    marginTop: `${ this.state.collapsed ? "15px" : "0"}`,
                                    width: `${ this.state.collapsed ? "40px" : "100px"}`
                                }}/>
                                <div className={"streep"} style={{
                                    transform: `${ this.state.collapsed ? "rotate(-45deg)" : "rotate(0deg)"}`,
                                    marginTop: `${ this.state.collapsed ? "-15px" : "0"}`,
                                    width: `${ this.state.collapsed ? "40px" : "100px"}`
                                }}/>
                            </div>
                        </div>
                    </div>
                    <div className={"dropdown"} style={{
                        height: `${ this.state.collapsed ? "50vh" : "0"}`,
                        width: "100%",
                        backgroundColor: "transparent"
                    }}>
                        <div className={"container"}>
                            <a href={"#index"}>Home</a>
                            <a href={"#about"}>About me</a>
                            <a href={"#projects"}>Projects</a>
                            <a href={"#contact"}>Contact Me</a>

                            <a className={"margin-top-40"} href={`mailto:${email}?SUBJECT=Vraag over website&body=Geachte heer Vreeman,`}>info@vreesign.nl</a>

                            <Switch>
                                <Route path="#index" exact component={Index} />
                                <Route path="#about" component={About} />
                                <Route path="#projects" component={Projects} />
                                <Route path="#contact" component={Contact} />
                                {/*<Route exact component={PageNotFound} />*/}
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}