import EditForm from '../components/EditForm';


const EditTome = ({posts, handlePostUpdate, handlePostDelete}) => {
  return (
    <div>
      <EditForm posts={posts} handlePostUpdate={handlePostUpdate} handlePostDelete={handlePostDelete} />
    </div>
  )
}

export default EditTome;