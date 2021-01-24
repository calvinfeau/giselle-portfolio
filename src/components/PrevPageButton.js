import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

const PrevPageButton = () => {
    const { selectedProjectIndex, handleSelectedProject } = useContext(ProjectContext);

    return (
        <div onClick={() => handleSelectedProject(selectedProjectIndex-1)} >
            Previous Project 
        </div>
    );
};

export default PrevPageButton;