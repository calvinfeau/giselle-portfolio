import React from "react";
import styled from "styled-components";

const Img1 = styled.img`
height: auto;
width: calc(40%);
padding-right: 100px
`;

const Img2 = styled.img`
height: auto;
width: calc(50%);
`;

const ImageTemplate22 = (props) => {
    return ( 
        <div className="flex justify-center align-center" style={{width: "calc(100vw - 400px)", margin: "200px auto 0"}}>
            {/* <div> */}
                <Img1 src={ window.location.origin + props.images[0] } />
            {/* </div>
            <div> */}
                <Img2 src={ window.location.origin + props.images[1] } />
            {/* </div> */}
        </div>
    );
};
 
export default ImageTemplate22;