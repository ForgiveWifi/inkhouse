import "./InputField.css"

type InputFieldProps = {
  name: string,
  type: string,
  value?: string,
  min?: number,
  placeholder?: string,
  className?: string
  onChange?: () => void
}

function InputField(props: InputFieldProps) {

  const { name, type, value, min, placeholder, className, onChange } = props

  return (
    <div className={`flexbox-start ${className}`} >
      <label>{name}</label>
      <input className="input-field" name={name} type={type} value={value} min={min} placeholder={placeholder} onChange={onChange} required></input>
    </div>
  );
}

export default InputField;