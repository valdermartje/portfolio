import React from 'react';

export default class Contact extends React.Component {
    render() {
        return (
            <div className={"padding-20"} id={"contact"}>
                <h2>&#x3C;Contact me /&#x3E;</h2>
                <form method={"POST"} action={"./php/mailHandler.php"} encType={""}>
                    <div className={"inputName"}>
                        <input name={"name"} type={"text"} className={"nameInput"} required/>
                        <p>Fullname</p>
                    </div>

                    <div className={"inputEmail"}>
                        <input name={"emailFrom"} type={"email"} className={"emailInput"} required/>
                        <p>Email</p>
                    </div>

                    <div className={"inputSubject"}>
                        <input name={"subject"} type={"text"} className={"subjectInput"} required/>
                        <p>Subject</p>
                    </div>

                    <div className={"inputMessage"}>
                        <textarea name={"message"} type={"text"} className={"messageInput"} required/>
                        <p>Message</p>
                    </div>

                    <button name={"send"} className={"button"}>Send Mail</button>
                </form>
            </div>
        );
    }
}