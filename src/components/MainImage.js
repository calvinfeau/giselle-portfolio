import React, { useContext } from "react";
import styled from "styled-components";
import { ProjectContext } from "../context/ProjectContext";
import { LayoutContext } from "../context/LayoutContext";

const Img = styled.img`
`;
// height: 100%;
// width: 100%;
// max-width: 100%;
// max-height: 100vh;

const MainImage = () => {
    const { projects, selectedProjectIndex } = useContext(ProjectContext);
    const { getImagePath } = useContext(LayoutContext);

    return (
        <div className="half-width full-height">
            <Img style={{zIndex: "-10", width: "100%", height: "100%", maxHeight: "100vh", maxWidth: "100%", objectFit: "cover"}} src={window.location.origin + getImagePath(projects[selectedProjectIndex].title, 1, "project")} />
        </div>
    );
};

export default MainImage;