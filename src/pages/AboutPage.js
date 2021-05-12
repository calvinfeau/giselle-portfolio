import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { ProjectContext } from "../context/ProjectContext";

const QuarterWidth = styled.div`
width:            25%;
`;
const ThreeQuarterWidth = styled.div`
width:            75%;
`;

const AboutPage = () => {
    const {projects} = useContext(ProjectContext);
    return ( 
        <div className="extra-margin-top flex flex-column align-center full-width text-large">
            <div className="flex space-between border-top full-width max-width padding-top-50 padding-bottom-150">
                <QuarterWidth className="padding-top-bottom-50 text-xl font-circular">Bio</QuarterWidth>
                <ThreeQuarterWidth>
                    Giselle Hernandez is a multidisciplinary designer offering creative direction, design and consultancy on textiles and materials for interior, product, art and fashion. She investigates contemporary culture to create intelligent concepts and material innovations for clients from various&nbsp;fields.
                    <br />
                    <br />
                    Her collections and art installations examine the function and conventional use of materials to develop new design perspectives. Her internationally exhibited research projects question the relation between garments, individual and society to reveal unconscious patterns of behaviour in the everyday use&nbsp;of&nbsp;textiles.
                    <br />
                    <br />
                    <br />
                    {projects.map((project, index) =>
                        <div className="flex border-bottom padding-top-15 padding-bottom-15" key={index}>
                            <QuarterWidth>{project.year}</QuarterWidth>
                            <ThreeQuarterWidth>
                                {project.agency ? <span>{project.agency}</span> : <span>{project.title}</span>}, {project.role}
                            </ThreeQuarterWidth>
                        </div>
                    )}

                </ThreeQuarterWidth>
            </div>
            <div className="flex space-between border-top full-width max-width padding-top-50 padding-bottom-100">
                <QuarterWidth className="padding-top-bottom-50 text-xl font-circular">Contact</QuarterWidth>
                <ThreeQuarterWidth>
                    For current work and design inquiries email 
                    <br />
                    <a className="" href="mailto:hello@pechecreme.com" target="_top">hello@pechecreme.com</a>
                    <br />
                    <br />
                    <br />
                    <a href="https://www.linkedin.com/in/gisellehndz/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <br />
                    <a href="" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <br />
                    <a href="" target="_blank" rel="noopener noreferrer">Behance</a>
                </ThreeQuarterWidth>
            </div>
            <div className="flex space-between border-top full-width max-width padding-top-15 padding-bottom-100">
            <div className="text-small">© Giselle Hernandez, 2020</div>
            </div>
        </div>
    );
};
 
export default AboutPage;