import React, { useContext, useEffect } from "react";
import { Route } from "react-router-dom";
import CarouselPage from "./pages/CarouselPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectsPage";
import NavBar from "./components/NavBar";
import { ProjectContext } from "./context/ProjectContext";
import { SlideShowContext } from "./context/SlideShowContext";

const App = () => {
  const { getSlideShow } = useContext(SlideShowContext);
  const { getProjects } = useContext(ProjectContext);

  useEffect(() => {
    getSlideShow();
    getProjects();
}, []);

  return (
    <div>
      <NavBar />
      <Route exact path="/" render={() => <CarouselPage />} />
      <Route exact path="/projects" render={() => <ProjectPage />} />
      <Route exact path="/about" render={() => <AboutPage />} />
    </div>
  );
};

export default App;