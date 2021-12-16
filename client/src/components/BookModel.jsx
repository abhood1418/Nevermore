import "../css/component-css/BookModel.css";

const BookModel = ({ post }) => {
  return (
    <div className="library-main-div">
      <div className="book3">
        <div className="back"></div>
        <div className="page6">
          <h3 className="text-interior">Click to read more</h3>
        </div>
        <div className="page5"></div>
        <div className="page4"></div>
        <div className="page3"></div>
        <div className="page2"></div>
        <div className="page1"></div>
        <div className="front">
          <h1 className="library-post-title">{post.title}</h1>
          <br />
          <h2 className="library-post-user">{post.user.username}</h2>
        </div>
      </div>
    </div>
  );
};

export default BookModel;
