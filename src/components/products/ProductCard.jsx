import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from "react-router-dom";
import SizeList from "./SizeList";

function ProductCard({product}) {

  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Link to={product._id} className="link flexbox-column radius10 shadow2 white-background white-border margin-auto" style={{ width: 250, padding: 10 }}>
        {
          loaded ?
            null :
            <div className="flexbox" style={{ width: 230, height: 230}}>
              <Skeleton className="radius10" style={{ width: "230px", height: "230px", position: "relative", bottom: 2}} />
            </div>
        }
        <img 
          onLoad={() => setLoaded(true)} 
          className="radius10" 
          src={product.images[0]} 
          style={ loaded ? { width: "230px" } : { display: "none"} }/
        >
        <div className="flexbox-column-start full-width" style={{ padding: "5px 8px"}}>
          <h3 className="grey-text" style={{ marginTop: 5}}>{product.name}</h3>
          <h5 className="grey-text">sizes</h5>
          <SizeList sizes={product.sizes} />
        </div>
      </Link>
    </>
  );
}

export default ProductCard;