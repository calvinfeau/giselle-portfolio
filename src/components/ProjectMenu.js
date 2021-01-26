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
        <div className="flex">
            <div>
                {projects.map((project, index) => 
                    <div 
                    onMouseEnter={ () => handleSelectedProject(index) }
                    onClick={ () => handleClick() }
                    key={ index }
                    >
                        {project.title}
                        <br />
                        {project.tags}
                        <hr />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectMenu;