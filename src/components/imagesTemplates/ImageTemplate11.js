import React from "react";
import styled from "styled-components";

const Img = styled.img`
height:                         auto;
width:                          auto;
max-width:                      100%;
`;

const ImageTemplate11 = (props) => {
    return ( 
        <div className="flex align-center justify-center s-margin s-height">
            <Img src={ window.location.origin + props.images[0] } />
        </div>
    );
};
 
export default ImageTemplate11;