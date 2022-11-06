import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import LogButton from "../../ui/buttons/LogButton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useMediaQuery } from '@mantine/hooks';
import MenuButton from "./MenuButton";
import MenuIcon from "./MenuIcon";

function NavLinks() {

  const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0()
  const mobile = useMediaQuery('(max-width: 670px)')
  
  return (
    <>
      <div className="flexbox-row" style={{ marginLeft: "auto" }}>
        {/* <Link to="/production" className="nav-link shadow2">production</Link> */}

        {/* <Link to="/design" className="nav-link shadow2">design</Link> */}

        { 
          isLoading ? 
          <div>Loading...</div> :
          !isAuthenticated ? 
          <LogButton name="LOG IN" onClick={() => loginWithRedirect()}/> : 
          mobile ? 
          <MenuIcon/> :
          <motion.div
            whileHover={{scale: 1.05}}
            whileTap={{ scale: 0.97 }}>
            <Link to="/account/profile" className="flexbox link" s>
              <AccountCircleIcon style={{ fontSize: 50 }}/>
            </Link> 
          </motion.div>
        }
      </div>
    </>
  );
}

export default NavLinks;