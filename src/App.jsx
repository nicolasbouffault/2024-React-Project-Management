import React from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
    const handleAddProject = () => {
        console.log("hey");
    };

    return (
        <div className="flex">
            <ProjectsSidebar onAddProject={handleAddProject} />
        </div>
    );
}

export default App;
