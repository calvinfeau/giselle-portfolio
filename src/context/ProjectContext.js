import React, { createContext, useState } from "react";
import { db } from "../firebase/Config";

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {

    const [ projectsLoading, setProjectsLoading ] = useState(true);
    const [ projects, setProjects ] = useState([]);

    const [ isProjectSelected, setIsProjectSelected ] = useState(false);
    const initialSelectedProjectState = {};
    const [ selectedProject, setSelectedProject ] = useState(initialSelectedProjectState);
    const [ selectedProjectIndex, setSelectedProjectIndex ] = useState(0);

    const getProjects = () => {
        db.collection("projects").get().then(project => {
            let projectsToAdd = [];
            project.forEach(project => projectsToAdd.push(project.data()));
            setProjects(projectsToAdd);
            projectsToAdd === [] ?  setProjectsLoading(true) : setProjectsLoading(false);
        });
    };
    
    const handleSelectedProject = (projectIndex) => {
        const projectIndexToSelect = projectIndex < 0 ? projects.length-1 : projectIndex === projects.length ? 0 : projectIndex;
        setSelectedProjectIndex(projectIndexToSelect);
        setSelectedProject(projects[projectIndexToSelect]);
    };

    const resetSelectedProject = () => {
        setSelectedProject(initialSelectedProjectState);
        setIsProjectSelected(false);
    };

    return (
        <ProjectContext.Provider value={{ 
        // states
        projects,
        projectsLoading,
        isProjectSelected,
        selectedProject,
        selectedProjectIndex,

        // functions
        getProjects,
        setIsProjectSelected,
        setSelectedProject,
        handleSelectedProject,
        resetSelectedProject
        }} >
            {props.children}
        </ProjectContext.Provider>
    );
};

export default ProjectContextProvider;