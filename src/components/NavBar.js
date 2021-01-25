import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProjectContext } from "../context/ProjectContext";

const Wrapper = styled.div`
z-index:                        100;
align-items:                    center;
height:                         10vh;
background-color:               transparent;
font-size:                      24px;
`;
const Menu = styled.div`
width:                          200px;
`;

const NavBar = () => {
    const { handleUnselectProject } = useContext(ProjectContext);

    return ( 
        <Wrapper className="width flex space-between">
            <Link onClick={ () => handleUnselectProject() } to="/">Giselle Hernandez</Link>
            <Menu className="flex space-between align-center"> 
                <Link onClick={ () => handleUnselectProject() } to="/projects">Work</Link>
                <Link onClick={ () => handleUnselectProject() } to="/about">About</Link>
            </Menu>
        </Wrapper>
     );
}
 
export default NavBar;