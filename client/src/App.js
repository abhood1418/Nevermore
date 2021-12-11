import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useHistroy } from "react-router-dom";
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
  const history = useHistory();

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
    history.push("/library");
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/Library");
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
        <Route path="/login">
          <SignIn handleLogin={handleLogin} />
        </Route>
        <Route path="/register">
          <Register handleRegister={handleRegister} />
        </Route>
        <Route path="/">
          <MainContainer currentUser={currentUser} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
