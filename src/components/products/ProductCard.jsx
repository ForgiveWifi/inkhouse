import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import SizeList from "./SizeList";

function ProductCard({product}) {

  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <div className="flexbox-column margin-auto" style={{ width: 250 }}>
        {
          loaded ?
            null :
            <div className="flexbox" style={{ width: 250, height: 250}}><Skeleton className="radius10" style={{ width: "250px", height: "250px"}} /></div>
        }
        <img 
          onLoad={() => setLoaded(true)} 
          className="radius10" 
          src={product.images[0]} 
          style={ loaded ? { width: 250 } : { display: "none"} }/
        >
        <h3 className="full-width" style={{ margin: "4px 0px 2px 5px"}}>{product.name}</h3>
        <SizeList sizes={product.sizes} />
      </div>
    </>
  );
}

export default ProductCard;