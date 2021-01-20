import React from 'react';
import ProjectCarousel from "../components/ProjectCarousel";
import ProjectContextProvider from "../context/ProjectContext";
import NavBar from '../components/NavBar';
import TextCarousel from '../components/TextCarousel';
import { Route } from 'react-router-dom';
import ProjectDetails from './ProjectDetailsPage';
import About from './AboutPage';
import Work from './WorkMenuPage';

const App = () => {
  return (
    <div className="flex flex-column align-center justify-center">
      <NavBar />
      <ProjectContextProvider>
        <Route exact path="/" render={() => <>
          <ProjectCarousel />
          <TextCarousel />
        </>} />
        <Route exact path="/projects" render={() => <Work />} />
        <Route exact path="/projects/:project" render={() => <ProjectDetails />} />
      </ProjectContextProvider>
      <Route exact path="/about" render={() => <About />} />
    </div>
  );
}

export default App;