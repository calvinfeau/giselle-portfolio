import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

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
    return ( 
        <Wrapper className="width flex space-between">
            <Link to="/">Giselle Hernandez</Link>
            <Menu className="flex space-between align-center"> 
                <Link to="/projects">Work</Link>
                <Link to="/about">About</Link>
            </Menu>
        </Wrapper>
     );
}
 
export default NavBar;