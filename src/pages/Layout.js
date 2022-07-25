import { Outlet } from "react-router-dom";
import Navbar from "../components/nav-footer/Navbar"
import Footer from "../components/nav-footer/Footer"

function Layout() {
  return (
    <>
      <div className="page-background gradient-wave flexbox-column">
        <Navbar />
        <div className="page-content flexbox-column">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;