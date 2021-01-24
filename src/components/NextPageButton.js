import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

const NextPageButton = () => {
    const { selectedProjectIndex, handleSelectedProject } = useContext(ProjectContext);

    return (
        <div onClick={() => handleSelectedProject(selectedProjectIndex+1) }>
            Next Project 
        </div>
    );
};

export default NextPageButton;