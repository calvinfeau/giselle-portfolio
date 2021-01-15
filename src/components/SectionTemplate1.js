import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
height:                         auto;
width:                          auto;
max-width:                      100%;
`;

const SectionTemplate1 = (props) => {
    return ( 
        <div className="flex align-center justify-center s-margin s-height">
            <Img src={window.location.origin + props.image1}></Img>
        </div>
     );
}
 
export default SectionTemplate1;