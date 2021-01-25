import React, { useContext } from "react";
import ImageTemplate11 from "./imagesTemplates/ImageTemplate11";
import ImageTemplate21 from "./imagesTemplates/ImageTemplate21";
import ImageTemplate22 from "./imagesTemplates/ImageTemplate22";
import ImageTemplate31 from "./imagesTemplates/ImageTemplate31";
import { LayoutContext } from "../context/LayoutContext";

const ImageTemplatesLoader = () => {
    const { imagesToDisplay } = useContext(LayoutContext);

    return (
        <>
            { imagesToDisplay.map(imageSection => {
                const TemplateName = `ImageTemplate${imageSection.templateNumber}`;
                return <TemplateName images={imageSection.images} />
            })}
        </>
    );
};

export default ImageTemplatesLoader;