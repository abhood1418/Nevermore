import { Link } from "react-router-dom";

const DisplayPage = ({ onePost, currentUser }) => {
  console.log(currentUser);
  console.log(onePost);
  return (
    <div>
      <h1>{onePost.title}</h1>
      {currentUser.id === onePost.user_id ? (
        <Link to={`/library/${onePost.id}/edit`}>click me</Link>
      ) : null}
    </div>
  );
};

export default DisplayPage;
