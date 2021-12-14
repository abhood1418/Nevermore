import { useState } from "react";
import lovecraft from '../assets/lovecraft.png';
import hobbit from '../assets/hobbit.png';
import '../css/screens-css/Register.css';

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="login-main-div">
      <img className="hobbit" src={hobbit} />
      <div className="form-div">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister(formData);
          }}
        >
          <div className="text-login-header">
            <h3 className="login-text">Register</h3>
          </div>
          <div className="form-container">
            <label className="labels-signin">
              {/* Username: */}
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                className="input-signin"
                placeholder="username"
              />
            </label>
            <br />
            <label className="labels-signin">
              {/* Email: */}
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                className="input-signin"
                placeholder="Email"
              />
            </label>
            <br />
            <label className="labels-signin">
              {/* Password: */}
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="input-signin"
                placeholder="password"
              />
            </label>
            <br />
            <div className="btn-container">
              <button className="login-options" id="submit-login">
                Register
              </button>
            </div>
          </div>
          <img className="lovecraft" src={lovecraft}/>
        </form>
      </div>
    </div>
  );
}
