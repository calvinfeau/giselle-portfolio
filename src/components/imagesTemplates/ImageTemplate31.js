import React from "react";
import styled from "styled-components";

const Img = styled.img`
height: auto;
width: auto;
max-width: calc((100% - 100px) / 3);
`;

const ImageTemplate31 = (props) => {
    return ( 
        <div className="flex space-between" style={{width: "calc(100vw - 100px", margin: "200px auto 0"}}>
            <Img src={ window.location.origin + props.images[0] } />
            <Img src={ window.location.origin + props.images[1] } />
            <Img src={ window.location.origin + props.images[2] } />
        </div>
    );
};
 
export default ImageTemplate31;