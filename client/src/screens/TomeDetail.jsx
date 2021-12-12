import DisplayPage from "../components/DisplayPage";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../services/post';
import PostEdit from "../components/EditForm";


const TomeDetail = ({currentUser}) => {
  const [onePost, setOnePost] = useState(null);
  const { id } = useParams();
  // const post = posts.find(post => parseInt(post.id) === id);

  useEffect(() => {
    const fetchPost = async () => {
      const PostInfo = await getOnePost(id);
      setOnePost(PostInfo);
    };
    fetchPost();
  }, [id]);

console.log(onePost)

  return (
    <div>
      {onePost ? <DisplayPage onePost={onePost} currentUser={currentUser} /> : "no data"}
      {/* <h1>{onePost.title}</h1> */}
    </div>
  )
}

export default TomeDetail;