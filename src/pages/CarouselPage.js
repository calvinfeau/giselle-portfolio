import React, { useContext } from "react";
import ProjectCarousel from "../components/ProjectCarousel";
import TextCarousel from "../components/TextCarousel";
import Loading from "../components/Loading";
import { SlideShowContext } from "../context/SlideShowContext";

const CarouselPage = () => {  
    const { slidesLoading } = useContext(SlideShowContext);

    return slidesLoading ? 
        <Loading /> 
        : 
        <> 
            <ProjectCarousel />
            <TextCarousel /> 
        </>
};

export default CarouselPage;