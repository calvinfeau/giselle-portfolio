import React, { useContext } from "react";
import ImageMenu from "./ImageMenu";
import { ProjectContext } from "../context/ProjectContext";

const ProjectMenu = () => {
    const { projects, setIsProjectSelected, handleSelectedProject } = useContext(ProjectContext);

    return (
        <div className="flex">
            <div>
                {projects.map((project, index) => 
                    <div 
                    onMouseEnter={() => handleSelectedProject(index)}
                    onClick={() => setIsProjectSelected(true)}
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