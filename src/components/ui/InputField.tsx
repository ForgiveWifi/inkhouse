import "./InputField.css"

type InputFieldProps = {
  name: string
  label: string,
  type: string,
  min?: string,
  placeholder?: string,
  className?: string
}

function InputField(props: InputFieldProps) {

  const { name, label, type, min, placeholder, className } = props

  return (
    <div className={`flex-start ${className}`} >
      <label>{label}</label>
      <input className="input-field" name={name} type={type} min={min} placeholder={placeholder} required></input>
    </div>
  );
}

export default InputField;