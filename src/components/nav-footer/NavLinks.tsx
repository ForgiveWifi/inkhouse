import "./NavLinks.css"

function NavLinks() {

  return (
    <>
      <div style={{ margin: "auto", marginBottom: "25px" }} className="flexbox-row">

        <a className="nav-link shadow-2" href="#production-header">production</a>

        <span style={{ margin: "10px" }}> & </span>

        <a className="nav-link shadow-2" href="#design-header">art + design</a>

      </div>
    </>
  );
}

export default NavLinks;