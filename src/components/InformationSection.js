import React from "react";
import EmailIcon from "../images/email-icon-png-download-icons-logos-emojis-email-icons-2400.png"

export default function InformationSection(){
    return(
        <div>
            <div className="button-section">
                <button className="email-button"><img src={EmailIcon}></img><p>Email</p></button>
            </div>
            <div className="about-section">
                <h2>About</h2>
                <p>Hello, Im a Front-End developer with a passion for learning and creating new things. I'm always open to expand my skillset by diving into new technologies to continuously develop my skills as a developer.</p>
            </div>
            <div className="interests-section">
                <h2>Interests</h2>
                <p>Retro/Modern Game Console collector. Video Game enthusiast. Electronic soldering hobbiest. Horror Entertainment Fan.</p>
            </div>
        </div>

    )
};