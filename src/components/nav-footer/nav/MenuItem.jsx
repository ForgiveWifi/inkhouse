import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function MenuItem({setIsOpen, name, to}) {

  const navigate = useNavigate()
  
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };
  function nav() { 
    setIsOpen(false)
    navigate(to)
  }

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <button onClick={nav}>
        <h2 className="orange-text">{name}</h2>
      </button>
    </motion.li>
  );
};

export default MenuItem;