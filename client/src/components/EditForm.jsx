import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PostEdit({ posts, handlePostUpdate, handlePostDelete }) {
  const [formData, setFormData] = useState({
    title: '',
    content:'',
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostUpdate(id, formData);
      }}
    >
      <h3>Rewrite Tome</h3>
      <label>
        Title:
        <input type='text' name='title' value={title} onChange={handleChange} />
      </label>
      <label>
        Content:
        <textarea type='textarea' name='content' value={content} onChange={handleChange} />
      </label>
      <button>Rewrite</button>
      <button onClick={() => handlePostDelete(id)}>Delete</button>
    </form>
  );
}