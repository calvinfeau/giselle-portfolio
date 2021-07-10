import React from "react";
import TextDetails from "./TextDetails";
import NextPageButton from "./NextPageButton";
import PrevPageButton from "./PrevPageButton";
import ImageTemplatesLoader from "./ImageTemplatesLoader";
import Footer from "./Footer";

const ProjectDetails = () => {
    return (
        <div className="extra-margin-top">
            <TextDetails />
            <ImageTemplatesLoader />
            <div style={{width: "calc(100vw - 200px)", margin: "150px auto 0"}}>
                <hr />
                <div className="flex space-between padding-top-15">
                    <NextPageButton />
                    <PrevPageButton />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectDetails;