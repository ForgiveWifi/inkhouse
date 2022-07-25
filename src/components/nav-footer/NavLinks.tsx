import "./NavLinks.css"

function NavLinks() {

  return (
    <>
      <div style={{ margin: "5px auto 5px" }} className="flexbox-row">

        <a className="nav-link shadow-2" href="#production">production</a>

        <span style={{ margin: "10px" }}> & </span>

        <a className="nav-link shadow-2" href="#design">art + design</a>

      </div>
    </>
  );
}

export default NavLinks;