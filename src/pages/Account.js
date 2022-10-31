import { useAuth0 } from "@auth0/auth0-react";
import { Link, Outlet } from "react-router-dom";
import LogButton from "../components/ui/buttons/LogButton";

function Account() {
  const { isAuthenicated, logout } = useAuth0()

  return (
    <>
      <div className="flexbox-row full-width" style={{ marginTop: 30 }}>
        <Link to="profile" className="nav-link shadow2">profile</Link>
        <Link to="products/?page=1" className="nav-link shadow2">products</Link>
        {/* <Link to="orders/?page=1" className="nav-link shadow2">orders</Link> */}
        {
          !isAuthenicated &&
          <div style={{ marginLeft: "auto" }}>
            <LogButton name="logout" onClick={() => logout({ returnTo: window.location.origin })}/> 
          </div>
        }
      </div>
      <div className="background1 full-width" style={{ borderRadius: 20, padding: 20, margin: 20}}>
        <Outlet />
      </div>
    </>
  );
}

export default Account;