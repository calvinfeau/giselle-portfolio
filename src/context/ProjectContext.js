import React, { createContext, useState } from "react";
import { db } from "../firebase/Config";

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {

    const [ projectsLoading, setProjectsLoading ] = useState(true);
    const [ projects, setProjects ] = useState([]);
    const [ isProjectSelected, setIsProjectSelected ] = useState(false);
    const [ selectedProject, setSelectedProject ] = useState({});
    const [ selectedProjectIndex, setSelectedProjectIndex ] = useState(0);

    const getProjects = () => {
        db.collection("projects").get().then(project => {
            let projectsToAdd = [];
            project.forEach(project => projectsToAdd.push(project.data()));
            setProjects(projectsToAdd);
            setProjectsLoading(false);
        });
    };
    
    const handleSelectedProject = (projectIndex) => {
        const projectToSelect = projectIndex < 0 ? projects.length-1 : projectIndex === projects.length ? 0 : projectIndex;
        setSelectedProjectIndex(projectToSelect);
        setSelectedProject(projects[projectToSelect]);
    };

    const handleUnselectedProject = () => {
        setIsProjectSelected(false);
        setSelectedProject({});
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
        handleSelectedProject,
        handleUnselectedProject
        }} >
            {props.children}
        </ProjectContext.Provider>
    );
};

export default ProjectContextProvider;