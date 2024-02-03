import React from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const handleAddProject = () => {
    console.log("hey");
  };

  return (
    <div className="flex project-app">
      <ProjectsSidebar onAddProject={handleAddProject} />
      <div className="w-4/5 flex flex-col text-center items-center main-content pt-44">
        <img className="w-16" src="/src/assets/no-projects.png" alt="" />
        <p className="text-black/50 font-medium">
          Select a project or get started with a new one
        </p>
        <button
          className="btn rounded-lg bg-black text-white/50 hover:text-white my-8 py-2 px-4 relative"
          onClick={handleAddProject}
        >
          Create new project
        </button>
      </div>
    </div>
  );
}

export default App;
