import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion"
import { useState } from "react";
import LogButton from "../../ui/buttons/LogButton";
import MenuButton from "./MenuButton";
import MenuItem from "./MenuItem";

function MenuIcon() {
  
  const [isOpen, setIsOpen] = useState(false)

  const { logout } = useAuth0()

  const navList = [
    // {
    //   name: "accounts",
    //   to: "/accounts/?page=1"
    // },
    // {
    //   name: "orders",
    //   to: "/orders/?page=1"
    // },
    // {
    //   name: "designs",
    //   to: "/designs/?page=1"
    // },
    {
      name: "profile",
      to: "/account/profile"
    },
    {
      name: "products",
      to: "/account/products/?page=1"
    },
  ]

  const sidebar = {
    open: {
      clipPath: `circle(1400px at 210px 38px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    },
    closed: {
      clipPath: "circle(28px at 210px 38px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.1 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const variations = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      x: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };
  
  
  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
      <motion.div className="menu-background backgroun1 shadow1" variants={sidebar} />
      <motion.ul variants={variants} className="menu-list" >
        {
          navList.map((item, i) => {
            const {name, to} = item
            return(
              <MenuItem key={i} isOpen={isOpen} setIsOpen={setIsOpen} name={name} to={to}/>
            )
          })
        }
        {
          <div className="flexbox">
            <motion.button 
              variants={variations}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={isOpen ? () => logout({ returnTo: window.location.origin }) : null} 
              style={{cursor: isOpen ? "pointer" : "auto", border: "4px solid #FF9244", padding: "5px 20px", borderRadius: 20, marginTop: 40, marginLeft: 12}}
              disabled={!isOpen}
            >
              <h2 className="orange-text">logout</h2>
            </motion.button> 
          </div>
        }
      </motion.ul>

      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}/>
    </motion.nav>
    </>
  );
}



export default MenuIcon;