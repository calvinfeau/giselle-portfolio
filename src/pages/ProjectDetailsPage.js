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
    const { project } = useParams();
    const currProject = projects[project];

    return ( 
        <div className="width">
            <Title className="font-circular flex align-center">
                { currProject.details.title }
            </Title>
            { currProject.images.section1 }
            <TextDetails 
                subtitle1={ currProject.details.subtitle1 }
                subtext1={ currProject.details.subtext1 }
                subtitle2={ currProject.details.subtitle2 }
                subtext2={ currProject.details.subtext2 }
                subtext3={ currProject.details.subtext3 }
                subtitle3={ currProject.details.subtitle3 }
                description={ currProject.details.description }
            />
            { currProject.images.section2 }
            { currProject.images.section3 }
            { currProject.images.section4 }
        </div>
     );
};
 
export default ProjectDetails;