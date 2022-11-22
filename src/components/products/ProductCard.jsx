import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from "react-router-dom";
import SizeList from "./SizeList";

function ProductCard({product}) {

  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Link to={product._id} className="link flexbox-column radius15 shadow2 background margin-auto" style={{ width: 250, padding: 10, outline: "3px solid white" }}>
        <div>
          {
            loaded ?
              null :
              <div className="flexbox" style={{ width: 250, height: 250}}><Skeleton className="radius10" style={{ width: "250px", height: "250px"}} /></div>
          }
          <img 
            onLoad={() => setLoaded(true)} 
            className="radius10" 
            src={product.images[0]} 
            style={ loaded ? { width: "100%" } : { display: "none"} }/
          >
          <div className="flexbox-column-start full-width" style={{ margin: 8, marginTop: 0}}>
            <h3>{product.name}</h3>
            <h5>sizes</h5>
            <SizeList sizes={product.sizes} />
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;