import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { LayoutContext } from "../context/LayoutContext";

const NextPageButton = () => {
    const { selectedProjectIndex, handleSelectedProject } = useContext(ProjectContext);
    const { resetImageToDisplay } = useContext(LayoutContext);

    const handleClick = () => {
        resetImageToDisplay();
        handleSelectedProject(selectedProjectIndex + 1);
    };

    return (
        <div onClick={() => handleClick() }>
            Next Project 
        </div>
    );
};

export default NextPageButton;