import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { LayoutContext } from "../context/LayoutContext";

const ProjectMenu = () => {
    const { projects, selectedProject, setIsProjectSelected, handleSelectedProject } = useContext(ProjectContext);
    const { handleImageTemplates } = useContext(LayoutContext);

    const handleClick = () => {
        handleImageTemplates(selectedProject);
        setIsProjectSelected(true);
    };

    return (
        <div className="col-start-1 margin-top">
            {projects.map((project, index) => 
                <div 
                onMouseEnter={ () => handleSelectedProject(index) }
                onClick={ () => handleClick() }
                key={ index }
                >
                    <div className="">{project.title}</div>
                    <br />
                    <div>{project.tags}</div>
                    <hr />
                </div>
            )}
        </div>
    );
};

export default ProjectMenu;