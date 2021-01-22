import React from "react";
import styled from "styled-components";

const Img = styled.img`
height:                             auto;
width:                              auto;
max-width:                          49%;
`;

const SectionTemplate2 = (props) => {
    return ( 
        <div className="flex space-between s-margin s-framed">
            <Img src={ window.location.origin + props.image1 }></Img>
            <Img src={ window.location.origin + props.image2 }></Img>
        </div>
    );
};
 
export default SectionTemplate2;