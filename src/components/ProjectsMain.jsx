import React from "react";
import NewProject from "./NewProject";

export default function ProjectsMain({
    onAddProject,
    allProjects,
    showCreateForm,
}) {
    const isProjectsEmpty = allProjects.length === 0;

    return (
        <div className="w-4/5 text-center main-content pt-44 pl-10 pr-56">
            {isProjectsEmpty && !showCreateForm && (
                <>
                    <div className="logo-image flex justify-center">
                        <img
                            className="w-16"
                            src="/src/assets/no-projects.png"
                            alt=""
                        />
                    </div>
                    <h2 className="text-2xl text-black/60 font-bold mb-4 mt-4">
                        No Project Selected
                    </h2>
                    <p className="text-black/50 font-medium">
                        Select a project or get started with a new one
                    </p>
                    <button
                        className="btn rounded-lg bg-black text-white/50 hover:text-white my-8 py-2 px-4 relative"
                        onClick={onAddProject}
                    >
                        Create new project
                    </button>
                </>
            )}
            {showCreateForm && <NewProject />}
        </div>
    );
}
