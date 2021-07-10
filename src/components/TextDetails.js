import React, { useContext } from "react";
import styled from "styled-components";
import { ProjectContext } from "../context/ProjectContext";

const LastSubtitle = styled.div`
width: 50%;
`;
const Subtitle = styled(LastSubtitle)`
margin-bottom: 30px;
`;
const Text = styled.div`
margin-top: 10px;
`;

const TextDetails = () => {
    const { selectedProject } = useContext(ProjectContext);

    return ( 
        <div className="flex">
            <div className="flex flex-column" style={{width: "calc(50vw - 200px)", marginLeft: "200px"}}>
                <Subtitle className="flex flex-column">
                    <div className="text-large">Role</div>
                    <Text>{ selectedProject.role }</Text>
                </Subtitle>
                {selectedProject.agency ? 
                    <Subtitle className="flex flex-column">
                        <div className="text-large">Agency</div>
                        <Text>{ selectedProject.agency }</Text>
                    </Subtitle>
                    : ''
                }
                <LastSubtitle className="flex flex-column">
                    <div className="text-large">Year</div>
                    <Text>{ selectedProject.year }</Text>
                </LastSubtitle>
            </div>
            <div style={{width: "calc(50vw - 200px)", marginRight: "200px"}}>
                <div className="text-large" style={{marginRight: "50px"}}>
                    { selectedProject.description }
                </div>
            </div>
        </div>
    );
};

export default TextDetails;