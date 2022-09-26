import { motion } from "framer-motion"
import { useState } from "react";
import MenuButton from "./MenuButton";
import MenuItem from "./MenuItem";

function MenuIcon() {
  
  const [isOpen, setIsOpen] = useState(false)

  const navList = [
    {
      name: "accounts",
      to: "/accounts/?page=1"
    },
    {
      name: "orders",
      to: "/orders/?page=1"
    },
    {
      name: "designs",
      to: "/designs/?page=1"
    }
  ]

  const sidebar = {
    open: {
      clipPath: `circle(1400px at 260px 38px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    },
    closed: {
      clipPath: "circle(28px at 260px 38px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  
  
  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
      <motion.div className="menu-background backgroun1 shadow1" variants={sidebar} />
      <motion.ul variants={variants} className="menu-list">
        {
          navList.map(({name, to}) => {
            return(
              <MenuItem setIsOpen={setIsOpen} name={name} to={to}/>
            )
          })
        }
      </motion.ul>

      <MenuButton toggle={() => setIsOpen(!isOpen)} />
    </motion.nav>
    </>
  );
}



export default MenuIcon;