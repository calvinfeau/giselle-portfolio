import React, { useContext, useEffect } from "react";
import ProjectCarousel from "../components/ProjectCarousel";
import TextCarousel from "../components/TextCarousel";

const CarouselPage = () => {
    const { slideShow, getSlideShow } = useContext(ProjectContext);

    useEffect(() => getSlideShow(), [slideShow]);
  
    return (
        <div>
            <ProjectCarousel />
            <TextCarousel />
        </div>
    );
};

export default CarouselPage;