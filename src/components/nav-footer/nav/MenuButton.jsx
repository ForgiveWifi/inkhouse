import { Burger } from '@mantine/core';

function MenuButton({isOpen, setIsOpen}) {

  const title = isOpen ? 'Close navigation' : 'Open navigation';
    
  return (
    <button onClick={() => setIsOpen(!isOpen)} className="menu-button max-radius flexbox" style={{ }} >
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