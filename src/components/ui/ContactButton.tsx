
import "./ContactButton.css"

type ContactButtonProps = {
  onClick: () => void
}

function ContactButton(props: ContactButtonProps) {
  
  const { onClick } = props 
  
  return (
    <>
      <button onClick={onClick} className="contact-button shadow-2">
        contact
      </button>
    </>
  );
}

export default ContactButton;