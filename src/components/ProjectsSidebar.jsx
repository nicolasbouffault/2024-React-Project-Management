import React from "react";

export default function ProjectsSidebar({ onAddProject }) {
    return (
        <div className="sidebar w-1/5 h-screen rounded-tr-xl px-10 pt-16 pb-10 bg-black text-white">
            <h1 className="uppercase font-medium text-lg">Your Projects</h1>
            <button
                className="btn rounded-lg bg-white/20"
                onClick={onAddProject}
            >
                Add Project
            </button>
            <ul>
                <li>Project 1</li>
            </ul>
        </div>
    );
}
