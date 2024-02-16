import React from "react";

export default function NewProject() {
    return (
        <div className="new-project-form-container">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="new-project-form-ctas flex justify-end gap-4 pb-4">
                    <button type="button">Cancel</button>
                    <button
                        type="submit"
                        className="btn rounded-lg bg-black text-white hover:text-white py-2 px-6 relative"
                    >
                        Save
                    </button>
                </div>
                <div className="new-project-form-inputs flex flex-col gap-3">
                    <div className="new-project-form-inputs-row">
                        <div className="label text-left pb-1">
                            <label
                                className="uppercase font-bold text-black/60"
                                htmlFor="title"
                            >
                                Title
                            </label>
                        </div>
                        <input
                            type="text"
                            id="title"
                            className="w-full bg-black/10 p-2 border-b-2 border-black/10 focus:outline-none rounded-sm"
                        />
                    </div>
                    <div className="new-project-form-inputs-row">
                        <div className="label text-left pb-1">
                            <label
                                className="uppercase font-bold text-black/60"
                                htmlFor="description"
                            >
                                Description
                            </label>
                        </div>
                        <textarea
                            name=""
                            id="description"
                            className="w-full bg-black/10 p-2 border-b-2 border-black/10 focus:outline-none rounded-sm"
                        ></textarea>
                    </div>
                    <div className="new-project-form-inputs-row">
                        <div className="label text-left pb-1">
                            <label
                                className="uppercase font-bold text-black/60"
                                htmlFor="max-date"
                            >
                                Due Date
                            </label>
                        </div>
                        <input
                            type="date"
                            id="max-date"
                            className="w-full bg-black/10 p-2 border-b-2 border-black/10 focus:outline-none rounded-sm"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}
