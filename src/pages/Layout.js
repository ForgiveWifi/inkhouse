import { Outlet } from "react-router-dom";
import Navbar from "../components/nav-footer/nav/Navbar"
import Footer from "../components/nav-footer/footer/Footer"

function Layout() {
  return (
    <>
        <div className="page-background gradient-wave flexbox-column">
          <div className="page-content flexbox-column full-width">
            <Navbar />
            <Outlet />
          </div>
        </div>
        <Footer />
    </>
  );
};

export default Layout;