import React from "react";
import styled from "styled-components";

const Img1 = styled.img`
height: auto;
width: 50%;
`;

const Img2 = styled.img`
height: auto;
width: 40%;
padding-left: 100px;
`;

const ImageTemplate21 = (props) => {
    return ( 
        <div className="flex space-between align-center" style={{width: "calc(100vw - 400px)", margin: "200px auto 0"}}>
            <Img1 src={ window.location.origin + props.images[0] } />
            <Img2 src={ window.location.origin + props.images[1] } />
        </div>
    );
};
 
export default ImageTemplate21;