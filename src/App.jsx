import React from "react";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
    const handleAddProject = () => {
        console.log("hey");
    };

    return (
        <div className="flex project-app">
            <ProjectsSidebar onAddProject={handleAddProject} />
            <div className="w-4/5 flex flex-col text-center items-center main-content pt-44">
                <img
                    className="w-16"
                    src="/src/assets/no-projects.png"
                    alt=""
                />
                <h2 className="text-2xl text-black/60 font-bold mb-4 mt-4">
                    No Project Selected
                </h2>
                <p className="text-black/50 font-medium">
                    Select a project or get started with a new one
                </p>
                <button
                    className="btn rounded-lg bg-black text-white/50 hover:text-white my-8 py-2 px-4 relative"
                    onClick={handleAddProject}
                >
                    Create new project
                </button>
                <NewProject />
            </div>
        </div>
    );
}

export default App;
