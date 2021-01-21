import React, {useContext, useEffect} from 'react';
import {ProjectContext} from '../context/ProjectContext';
import ProjectCarousel from "../components/ProjectCarousel";
import NavBar from '../components/NavBar';
import TextCarousel from '../components/TextCarousel';
import { Route } from 'react-router-dom';
import ProjectDetails from './ProjectDetailsPage';
import About from './AboutPage';
import Work from './WorkMenuPage';

const App = () => {
  const {projects, getSlideShow} = useContext(ProjectContext);

  useEffect(() => getSlideShow(), [projects]);

  return (
    <div className="flex flex-column align-center justify-center">
      <NavBar />
        <Route exact path="/" render={() => 
          <>
            <ProjectCarousel />
            <TextCarousel />
          </>} 
        />
        <Route exact path="/projects" render={() => <Work />} />
        <Route exact path="/projects/:project" render={() => <ProjectDetails />} />
      <Route exact path="/about" render={() => <About />} />
    </div>
  );
}

export default App;