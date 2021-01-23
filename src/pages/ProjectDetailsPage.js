import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { useParams } from "react-router-dom";
import TextDetails from "../components/TextDetails";
import styled from "styled-components";

const Title = styled.div`
width:                                  50%;
height:                                 90vh;
font-size:                              56px;
letter-spacing:                         5px;
`;

const ProjectDetails = () => {
    const { projects } = useContext(ProjectContext);
    const { projectName } = useParams();
    const currProject = projects.find(project => project.title.trim() === projectName);
    console.log("projectName: ", projectName);
    console.log(currProject);

    return ( 
        <div className="width">
            <Title className="font-circular flex align-center">
                { currProject.title }
            </Title>
            {/* { currProject.images.section1 } */}
            <TextDetails project={ currProject }/>
            {/* { currProject.images.section2 }
            { currProject.images.section3 }
            { currProject.images.section4 } */}
        </div>
     );
};
 
export default ProjectDetails;