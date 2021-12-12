import { useState } from "react";

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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostCreate(formData);
      }}
    >
      <h3>Create Tome</h3>
      <label>
        Title:
        <input type="text" name="title" value={title} onChange={handleChange} />
      </label>
      <label>
        Content:
        <textarea
          type="textarea"
          name="content"
          value={content}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
