import { useAuth0 } from "@auth0/auth0-react";
import { useMediaQuery } from '@mantine/hooks';
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import MenuIcon from './MenuIcon';

import LogButton from "../../ui/buttons/LogButton";
// import { Button } from "@mantine/core";


function Navbar() {

  
  const mobile = useMediaQuery('(max-width: 600px)')

  return (
    <>
      <nav className="flexbox-row full-width" style={{ marginTop: "10px"}}>

        <div >
          <Link to="" className='link'>
            <img src={require("../../../assets/inkhouse-white.png")} alt="Inkhouse Logo" style={{ height: "50px" }} />
          </Link>
        </div>
        
        {/* { mobile ? <MenuIcon/> : <NavLinks />} */}
        <NavLinks />

      </nav>
    </>
  )
}

export default Navbar 