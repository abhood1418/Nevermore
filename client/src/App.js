import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import SignIn from "./screens/SignIn";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";
import Register from "./screens/Register";
import CreateTome from "./screens/CreateTome";
import EditTome from "./screens/EditTome";
import TomeLibrary from "./screens/TomeLibrary";
import TomeDetail from "./screens/TomeDetail";
import Home from "./screens/Home";
import { getAllPosts, postPost, putPost, deletePost } from "./services/post";
// import './assets/css/fonts.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    navigate("/library");
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    navigate("/library");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    navigate("/");
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList);
      console.log(postList);
    };
    fetchPosts();
  }, [toggleFetch]);

  const handlePostCreate = async (formData) => {
    const newPost = await postPost(formData);
    setPosts((prevState) => [...prevState, newPost]);
    navigate("/library");
  };

  const handlePostUpdate = async (id, formData) => {
    const newPost = await putPost(id, formData);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? newPost : post;
      })
    );
    navigate("/library");
  };

  const handlePostDelete = async (id) => {
    await deletePost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
    setToggleFetch(!toggleFetch);
  };

  return (
    <div className="app">
      <Layout currentUser={currentUser} handleLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<SignIn handleLogin={handleLogin} />} />
        <Route
          path="/register"
          element={<Register handleRegister={handleRegister} />}
        />
        {/* <Route path="/" element={<MainContainer currentUser={currentUser} />} /> */}

        <Route
          path="/library/:id/edit"
          element={
            <EditTome
              posts={posts}
              handlePostUpdate={handlePostUpdate}
              handlePostDelete={handlePostDelete}
            />
          }
        />
        <Route
          path="/library/create"
          element={<CreateTome handlePostCreate={handlePostCreate} />}
        />
        <Route
          path="/library/:id"
          element={<TomeDetail currentUser={currentUser} posts={posts} />}
        />
        <Route
          path="/library"
          exact
          element={<TomeLibrary posts={posts} currentUser={currentUser} />}
        />
        <Route
          path="/"
          element={<Home posts={posts} currentUser={currentUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
