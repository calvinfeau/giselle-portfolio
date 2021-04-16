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
        <div className="margin-top flex flex-column align-end" style={{width: "50vw", marginBottom: "50px", paddingRight: "50px"}}>
            {projects.map((project, index) => 
                <div 
                className="half-width-ratio-included"
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