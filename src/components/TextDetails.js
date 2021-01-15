import React from 'react';
import styled from 'styled-components';

const Titles = styled.div`
width:                              20%;
`;
const Description = styled.div`
width:                              60%;
`;
const Subtitle = styled.div`
margin-bottom:                      30px;
`;
const Text1 = styled.div`
font-size:                          1.3em;
`;
const Text2 = styled.div`
font-size:                          1em;
margin-top:                         10px;
`;

const TextDetails = (props) => {
    return ( 
        <div className="flex space-around s-margin">
            <Titles>
                <Subtitle className="flex flex-column">
                    <Text1>{props.subtitle1}</Text1>
                    <Text2>{props.subtext1}</Text2>
                </Subtitle>
                <Subtitle className="flex flex-column">
                    <Text1>{props.subtitle2}</Text1>
                    <Text2>{props.subtext2}</Text2>
                </Subtitle>
                <Subtitle className="flex flex-column">
                    <Text1>{props.subtitle3}</Text1>
                    <Text2>{props.subtext3}</Text2>
                </Subtitle>
            </Titles>
            <Description>
                <Text1>
                    {props.description}
                </Text1>
            </Description>
        </div>
     );
}

export default TextDetails;