import React from "react";
import styled from "styled-components";

const Img = styled.img`
height:                             auto;
width:                              auto;
max-width:                          49%;
`;

const ImageTemplate21 = (props) => {
    return ( 
        <div className="flex space-between s-margin s-framed">
            <Img src={ window.location.origin + props.images[0] } />
            <Img src={ window.location.origin + props.images[1] } />
        </div>
    );
};
 
export default ImageTemplate21;