import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/screens-css/SignIn.css";
import peare from '../assets/shakespeare.png'
import stacks from '../assets/books.png';

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="login-main-div">
      <img className="stacks" src={stacks} />
      <div className="form-div">
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            handleLogin(formData);
          }}
        >
          <div className="text-login-header">
            <h3 className="login-text">Login</h3>
          </div>
          <div className="form-container">
            <label className="labels-signin">
              {/* Username: */}
              <input
                className="input-signin"
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Username"
              />
            </label>
            <br />
            <label className="labels-signin">
              {/* Password: */}
              <input
                className="input-signin"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
              />
            </label>
            <br />
            <div className="btn-container">
              <Link className="login-options" id="link-btn" to="/register">Register</Link>
              <button className="login-options" id="submit-login">Submit</button>
            </div>
          </div>
          <img className="peer" src={peare} />
        </form>
      </div>
    </div>
  );
}
