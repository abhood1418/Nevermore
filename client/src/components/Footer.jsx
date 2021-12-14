import logo from "../assets/logo.png";
import '../css/component-css/Footer.css';

const Footer = () => {
  return (
    <div className="footer-main-div">
      <div className="logo-placement">
        <img className="logo-footer" src={logo} />
        <h4 className="my-name">Created by ABHood</h4>
      </div>
    </div>
  )
}

export default Footer;