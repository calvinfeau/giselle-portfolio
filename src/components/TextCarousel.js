import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {ProjectContext} from '../context/ProjectContext';

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
    const {projects, pagination} = useContext(ProjectContext);
    return ( 
        <Wrapper className="width flex space-between align-center">
            <div>
                <Link to={`/projects/${pagination}`}>
                    {projects[pagination].overview.title}
                    <br></br>
                    {projects[pagination].overview.description}
                </Link>
            </div>
            <Page>{(pagination + 1) + ' / ' + 5}</Page>
        </Wrapper>
     );
}
 
export default TextOverview;