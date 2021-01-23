import React, { createContext, useState } from "react";
// import ImageTemplate1 from "../components/ImageTemplate1";
// import ImageTemplate2 from "../components/ImageTemplate2";
// import ImageTemplate3 from "../components/ImageTemplate3";
// import ImageTemplate4 from "../components/ImageTemplate4";
import { db } from "../firebase/Config";

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
    // const [p1, setP1] = useState({
    //     isInCarousel: true,
    //     overview: {
    //         title: "P1 overview title",
    //         description: "P1 overview description"
    //     },
    //     details: {
    //         title: "Lorem ipsum dolor sit amet, consectetur.",
    //         subtitle1: "Hendrerit",
    //         subtext1: "Subtext1",
    //         subtitle2: "Vestibulum",
    //         subtext2: "Subtext2",
    //         subtitle3: "Consequat",
    //         subtext3: "Subtext3",
    //         description: `Tips to write this paragraph: Incorporate a description, rationale, services, & collateral. Ecommerce redesign, Nunc ac hendrerit nisl. Sed finibus non nunc nec posuere. Ut tristique nunc tellus, id ornare leo ornare egestas. Donec rhoncus aliquam pellentesque. Donec et nulla id turpis gravida ultricies. Integer non consectetur erat. Ut ac ex ac orci condimentum tristique. Vivamus sollicitudin elementum elit, vel blandit est.`,
    //     },
    //     images: {
    //         main: "/assets/project1/main1.png",
    //         section1: <ImageTemplate1 
    //         image1={"/assets/project1/main1.png"}
    //         />,
    //         section2: <ImageTemplate2 
    //         image1={"/assets/project1/test-1.jpg"}
    //         image2={"/assets/project1/test-2.jpg"}
    //         />,
    //         section3: <ImageTemplate3 
    //         image1={"/assets/project1/test-1.jpg"}
    //         image2={"/assets/project1/test-2.jpg"}
    //         />,
    //         section4: <ImageTemplate4 
    //         image1={"/assets/project1/test-1.jpg"}
    //         image2={"/assets/project1/test-2.jpg"}
    //         />
    //     }
    // });
    // const [p2, setP2] = useState({
    //     isInCarousel: false,
    //     overview: {
    //         title: "P2 overview title",
    //         description: "P2 overview description"
    //     },
    //     details: {
    //         title: "P2 details",
    //         subtitle1: "P2 details subtitle1",
    //         subtitle2: "P2 details subtitle2",
    //         subtitle3: "P2 details subtitle3",
    //         description: "P2 details description"
    //     },
    //     images: {
    //         main: "/assets/project2/main2.jpg",
    //         section1: <ImageTemplate1 
    //         image1={"IMAGE1 URL REACHED"}
    //         image2={""}
    //         />,
    //         section2: <ImageTemplate3 
    //         image1={"IMAGE1 URL REACHED"}
    //         image2={""}
    //         />,
    //         section3: <ImageTemplate2 
    //         image1={"IMAGE1 URL REACHED"}
    //         image2={""}
    //         />
    //     }
    // });
    // const [p3, setP3] = useState({
    //     isInCarousel: true,
    //     overview: {
    //         title: "P3 overview title",
    //         description: "P3 overview description"
    //     },
    //     details: {
    //         title: "P3 details",
    //         subtitle1: "P3 details subtitle1",
    //         subtitle2: "P3 details subtitle2",
    //         subtitle3: "P3 details subtitle3",
    //         description: "P3 details description"
    //     },
    //     images: {
    //         main: "",
    //         section1: <ImageTemplate1 
    //         image1={"https://drive.google.com/file/d/1cekTNR3DxeSvxwsPOqHbJMqVx5jPpxHT/view?usp=sharing"}
    //         image2={""}
    //         />,
    //         section2: <ImageTemplate3 
    //         image1={"IMAGE1 URL REACHED"}
    //         image2={""}
    //         />,
    //         section3: <ImageTemplate2 
    //         image1={"IMAGE1 URL REACHED"}
    //         image2={""}
    //         />
    //     }
    // });
    // const [p4, setP4] = useState({
    //     isInCarousel: true,
    //     overview: {
    //         title: "P4 overview title",
    //         description: "P4 overview description"
    //     },
    //     details: {
    //         title: "P4 details",
    //         subtitle1: "P4 details subtitle1",
    //         subtitle2: "P4 details subtitle2",
    //         subtitle3: "P4 details subtitle3",
    //         description: "P4 details description"
    //     },
    //     images: {
    //         main: "",
    //         section1: <ImageTemplate1 
    //         image1={"IMAGE1 URL REACHED"}
    //         image2={""}
    //         />,
    //         section2: <ImageTemplate3 
    //         image1={"IMAGE1 URL REACHED"}
    //         image2={""}
    //         />,
    //         section3: <ImageTemplate2 
    //         image1={"IMAGE1 URL REACHED"}
    //         image2={""}
    //         />
    //     }
    // });
    // const [p5, setP5] = useState({
    //     isInCarousel: false,
    //     overview: {
    //         title: "P5 overview title",
    //         description: "P5 overview description"
    //     },
    //     details: {
    //         title: "P5 details",
    //         subtitle1: "P5 details subtitle1",
    //         subtitle2: "P5 details subtitle2",
    //         subtitle3: "P5 details subtitle3",
    //         description: "P5 details description"
    //     },
    //     images: {
    //         main: "",
    //         section1: <ImageTemplate1 
    //         image1={"IMAGE1 URL REACHED"}
    //         image2={""}
    //         />,
    //         section2: <ImageTemplate3 
    //         image1={"IMAGE1 URL REACHED"}
    //         image2={""}
    //         />,
    //         section3: <ImageTemplate2 
    //         image1={"IMAGE1 URL REACHED"}
    //         image2={""}
    //         />
    //     }
    // });

    const [ slidesLoading, setSlidesLoading ] = useState(true);
    const [ slideShow, setSlideShow ] = useState([]);
    const [ projectsLoading, setProjectsLoading ] = useState(true);
    const [ projects, setProjects ] = useState([]);
    const [ slidesPagination, setSlidesPagination ] = useState(0);
    const [ selectedProject, setSelectedProject ] = useState(false);
    const [ hoverProject, setHoverProject ] = useState("");

    const getProjects = () => {
        console.log("getProjects hit")
        db.collection("projects").get().then(project => {
            let projectsToAdd = [];
            project.forEach(project => projectsToAdd.push(project.data()));
            setProjects(projectsToAdd);
            setProjectsLoading(false);
        });
    };
    
    const getSlideShow = () => {
        console.log("getSlideShow hit")
        db.collection("slideshow").get().then(slides => {
            let slidesToAdd = [];
            slides.forEach(slide =>  slidesToAdd.push(slide.data()));
            setSlideShow(slidesToAdd);
            setSlidesLoading(false);
        });
    };

    return (
        <ProjectContext.Provider value={{ 
            slidesLoading, 
            setSlidesLoading, 
            projectsLoading, 
            setProjectsLoading, 
            projects, 
            getProjects, 
            slideShow, 
            getSlideShow,
            slidesPagination, 
            setSlidesPagination,
            selectedProject, 
            hoverProject
            }} >
            {props.children}
        </ProjectContext.Provider>
    );
};

export default ProjectContextProvider;