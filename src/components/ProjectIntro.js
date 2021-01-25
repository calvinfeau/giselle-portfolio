import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

const ProjectIntro = () => {
    const { selectedProject } = useContext(ProjectContext);

    return (
        <div className="flex">
            <div>{ selectedProject.title }</div>
            <div>{ selectedProject.subtitle }</div>
        </div>
    );
};

export default ProjectIntro;