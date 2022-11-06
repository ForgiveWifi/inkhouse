import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flexbox-row full-width" style={{ marginTop: "10px"}}>

        <div >
          <Link to="" className='link'>
            <img src={require("../../../assets/inkhouse-white.png")} alt="Inkhouse Logo" style={{ height: "50px" }} />
          </Link>
        </div>
        <NavLinks />
      </nav>
    </>
  )
}

export default Navbar 