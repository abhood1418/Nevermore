import "../css/component-css/BookModel.css";

const BookModel = ({ post }) => {
  console.log(post);
  return (
    <div className="library-main-div">
      <div class="book3">
        <div class="back"></div>
        <div class="page6">
          <h3 className="text-interior">Click to read more</h3>
        </div>
        <div class="page5"></div>
        <div class="page4"></div>
        <div class="page3"></div>
        <div class="page2"></div>
        <div class="page1"></div>
        <div class="front">
          <h1 className="library-post-title">{post.title}</h1>
          <br />
          <h2 className="library-post-user">Username with go here</h2>
        </div>
      </div>
    </div>
  );
};

export default BookModel;
