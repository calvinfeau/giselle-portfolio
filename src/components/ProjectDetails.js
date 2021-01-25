import React, { useContext  } from "react";
import Loading from "./Loading";
import TextDetails from "./TextDetails";
import NextPageButton from "./NextPageButton";
import PrevPageButton from "./PrevPageButton";
import ImageTemplatesLoader from "./ImageTemplatesLoader";
import { LayoutContext } from "../context/LayoutContext";

const ProjectDetails = () => {
    const { imagesToDisplayReady } = useContext(LayoutContext);

    if (imagesToDisplayReady) {
        return <Loading />
    };

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