import EditForm from '../components/EditForm';
import '../css/screens-css/EditTome.css';


const EditTome = ({posts, handlePostUpdate, handlePostDelete}) => {
  return (
    <div className="edit-screen-main">
      <EditForm posts={posts} handlePostUpdate={handlePostUpdate} handlePostDelete={handlePostDelete} />
    </div>
  )
}

export default EditTome;