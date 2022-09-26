import { useState } from "react";
import { NumberInput, Select, Switch, Button } from "@mantine/core";
import AddIcon from '@mui/icons-material/Add';
import { showError, showSuccess } from "../../utils/alerts";
import ImageUpload from "../ui/ImageUpload";

function DesignPosition({designs, setDesigns}) {
  
  const blank = {
    placement: "",
    underbase: true,
    width: undefined,
    height: undefined,
    x_offset: undefined,
    y_offset: undefined
  }

  const [design, setDesign] = useState(blank)
  const [art, setArt] = useState(null)
  const [thumbnail, setThumbnail] = useState(null)
  const [error, setError] = useState(false)

  const isX_offset = typeof design.x_offset !== "number"
  const isY_offset = typeof design.y_offset !== "number"

  function addDesign() {
    setError(true)
    if (!design.placement) {
      showError("placement-alert", "Select design position!")
    } else 
    if (art === null) {
      showError("art-alert", "Select an image!")
    } else
    if (thumbnail === null) {
      showError("thumbnail-alert", "Select a thumbnail!")
    } else
    if (!(design.width && design.height)){
      showError("dimension-alert", "Enter a width and height!")
    } else 
    if (isX_offset || isY_offset) {
      showError("offset-alert", "Enter a x-offset and y-offset!")
    } else {
      setDesigns([...designs, {
        ...design,
        art_file: art,
        thumbnail_file: thumbnail
      }])
      setError(false)
      setDesign(blank)
      setThumbnail(null)
      showSuccess("added-design", `Added ${art.name} to design list!`)
      setArt(null)
    }
  }

  function underbaseFlip() {
    setDesign( {...design, underbase: !design.underbase})
  }

  return (
    <>
      <div className="flexbox" style={{ marginTop: "10px"}}>Design</div>
      <div className="flexbox-column background1 radius15" style={{ maxWidth: "450px", padding: "5px 15px 15px", minWidth: "300px"}}>
        <Select
          label="position"
          value={design.placement}
          onChange={placement => setDesign( {...design, placement: placement})}
          error={error && !design.placement}
          data={['Front Center', 'Front Left Chest', 'Front Right Chest', 'Back Center']}
          dropdownPosition="bottom"
        />

        <ImageUpload label="Art File" value={art} onChange={setArt} />

        <ImageUpload label="Thumbnail File" value={thumbnail} onChange={setThumbnail} />
        
        <div className="flexbox-start">

          <NumberInput 
            label="width"
            placeholder="inches" 
            value={design.width} 
            onChange={width => setDesign({ ...design, width: width })}
            error={error && !design.width}
            min={0} 
            step={0.1} 
            precision={1} 
            variant="filled"  
            autoComplete="off" 
          />

          <NumberInput 
            label="height"
            placeholder="inches" 
            value={design.height} 
            onChange={height => setDesign({ ...design, height: height })}
            error={error && !design.height}
            min={0}
            step={0.1} 
            precision={1} 
            variant="filled" 
            autoComplete="off" 
          />
          
          <NumberInput 
            label="x-offset"
            placeholder="mm" 
            value={design.x_offset} 
            onChange={x_offset => setDesign({ ...design, x_offset: x_offset })} 
            error={error && isX_offset }
            variant="filled" 
            autoComplete="off" 
          />

          <NumberInput 
            label="y-offset"
            placeholder="mm" 
            value={design.y_offset} 
            onChange={y_offset => setDesign({ ...design, y_offset: y_offset })} 
            error={error && isY_offset}
            variant="filled" 
            autoComplete="off"
          />

        </div>

        <div className="flexbox-row background1 max-radius" style={{ margin: "15px 0px", padding: "8px 15px"}}>
          <Switch 
            checked={design.underbase} 
            onChange={underbaseFlip} 
            color="orange" 
          />
          <div style={{ marginLeft: "8px", fontSize: "14px", fontWeight: "500"}}>Underbase</div>
        </div>

        <Button onClick={addDesign} color="orange" radius="md" uppercase leftIcon={<AddIcon sx={{ fontSize: "20px" }} />}>
          Add design
        </Button>

      </div>
    </>
  );
}

export default DesignPosition;