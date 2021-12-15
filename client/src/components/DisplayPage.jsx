import { Link } from "react-router-dom";
import "../css/component-css/DisplayPage.css";

const DisplayPage = ({ onePost, currentUser }) => {
  console.log(currentUser);
  console.log(onePost);
  return (
    <div className="displaypage-master-div">
      <div className="content-page">
        <h1 className="display-title">{onePost.title}</h1>
        <div className="content-wrapper">
          <p className="display-content">{onePost.content}</p>
          <h4>{onePost.user.username}</h4>
        </div>
        {currentUser.id === onePost.user_id ? (
          <Link className="edit-link" to={`/library/${onePost.id}/edit`}><button className="rewrite-div">
            Rewrite
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default DisplayPage;
