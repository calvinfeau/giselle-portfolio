import React, { useContext, useEffect } from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";
import { ProjectContext } from "../context/ProjectContext";
import { LayoutContext } from "../context/LayoutContext";

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
${props => props.side === "left" ? css`cursor: w-resize; margin-left: 10vw;` : css`cursor: e-resize; margin-right: 10vw;`}
`;

const CarouselUI = ({ position, handleClick, children }) => {
    const { setSlidesPagination } = useContext(ProjectContext);

    useEffect(() => { setSlidesPagination(position) })

    return (
        <Container>
            { children }
            <Arrows className="flex">
                <Arrow side={ "left" } onClick={ handleClick } data-position={ position - 1 } />
                <Arrow side={ "right" } right onClick={ handleClick } data-position={ position + 1 } />
            </Arrows>
        </Container>
    );
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
    const { slideShow } = useContext(ProjectContext);
    const { imageSizeToUse } = useContext(LayoutContext);

    return (
        <Wrapper>
            <Carousel defaultWait={100000}>
                { slideShow.map((slide, index) => (
                    <Slide className="flex align-center justify-center" key={ index } right>
                        {/* <Img src={ `${ slide.images[imageSizeToUse] }` } alt={ `${ slide.projectName } image` }/> */}
                        <Img src={ window.location.origin + `/assets/images/slideshow/${imageSizeToUse}/Giselle_Hernandez_SS_${slide.projectName.split(' ')[0]}_${index+1}_${imageSizeToUse.split('')[0].toUpperCase()}.jpg` } alt={ `${ slide.projectName } image` }/>
                    </Slide> 
                ))}
            </Carousel>
        </Wrapper>  
    );
};
    
export default ProjectOverview;