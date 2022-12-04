import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import LogButton from "../../ui/buttons/LogButton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useMediaQuery } from '@mantine/hooks';
import MenuButton from "./MenuButton";
import MenuIcon from "./MenuIcon";
import { Loader } from "@mantine/core";

function NavLinks() {

  const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0()
  const mobile = useMediaQuery('(max-width: 670px)')
  
  return (
    <>
      <div className="flexbox-row" style={{ marginLeft: "auto" }}>

        <div className="flexbox" style={{ width: 50, height: 50 }}>
          { 
            isLoading ? 
            <Loader color="white" /> :
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
      </div>
    </>
  );
}

export default NavLinks;