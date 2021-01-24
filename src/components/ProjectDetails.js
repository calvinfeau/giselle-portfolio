import React, { useContext } from "react";
import ImageMenu from "./ImageMenu";
import TextDetails from "./TextDetails";
import { ProjectContext } from "../context/ProjectContext";

const ProjectDetails = () => {
    const { selectedProject } = useContext(ProjectContext);

    return (
        <div>
            <div>
                <div>{ selectedProject.title }</div>
                <div>{ selectedProject.subtitle }</div>
                <ImageMenu />
            </div>
            <TextDetails />
        </div>
    );
};

export default ProjectDetails;