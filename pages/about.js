import React from 'react';


export default class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            skills: ["Js - VanillaJS and ReactJS", "php", "design - Adobe XD and Figma", "Wordpress", "ui - ux", "eye on detail", "databases"],
            hobbies: ["Draw an eye","Run about 10km", "Cycle alot of km's", "Watching Netflix", "Make some websites from Scratch", "Eating food and sleep as well"]
        }
    }

    render() {
        return (
            <div className={"padding-20"} id={"about"}>
                <h2>&#x3C;About me /&#x3E;</h2>
                <p>I am a <span> passionated</span> and <span> hardworking</span> young men that <span> focus</span> on the <span> frontend</span>.</p>
                <p>I love to challenge myself with difficult situations and love to drink some 0.0% radler in the weekend ofcourse! </p>

                <div className={"sub"}>
                    <h3>&#x3C;Skills /&#x3E;</h3>
                    {this.state.skills.map((skill, key) => <ul key={key}>{skill}</ul>)}
                </div>

                <div className={"sub"}>
                    <h3>&#x3C;Hobby's /&#x3E;</h3>
                    {this.state.hobbies.map((hobby, key) => <ul key={key}>{hobby}</ul>)}
                </div>

            </div>
        );
    }
}