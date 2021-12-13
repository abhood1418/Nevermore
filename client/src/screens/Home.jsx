import TomeLibrary from "./TomeLibrary";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import '../css/screens-css/Home.css';
import FlipBook from "../components/FlipBook";
import Quote from "../components/Quote";
import InfoCards from "../components/InfoCards";

const Home = ({ posts }) => {
  return (
    <div>
      <div className="nav-filler"></div>
      <FlipBook />
      <Quote />
      <InfoCards />
  </div>
  )
}

export default Home; 