import { motion } from "framer-motion"

function MenuButton({toggle}) {
  
  const Path = props => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="#FF9B54"
      strokeLinecap="round"
      {...props}
    />
  );

  return (
    <button className="menu-button flexbox" style={{ marginTop: "10px", padding: '5px'}} onClick={toggle}>
      <svg style={{ position: 'relative', top: "2px", left: "1px"}} width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
  );
}

export default MenuButton;