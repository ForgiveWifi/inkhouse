import { NumberInput } from "@mantine/core";
import ImageUpload from "../ui/ImageUpload";

function DesignTags({sizes, tags, setTags, dimensions, setDimensions}) {

  function addTag(file, size) {
    const tag = { ...tags }
    tag[size] = file
    setTags(tag)
  }

  return (
    <>
      <div>Tags</div>
      <div className="flexbox-column background1 radius15" style={{padding: "0px 30px 15px"}}>
        {
          sizes.map((size,i) => {
            return(
              <ImageUpload key={i} label={size} value={tags[size]} onChange={(file) => addTag(file,size)} />
            )
          })
        }
        <NumberInput 
          label="width"
          placeholder="inches" 
          value={dimensions.width} 
          onChange={width => setDimensions({ ...dimensions, width: width })}
          min={0} 
          step={0.1} 
          precision={1} 
          variant="filled"  
          autoComplete="off" 
        />

        <NumberInput 
          label="height"
          placeholder="inches" 
          value={dimensions.height} 
          onChange={height => setDimensions({ ...dimensions, height: height })}
          min={0}
          step={0.1} 
          precision={1} 
          variant="filled" 
          autoComplete="off" 
        />
      </div>
    </>
  );
}

export default DesignTags;