import React from "react";
import TextDetails from "./TextDetails";
import NextPageButton from "./NextPageButton";
import PrevPageButton from "./PrevPageButton";
import ImageTemplatesLoader from "./ImageTemplatesLoader";

const ProjectDetails = () => {
    return (
        <div>
            <TextDetails />
            <ImageTemplatesLoader />
            <div>
                <NextPageButton />
                <PrevPageButton />
            </div>
        </div>
    );
};

export default ProjectDetails;