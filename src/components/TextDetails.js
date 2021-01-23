import React from "react";
import styled from "styled-components";

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

const TextDetails = ({ project }) => {
    return ( 
        <div className="flex space-around s-margin">
            <Titles>
                <Subtitle className="flex flex-column">
                    <Text1>Role</Text1>
                    <Text2>{ project.role }</Text2>
                </Subtitle>
                {project.agency ? 
                    <Subtitle className="flex flex-column">
                        <Text1>Agency</Text1>
                        <Text2>{ project.agency }</Text2>
                    </Subtitle>
                    : ''
                }
                <Subtitle className="flex flex-column">
                    <Text1>Year</Text1>
                    <Text2>{ project.year }</Text2>
                </Subtitle>
            </Titles>
            <Description>
                <Text1>
                    { project.description }
                </Text1>
            </Description>
        </div>
    );
};

export default TextDetails;