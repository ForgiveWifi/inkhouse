// import { useAuth0 } from "@auth0/auth0-react";
// import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

// import { useMediaQuery } from "@mui/material";
// import LogButton from "../../ui/buttons/LogButton";
// import { Button } from "@mantine/core";
import AdminPage from "../../../pages/AdminPage";


function Navbar() {

  // const { loginWithRedirect, isAuthenticated, logout } = useAuth0()

  // const desktopMode = useMediaQuery('(min-width:750px)');

  return (
    <>
      <nav className="flexbox-row full-width">

        <div style={{ marginRight: "auto", marginTop: "10px"}}>
          <Link to="" className='link'>
            <img src={require("../../../assets/inkhouse-white.png")} alt="Inkhouse Logo" style={{ height: "50px" }} />
          </Link>
        </div>
        
        <div style={{marginTop: "8px"}}>
          <AdminPage />
        </div>

        {/* {desktopMode && <NavLinks />} */}

        {/* <div style={{ marginLeft: "auto", marginTop: "10px" }}>
          { isAuthenticated ? <LogButton name="logout" onClick={() => logout({ returnTo: window.location.origin })}/> : <LogButton name="login" onClick={() => loginWithRedirect()}/>}
        </div> */}

      </nav>
    </>
  )
}

export default Navbar 