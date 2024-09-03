import React, { useState } from 'react';
import Project from './Project';
import { currentProjects, previousProjects } from '../assets/projectData';

export default function Projects() {
  const [isPreviousExpanded, setIsPreviousExpanded] = useState(false);
  const [isCurrentExpanded, setIsCurrentExpanded] = useState(false);
  const maxVisibleProjects = 3; // Number of projects to show when not expanded

  const handlePreviousExpandClick = () => {
    setIsPreviousExpanded(!isPreviousExpanded);
  };

  const handleCurrentExpandClick = () => {
    setIsCurrentExpanded(!isCurrentExpanded);
  };

  return (
    <div className="projects">

      {/* Previous Projects Section */}
      <section id="previous-projects">
        <h2>SWE side projects</h2>
        <div className={`project-list ${isPreviousExpanded ? 'expanded' : 'collapsed'}`}>
          {previousProjects.slice(0, isPreviousExpanded ? previousProjects.length : maxVisibleProjects).map((project, index) => (
            <Project 
              key={index}
              projectName={project.title}
              deploymentLink={project.deployment_link}
              description={project.description}
            />
          ))}
        </div>
        <div className="button-container">
        <button onClick={handlePreviousExpandClick}>
          {isPreviousExpanded ? 'Show Less' : 'Show More'}
        </button>
        </div>
      </section>

      {/* Current Projects Section */}
      <section id="current-projects">
        <h2>Research</h2>
        <div className={`project-list ${isCurrentExpanded ? 'expanded' : 'collapsed'}`}>
          {currentProjects.slice(0, isCurrentExpanded ? currentProjects.length : maxVisibleProjects).map((project, index) => (
            <Project 
              key={index}
              projectName={project.title}
              authors={project.authors}
              deploymentLink={project.deployment_link}
              description={project.description}
            />
          ))}
        </div>
        <div className="button-container">
        <button onClick={handleCurrentExpandClick}>
          {isCurrentExpanded ? 'Show Less' : 'Show More'}
        </button>
        </div>
      </section>
    </div>
  );
}
