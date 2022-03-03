import React from "react";
import GitHubIcon from "../images/github_2048_black.png";
import LinkedInIcon from "../images/linkedin-icon-logo-png-transparent.png"

export default function Footer(){
    return(
        <div className="footer-container">
            <button><img src={GitHubIcon}></img></button>
            <button><img src={LinkedInIcon}></img></button>
        </div>
    )
}