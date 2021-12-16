import BookModel from "../components/BookModel";
import { Link } from "react-router-dom";
import "../css/screens-css/TomeLibrary.css";

const TomeLibrary = ({ posts, currentUser }) => {
  return (
    <div className="library-main">
      {posts.map((post, idx) => (
        <Link className="links-library" to={`/library/${post.id}`}>
          <BookModel post={post} idx={post.id} />
        </Link>
      ))}
    </div>
  );
};

export default TomeLibrary;
