import React, { useContext } from "react";
import ImageMenu from "./ImageMenu";
import { ProjectContext } from "../context/ProjectContext";

const ProjectMenu = () => {
    const { projects, handleMenuHover, handleSelectedProject } = useContext(ProjectContext);

    return (
        <div>
            <div>
                {projects.map((project, index) => 
                    <div 
                    onMouseEnter={() => handleMenuHover(index)}
                    onClick={() => handleSelectedProject(project)}
                    key={index}
                    >
                        {project.title}
                        <br />
                        {project.tags}
                        <hr />
                    </div>
                )}
            </div>
            <ImageMenu />
        </div>
    );
};

export default ProjectMenu;