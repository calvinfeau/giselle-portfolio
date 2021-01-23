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
                    onMouseEnter={() => handleMenuHover("enter", index)}
                    // onMouseLeave={() => handleMenuHover("leave")}
                    onClick={() => handleSelectedProject(project)}
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