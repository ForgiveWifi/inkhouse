import { Link } from "react-router-dom";
import "./NavLinks.css"

function NavLinks() {

  return (
    <>
      <div style={{ marginTop: "9px" }} className="flexbox-row">

        <Link to="/accounts/?page=1" className="nav-link shadow2">accounts</Link>

        <Link to="/orders/?page=1" className="nav-link shadow2">orders</Link>

        <Link to="/designs/?page=1" className="nav-link shadow2">designs</Link>

      </div>
    </>
  );
}

export default NavLinks;