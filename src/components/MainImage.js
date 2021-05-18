import React, { useContext, useEffect } from "react";
    import { ProjectContext } from "../context/ProjectContext";
import { LayoutContext } from "../context/LayoutContext";

const MainImage = () => {
    const { projects, selectedProjectIndex } = useContext(ProjectContext);
    const { getImagePath, getDominantColor } = useContext(LayoutContext);
    const imagePath = window.location.origin + getImagePath(projects[selectedProjectIndex].title, 1, "project");
   
    useEffect(() => {
        getDominantColor();
    }, []);

    return (
        <div className="half-width full-height">
            {/* <div style={{backgroundImage: `url(${imagePath})`, width: "100%", height: "100%", maxHeight: "100vh", maxWidth: "100%", backgroundSize: "cover", backgroundPosition: "center"}}></div> */}
            <img id="mainImage" style={{zIndex: "-10", width: "100%", height: "100%", maxHeight: "100vh", maxWidth: "100%", objectFit: "cover"}} src={imagePath } />
        </div>
    );
};

export default MainImage;