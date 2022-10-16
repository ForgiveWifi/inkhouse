import { motion } from "framer-motion"
import { Burger } from '@mantine/core';

function MenuButton({isOpen, setIsOpen}) {

  const title = isOpen ? 'Close navigation' : 'Open navigation';

  // const Path = props => (
  //   <motion.path
  //     fill="transparent"
  //     strokeWidth="3"
  //     stroke="#FF9244"
  //     strokeLinecap="round"
  //     {...props}
  //   />
  // );
    
  return (
    <button onClick={() => setIsOpen(!isOpen)} className="menu-button max-radius flexbox" style={{ marginTop: "10px"}} >
      <Burger
        opened={isOpen}
        size={22}
        color="#FF9244"
        title={title}
        style={{ position: "relative", left: "0.7px"}}
    />
    </button>
  );
}

export default MenuButton;