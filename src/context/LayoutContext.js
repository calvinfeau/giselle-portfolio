import React, { createContext, useEffect, useState } from "react";

export const LayoutContext = createContext();

const LayoutContextProvider = (props) => {

    const breakpoint = {
        mobile: 480,
        tablet: 768,
        laptop: 1024,
        desktop: 1200
    };
    
    const getWindowSize = () => {
        let windowSize = "";
        console.log("window.innerWidth >= breakpoint.mobile && window.innerWidth < breakpoint.tablet: ", window.innerWidth >= breakpoint.mobile && window.innerWidth < breakpoint.tablet)
        switch (true) {
            case window.innerWidth < breakpoint.mobile: 
                console.log("case 1 hit");
                windowSize = "small"
                break;
            case window.innerWidth >= breakpoint.mobile && window.innerWidth < breakpoint.tablet:
                console.log("case 2 hit")
                windowSize = "medium"
                break;
            case window.innerWidth >= breakpoint.tablet && window.innerWidth < breakpoint.laptop:
                console.log("case 3 hit")
                windowSize = "large"
                break;
            case window.innerWidth >= breakpoint.laptop:
                console.log("case 4 hit")
                windowSize = "large"
        };
        return windowSize;
    };

    const [ imageSizeToUse, setImageSizeToUse] = useState(getWindowSize);


    const handleResize = () => {
        let newWindowSize = getWindowSize();
        setImageSizeToUse(newWindowSize);
    }
                
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