import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { LayoutContext } from "../context/LayoutContext";

const ProjectMenu = () => {
    const { projects, selectedProject, setIsProjectSelected, handleSelectedProject, setIsProjectHovered } = useContext(ProjectContext);
    const { handleImageTemplates } = useContext(LayoutContext);

    const handleClick = () => {
        handleImageTemplates(selectedProject);
        setIsProjectSelected(true);
    };

    const handleMouseEnter = (index) => {
        handleSelectedProject(index);
        setIsProjectHovered(true);
    };

    return (
        <div className="margin-top-90 flex flex-column align-end justify-end" style={{width: "calc(50vw - 50px)", marginBottom: "50px", paddingRight: "50px"}}>
            {projects.map((project, index) => 
                <div 
                className="half-width-ratio-included-test"  
                onMouseEnter={ () => handleMouseEnter(index) }
                onClick={ () => handleClick() }
                key={ index }
                >
                    <div className="padding-top-15 padding-bottom-15">
                        <div className="text-medium">{project.title}</div>
                        <div className="text-small">{project.tags}</div>
                    </div>
                    <hr />
                </div>
            )}
        </div>
    );
};

export default ProjectMenu;