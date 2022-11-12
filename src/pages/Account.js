import { useAuth0 } from "@auth0/auth0-react"; 
import { motion } from "framer-motion"
import { Link, Outlet } from "react-router-dom";
import LogButton from "../components/ui/buttons/LogButton";
import { useMediaQuery } from '@mantine/hooks';

const links = [
  {
    name: "profile",
    to: "profile"
  },
  {
    name: "invoices",
    to: "invoices"
  },
  {
    name: "products",
    to: "products/?page=1"
  },
  {
    name: "tags",
    to: "tags"
  },
]

function Account() {


  const { isAuthenicated, logout } = useAuth0()
  const mobile = useMediaQuery('(min-width: 670px)')

  return (
    <>
      <div className="flexbox-row-start full-width" style={{ backgroundColor: "transparent", minHeight: "calc(100vh - 120px)", margin: "20px 0px 25px", borderRadius: 25}}>
        {
          mobile &&
          <div className="flexbox-column-start full-width" style={{ maxWidth: 150, marginRight: 20, gap: 5}}>
            {
              links.map((link,i) => {
                const {name, to} = link
                return(
                  <Link to={to} className="link">
                    <motion.div
                      whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.25)"}}
                      transition={{ duration: 0.3}}
                      style={{ height: 40, paddingLeft: 20, backgroundColor: "transparent"}}
                      className="flexbox-row full-width radius15">
                       {name}
                    </motion.div>
                  </Link>
                )
              })
            }
            {/* <Link to="orders/?page=1" className="link shadow2">orders</Link> */}
          </div>
        }
        <div className="flexbox-column-start background3 shadow2 radius15 full-width" style={{ position: "relative"}}>
          <Outlet />
        </div>
      </div>
        
    </>
  );
}

export default Account;