import React, { useContext } from "react";
import styled from "styled-components";
import { ProjectContext } from "../context/ProjectContext";

const Img = styled.img`
height:                         auto;
width:                          auto;
max-width:                      100%;
`;

const ImageMenu = () => {
    const { projects, hoveredProject } = useContext(ProjectContext);

    return (
        <div>
            <Img src={projects[hoveredProject].images.main} />
        </div>
    );
};

export default ImageMenu;