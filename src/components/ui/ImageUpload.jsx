import { FileInput }  from "@mantine/core";

function ImageUpload({label, value, onChange}) {

  return (
    <>
      <div className="flexbox-column">
        <div className="label">{label}</div>
        <FileInput
          style={{ marginBottom: "5px"}}
          placeholder="Select file"
          value={value}
          onChange={onChange}
          accept="image/png,image/jpeg"
          aria-label={label}
        />
        { 
          value && 
            <div className="flexbox full-width" style={{ maxWidth: "400px", marginTop: "10px"}}>
              <img src={URL.createObjectURL(value)} alt={value.name} className="full-width radius10"/>
            </div>
        }
      </div>
    </>
    
  );
}

export default ImageUpload;