import React, { createContext, useState } from "react";
import { db } from "../firebase/Config";

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {

    // slides show states
    const [ slidesLoading, setSlidesLoading ] = useState(true);
    const [ slideShow, setSlideShow ] = useState([]);
    const [ slidesPagination, setSlidesPagination ] = useState(0);

    // projects states
    const [ projectsLoading, setProjectsLoading ] = useState(true);
    const [ projects, setProjects ] = useState([]);
    const [ isProjectSelected, setIsProjectSelected ] = useState(false);
    const [ selectedProject, setSelectedProject ] = useState({});
    const [ selectedProjectIndex, setSelectedProjectIndex ] = useState(0);

    const getProjects = () => {
        console.log("getProjects hit")
        db.collection("projects").get().then(project => {
            let projectsToAdd = [];
            project.forEach(project => projectsToAdd.push(project.data()));
            setProjects(projectsToAdd);
            setProjectsLoading(false);
        });
    };
    
    const getSlideShow = () => {
        console.log("getSlideShow hit")
        db.collection("slideshow").get().then(slides => {
            let slidesToAdd = [];
            slides.forEach(slide =>  slidesToAdd.push(slide.data()));
            setSlideShow(slidesToAdd);
            setSlidesLoading(false);
        });
    };

    const handleSelectedProject = (projectIndex) => {
        console.log("projectIndex: ", projectIndex);
        const projectToSelect = projectIndex < 0 ? projects.length-1 : projectIndex === projects.length ? 0 : projectIndex;
        console.log("projectToSelect: ", projectToSelect);
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
        slidesLoading, 
        projectsLoading,
        projects,
        slideShow,
        slidesPagination,
        isProjectSelected,
        selectedProject,
        selectedProjectIndex,

        // functions
        getProjects,
        getSlideShow,
        setSlidesPagination,
        setIsProjectSelected,
        handleSelectedProject,
        handleUnselectedProject
        }} >
            {props.children}
        </ProjectContext.Provider>
    );
};

export default ProjectContextProvider;