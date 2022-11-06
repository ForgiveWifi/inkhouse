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
    name: "products",
    to: "products/?page=1"
  }

]

function Account() {


  const { isAuthenicated, logout } = useAuth0()
  const mobile = useMediaQuery('(min-width: 670px)')

  return (
    <>
      <div className="flexbox-row-start full-width" style={{ backgroundColor: "transparent", minHeight: "calc(100vh - 120px)", margin: "20px 0px 25px", borderRadius: 25}}>
        {
          mobile &&
          <div className="flexbox-column-start full-width" style={{ maxWidth: 150, padding: 10, gap: 5}}>
            {
              links.map((link,i) => {
                const {name, to} = link
                return(
                  <Link to={to} className="link">
                    <motion.div
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.35)"}}
                      style={{ height: 40, paddingLeft: 15}}
                      className="flexbox-row radius15">
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
          {
            (!isAuthenicated && mobile)  &&
            <div style={{ position: "absolute", top: 15, right: 15, marginTop: "auto" }}>
              <LogButton name="logout" onClick={() => logout({ returnTo: window.location.origin })}/> 
            </div>
          }
        </div>
      </div>
        
    </>
  );
}

export default Account;