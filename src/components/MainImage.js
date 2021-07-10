import React, { useContext, useEffect } from "react";
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
    const imagePath = selectedProject === null || selectedProject === undefined ? window.location.origin + getImagePath(projects[selectedProjectIndex].title, 1, "project") : window.location.origin + getImagePath(selectedProject.title, 1, "project");
    
    return (
        <div className="half-width full-height">
            <Img id="mainImage" src={ imagePath } /> 
        </div>
    );
};

export default MainImage;