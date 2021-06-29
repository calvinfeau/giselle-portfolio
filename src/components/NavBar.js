import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";
import { LayoutContext } from "../context/LayoutContext";

const NavBar = () => {
    const { resetSelectedProject } = useContext(ProjectContext);
    const { resetImageToDisplay, mainImageContrast, checkMainImageContrast } = useContext(LayoutContext);
    const location = useLocation();
    
    const handleClick = () => {
        resetImageToDisplay();
        resetSelectedProject();
        // checkMainImageContrast(false);
    };

    const handleWorkClick = () => {
        resetImageToDisplay();
        resetSelectedProject();
        // if (location.pathname !== "/projects") {
        //     checkMainImageContrast(false);
        // }
    }

    return ( 
        <div className="flex justify-center navbar">
            {/* <div className="full-width max-width grid row-1 align-center"> */}
            <div className="full-width grid row-1 align-center" style={{margin: "0 50px"}}>
                <div className="col-start-1">
                    <Link 
                    to="/"
                    className="text-large"
                    onClick={ () => handleClick() } 
                    >Giselle Hernandez</Link>
                </div>
                <div className="col-end-12 flex text-small"> 
                    <Link style={{color: "black"}} onClick={ () => handleWorkClick() } to="/projects">Work</Link>
                    <Link style={{color: "black", marginLeft: "30px"}} onClick={ () => handleClick() } to="/about">About</Link>
                </div>
            </div>
        </div>
    );
};
 
export default NavBar;