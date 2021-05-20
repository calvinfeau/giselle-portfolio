import React, { createContext, useEffect, useState } from "react";

// API
import ColorThief from "colorthief"

export const LayoutContext = createContext();

const LayoutContextProvider = (props) => {

    // API
    // https://lokeshdhakar.com/projects/color-thief/
    const [ dominantColor, setDominantColor ] = useState([]);
    const getDominantColor = () => {
        let img = document.querySelector('#mainImage');
        let rgbArray;
        setDominantColor([]);
        const colorThief = new ColorThief();
        if (img.complete) { 
            rgbArray = colorThief.getColor(img);
            setDominantColor(rgbArray);
        }
        else {
            img.addEventListener('load', function() {
                rgbArray = colorThief.getColor(img);
                setDominantColor(rgbArray);
            }); 
        }
    };
    // ------------

    const [ mainImageContrast, setMainImageContrast ] = useState("");
    const checkMainImageContrast = (checkContrast) => {
        if (checkContrast) {
            setMainImageContrast("");
            let rgbaColor = [];
            let canvas = document.getElementById("mainImageCanvas");
            let img = document.getElementById("mainImage");
            let ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            // 0 0 is the position at the starting corner of the section we select
            // canvas.width is the width of the photo and 90 is the height of the navbar 
            console.log("canvas.width: ", canvas.width)
            let imgData = ctx.getImageData(448, 190, 1, 1);
            console.log("imgData: ", imgData);
            console.log("imgData.data.slice(0, 3): ", imgData.data.slice(0, 3));
            
            rgbaColor = imgData.data.slice(0, 3);
            console.log("rgbaColor: ", rgbaColor);
            let yiq = ((rgbaColor[0] * 299) + (rgbaColor[1] * 587) + (rgbaColor[2] * 114)) / 1000;
            console.log("yiq: ", yiq)
            yiq >= 128 ? setMainImageContrast("black") : setMainImageContrast("white");
        }
        else {
            setMainImageContrast("black");
        }
    };

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
    const initialImagesToDisplayState = [];
    const [ imagesToDisplay , setImagesToDisplay ] = useState(initialImagesToDisplayState);
    const [ imagesToDisplayReady , setImagesToDisplayReady ] = useState(false);

    const handleImageTemplates = (project) => {
        setImagesToDisplay(initialImagesToDisplayState);
        setImagesToDisplayReady(false);
        console.log("project: ", project);
        console.log("imagesToDisplay: ", imagesToDisplay);
        console.log("imagesToDisplayReady: ", imagesToDisplayReady);

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

    const resetImageToDisplay = () => {
        setImagesToDisplayReady(false);
        setImagesToDisplay(initialImagesToDisplayState)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => { window.removeEventListener("resize", handleResize)}
    }, []);

    return (
        <LayoutContext.Provider value={{ 
        // states
        imageSizeToUse, 
        imagesToDisplay, 
        imagesToDisplayReady,
        mainImageContrast,

        // functions
        getImagePath, 
        setImagesToDisplay, 
        setImagesToDisplayReady,
        resetImageToDisplay,
        handleImageTemplates,
        checkMainImageContrast,

        }}>
            {props.children}
        </LayoutContext.Provider>
    );
};

export default LayoutContextProvider;