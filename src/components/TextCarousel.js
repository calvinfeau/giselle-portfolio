import React, { useContext } from "react";
import styled from "styled-components";
import { SlideShowContext } from "../context/SlideShowContext";

const Wrapper = styled.div`
z-index:                                100;
height:                                 10vh;
background-color:                       transparent;
font-size:                              18px;
`;
const Page = styled.div`
font-size:                              24px;
`;

const TextCarousel = () => {
    const { slideShow, slidesPagination } = useContext(SlideShowContext);

    return ( 
        <Wrapper className="width flex space-between align-center">
            <div>
                { slideShow[slidesPagination].projectName }
                <br />
                { slideShow[slidesPagination].title }
            </div>
            <Page>{ (slidesPagination + 1) + " / " + slideShow.length }</Page>
        </Wrapper>
     );
};

export default TextCarousel;