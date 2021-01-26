import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProjectContext } from "../context/ProjectContext";
import { LayoutContext } from "../context/LayoutContext";

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
    const { resetImageToDisplay } = useContext(LayoutContext);
    const { resetSelectedProject } = useContext(ProjectContext);

    const handleClick = () => {
        resetImageToDisplay();
        resetSelectedProject();
    };

    return ( 
        <Wrapper className="width flex space-between">
            <Link onClick={ () => handleClick() } to="/">Giselle Hernandez</Link>
            <Menu className="flex space-between align-center"> 
                <Link onClick={ () => handleClick() } to="/projects">Work</Link>
                <Link onClick={ () => handleClick() } to="/about">About</Link>
            </Menu>
        </Wrapper>
    );
};
 
export default NavBar;