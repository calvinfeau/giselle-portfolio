import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

const ProjectIntro = () => {
    const { selectedProject } = useContext(ProjectContext);

    return (
        <div className="padding-top half-width flex flex-column align-center justify-center background-color-2">
            <div className="text-xl font-circular padding-bottom-15">{ selectedProject.title }</div>
            <div className="text-small padding-top-15">{ selectedProject.subtitle }</div>
        </div>
    );
};

export default ProjectIntro;