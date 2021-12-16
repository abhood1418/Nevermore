import DisplayPage from "../components/DisplayPage";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOnePost } from "../services/post";

const TomeDetail = ({ currentUser }) => {
  const [onePost, setOnePost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const PostInfo = await getOnePost(id);
      setOnePost(PostInfo);
    };
    fetchPost();
  }, [id]);
  
  return (
    <div>
      {onePost ? (
        <DisplayPage onePost={onePost} currentUser={currentUser} />
      ) : (
        "no data"
      )}
    </div>
  );
};

export default TomeDetail;
