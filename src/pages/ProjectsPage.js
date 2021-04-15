import React, { useContext, useEffect } from "react";
import Loading from "../components/Loading";
import ProjectDetails from "../components/ProjectDetails";
import ProjectIntro from "../components/ProjectIntro";
import ProjectMenu from "../components/ProjectMenu";
import MainImage from "../components/MainImage";
import { ProjectContext } from "../context/ProjectContext";

const WorkPage = () => {
    const { projectsLoading, isProjectSelected } = useContext(ProjectContext);
    console.log("projectsLoading: ", projectsLoading)
    console.log("isProjectSelected: ", isProjectSelected)

    if (projectsLoading) {
        return <Loading />
    };
    
    return (
        <div className="flex justify-center full-height">
            <div className="full-width grid row-1">
                {isProjectSelected ? <ProjectIntro /> : <ProjectMenu />}
                <MainImage />
            </div>
            {isProjectSelected ? <ProjectDetails /> : ''}
        </div>
    );
};

export default WorkPage;