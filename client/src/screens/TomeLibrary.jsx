import BookModel from "../components/BookModel";


const TomeLibrary = ({posts, currentUser}) => {
  return (
    <div>
      {posts.map((post, idx) => (
        <BookModel post={post} idx={post.id} />
      ))}
    </div>
    
  )
}

export default TomeLibrary;