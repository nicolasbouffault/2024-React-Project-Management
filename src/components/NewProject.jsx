import React from "react";

export default function NewProject() {
    return (
        <div className="new-project-form-container">
            <div className="new-project-form-ctas">
                <button>Cancel</button>
                <button className="btn btn-primary">Save</button>
            </div>
            <div className="new-project-form-inputs">
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea name="" id="description"></textarea>
                </div>
                <div>
                    <label htmlFor="max-date">Due Date</label>
                    <input type="text" id="max-date" />
                </div>
            </div>
        </div>
    );
}
