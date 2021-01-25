import React, { useContext } from "react";
import styled from "styled-components";
import Loading from "../components/Loading";
import ProjectDetails from "../components/ProjectDetails";
import ProjectMenu from "../components/ProjectMenu";
import { ProjectContext } from "../context/ProjectContext";

const Img = styled.img`
height:                         auto;
width:                          auto;
max-width:                      100%;
`;
const Title = styled.div`
font-size:                      36px;
`;

const WorkPage = () => {
    const { projectsLoading, isProjectSelected } = useContext(ProjectContext);

    if (projectsLoading) {
        return <Loading />
    };
    
    return isProjectSelected ? <ProjectDetails /> : <ProjectMenu />
};

export default WorkPage;