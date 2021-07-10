import React from "react";
import styled, {css} from "styled-components";

const ParallaxDiv = styled.div`
height: calc(100vw * 0.55);
width: 100vw;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
${props => props.images && css`
    background-image: url(${window.location.origin + props.images[0]})
`}

`;

const ImageTemplate11 = (props) => {
    return ( 
        <ParallaxDiv images={props.images} className="extra-margin-top"></ParallaxDiv>
    );
};
 
export default ImageTemplate11;