import React from 'react';

export default class Projects extends React.Component {
    render() {
        return (
            <div className={"padding-20"} id={"projects"}>
                <h2>&#x3C;Projects /&#x3E;</h2>
                <p>These are my projects I've done while my <span>internship</span> in <span>2019-2020</span>.</p>

                <a href={"www.vreesign.nl"}>www.vreesign.nl</a>
                    <a href={"www.bk-nieuwbuinen.nl"}>www.bk-nieuwbuinen.nl</a>
                    <a href={"www.vanleeuwenemmen.nl"}>www.vanleeuwenemmen.nl</a>

                <p style={{
                    marginTop: "var(--standard-distance)"
                }}>Send an email if you want to see some more projects.</p>
            </div>
        );
    }
}