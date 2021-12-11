import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CreateTome from '../screens/CreateTome';
import EditTome from '../screens/EditTome'
import TomeLibrary from '../screens/TomeLibrary';
import TomeDetail from '../screens/TomeDetail';
import Home from '../screens/Home';
import { getAllPosts, postPost, putPost, deletePost } from '../services/post';

export default function MainContainer({ currentUser }) {
  const [posts, setPosts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList);
      console.log(postList)
    };
    fetchPosts();
  }, []);

  const handlePostCreate = async (id, formData) => {
    const newPost = await postPost(formData);
    setPosts((prevState) => [...prevState, newPost]);
    navigate('/library');
  };

  const handlePostUpdate = async (id, formData) => {
    const newPost = await putPost(id, formData);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? newPost : post;
      })
    );
    navigate('/library');
  };

  const handlePostDelete = async (id) => {
    await deletePost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  return (
    <div>
      <Routes>
        <Route path="/library/:id/edit" element={<EditTome posts={posts} handlePostUpdate={handlePostUpdate} handlePostDelete={handlePostDelete} />} />
        <Route path="/library/create" element={<CreateTome handlePostCreate={handlePostCreate} />} />
        <Route path="/library/:id" element={<TomeDetail currentUser={currentUser} />} />
        <Route path="/library" element={<TomeLibrary posts={posts} currentUser={currentUser} />} />
        <Route path="/" element={<Home posts={posts} currentUser={currentUser}/>} />
      </Routes>
    </div>
  );
}
