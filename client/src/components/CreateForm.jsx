import { useState } from "react";
import "../css/component-css/CreateForm.css";

export default function PostCreate({ handlePostCreate }) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const { title, content } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((newPost) => ({
      ...newPost,
      [name]: value,
    }));
  };

  return (
    <div className="editform-master-div">
      <div className="editform-div">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePostCreate(formData);
          }}
        >
          <h3 className="editform-title">Create Tome</h3>
          <div className="edit-content-area">
            <label>
              {/* Title: */}
              <input
                className="labels-edit"
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Title"
              />
            </label>
            <label>
              {/* Content: */}
              <textarea
                className="edit-content"
                type="textarea"
                name="content"
                value={content}
                onChange={handleChange}
                placeholder="Create..."
              />
            </label>
            <div className="edit-btn-div">
              <button className="rewrite-div">Publish</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
