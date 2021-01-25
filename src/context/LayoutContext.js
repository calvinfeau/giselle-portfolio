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
            default:
                console.log("case 4 hit")
                windowSize = "large"
        };
        return windowSize;
    };

    const handleResize = () => {
        let newWindowSize = getWindowSize();
        setImageSizeToUse(newWindowSize);
    };

    const getImagePath = (imageTitle, number, type) => {
        const slideShowImagePath = `/assets/images/slideshow/${imageSizeToUse}/Giselle_Hernandez_SS_${imageTitle.split(' ')[0]}_${number}_${imageSizeToUse.split('')[0].toUpperCase()}.jpg`;
        const projectImagePath = `/assets/images/projects/${imageSizeToUse}/${imageTitle.replace(/ /g, '')}/Giselle_Hernandez_${imageTitle.replace(/ /g, '')}_${number}_${imageSizeToUse.split('')[0].toUpperCase()}.jpg`;
        return type === "slideshow" ? slideShowImagePath : projectImagePath;
    };

    const [ imageSizeToUse, setImageSizeToUse] = useState(getWindowSize);
    const [ imagesToDisplay , setImagesToDisplay ] = useState([]);
    const [ imagesToDisplayReady , setImagesToDisplayReady ] = useState(false);

    const handleImageTemplates = (project) => {
        let count = 2;
        if (project.imageTemplates) {
            let imageSections = [];
            project.imageTemplates.forEach(template => {
                let numberOfImages = parseInt(template[0]);
                let imagesPath = [];

                for (let i=0; i < numberOfImages; i++) {
                    imagesPath.push(getImagePath(project.title, count, "project"));
                    count++;
                };

                let imageSection = {
                    images: imagesPath,
                    templateNumber: template
                };

                imageSections.push(imageSection);
            });
            setImagesToDisplay(imageSections);
        };
        setImagesToDisplayReady(true);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => { window.removeEventListener("resize", handleResize)}
    }, []);

    return (
        <LayoutContext.Provider value={{ imageSizeToUse, getImagePath, imagesToDisplay, imagesToDisplayReady, handleImageTemplates, setImagesToDisplayReady }}>
            {props.children}
        </LayoutContext.Provider>
    );
};

export default LayoutContextProvider;