import React, { useContext, useEffect } from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';
import {ProjectContext} from '../context/ProjectContext';

/* https://www.react-reveal.com/tutorials/carousel/ */
const Container = styled.div`
position:                       relative;
`;
const Arrows = styled.div`
position:                       absolute;
`;
const Arrow = styled.div`
height:                         80vh;
width:                          40vw;
max-width:                      600px;
z-index:                        100;
user-select:                    none;
${props => props.right ? css`left: 90%;` : css`left: 0%;`}
${props => props.side === 'left' ? css`cursor: w-resize; margin-left: 10vw;` : css`cursor: e-resize; margin-right: 10vw;`}
`;

const CarouselUI = ({ position, handleClick, children }) => {
    const {setPagination} = useContext(ProjectContext);

    useEffect(() => {setPagination(position)})

    return (
        <Container>
            {children}
            <Arrows className="flex">
                <Arrow side={'left'} onClick={handleClick} data-position={position - 1} />
                <Arrow side={'right'} right onClick={handleClick} data-position={position + 1} />
            </Arrows>
        </Container>
    )
};
const Carousel = makeCarousel(CarouselUI);
/* -------------------------------------------------- */

const Wrapper = styled.div`
height:                         80vh;
width:                          100vw;
`;
const Img = styled.img`
position:                       relative;
max-width:                      100%;
max-height:                     100%;
height:                         auto;
width:                          auto;
`;

const ProjectOverview = () => {
    const {projects} = useContext(ProjectContext);

    return (
        <Wrapper>
            <Carousel defaultWait={100000}>
                {projects.map((project, index) => (
                    <Slide className="flex align-center justify-center" key={index} right>
                        <Img src={window.location.origin + project.images.main} alt={`project ${project.num}`}/>
                    </Slide> 
                ))}
            </Carousel>
        </Wrapper>
     );
}
    
export default ProjectOverview;