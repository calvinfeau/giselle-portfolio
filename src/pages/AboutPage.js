import React from "react";
import styled from "styled-components";

const Section = styled.div`
font-size:         18px;
`;
const Title = styled.div`
width:            25%;
border-top:       1px solid black;
text-align:       right;
padding:           50px 0;
`;
const Text = styled.div`
width:            70%;
border-top:       1px solid black;
padding:          50px 0;
`;

const AboutPage = () => {
    return ( 
        <div className="width margin-top flex flex-column">
            <Section className="flex space-between">
                <Title>Introduction</Title>
                <Text>
                    Giselle Hernandez is a multidisciplinary designer offering creative direction, design and consultancy on textiles and materials for interior, product, art and fashion. She investigates contemporary culture to create intelligent concepts and material innovations for clients from various&nbsp;fields.
                    <br />
                    <br />
                    Her collections and art installations examine the function and conventional use of materials to develop new design perspectives. Her internationally exhibited research projects question the relation between garments, individual and society to reveal unconscious patterns of behaviour in the everyday use&nbsp;of&nbsp;textiles.
                </Text>
            </Section>
            <Section className="flex space-between">
                <Title>Services</Title>
                <Text>
                    Branding & Identity
                    <br />
                    Website Design & Development
                    <br />
                    Packaging Design
                    <br />
                    Art Direction
                    <br />
                    Lifestyle & Product Photography
                    <br />
                    Editorial & Publication Design
                    <br />
                    Lookbook Design
                    <br />
                    Signage
                </Text>
            </Section>
            <Section className="flex space-between">
                <Title>Contact</Title>
                <Text>
                    <a href="mailto:hello@pechecreme.com" target="_top">hello@pechecreme.com</a>
                    <br />
                    <a href="https://www.linkedin.com/in/gisellehndz/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    {/* <br /><a href="" target="_blank" rel="noopener noreferrer">Instagram</a> */}
                </Text>
            </Section>
        </div>
    );
};
 
export default AboutPage;