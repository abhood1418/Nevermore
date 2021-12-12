import TomeLibrary from "./TomeLibrary";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import '../css/screens-css/Home.css';
import FlipBook from "../components/FlipBook";

const Home = ({ posts }) => {
  return (
    <div>
      <div className="nav-filler"></div>
      <FlipBook />
  </div>
  )
}

export default Home; 