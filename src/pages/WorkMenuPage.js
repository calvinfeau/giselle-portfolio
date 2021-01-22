import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { ProjectContext } from "../context/ProjectContext";

const Wrapper = styled.div`
display:                        grid;
grid-template-rows:             auto;
grid-template-columns:          48% 48%;
grid-template-areas:
"0 1"
"2 3"
"4 5"
"6 7";
grid-column-gap:                4%;
grid-row-gap:                   50px;
line-height:                    2;
`;
const ProjectSection = styled(Link)`
grid-area:                      ${props => props.index}
`;
const Img = styled.img`
height:                         auto;
width:                          auto;
max-width:                      100%;
`;
const Title = styled.div`
font-size:                      36px;
`;

const WorkPage = () => {
    const { projects } = useContext(ProjectContext);
    return ( 
        <Wrapper className="width margin-top">
            { projects.map((project, index) => (
                <ProjectSection to={`/projects/${index}`} key={index} index={`${index}`} className="flex flex-column">
                    <Img src={ window.location.origin + project.images.main }></Img>
                    <Title className="font-circular">{ project.overview.title }</Title>
                    <div>{ project.overview.description }</div>
                </ProjectSection>
            ))}
        </Wrapper>
     );
};
 
export default WorkPage;