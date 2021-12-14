import TomeLibrary from "./TomeLibrary";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import Footer from "../components/Footer"
import '../css/screens-css/Home.css';
import FlipBook from "../components/FlipBook";
import Quote from "../components/Quote";
import InfoCards from "../components/InfoCards";
import LowerInfo from "../components/LowerInfo"

const Home = ({ posts }) => {
  return (
    <div className="home-div">
      <div className="nav-filler"></div>
      <FlipBook />
      <Quote />
      <InfoCards />
      <div className="space-div"></div>
      <LowerInfo />
      {/* <Footer /> */}
  </div>
  )
}

export default Home; 