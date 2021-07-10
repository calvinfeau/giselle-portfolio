import React, { useContext } from "react";
import Loading from "../components/Loading";
import ProjectDetails from "../components/ProjectDetails";
import ProjectIntro from "../components/ProjectIntro";
import ProjectMenu from "../components/ProjectMenu";
import MainImage from "../components/MainImage";
import { ProjectContext } from "../context/ProjectContext";

const ProjectPage = () => {
    const { projectsLoading, isProjectSelected } = useContext(ProjectContext);

    if (projectsLoading) {
        return <Loading />
    };
    
    return (
        <div>
            <div className="flex justify-center full-height">
                    {isProjectSelected ? <ProjectIntro /> : <ProjectMenu />}
                    <MainImage />
            </div>
                {isProjectSelected ? <ProjectDetails /> : ''}
        </div>
    );
};

export default ProjectPage;