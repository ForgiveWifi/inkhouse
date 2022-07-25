
import "./Footer.css"
import { contactList } from "../../data/contactList"

function Footer() {

  return (
    <>
      <footer className="flexbox-row">
        <img src={require("../../assets/inkhouse-white.png")} alt="Inkhouse Logo" style={{ height: "40px", marginLeft: "20px" }} />

        <div className="flexbox-row" style={{ marginLeft: "auto", paddingRight: "15px" }}>
          {
            contactList.map(contact => {
              const { icon, link } = contact
              return (
                <a href={link} className="contact-icon flexbox" target="_blank" rel="noreferrer" >
                  {icon}
                </a>
              )
            })
          }
        </div>

      </footer>

    </>

  )
}

// &copy; {(new Date().getFullYear())} INKHOUSE STUDIO

export default Footer