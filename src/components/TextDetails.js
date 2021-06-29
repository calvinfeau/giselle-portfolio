import React, { useContext } from "react";
import styled from "styled-components";
import { ProjectContext } from "../context/ProjectContext";

const Titles = styled.div`
width: 20%;
`;
const Description = styled.div`
width: 60%;
`;
const Subtitle = styled.div`
margin-bottom: 30px;
`;
const Text2 = styled.div`
margin-top: 10px;
`;

const TextDetails = () => {
    const { selectedProject } = useContext(ProjectContext);

    return ( 
        <div className="flex space-around s-margin">
            <Titles>
                <Subtitle className="flex flex-column">
                    <div className="text-large">Role</div>
                    <Text2>{ selectedProject.role }</Text2>
                </Subtitle>
                {selectedProject.agency ? 
                    <Subtitle className="flex flex-column">
                        <div className="text-large">Agency</div>
                        <Text2>{ selectedProject.agency }</Text2>
                    </Subtitle>
                    : ''
                }
                <div className="flex flex-column">
                    <div className="text-large">Year</div>
                    <Text2>{ selectedProject.year }</Text2>
                </div>
            </Titles>
            <Description>
                <div className="text-large">
                    { selectedProject.description }
                </div>
            </Description>
        </div>
    );
};

export default TextDetails;