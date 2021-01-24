import React, { useContext } from "react";
import styled from "styled-components";
import { ProjectContext } from "../context/ProjectContext";
import { LayoutContext } from "../context/LayoutContext";

const Img = styled.img`
height:                         auto;
width:                          auto;
max-width:                      100%;
`;

const ImageMenu = () => {
    const { projects, hoveredProject } = useContext(ProjectContext);
    const { getImagePath } = useContext(LayoutContext);

    return (
        <div>
            <Img src={window.location.origin + getImagePath(projects[hoveredProject].title, 1, "project")} />
        </div>
    );
};

export default ImageMenu;