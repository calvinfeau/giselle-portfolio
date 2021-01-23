import React, { useContext } from "react";
import ImageMenu from "./ImageMenu";
import TextDetails from "./TextDetails";

const ProjectDetails = () => {
    return (
        <div>
            <div>
                <div>the title + subbtitle</div>
                <ImageMenu />
            </div>
            <TextDetails />
        </div>
    );
};

export default ProjectDetails;