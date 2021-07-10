import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";
import { LayoutContext } from "../context/LayoutContext";

const NavLinkProjectPage = styled(Link)`
padding-bottom: 3px;
color: ${props => props.color};
${props => props.currentPage == "/projects" ? css`border-bottom: 1px solid ${props.color}` : css`border-bottom: none`};
${props => props.color !== "black" ? css`:hover {color: ${props => props.color}};` : ""};
`;
const NavLinkAboutPage = styled(Link)`
padding-bottom: 3px;
margin-left: 30px;
color: ${props => props.color};
${props => props.currentPage == "/about" ? css`border-bottom: 1px solid ${props.color}` : css`border-bottom: none`};
${props => props.color !== "black" ? css`:hover {color: ${props => props.color}};` : ""};
`;


const NavBar = () => {
    const { isProjectHovered, selectedProject, resetSelectedProject, setIsProjectHovered } = useContext(ProjectContext);
    const { resetImageToDisplay } = useContext(LayoutContext);
    const location = useLocation();

    const navLinksColor = () => {
        console.log("isProjectHovered: ", isProjectHovered)
        if (isProjectHovered) {
            console.log("selectedProject: ", selectedProject)
            if ("mainImage" in selectedProject) {
                return selectedProject.mainImage == "black" ? "#fffffb" : "black";
            }
            else {
                return "black"
            }
        }
        else {
            return "black";
        };
    };
    
    const handleAboutClick = () => {
        resetImageToDisplay();
        resetSelectedProject();
        setIsProjectHovered(false);
    };

    const handleWorkClick = () => {
        resetImageToDisplay();
        resetSelectedProject();
    };

    return ( 
        <div className="flex justify-center navbar">
            <div className="full-width max-width grid row-1 align-center">
                <div className="col-start-1">
                    <Link to="/" className="text-large" onClick={ () => handleAboutClick() }>Giselle Hernandez</Link>
                </div>
                <div className="col-end-12 flex text-large"> 
                    <NavLinkProjectPage 
                    currentPage={ location.pathname } 
                    color={ navLinksColor() } 
                    onClick={ () => handleWorkClick() } 
                    to="/projects">
                        Work
                    </NavLinkProjectPage>
                    <NavLinkAboutPage 
                    currentPage={ location.pathname } 
                    color={ navLinksColor() } 
                    onClick={ () => handleAboutClick() } 
                    to="/about">
                        About
                    </NavLinkAboutPage>
                </div>
            </div>
        </div>
    );
};
 
export default NavBar;