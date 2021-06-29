import React, { useContext } from "react";
import { SlideShowContext } from "../context/SlideShowContext";

const TextCarousel = () => {
    const { slideShow, slidesPagination } = useContext(SlideShowContext);

    return (
        <div className="full-width">
            <div className="carousel-text grid row-1 align-center" style={{padding: "0 50px"}}>
            {/* <div className="full-width max-width carousel-text grid row-1 align-center"> */}
                <div className="col-start-1">
                    <span className="text-medium">{ slideShow[slidesPagination].projectName }</span>
                    <br />
                    <span className="text-small">{ slideShow[slidesPagination].title }</span>
                </div>
                <div className="text-large col-end-12">{ (slidesPagination + 1) + " / " + slideShow.length }</div>
            </div>
        </div>
    );
};

export default TextCarousel;