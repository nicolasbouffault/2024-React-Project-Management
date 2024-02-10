import React, { useState } from "react";
import ProjectsSidebar from "./ProjectsSidebar";
import ProjectsMain from "./ProjectsMain";

export default function ProjectsApp() {
  const handleAddProject = () => {
    console.log("hey");
  };

  const [projects, setProjects] = useState([]);

  return (
    <div className="flex project-app">
      <ProjectsSidebar onAddProject={handleAddProject} />
      <ProjectsMain onAddProject={handleAddProject} allProjects={projects} />
    </div>
  );
}
