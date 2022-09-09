import { contactList } from "../../../data/contactList"
import "./Footer.css"

function Footer() {
  return (
    <>
      <footer className="flexbox-row">
        <img src={require("../../../assets/inkhouse-white.png")} alt="Inkhouse Logo" style={{ height: "40px", marginLeft: "20px" }} />

        <div className="flexbox-row" style={{ marginLeft: "auto", paddingRight: "15px" }}>
          {
            contactList.map((contact, i) => {
              const { icon, link } = contact
              return (
                <a key={i} href={link} className="contact-icon flexbox" target="_blank" rel="noreferrer" >
                  {icon}
                </a>
              )
            })
          }
          {/* <div>{`&copy; ${(new Date().getFullYear())} INKHOUSE STUDIO`}</div> */}
        </div>

      </footer>
    </>
  )
}

export default Footer