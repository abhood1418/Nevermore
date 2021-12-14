import '../css/component-css/BookModel.css';


const BookModel = ({ post }) => {
  console.log(post);
  return (
    <div className="library-main-div">
  <div class="book3">
  <div class="back"></div>
  <div class="page6"></div>
  <div class="page5"></div>
  <div class="page4"></div>
  <div class="page3"></div>
  <div class="page2"></div>
  <div class="page1"></div>
      <div class="front">{post.title}</div>
      </div>
      </div>
  )
}

export default BookModel;