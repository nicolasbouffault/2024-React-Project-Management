import React, { useState } from "react";
import ProjectsMain from "./ProjectsMain";
import ProjectsSidebar from "./ProjectsSidebar";

export default function ProjectsApp() {
    const [isCreateFormActive, setIsCreateFormActive] = useState(false);
    const [projects, setProjects] = useState([]);

    const handleAddProject = () => {
        setIsCreateFormActive(true);
    };

    return (
        <div className="flex project-app">
            <ProjectsSidebar onAddProject={handleAddProject} />
            <ProjectsMain
                onAddProject={handleAddProject}
                allProjects={projects}
                showCreateForm={isCreateFormActive}
            />
        </div>
    );
}
