import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/component-css/EditForm.css";

export default function PostEdit({
  posts,
  handlePostUpdate,
  handlePostDelete,
}) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const { title, content } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const postInfo = posts.find((post) => post.id === Number(id));
      setFormData({ title: postInfo.title, content: postInfo.content });
    };
    if (posts.length) prefillFormData();
  }, [posts, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="editform-master-div">
      <div className="editform-div">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePostUpdate(id, formData);
          }}
        >
          <h3 className="editform-title">Rewrite Tome</h3>
          <div className="edit-content-area">
            <label>
              {/* Title: */}
              <input
                className="labels-edit"
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
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
              />
            </label>
            <div className="edit-btn-div">
              <button className="rewrite-div">Rewrite</button>
              <button
                className="delete-div"
                onClick={() => handlePostDelete(id)}
              >
                Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
