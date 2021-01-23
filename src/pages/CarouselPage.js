import React, { useContext } from "react";
import ProjectCarousel from "../components/ProjectCarousel";
import TextCarousel from "../components/TextCarousel";
import Loading from "../components/Loading";
import { ProjectContext } from "../context/ProjectContext";

const CarouselPage = () => {  
    const { slidesLoading } = useContext(ProjectContext);

    return slidesLoading ? 
        <Loading /> 
        : 
        <> 
            <ProjectCarousel />
            <TextCarousel /> 
        </>
};

export default CarouselPage;