import React from "react";
import styled from "styled-components";

const bioProjectsList = [
    {
        year: "2019 - 2020",
        agency: "Apple",
        role: "Senior Art Director"
    },
    {
        year: "2013 - 2018",
        agency: "Someware",
        role: "Founder & Creative Director"
    },
    {
        year: "2018",
        agency: "Hello Design",
        role: "Freelance Creative Director"
    },
    {
        year: "2018",
        agency: "Vejo Inc.",
        role: "Freelance Art Director"
    },
    {
        year: "2016 -2017",
        agency: "Huge Inc.",
        role: "Freelance Art Director"
    },
    {
        year: "2013 - 2016",
        agency: "See's Candies",
        role: "Freelance Art Director"
    },
    {
        year: "2012 - 2013",
        agency: "Critical Mass",
        role: "Senior Interactive Designer"
    },
    {
        year: "2010 - 2012",
        agency: "Sapient Nitro",
        role: "Senior Interactive Designer"
    },
    {
        year: "2008 - 2010",
        agency: "The Groop & Amauta Lab",
        role: "Freelance Interactive Designer"
    },
    {
        year: "2007 - 2008",
        agency: "Schematic",
        role: "Junior Designer"
    },
    {
        year: "2007",
        agency: "University of Hawaii",
        role: "BFA in Graphic Design"
    }
];

const QuarterWidth = styled.div`
width:            25%;
`;
const ThreeQuarterWidth = styled.div`
width:            75%;
`;

const AboutPage = () => {
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
                    {bioProjectsList.map((project, index) =>
                        <div className="flex border-bottom padding-top-15 padding-bottom-15" key={index}>
                            <QuarterWidth>{project.year}</QuarterWidth>
                            <ThreeQuarterWidth>
                                {project.agency}, {project.role}
                            </ThreeQuarterWidth>
                        </div>
                    )}

                </ThreeQuarterWidth>
            </div>
            <div className="flex space-between border-top full-width max-width padding-top-50 padding-bottom-150">
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
                    <a href="https://www.instagram.com/pechecreme/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <br />
                    <a href="https://www.behance.net/giselleh25c0b8" target="_blank" rel="noopener noreferrer">Behance</a>
                </ThreeQuarterWidth>
            </div>
            <div className="flex space-between border-top full-width max-width padding-top-15 padding-bottom-150">
                <div className="text-small">© Giselle Hernandez, 2021</div>
            </div>
        </div>
    );
};
 
export default AboutPage;