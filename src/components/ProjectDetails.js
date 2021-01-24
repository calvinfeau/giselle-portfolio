import React, { useContext } from "react";
import ImageMenu from "./ImageMenu";
import TextDetails from "./TextDetails";
import { ProjectContext } from "../context/ProjectContext";
import NextPageButton from "./NextPageButton";
import PrevPageButton from "./PrevPageButton";

const ProjectDetails = () => {
    const { selectedProject } = useContext(ProjectContext);

    return (
        <div>
            <div className="flex">
                <div>{ selectedProject.title }</div>
                <div>{ selectedProject.subtitle }</div>
                <ImageMenu />
            </div>
            <TextDetails />
            <div>
                <NextPageButton />
                <PrevPageButton />
            </div>
        </div>
    );
};

export default ProjectDetails;