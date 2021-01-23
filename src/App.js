import React, { useContext, useEffect } from "react";
import { Route } from "react-router-dom";
import CarouselPage from "./pages/CarouselPage";
// import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkMenuPage";
import NavBar from "./components/NavBar";
import { ProjectContext } from "./context/ProjectContext";

const App = () => {
  const { getSlideShow, getProjects } = useContext(ProjectContext);

  useEffect(() => {
    getSlideShow();
    getProjects();
}, []);

  return (
    <div className="flex flex-column align-center justify-center">
      <NavBar />
      <Route exact path="/" render={() => <CarouselPage />} />
      <Route exact path="/projects" render={() => <WorkPage />} />
      {/* <Route exact path="/projects/:project" render={() => <ProjectDetailsPage />} /> */}
      <Route exact path="/about" render={() => <AboutPage />} />
    </div>
  );
};

export default App;