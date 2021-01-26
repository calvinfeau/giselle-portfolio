import React, { useContext } from "react";
import Loading from "../components/Loading";
import ProjectDetails from "../components/ProjectDetails";
import ProjectIntro from "../components/ProjectIntro";
import ProjectMenu from "../components/ProjectMenu";
import MainImage from "../components/MainImage";
import { ProjectContext } from "../context/ProjectContext";

const WorkPage = () => {
    const { projectsLoading, isProjectSelected } = useContext(ProjectContext);

    if (projectsLoading) {
        return <Loading />
    };
    
    return (
        <div>
            {isProjectSelected ? <ProjectIntro /> : <ProjectMenu />}
            <MainImage />
            {isProjectSelected ? <ProjectDetails /> : ''}
        </div>
    );
};

export default WorkPage;