import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";
import { LayoutContext } from "../context/LayoutContext";

const NavBar = (props) => {
    const { resetSelectedProject } = useContext(ProjectContext);
    const { resetImageToDisplay } = useContext(LayoutContext);
    const location = useLocation();
    
    const handleClick = () => {
        resetImageToDisplay();
        resetSelectedProject();
    };

    const handleWorkClick = () => {
        resetImageToDisplay();
        resetSelectedProject();
    }

    return ( 
        <div className="flex justify-center navbar">
            {/* <div className="full-width max-width grid row-1 align-center"> */}
            <div className="full-width max-width grid row-1 align-center">
                <div className="col-start-1">
                    <Link 
                    to="/"
                    className="text-large"
                    onClick={ () => handleClick() } 
                    >Giselle Hernandez</Link>
                </div>
                <div className="col-end-12 flex text-large"> 
                    {location.pathname == "/projects" ? 
                    <Link style={{paddingBottom: "3px", borderBottom: "1px solid black"}} onClick={ () => handleWorkClick() } to="/projects">Work</Link>
                    :
                    <Link style={{paddingBottom: "3px", borderBottom: "1px solid #fffffb"}} onClick={ () => handleWorkClick() } to="/projects">Work</Link>
                    }
                    {location.pathname == "/about" ? 
                    <Link style={{marginLeft: "30px", paddingBottom: "3px", borderBottom: "1px solid black"}} onClick={ () => handleClick() } to="/about">About</Link>
                    :
                    <Link style={{marginLeft: "30px", paddingBottom: "3px", borderBottom: "1px solid #fffffb"}} onClick={ () => handleClick() } to="/about">About</Link>
                    }
                </div>
            </div>
        </div>
    );
};
 
export default NavBar;