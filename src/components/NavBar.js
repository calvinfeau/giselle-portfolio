import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";
import { LayoutContext } from "../context/LayoutContext";

const NavBar = () => {
    const { resetImageToDisplay } = useContext(LayoutContext);
    const { resetSelectedProject } = useContext(ProjectContext);

    const handleClick = () => {
        resetImageToDisplay();
        resetSelectedProject();
    };

    return ( 
        <div className="width navbar grid row-1 align-center">
            <Link 
            to="/"
            className="text-large col-start-1"
            onClick={ () => handleClick() } 
            >Giselle Hernandez</Link>
            <div className="col-end-12 flex"> 
                <Link onClick={ () => handleClick() } to="/projects">Work</Link>
                <Link onClick={ () => handleClick() } to="/about">About</Link>
            </div>
        </div>
    );
};
 
export default NavBar;