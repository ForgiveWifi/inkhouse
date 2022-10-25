import { FileInput }  from "@mantine/core";
import CloseIcon from '@mui/icons-material/Close';

function TagUpload({label, value, onChange, deleteTag}) {

  return (
    <>
      <div className="flexbox-column">
        <div className="label">{label}</div>
        {
          !value && 
          <div>
            <FileInput
              style={{ marginBottom: "5px"}}
              placeholder="+"
              value={value}
              onChange={onChange}
              accept="image/png,image/jpeg"
              aria-label={`${label} tag`}
            />
          </div>
        }
        { 
          value && 
            
            <div style={{ position: "relative", padding: 10}}>
              <div className="flexbox full-width" style={{ width: 120}}>
                <img src={URL.createObjectURL(value)} alt={value.name} className="full-width"/>
              </div>
              <button onClick={deleteTag} className="flexbox" style={{ position: "absolute", top: 0, left: 0, backgroundColor: "rgb(253, 81, 81)", width: 20, height: 20, borderRadius: 10}}>
                <CloseIcon style={{ fontSize: 12}}/>
              </button>
            </div>
        }
        
      </div>
    </>
    
  );
}

export default TagUpload;