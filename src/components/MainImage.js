import React, { useContext } from "react";
import styled from "styled-components";
import { ProjectContext } from "../context/ProjectContext";
import { LayoutContext } from "../context/LayoutContext";

const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover
`;

const MainImage = () => {
    const { projects, selectedProjectIndex, selectedProject} = useContext(ProjectContext);
    const { getImagePath } = useContext(LayoutContext);
    const imagePath = selectedProject ? window.location.origin + getImagePath(selectedProject.title, 1, "project") : window.location.origin + getImagePath(projects[selectedProjectIndex].title, 1, "project");
    
    return (
        <div className="half-width full-height">
            <Img id="mainImage" src={ imagePath } />
            {/* <canvas id="mainImageCanvas" width="1440" height="2080" style={{ display: "none", width: "100%", height: "100%", objectFit: "cover"}}></canvas> */}
        </div>
    );
};

export default MainImage;