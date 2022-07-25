// import { Link } from "react-router-dom";
import OrderModal from "../home/OrderModal"
import NavLinks from "./NavLinks";
import { useMediaQuery } from "@mui/material";


function Navbar() {

  const desktopMode = useMediaQuery('(min-width:750px)');

  return (
    <>
      <nav id="nav" className="flexbox-row full-width" style={{ backgroundColor: "none", height: "90px" }}>

        <div style={{ position: "absolute", top: "15px", left: "15px" }}>
          {/* <Link to="" className='link'> */}
          <img src={require("../../assets/inkhouse-white.png")} alt="Inkhouse Logo" style={{ height: "60px" }} />
          {/* </Link> */}
        </div>

        {desktopMode && <NavLinks />}

        <div style={{ position: "absolute", top: "24px", right: "15px" }}>
          <OrderModal />
        </div>

      </nav>
    </>
  )
}

export default Navbar 