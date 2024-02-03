import React from "react";

export default function ProjectsSidebar({ onAddProject }) {
  return (
    <div className="sidebar w-1/5 h-screen rounded-tr-xl px-10 pt-16 pb-10 mt-10 bg-black text-white">
      <h1 className="uppercase font-medium text-lg">Your Projects</h1>
      <button
        className="btn rounded-lg bg-white/20 text-white/40 hover:bg-white/30 hover:text-white my-8 py-2 px-4 relative"
        onClick={onAddProject}
      >
        <span className="pr-1">+</span>Add Project
      </button>
      <ul className="flex flex-col gap-2">
        <li>
          <a
            className="block hover:text-white hover:bg-white/10 text-white/40 py-1 px-2"
            href=""
          >
            Project 1
          </a>
        </li>
        <li>
          <a
            className="block hover:text-white hover:bg-white/10 text-white/40 py-1 px-2"
            href=""
          >
            Project 2
          </a>
        </li>
      </ul>
    </div>
  );
}
