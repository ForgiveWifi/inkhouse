
import "./LogButton.css"

type ButtonProps = {
  name: string,
  onClick?: () => void
}

function LogButton(props: ButtonProps) {
  
  const { name, onClick } = props 
  
  return (
    <>
      <button onClick={onClick} className="contact-button shadow-2">
        {name}
      </button>
    </>
  );
}

export default LogButton;