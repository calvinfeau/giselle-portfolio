import React, { createContext, useEffect, useState } from "react";

export const LayoutContext = createContext();

const LayoutContextProvider = (props) => {
    // const [ windowDimensions, setWindowDimensions ] = useState({
    //     width: window.innerWidth,
    //     height: window.innerHeight
    // });

    const [ imageSizeToUse, setImageSizeToUse] = useState("");

    const breakpoint = {
        mobile: 480,
        tablet: 768,
        laptop: 1024,
        desktop: 1200
    };

    const handleResize = () => {
        console.log("window.innerWidth >= breakpoint.mobile && window.innerWidth < breakpoint.tablet: ", window.innerWidth >= breakpoint.mobile && window.innerWidth < breakpoint.tablet)
        switch (true) {
            case window.innerWidth < breakpoint.mobile: 
                console.log("case 1 hit");
                setImageSizeToUse("small");
                break;
            case window.innerWidth >= breakpoint.mobile && window.innerWidth < breakpoint.tablet:
                console.log("case 2 hit")
                setImageSizeToUse("medium");
                break;
            case window.innerWidth >= breakpoint.tablet && window.innerWidth < breakpoint.laptop:
                console.log("case 3 hit")
                setImageSizeToUse("large");
                break;
            case window.innerWidth >= breakpoint.laptop:
                console.log("case 4 hit")
                setImageSizeToUse("large");
        };
    };
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => { window.removeEventListener("resize", handleResize)}
    }, []);

    return (
        <LayoutContext.Provider value={{ imageSizeToUse }}>
            {props.children}
        </LayoutContext.Provider>
    );
};

export default LayoutContextProvider