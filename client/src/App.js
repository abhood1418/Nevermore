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
import MainContainer from "./components/MainContainer";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

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
    navigate.push("/library");
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    navigate.push("/library");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="app">
      <Layout currentUser={currentUser} handleLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<SignIn handleLogin={handleLogin}/>} />
        <Route path="/register" element={<Register handleRegister={handleRegister}/>}/>
        <Route path="/" element={<MainContainer currentUser={currentUser} />} />
      </Routes>
    </div>
  );
}

export default App;
