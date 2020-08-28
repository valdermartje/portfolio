import React from 'react';

import Menu from "./components/menu";
import Footer from "./components/footer";

//import stylesheets
import './style/stylesheet.css';
import './style/menu.css';
import './style/background.css';
import './style/form.css';
import './style/setup.css';
import './style/footer.css';

// import pages
import Index from "./pages";
import About from "./pages/about";
import Projects from './pages/projects';
import Contact from "./pages/contact";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "VreeSign"
        }
    }

    render() {
        return (
            <div className="App">
                <Menu />

                <div className={"container"}>
                    <div className={"container-text"}>
                        <Index/>
                        <About/>
                        <Projects/>
                        <Contact/>
                    </div>

                    <Footer name={this.state.name} color={"white"}/>
                </div>

            </div>
        );
    };
};
