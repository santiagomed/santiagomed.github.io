import React, { useState, useEffect } from "react";
import Project from "./project";
import projectsArray from "./projectsData.json";

const Projects = ({ executeContactScroll, executeAboutScroll }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsArray);
  }, []);

  return (
    <React.Fragment>
      <h1 className="center-text m-3">Projects</h1>
      <p className="center">
        <b>Note:</b> For reasons regarding the University of Michigan's College
        of Engineering's Honor Code, I cannot provide the source code of every
        project on this page. If you are not involved with the College of
        Engineering, or think you are eligible to receive more information,
        contact me to learn more about a specific project.
      </p>
      <div className="row">
        {projects.map(({ _id, img, title, caption, git, hc, liveDemo }) => (
          <div key={_id} className="col-sm-4">
            <Project
              icon={img}
              title={title}
              caption={caption}
              git={git}
              hc={hc}
              liveDemo={liveDemo}
              executeContactScroll={executeContactScroll}
              executeAboutScroll={executeAboutScroll}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Projects;
