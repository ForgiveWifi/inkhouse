import { Link } from "react-router-dom";
import "./NavLinks.css"

function NavLinks() {

  return (
    <>
      <div style={{ marginTop: "9px" }} className="flexbox-row">
        <Link to="/production" className="nav-link shadow2">production</Link>

        <Link to="/design" className="nav-link shadow2">design</Link>


        {/* <Link to="/accounts/?page=1" className="nav-link shadow2">accounts</Link> */}
        
        <Link to="/products/?page=1" className="nav-link shadow2">products</Link>

        <Link to="/orders/?page=1" className="nav-link shadow2">orders</Link>
      </div>
    </>
  );
}

export default NavLinks;