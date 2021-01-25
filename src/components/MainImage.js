import React, { useContext } from "react";
import styled from "styled-components";
import { ProjectContext } from "../context/ProjectContext";
import { LayoutContext } from "../context/LayoutContext";

const Img = styled.img`
height:                         auto;
width:                          auto;
max-width:                      100%;
`;

const MainImage = () => {
    const { projects, selectedProjectIndex } = useContext(ProjectContext);
    const { getImagePath } = useContext(LayoutContext);

    return (
        <div>
            <Img src={window.location.origin + getImagePath(projects[selectedProjectIndex].title, 1, "project")} />
        </div>
    );
};

export default MainImage;