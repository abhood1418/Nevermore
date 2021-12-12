import BookModel from "../components/BookModel";
import { Link } from "react-router-dom";


const TomeLibrary = ({posts, currentUser}) => {
  return (
    <div>
      {posts.map((post, idx) => (
        <Link to={`/library/${post.id}`} >
          <BookModel post={post} idx={post.id} />
        </Link>
      ))}
    </div>
    
  )
}

export default TomeLibrary;