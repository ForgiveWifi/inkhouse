import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import Divider from "../ui/Divider";

function ProductBox({product}) {
  
  const [loaded, setLoaded] = useState(false)
  
  const {quantity, design} = product

  const {style, size, color } = design.attributes
  return (
    <>
      <div className="flexbox-row flex-wrap full-width background1 radius15 shadow-2" style={{ margin: "5px 0px", padding: "0px 10px", height: "100px" }}>
        {
          loaded ? null : <Skeleton style={{ width: "80px", height: "80px", marginRight: "10px"}} />
        }
        <img 
          src={design.image.url} 
          alt={`${design.name}`} 
          onLoad={() => setLoaded(true)}
          className="radius10" 
          style={loaded ? { width: "80px", height: "80px", marginRight: "10px"} : { display: "none"}} 
        />

        <div className="flexbox-start" style={{ marginLeft: "4px" }}>

          <h4>{design.name}</h4>
          <div className="flexbox-row">
              <div>{size} </div>
            <Divider />
              <div>{color}</div>
            <Divider />
              <div>{style}</div>
          </div>

        </div>
      
        <div className="no-wrap" style={{ marginLeft: "auto", marginRight: "5px" }}>
          <div>Quantity: {quantity}</div>
        </div>
      </div>
    </>
  );
}

export default ProductBox;