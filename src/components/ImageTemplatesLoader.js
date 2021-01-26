import React, { useContext, useEffect } from "react";
import Loading from "./Loading";
import ImageTemplate11 from "./imagesTemplates/ImageTemplate11";
import ImageTemplate21 from "./imagesTemplates/ImageTemplate21";
import ImageTemplate22 from "./imagesTemplates/ImageTemplate22";
import ImageTemplate31 from "./imagesTemplates/ImageTemplate31";
import { LayoutContext } from "../context/LayoutContext";
import { ProjectContext } from "../context/ProjectContext";

const imageTemplateList = {
    ImageTemplate11,
    ImageTemplate21,
    ImageTemplate22,
    ImageTemplate31
};

const ImageTemplatesLoader = () => {
    const { imagesToDisplay, handleImageTemplates, imagesToDisplayReady } = useContext(LayoutContext);
    const { selectedProject } = useContext(ProjectContext);

    useEffect(() => {
        handleImageTemplates(selectedProject);
    }, [selectedProject]);

    if (!imagesToDisplayReady) {
        return <Loading />
    };

    return (
        <>
            { imagesToDisplay.map(imageSection => {
                const TemplateName = imageTemplateList[`ImageTemplate${imageSection.templateNumber}`];
                return <TemplateName images={imageSection.images} />
            })}
        </>
    );
};

export default ImageTemplatesLoader;