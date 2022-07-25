
import "./Header.css"

type HeaderProps = {
  title: string
  id: string
}

function Header(props: HeaderProps) {

  const { title, id } = props
  return (
    <>
      <div id={id} className="header-container full-width flexbox-row">
        <h1 style={{ padding: "10px 0px" }}>{title}</h1>
      </div>
    </>
  );
}

export default Header;