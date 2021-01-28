import React, { useContext, useEffect } from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";
import { SlideShowContext } from "../context/SlideShowContext";
import { LayoutContext } from "../context/LayoutContext";

/* https://www.react-reveal.com/tutorials/carousel/ */
const Container = styled.div`
position:                       relative;
`;
const Arrows = styled.div`
position:                       absolute;
`;
const Arrow = styled.div`
z-index:                        100;
user-select:                    none;
${props => props.right ? css`left: 90%;` : css`left: 0%;`}
${props => props.side === "left" ? css`cursor: w-resize; margin-left: 0vw;` : css`cursor: e-resize; margin-right: 0vw;`}
`;

const CarouselUI = ({ position, handleClick, children }) => {
    const { setSlidesPagination } = useContext(SlideShowContext);

    useEffect(() => { setSlidesPagination(position) })

    return (
        <Container className="carousel-slideshow">
            { children }
            <Arrows className="flex carousel-slideshow">
                <Arrow className="carousel-arrow" side={ "left" } onClick={ handleClick } data-position={ position - 1 } />
                <Arrow className="carousel-arrow" side={ "right" } right onClick={ handleClick } data-position={ position + 1 } />
            </Arrows>
        </Container>
    );
};
const Carousel = makeCarousel(CarouselUI);
/* -------------------------------------------------- */

const Img = styled.img`
position:                       relative;
max-width:                      100%;
max-height:                     100%;
height:                         auto;
width:                          auto;
`;

const ProjectCarousel = () => {
    const { slideShow } = useContext(SlideShowContext);
    const { getImagePath } = useContext(LayoutContext);

    return (
        <div>
            <Carousel defaultWait={100000}>
                { slideShow.map((slide, index) => (
                    <Slide key={ index } right>
                        {/* <Img src={ `${ slide.images[imageSizeToUse] }` } alt={ `${ slide.projectName } image` }/> */}
                        <Img src={ window.location.origin + getImagePath(slide.projectName, index+1, "slideshow") } alt={ `${ slide.projectName } image` }/>
                    </Slide> 
                ))}
            </Carousel>
        </div>  
    );
};
    
export default ProjectCarousel;