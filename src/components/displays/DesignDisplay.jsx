import toDate from "../../utils/toDate";
import toTime from "../../utils/toTime";
import PlacementList from "../list/PlacementList";
import Divider from "../ui/Divider";
// import CopyIcon from "../ui/icons/CopyIcon";

function DesignDisplay({loading, design_id, design}) {

  if(loading || !design) {
    return null
  } else {
    
  const {name, attributes, image, created_at} = design
  const {style, size, color} = attributes 
  return (
    <>
      <div className="full-width" style={{ padding: "0px 30px 10px"}}>
        <div className="flexbox-row full-width">
          <h1 style={{ fontSize: "45px", marginRight: "auto" }}>
            {name}
          </h1> 
          
        </div>
        <h3 >{`Size: ${size}`}</h3>
        <img src={image.url} alt={image.name} className="full-width radius10" style={{ margin: "15px 0px 10px"}}/>

        <div className="flexbox-start">
          {/* <CopyIcon text="Copy ID" copy={design_id} /> */}
          <div>Name:</div>
          <h4>{name}</h4>
          <div>Attributes:</div>

          <div className="flexbox-row">
              <h4>{size}</h4>
            <Divider />
              <h4>{color.toUpperCase()}</h4>
            <Divider />
              <h4>{style}</h4>
          </div>

          <div >Created on:</div>
          <div className="flexbox-row" style={{ marginBottom: "15px"}}>
              <h4>{toDate(created_at, "long")}</h4>
            <Divider />
              <h4>{toTime(created_at)}</h4>
          </div>
          
        </div>
            
        <PlacementList designs={design.designs}/> 
      </div>
    </>
  )};
}

export default DesignDisplay;