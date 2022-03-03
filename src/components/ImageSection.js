import React from "react";
import FaceImage from "../images/WhatsApp Image 2022-03-03 at 4.27.24 PM.jpeg"

export default function ImageSection(){
    return(
        <div className="image-container">
            <img src={FaceImage}></img>
            <p className="name">Austin Torres</p>
            <p className="job-title">FrontEnd Developer</p>
            <p className="portfolio"><a href="https://austintorres578.github.io/WebDev-portfolio/">Portfolio</a></p>
        </div>
    )
};