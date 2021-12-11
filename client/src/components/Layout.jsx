import Nav from "./Nav";

const Layout = ({currentUser, handleLogout}) => {
  return (
    <div>
      <Nav currentUser={currentUser} handleLogout={handleLogout} />
    </div>
  )
}

export default Layout;