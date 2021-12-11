import TomeLibrary from "./TomeLibrary";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";


const Home = ({ posts }) => {
  return (
    <div>
      <Link to="/login">Sign In</Link>
  </div>
  )
}

export default Home; 