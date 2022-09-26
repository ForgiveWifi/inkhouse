// import { useAuth0 } from "@auth0/auth0-react";
import { useMediaQuery } from '@mantine/hooks';
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import MenuIcon from './MenuIcon';

// import LogButton from "../../ui/buttons/LogButton";
// import { Button } from "@mantine/core";


function Navbar() {

  // const { loginWithRedirect, isAuthenticated, logout } = useAuth0()
  const mobile = useMediaQuery('(max-width: 1200px)')

  return (
    <>
      <nav className="flexbox-row full-width">

        <div style={{ marginRight: "auto", marginTop: "10px"}}>
          <Link to="" className='link'>
            <img src={require("../../../assets/inkhouse-white.png")} alt="Inkhouse Logo" style={{ height: "50px" }} />
          </Link>
        </div>

        {mobile ? <MenuIcon/> : <NavLinks />}

        {/* <div style={{ marginLeft: "auto", marginTop: "10px" }}>
          { isAuthenticated ? <LogButton name="logout" onClick={() => logout({ returnTo: window.location.origin })}/> : <LogButton name="login" onClick={() => loginWithRedirect()}/>}
        </div> */}

      </nav>
    </>
  )
}

export default Navbar 