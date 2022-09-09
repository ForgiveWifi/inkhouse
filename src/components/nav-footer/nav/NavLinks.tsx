import { Link } from "react-router-dom";
import "./NavLinks.css"

function NavLinks() {

  return (
    <>
      <div style={{ margin: "12px auto 5px" }} className="flexbox-row">

        <Link to="production" className="nav-link shadow-2">production</Link>

        <span style={{ margin: "10px" }}> & </span>

        <Link to="design" className="nav-link shadow-2">art + design</Link>

      </div>
    </>
  );
}

export default NavLinks;