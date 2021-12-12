import CreateForm from '../components/CreateForm';


const CreateTome = ({handlePostCreate}) => {
  return (
    <div>
      <CreateForm handlePostCreate={handlePostCreate} />
    </div>
  )
}

export default CreateTome;