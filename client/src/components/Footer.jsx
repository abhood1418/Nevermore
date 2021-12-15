import logo from "../assets/logo.png";
import "../css/component-css/Footer.css";
import git from "../assets/git.png";
import linked from "../assets/linked.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-main-div">
      <div className="logo-placement">
        <img className="logo-footer" src={logo} />
        <h4 className="my-name">Created by ABHood</h4>
      </div>
      <div className="contact">
        <a href="https://github.com/abhood1418">
          <img className="icon" src={git} />
        </a>
        <a href="https://www.linkedin.com/in/andrew-b-hood/">
          <img className="icon" src={linked} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
