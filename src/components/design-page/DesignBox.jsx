import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from "react-router-dom";

function DesignBox({ design }) {

  const [loaded, setLoaded] = useState(false)

  const { _id, name, image, attributes } = design
  const { style, size, color } = attributes

  return (
    <>
      <Link to={`/design/${_id}`} className="flexbox-column background1 radius10 link" style={{ width: "250px" }}>
        {
          loaded ?
            null :
            <Skeleton className="radius-top" style={{ width: "250px", height: "250px", position: "relative", bottom: "3px" }} /> 
        }
        <img 
          src={image.url} 
          alt={image.file_name}
          onLoad={() => {
            setLoaded(true)
          }}
          className="full-width radius-top" 
          style={loaded ? { height: "250px", objectFit: "cover" } : { display: "none"}} 
        />
        <div>{name}</div>
        <div>{size}</div>
        <div>{style}</div>
        <div>{color}</div>
      </Link>
    </>
  );
}

export default DesignBox;