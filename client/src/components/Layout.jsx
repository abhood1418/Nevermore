import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({currentUser, handleLogout, children}) => {
  return (
    <div>
      <Nav currentUser={currentUser} handleLogout={handleLogout} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;