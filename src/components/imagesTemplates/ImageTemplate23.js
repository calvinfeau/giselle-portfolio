import React from "react";
import styled from "styled-components";

const Img1 = styled.img`
height: auto;
width: 20vw;
padding-right: 200px;
`;

const Img2 = styled.img`
height: auto;
width: calc(50vw - 200px);
`;

const ImageTemplate23 = (props) => {
    return ( 
        <div className="flex align-end" style={{width: "calc(100vw - 400px)", margin: "200px auto 0"}}>
            <div style={{margin: "0 50px 0 auto"}}>
                <Img1 src={ window.location.origin + props.images[0] } />
            </div>
            <div>
                <Img2 src={ window.location.origin + props.images[1] } />
            </div>
        </div>
    );
};
 
export default ImageTemplate23;