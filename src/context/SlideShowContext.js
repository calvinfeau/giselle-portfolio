import React, { createContext, useState } from "react";
import { db } from "../firebase/Config";

export const SlideShowContext = createContext();

const SlideShowContextProvider = (props) => {

    const [ slidesLoading, setSlidesLoading ] = useState(true);
    const [ slideShow, setSlideShow ] = useState([]);
    const [ slidesPagination, setSlidesPagination ] = useState(0);

    const getSlideShow = () => {
        console.log("hit")
        db.collection("slideshow").get().then(slides => {
            let slidesToAdd = [];
            slides.forEach(slide =>  slidesToAdd.push(slide.data()));
            setSlideShow(slidesToAdd);
            setSlidesLoading(false);
        });
    };

    return (
        <SlideShowContext.Provider value={{ slidesLoading, slideShow, slidesPagination, setSlidesPagination, getSlideShow }}>
            {props.children}
        </SlideShowContext.Provider>
    );

};

export default SlideShowContextProvider;