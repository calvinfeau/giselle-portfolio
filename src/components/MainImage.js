import React, { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { LayoutContext } from "../context/LayoutContext";

const MainImage = () => {
    const { projects, selectedProjectIndex } = useContext(ProjectContext);
    const { getImagePath, checkMainImageContrast } = useContext(LayoutContext);
    const imagePath = window.location.origin + getImagePath(projects[selectedProjectIndex].title, 1, "project");
    
    useEffect(() => {
        console.log("imagePath ", imagePath);
        checkMainImageContrast(true);
    });

    return (
        <div className="half-width full-height">
            {/* <div style={{backgroundImage: `url(${imagePath})`, width: "100%", height: "100%", maxHeight: "100vh", maxWidth: "100%", backgroundSize: "cover", backgroundPosition: "center"}}></div> */}
            {/* <canvas id="mainImageCanvas" style={{display: "none", width: "100%", height: "100%", maxHeight: "100vh", maxWidth: "100%", objectFit: "cover"}}></canvas> */}
            <img id="mainImage" src={imagePath} style={{ width: "100%", height: "100%", objectFit: "cover"}} />
            <canvas id="mainImageCanvas" width="1440" height="2080" style={{ display: "none", width: "100%", height: "100%", objectFit: "cover"}}></canvas>
        </div>
    );
};

export default MainImage;