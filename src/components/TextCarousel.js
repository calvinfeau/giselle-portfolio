import React, { useContext } from "react";
import styled from "styled-components";
import { ProjectContext } from "../context/ProjectContext";

const Wrapper = styled.div`
z-index:                                100;
height:                                 10vh;
background-color:                       transparent;
font-size:                              18px;
`;
const Page = styled.div`
font-size:                              24px;
`;

const TextOverview = () => {
    const { slideShow, pagination } = useContext(ProjectContext);
    return ( 
        <Wrapper className="width flex space-between align-center">
            <div>
                { slideShow.projectName }
                <br></br>
                { slideShow.title }
            </div>
            <Page>{ (pagination + 1) + " / " + slideShow.length() }</Page>
        </Wrapper>
     );
};

export default TextOverview;