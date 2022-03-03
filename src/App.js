import React from "react";
import ImageSection from "./components/ImageSection";
import InformationSection from "./components/InformationSection.js";
import Footer from "./components/Footer.js";

export default function App(){
    return(
    <div className="card-container">
        <ImageSection />
        <InformationSection />
        <Footer />
    </div>
    )
};