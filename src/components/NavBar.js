import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProjectContext } from "../context/ProjectContext";
import { LayoutContext } from "../context/LayoutContext";

const Wrapper = styled.div`
z-index:                        100
background-color:               transparent;
`;
// align-items:                    center;
// height:                         10vh;
// `;
const Menu = styled.div``;
// width:                          200px;
;

const NavBar = () => {
    const { resetImageToDisplay } = useContext(LayoutContext);
    const { resetSelectedProject } = useContext(ProjectContext);

    const handleClick = () => {
        resetImageToDisplay();
        resetSelectedProject();
    };

    return ( 
        <Wrapper className="width grid row-1">
            <Link 
            to="/"
            className="text-large col-start-1"
            onClick={ () => handleClick() } 
            >Giselle Hernandez</Link>
            <Menu className="col-start-10 flex space-between align-center"> 
                <Link onClick={ () => handleClick() } to="/projects">Work</Link>
                <Link onClick={ () => handleClick() } to="/about">About</Link>
            </Menu>
        </Wrapper>
    );
};
 
export default NavBar;