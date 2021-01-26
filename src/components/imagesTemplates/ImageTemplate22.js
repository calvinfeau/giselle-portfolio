import React from "react";
import styled from "styled-components";

const Img1 = styled.img`
height:                                 auto;
width:                                  auto;
min-height:                             70vh;
max-width:                              64%;
`;
const Img2 = styled.img`
height:                                 auto;
width:                                  auto;
max-height:                             50vh;
max-width:                              35%;
`;

const ImageTemplate22 = (props) => {
    return ( 
        <div className="flex space-between s-margin s-height">
            <Img1 src={ window.location.origin + props.images[0] } />
            <Img2 src={ window.location.origin + props.images[1] } />
        </div>
    );
};
 
export default ImageTemplate22;